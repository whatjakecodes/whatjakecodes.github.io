# Remote Extreme Programming

## Intro

I am seeing a change in how teams practice extreme programming (XP) in our remote, pandemic-suffering, work-from-home world. 

But XP is not just about practices. As Kent Beck writes at the beginning of Extreme Programming Explained, it's about social change. 
And in March 2020 in the USA, COVID forced upon us massive social (and economic, and familial, and technological, and...) change.

XP "flexes" when teams find the social confidence needed to experiment with their practices. 
And teams don't become flexible by chance - we as individuals are flexible and make the greater team flexible.

Many people, before 2020, were only experienced in co-located XP where teams were in the same office.
And now, lots of us have been and continue to experiment with remote XP from our backyards, RVs, kitchens, bedrooms, home offices, etc.

## A note on space

A coworker once told me about how the space we occupy affects mindset.
I notice this when I go outside for 5 minutes after having worked indoors all morning.
I reflect on the differences between XP projects where I joined teams in **their traditional** space 
and projects where teams joined me in **my team's XP-focused** space.

Now, though, each of us occupies our own unique space with its own unique vibrancy.
And we all want to work together as one team.
I'm not sure if that seems doomed-to-fail to you or not. I've heard from people on both sides of that fence.
I think it's of an overall benefit that we can work remotely during trying times, 
and I am excited we get to experiment with XP in this new world. 
I think we are all learning a lot from it.

## Remote pair programming

Among all of XP's practices, I'd argue pair programming has probably changed the most during the pandemic 
(at least for originally non-remote teams).

Remote-first pairing has introduced new challenges:

* my other-timezone pair made code changes without me that I wouldn't recommend. How do I handle this?
* my other-timezone pair is unavailable. What should I work on?
* my other-timezone pair is unavailable, and I don't know how to work on our assigned feature. What do I do?
* the network is lagging. How do my pair and I exchange keyboard/mouse control?
* my work-frome-home environment has distractions
* some of my team is remote, and some is co-located. How do we collaborate as one?

> You may have noticed that these "challenges" are essentially the challenges of regular old solo and remote programming!

And this brings me around to admitting that we need to change how we approach pairing in a remote-first world.
Expecting to pair for 8 hours a day in a remote-first world does not seem sustainable for many teams.
We need to "flex" our XP muscles and experiment to find what works for our teams.

> Is constant pairing part of what made XP "extreme"?
> I would argue that extreme flexibility to seek and then do what works represents more of the extreme-ness.


## XP without pair programming

Sometimes we will not have a pair.
Let's say there's an east-coast and west-coast engineer in a pair.
In the USA, this creates a 3-hour difference in the two persons' 8-hour workdays. 
There may be, at most, a 5-hour overlap for pairing.
With 1-2 hours reserved for team meetings, there may be 3-4 hours for pairing per day. Sometimes less!

We need to acknowledge this when beginning work on a new feature. 
**Most importantly, I'd argue, we must put more energy into actively discussing how we want to pair:**

* Setup team-wide core pairing hours, if possible. Or schedule pairing hours.
* Discuss with your pair what kinds of task are good-for-solo.
* Discuss how you and your pair want to share context from solo-time.
* Break down stories into pair-tasks and solo-tasks.

> Successful remote pairing will differ depending on the "kind" of pair:
> Two senior engineers? One junior and one senior? Two juniors?

> **A junior engineer will have an important perspective (spoken or unspoken!) on what is a good solo-task.**

Each person needs to be transparent about which tasks they think are OK for solo, and which should require pairing.
This will help us maintain the teach-learning component of pair programming.

### Potential solo-tasks

In general, the best solo tasks are tasks that a pair actively agrees are good to solo on.
Here are some ideas that I noodled on:

* Admin time
* Write documentation
* Work on a learning course
* research solutions for the tricky component of a feature
* prepare a mini learning workshop
* pair with a designer or product manager on something
* collect resources/articles a junior engineer to review and discuss later
* write code for solo-tasks
* research options for pair-tasks
* practice solving solo-tasks or pair-tasks alone as a learning opportunity (without committing!)
* document questions to ask for when pairing resumes
* practice coding techniques
* **any other work that a pair agrees is fine to solo on**

If both are senior engineers, the most troubling conflict probably involves the implementation choices made when the other person is offline.

### Potential pair-tasks

The best pair-tasks are whatever a pair decides they **want** to do together, for any reason.

This will likely involve the following:

* complex business logic
* code that one person does not feel comfortable writing solo
* creating architecture diagrams linking different systems
* other tasks a team member wants help with

### Sharing context

Sharing context can be annoying. 
Teams working in a co-located environment alleviated this pain point. 

> Part of the reasoning for clearly defining pair-tasks and solo-tasks is to reduce the burden of context sharing later.
> Discussing what you are going to do while solo **creates the opportunity** for your pair to say "I want to be part of that".
> It will also **prevent your pair from being surprised**.

Nonetheless, here are some ideas on ways you might improve your team's remote XP experiences:

* Stand-down channel
* Remote pairing retro
* Context-switching & reflection

#### Stand-down channel
The team creates a "stand-down" channel in Slack or Teams or Webex or what-have-you.
At the end of one's work day, one writes a brief summary of where one left off on work. 
When the other team members filter into their timezone's work hours, they can catch up by reading this channel.

#### Remote pairing retro
The team schedules a retro focused on pairing. 
The goal is to uncover what a team's unique challenges or conflicts.
At the beginning, establish the goal to improve the remote pairing process.
Throughout the retro, everyone should be listening to others' experiences.
Think about what pairing-structures or experiments might help alleviate the team's pain points.

#### Context-switching & reflection
Perhaps you start the day working on some "solo-work".
Another person comes online, and you switch context by pairing on other "pair-work" with that person.
Later, you're solo again, and you go back to "solo-work".
Or you go to a team meeting.
Or you have to handle a work-from-home distraction, like cooking.
This might seem to be happening constantly. 

If you're like me, you might find yourself easily frustrated by context-switching between all of these modes.

Unfortunately, I don't have a sure-fire answer to help to get rid of this frustration.
Part of this frustration probably results from a desire to be constantly coding or doing hands-on work, as though that's the only form of productivity.
But I would challenge the assumption that constantly working on hands-on tasks is the only way to be productive.

Taking time to reflect on how you and your team is doing might produce better results than constantly switching between hands-on work.
Usually, the code isn't the only challenging aspect of our jobs.

> Try this: if you realize one day this week is going to have multiple 30 minute gaps between meetings, don't do feature-work in those periods. 
> Instead, try reflecting or free-writing about what's going on with your team or project's big picture. 
> Or about the meeting or pairing session you just got out of. 
> **A period of reflection is essential to learning.**

## Experiment more!

We should continue to consider experimentation in XP practices in our pandemic, remote, work-from-home world.
Discuss them with your team at retro, the next time you pair, or schedule a separate meeting or 1-on-1.
Feel free to reach out to me if you have thoughts or questions.

## Appendix: Traditional Challenges for Pair Programmers

What kind of challenges has pair programming helped us navigate, even before forced-remote work-styles?

Challenges that all teams must navigate, of which pairing often helps:
* differences in knowledge (of a system, language, tool)
* differences in opinions (of how to implement, approach, discuss writing code)
* improving engineering team camaraderie
* reducing engineer isolation
* efficacy of solutions (via more constant feedback)

There are also new challenges I've experienced **during** the practice of pairing:
* facilitating my pair's learning
* facilitating my own learning
* rotating pairs within the team on some cadence
* working with more-/less-experienced people