# Remote Extreme Programming

## Intro

I am seeing a change in how teams practice extreme programming (XP) in our remote, pandemic-suffering, work-from-home world. 

But XP is not just about practices. As Kent Beck writes at the beginning of Extreme Programming Explained, it's about social change. 
And in March 2020 in the USA, COVID forced upon us massive social (and economic, and familial, and technological, and...) change.

XP "flexes" when teams find the social confidence needed to experiment with their practices. 
And teams don't become flexible by chance - we as individuals are flexible, and we make the greater team flexible.

Many people, before 2020, were only experienced in co-located XP where teams were in the same office.
And now, lots of us have been and are experimenting with remote XP from our personal bedrooms, backyards, living rooms, kitchens, etc.

## Note on Space

I was once told about how the space we occupy affects more of our mindset than we may realize.
I feel this when I go outside for 5 minutes after having worked indoors all morning.
I think about this when I reflect on XP-learning projects where I joined teams in **their traditional** space, 
with projects where teams joined me in **my team's XP-focused** space.
Now, though, each of us is occupying our own space with its own individual vibrancy while we try to work together as one team.
I'm not sure if that seems doomed-to-fail to you or not, and I've heard from people on both sides of that fence.
But I do think it's overall good that we can work remotely during this time. 
And I am excited to experiment with XP in this new world. 
I think we are all learning a lot from it.

## Remote Pair Programming

Among all of XP's practices, the XP practice of pair programming has probably changed the most during the pandemic.

Remote-first pairing has introduced new challenges:

* my other-timezone pair is unavailable. What should I work on?
* my other-timezone pair is unavailable, and I don't know how to work on our assigned feature. What do I do?
* my other-timezone pair made code changes without me that I wouldn't recommend. How do I handle this?
* the network is lagging. How do me and my pair exchange keyboard/mouse control?
* my work-frome-home environment has distractions from work
* some of my team is remote, and some is co-located. How do we collaborate as one team?

> You may have noticed that these "challenges" are essentially the challenges of normal solo programming!

And this brings me around to admitting that we may have to flex pair programming in a way I didn't want to happen: 
we should not pair for an entire workday in the current remote-first world.

> Constant pairing was part of what made XP "extreme". 

So, how might we continue the practice of pair programming while remote?


## XP without Pair Programming

Sometimes we will not have a pair.
Let's say there's an east coast and west coast engineer in a pair.
This means there's a 3 hour difference, and the two persons 8-hour workday may only include a 5-hour overlap for pairing.
There may be 1-2 hours of time reserved within that 5-hours for team meetings, so this leaves about 3-4 hours for pairing per day.
A pair should acknowledge this when beginning work on a new feature.

The pair might benefit from breaking down the work into certain kinds of tasks.
Which tasks does the pair want to pair on (pair-tasks)?
Which tasks are OK to solo on (solo-tasks)?
How does the pair want to share context from solo-time?

> Successful remote pairing will differ depending on the "kind" of pair:
> Two senior engineers? One junior and one senior? Two juniors?

A pair should discuss the general outline of a feature's implementation and break it down into tasks.
Each person needs to be transparent about which tasks they think are OK for solo, and which should require pairing.
This will help us maintain the teach-learning component of pair programmoing.

### Potential "Solo Tasks"

In general, the best solo tasks are tasks that a pair actively agrees is fine to solo on.
But here are some ideas that I noodled on:

* Admin time
* Write documentation
* Work on a learning course
* research solutions for the tricky component of a feature
* prepare a learning mini-workshop
* collect resources/articles for junior to review and discuss later
* write code for the agreed-upon solo-tasks
* research options for pair-tasks
* attempt to solve tasks alone as a learning opportunity
* document questions to ask for when pairing resumes
* practice coding techniques
* **other work that a pair agrees is fine to solo on**

If both are senior engineers, the most troubling conflict probably involves the implementation choices made when the other person is offline.

### Potential "Pair Tasks"

The best pair tasks will involve the work that a pair actively decides they **want** to do together, for any reason!

This will likely involve the following:

* complex business logic
* code that one person does not feel comfortable writing solo
* creating architecture diagrams linking different systems

### Sharing Context

Suggestions:
* Use the stand-down channel (see below)

## Other Experiments in Remote XP

Here are summaries of remote pair programming experiments I've tried or discussed with other people.
This isn't an exhaustive list.

* Retro on pairing
* Stand-down channel

### Remote Pairing retro
A retro focused on pairing should help uncover what a team's unique challenges or conflicts.
At the beginning, establish the goal to improve the remote pairing process.
Throughout the retro, everyone should be looking for ideas on specific experiments.

### Stand-down channel
At the end of one's work day, write a brief summary of where one left off on work. When the

## Call to Action: more experimentation on conflict-exploration via pair programming

What experiments in XP have you tried in our pandemic, remote, work-from-home world?

What went well? 
What did not go so well? 
What crazy ideas and experiments are you a little curious about?


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