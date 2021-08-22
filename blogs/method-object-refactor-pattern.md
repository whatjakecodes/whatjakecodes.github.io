# The Method Object Refactor Pattern

**Goal**: refactor an existing, hard-to-read function so that the function communicate its algorithm more clearly to new readers

## Intro

Wouldn't it be nice to open a codebase for the first time, and have a function that looks like this? 
Assume it works and is valid, for a moment.

```java
@Component
public class MyListener extends FrameworkListener {

    @Autowired
    private MyRepository repository;


    @Override
    public static void process(FrameworkExchange exchange) {
        // wouldn't this be nice? it's very easy to understand the high-level algorithm.
        if (dogIsOffline()) {
            triggerDogOfflineError();
        } else if (dogIsInTheLake()) {
            triggerDogInTheLakeError();
        }
    }

    // ... private method definitions ...
}

```

While this code takes one maybe a minute to understand, more commonly the pre-existing code one encounters in the wild
takes multiple hours to grok.

Why is that? Unfortunately, but understandably, one does not always go to lengths to achieve such readability in the code they write. 
Perhaps this code above does not even seem realistic or achievable:
* The private methods don't take any parameters, so how do they operate on any data?
* The exchange isn't being utilized, because the methods don't accept any parameters.
* The exchange isn't stored as a class-level field, either, so the private methods could not access it that way.

Fair enough. But it's not as out-of-reach as one might think.

> Understanding code's intent is one of the biggest hurdles holding back the developers trying to maintain codebases.
> If one doesn't see the intent, then they don't clearly see the software features or capabilities,
> and then they become afraid to change the code because they don't know what might break.
> If one is afraid to change the code, they can't improve it.

> Fear is the mind killer.

Proposal: the "Method Object" refactor pattern is **a** tool for shaping code into something more understandable.

1. **First: pattern demonstration**
1. **Second: upsides of pattern utilization**
1. **Last: downsides**

## First: Method Object refactor pattern demonstration

Imagine the code one wants to clean up looks almost like this:

```java
@Component
public class MyListener extends FrameworkListener {

    @Autowired
    private MyRepository repository;

    @Override
    public static void process(FrameworkExchange exchange) {
        // 100s of lines of weird logic
    }
}
```

> Remember to substitute real code for comment-placeholder while imagining

Initial thoughts: that's a lot of code!
And what's a `FrameworkExchange`? 
Who knows, yet - but it seems to have event data and other types of Framework-related data in it.
And it's used all over this method!

But the main point of this example,
is that one has encountered the legendary spaghetti-code monster in one of its many fear-inducing varieties.

So, one begins the method object refactor by creating a private class and moving the logic there.

> The phrases "method object" and "private class" are used somewhat interchangeably throughout this document.
> This is because they're very similar in this pattern demonstration. 
> But they are not the same: a private class can be used without using the M.O. pattern. 

The code "chunks" need to utilize the `exchange` and the `repository` instances.
So, one passes them into the new private class's constructor. And stores them as fields.
Why fields? See the upsides and downsides sections.

```java
@Component
public class MyListener extends FrameworkListener {

    @Autowired
    private MyRepository repository;

    @Override
    public static void process(FrameworkExchange exchange) {
        new Process().invoke(exchange, repository);
    }

    private class Process {
        private final FrameworkExchange exchange;
        private final MyRepository repository;

        Process(FrameworkExchange exchange, MyRepository repository) {
            this.exchange = exchange;
            this.repository = repository;
        }

        public void invoke() {
            // 100s of lines of weird logic
        }
    }
}
```

Next is a laborious, but unavoidable, step (which one could have conducted earlier).
Imagine, too, that the original developer who wrote this code is no longer on the team. 
No one really knows what it does. There are no tests (but it works in production!).

One reads and notices some code that seems mostly independent of one another, and labels those "Chunks 1 and 2".
One keeps reading and notices some duplicate logic and labels that "Chunk A".
Assume that each "chunk" consists of calls to the `exchange` and `repository` instances,
as well as various local variables, control-flow statements, and loops.

```java
public void invoke() {
    // weird logic chunk 1
    // duplicated logic chunk A
    // weird logic chunk 2
    // duplicated logic chunk A
}
```

