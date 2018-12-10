---
page-kind: guide
title: Commands II
previous-guide: ./Commands-I.html
---
This part of the commands tutorial covers the code that needs to be written
to represent the commands and systems presented in the previous tutorial.

The actual code is too big to contain here, and can be seen in the [code
repository](https://github.com/Team5818/Tutorial-Commands-II).

## Subsystems
The foundation for the rest of the code comes from the `Subsystem` classes,
so we'll write them first.

### `DriveTrain`
`DriveTrain` is very similar to the past tutorials.

As with the other subsystem we will add, `Arm`, there is an empty method --
`initDefaultCommand` -- which would be used to add a command that will run
if the subsystem has nothing else using it. We frequently use this for
the joystick command, as it's the "default" state of operation.

### `Arm`
`Arm` is a simple class that controls one motor, as if moving a very light
robot arm. It's not too complicated, basically just a single-motor form of
`DriveSide`.

## Commands
The actual logic for the autonomous routine comes from the commands.
`DriveForward` shows one of the simpler commands, since it doesn't need to
do anything complicated. It extends `TimedCommand`, which is a special variant
of `Command` that will finish when the time runs out. This is exactly what
we want `DriveForward` to do. The `execute()` method is called every time
`Scheduler.run()` is called and the command is running. In it, we simply
set the `DriveTrain` power to whatever was passed in the constructor. This
allows us to use this command for _any_ power we want to set, not just the
one we're using for this auto.

To represent the requirement of the `DriveTrain`, we first get the `DriveTrain`
subsystem from `Robot` (`Robot.inst.driveTrain`). We need to use the same
`DriveTrain` everywhere, or the command system won't work properly. The actual
requirement is setup by the line `requires(dt);`. The `Scheduler` will use this
information to ensure that no other `Command` requiring the `DriveTrain` will
run at the same time.

`Rotate` is a little bit more complicated, but is still similar to
`DriveForward`. We don't have a timer, so we don't extend `TimedCommand`.
We still need the `DriveTrain`, so we get it from `Robot` and require
it. We use a new method, `initialize()`, to figure out which way we need to
turn. We can't do this in the constructor, because at that point the robot
is just turning on. We don't want to measure the position until we're going
to start turning, which is when `initialize()` is called.

`Rotate`'s `execute()` is similar to `DriveForward`, it simply applies the
power to the motors. `isFinished()` is a new method. It is called after
`execute()` to find out if the command is done running. In a `TimedCommand`,
it returns `true` after a certain amount of time has passed. In `Rotate`,
we finish once we've reached the target amount of degrees.

`SetArmPosition` is very similar to `Rotate`, except with the `Arm`. We still
get the `Arm` from `Robot`, call `requires(arm)`, and setup the power direction
in `initialize()`. `moveTowardPosition` is an example of a "control loop",
which we'll discuss later. For now, you can ignore it. We again setup
`isFinished()` to stop when we reach the target position.

All of these commands follow the general design principle of "do one thing
well". Each one doesn't do much on its own, but we can combine them using
`CommandGroup` to create a full autonomous routine. I have done such in the
`FirstAutoCommandGroup` class. Creating a `CommandGroup` is very simple:
just `extend CommandGroup`, make a constructor, and call `addSequential`
with each command you want to add. Here, I setup the auto discussed in the
last part, *Commands I*.

This covers the basics of writing commands and combining them to form complex
routines. The next part will cover running commands at the same time,
or *in parallel*.
