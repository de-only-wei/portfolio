---
title: 'Write Clean Code to Reduce Cognitive Load'
tags: 'swe'
date: 'Apr 3, 2024'
---

![Cognitive Load (via the Google blog)](/images/cognitiveload.png)

Today I stumbled upon a [Google blog](https://docs.google.com/document/d/1AgcBG2iOmzEWIKYs6hNDyTMZ-an0SOwmJZRsX898XD0/edit) on writing clean code. It talks about why and how we should write *Clean* Code

### Cognitive Load
Cognitive load is the amount of mental effort that is required to complete a task. In this case, our cognitive load grows with the complexity of the codebase. It's usually harder for other people to understand your code, because everyone writes code a little differently.
> Be kind to your co-workers: reduce their cognitive load by writing clean code
## Mantras
Some rules to always follow while writing code are:
##### 1. Limit amount of code in function & files: 
- single responsibility, keep [functions small](https://martinfowler.com/bliki/FunctionLength.html)
- Make code self documenting with small functions (with good names)

##### 2. Create abstractions to hide implementation details
- use abstractions, functions, interfaces hide complex details
- but don't over-engineer
- If you view a code, the intentions of it does not jump at you at first sight. *Abstract*

##### 3. Simplify control flow:
- use helper functions to store conditional statements, loops to [*reduce nesting*](https://testing.googleblog.com/2017/06/code-health-reduce-nesting-reduce.html)
- keep conditional blocks short
- if loops/ branches > 2 levels. *refactor them*
- move loops, conditional statements to functions
- [google blog (simplify control flow)](https://testing.googleblog.com/2023/10/simplify-your-control-flows.html)

##### 4. Minimize mutable state:
- make types immutable
- avoid mutable class fields

##### 5. Others:
- [Test Related Stuff (To Be Written)]()