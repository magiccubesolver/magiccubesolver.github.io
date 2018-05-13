# Magic Cube Solver

## Functional Specification

Last Updated: November 16, 2016

## Project Status

Main app presently on hiatus, CV portion not yet started but can be designed in parallel (ergo, without worrying about main app status).

A buddy from college wanted to work with me on the project, so I offered him collaborator status if he could work out the bug in the render code.

Two weeks and a ton of stepping through Cuber later, he hasn't had much luck, so it looks like I'll have to put this project on hold for now.

The problem is that the Cuber model is the crux of the application, and I presently have very little idea about graphics programming in Javascript.

Cuber was also released in 2014 using vanilla Javascript, so it probably needs to be updated considerably to mesh well with present workflows. I expect I'll need to port over a good deal of the library to a modern workflow using Node and Webpack, adding documentation along the way.

I'll work it all out eventually, but it'll take more time and effort than I expected (welcome to software development, Dan). For now, any progress made on **Magic Cube Solver** will be on the computer vision portion.

## Present Functionality

Presently, when the page loads, the cube randomizes and then solves itself, then allows the user to manipulate it. Solve and Scramble buttons manipulate the cube accordingly, but a bug in the cube render prevents proper animation of a user-triggered cube solve.

Future releases will allow solving user-input color configurations, loading color configurations from a camera, and stepping through solutions move by move. The end goal is release to the Google Play Store as an Android application.

## Overview

**Magic Cube Solver** is an Android application that simulates a Rubik's Cube, the hand-held puzzle that became a cultural symbol in the 1970's (when Erno Rubik first released it, he called it *Magic Cube*). Built on Petri Lehtinen's [cube.js](https://github.com/akheron/cubejs) and Mark Lundin's [Cuber](https://www.rubiks.com/chrome-cube-lab), it solves a user-entered cube configuration in 22 moves or less, then simulates the solution on a beautiful *three.js* 3-D model, foregoing the messy notation similar applications use and providing a superior user interface.

## Known Current Bugs

* When the page loads, initializing the solver leads to a bottleneck of several seconds.
* Hitting the solve button makes the twist animation disappear.

## Scenarios

**Susan**

Susan is a busy homemaker who hasn't had the time to read a book in some years. She finds an unsolved Rubik's Cube in her family attic and Googles how to solve it. She comes across a number of algorithms she doesn't want to learn, and they all seem to use this bizarre FUB'R notation. What does it even mean? She doesn't want to learn how to solve the cube. She just wants to get it done as quickly as possible, maybe sit with her toddler and try it together as a family.

She gets her phone and opens **Magic Cube Solver**. A slowly rotating gray cube on a white background appears. There are three icons on the bottom right - manual entry, camera entry, and scramble. She chooses camera entry. Her camera opens and nine small square outlines appear. She holds the cube so it aligns with the outlines. A picture is automatically taken, and she's prompted to rotate the cube again. She does so 5 more times, and the cube configuration loads up into the 3D model in a beautiful animation to mask the algorithm prep time. Then, she's instructed to hold the cube as in the model and follow along as the model rotates. Toddler in her lap, she follows along, and both look in wonderment as the puzzle is quickly solved.

**Gary**

Gary is an artist who loves repeatedly pressing the scramble button, then watching the randomized cube slowly solve itself. It relaxes and centers him, and makes him revel at how art can condense the chaotic logic of so many possibilities into a solid, beautiful image.

He doesn't have a cube on him, but is curious about the solution to a particular configuration. So he chooses the manual entry option. The floating cube freezes and a small six-color palette appears. He quickly enters the colors, and the model obligingly rotates to allow different sides to be configured. He's done in thirty seconds or so.

The model comes to life and begins the solution animation.

## Magic Cube Solver FlowChart

```
Floating, rotating gray cube on black background
				|
 _______________|_______________
|				|				|				
|				|				|               
Manual entry	Camera entry	Scramble        
|				|				|
|				|				|
Color Selection Camera 			|
|				|				|
|				|				|
|_______________|_______________|
				|
				|  
				Guided Solve Animation on model from splash screen
```