After 4 hours of reading and debugging, one has deducted the following:
* "chunk 1" determines if a dog is online or not. I guess this software deals with dog monitoring?
* "chunk 2" determines if the dog is in the lake. For some reason.
* "chunk A" was repeated, and triggered various error flows to activate

Now that one has an idea of the spaghetti-code ingredients, 
they could re-write the private function in the format originally proposed:

```java
private class Process {
    private final FrameworkExchange exchange;
    private final MyRepository repository;
    
    Process(FrameworkExchange exchange, MyRepository repository) {
        this.exchange = exchange;
        this.repository = repository;
    }

    public void invoke() {
        if (dogIsOffline()) {
            triggerDogOfflineError();
        } else if (dogIsInTheLake()) {
            triggerDogInTheLakeError();
        }
    }

    private boolean dogIsOffline() {
        boolean isOffline = false;
        // weird logic chunk 1
        return isOffline;
    }

    private boolean dogIsInTheLake() {
        boolean isInLake = false;
        // weird logic chunk 2
        return isInLake;
    }

    private void triggerDogOfflineError() {
        triggerError("dogOfflineErrorType");
    }

    private void triggerDogInTheLakeError() {
        triggerError("dogInLakeErrorType");
    }

    private void triggerError(String errorType) {
        // duplicated logic chunk A
    }
}
```

### Post-demonstration thoughts

One may be wondering what the point here is.
One moved the code to a private class? A "method object"?
* Yes. There is boiler-plate involved in this pattern that can be annoying or confusing.

One spent hours reading & mentally-digesting the logic and re-organizing it?
* Yes. When working with legacy code, this is unavoidable.

Couldn't that logic have been improved without creating the method object?
* Yes. Refer to the upside 

## Second: upsides

### Upside 1: Flexibility to use class-level fields

Why use class-level fields? 
Because, then one doesn't have to write functions that pass the objects around.
Method names can then focus on human-language words and phrasing.

So, in a method object, one can more easily and safely use class-level fields.
Normally, in framework-level classes where the instantiated object is managed by a framework (e.g. a dependency injection graph),
these special framework-level objects are never destroyed -- and so the fields are never garbage collected.

But our method object instance *will* be garbage collected when the original method returns.

This means our fields won't be "held onto" and potentially affect subsequent calls to the framework-level method.

Method Objects give one this flexibility.

### Upside 2: Reduce repetitive code

The original spaghetti code operated on the `exchange` instance multiple times, sometimes in repetitive ways.
Using constructor-fields private class allows one to perform those operations once in the constructor,
and then store the result for use throughout the method object.

### Upside 3: method signatures can be succinct

The signature of the method `dogIsInTheLake` is very succinct. 
A control-statement is very readable: `if(dogIsInTheLake) { triggerDogInTheLakeError(); }`.
In some codebases, it might consume much of one's time to realize that a dog being in the lake is considered erroneous!

The method signature doesn't have parameters to create any noise -- instead, the dependencies are accessed from the class-level fields.

One may ask: could `dogIsInTheLake` be public and invoked from the original public class?
Yes, but then some noise is generated because of the instance-method invocation format: `process.dogIsInTheLake()`.
Within a method object, private methods don't need to be invoked with `process.`.

## Last: downsides

### Downside 1: there's likely still spaghetti

From one perspective, this pattern has re-organized and re-grouped the single, massive blob of spaghetti-code into 
smaller blobs of spaghetti-code. 

Perhaps the original spaghetti-code could've been refactored into multiple public-class objects, 
and reused throughout the project. This pattern does not fix spaghetti-code, but it does help one begin to split it down
into more digestable chunks.

### Downside 2: knowing when to use this

The method object refactor pattern's use case seems clear when refactoring a legacy, spaghetti-like codebase file.

But, consider: would one use this pattern in a write-from-scratch, greenfield application?
Or would one adopt better object-oriented programming principles from the start?

The method object pattern may become less useful as a codebase matures in a "healthy" fashion. A mature, "healthy" codebase
may already have re-usable classes and functions that are tuned toward readability and performance. Setting up a method object
in such a situation probably doesn't offer as many benefits.