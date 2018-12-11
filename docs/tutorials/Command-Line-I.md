---
page-kind: guide
title: Command Line I
---
This guide explores something only tangentially related to FRC & robotics,
but still important for you to know in general. If you're going to continue
programming, people will expect you to know how to use _the command line_.

The command line is fairly simple to start with: a **line** of text that the
computer interprets as a **command**. A command is just some program that
does something on your computer. Internet browsers, file explorers, chat
programs, and text editors are all examples of commands that you use
every day. We call these _graphical programs_, since they can display much
more than just text, and manage their own window.

In order to use the command line, you need something that can display the
output of it back to you, since most commands don't open a new window
like a browser. This program is called a **terminal**. Opening one will
be different depending on which OS you use (Windows, macOS, or Linux) and
the actual commands will also be different. For Windows, search for `cmd`
using the bottom left search tool. For macOS, you can find `Terminal` in
the `Utilities` folder of `Applications`, or `/Applications/Utilities`.
For Linux, it depends on your variant, but you can usually search for
`term` and find it.

The command line, at its most basic, is pretty simple. There are 2 parts,
the command and its arguments.

Let's learn by example. Here is a simple command that **c**hanges the
**d**irectory the terminal is in to `some-directory`:
```bash
cd some-directory
```
The command is `cd` and the single argument is `some-directory`.

Another example, with a command that **l**i**s**ts files:
```bash
ls -1 some-directory
```
The command here is `ls`, and there are two arguments: `-1` and
`some-directory`. Note the dash (`-`) in front of the first one.
This is a type of argument known as an **option**. It changes how the program
works. In the case of `ls`, `-1` means to list the files one line at a time,
rather than have multiple files per line.

By now it should be clear how the command and its arguments are separated.
Any **whitespace**, which includes spaces, tabs, and other "empty"
characters, will separate the parts of the command line. Here are a few
commands that all mean the same thing:
```bash
command arg1 arg2
command     arg1            arg2
command arg1    arg2
```

The command is always the first "part", and the arguments are all the parts
that follow. A few examples:

|Command Line|Command|Arguments|
|------------|-------|---------|
|`git checkout master`|`git`|`checkout`, `master`|
|`gradle build`|`gradle`|`build`|
|`tar xvf file.tar.gz`|`tar`|`xvf`, `file.tar.gz`|

There is one important thing we're missing. If we use spaces to separate the
parts, how do we include spaces in our arguments or the command? We use a
technique called _quoting_. You can use the single quote (`'`) to prevent
spaces from splitting up two parts:

|Command Line|Command|Arguments|
|------------|-------|---------|
|`git checkout 'master spaced'`|`git`|`checkout`, `master spaced`|
|`gradle -Dout='somewhere spaced/out'`|`gradle`|`-Dout=somewhere spaced/out`|
|`tar xvf 'space file.tar.gz'`|`tar`|`xvf`, `space file.tar.gz`|

Notice that the quote doesn't have to be at the start of the argument. It can
be placed anywhere, and it will prevent spaces from being interpreted. If the
command you type doesn't work, try placing everything you think should be in
one argument in single quotes. That should resolve most issues quickly,
although it won't always do what you want when you get in to more complicated
features of your terminal.

That's all the basics you need to know to work any terminal available, and most
other systems that work this way, such as Minecraft's commands. Learning this
opens a gateway to using many more complicated tools that can help improve
your computer, and helps you understand how it works.

The next tutorials will cover basic commands in the different terminals,
and will be split into macOS/Linux and Windows.
