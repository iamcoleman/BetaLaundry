# BetaLaundry


## Project Overview

I currently live in a fraternity (Beta Theta Pi at University of Cincinnati), and one of our biggest problems is finding time for 50+ brothers to do their laundry with only two washers and two dryers. 

I've decided to solve this problem by making an iOS app that allows brothers to open it up and see when washers/dryers are available or currently in use.


## Initial Planning

My initial plan was to have this project be stricly on the iPhone - an app that brothers could open up and switch the washer or dryer they're using to `in use` or `available`. But having lived with these gentlemen for a few months now, there would definitely be guys who would sit in their rooms and change washers to `in use` so they could go down later and put their clothes in. So I needed something that would actual require you to be in the laundry room to change the status.

I decided to purchase a Raspberry Pi, a breadboard, and four switches - one for every washer and dryer. The RPi would then send the state of the switches to a server, which would then relay the data to the iOS app. 


## Current Progress

**September 21, 2018**
- Got the Raspberry Pi, switches, resistors, wires... the whole shebang
- Being a computer science major, I have only really worked with some very basic breadboard projects before, so I reached out to a few of my electrical engineering friends to help with the breadboard design.
- I'm using 4 SPDT switches (3 terminals - 1 common, 2 for connection to the common) and we came up with [this design](https://imgur.com/Wt1MDyA)
- When the switch is on, the digital pin will read the full 5V accross the 1kohm resistor - when the switch is off, the resistor will force the pin to 0V

**September 29, 2018**
- Finally getting used to working with a Raspberry Pi. I got a few simple programs working like making a light blink and getting one of the switches to work
- Starting to put all the switches on the breadboard
- Had to order a new MacBook charger so I can start on the iOS app

**October 2, 2018**
- Planning out how I want to get the data from the Raspberry Pi to the iOS app
- I am going to use the Raspberry Pi (Python), Swift, and Firebase to get data from the RPi to my iOS device 
- Switches on the RPi will update the database in Firebase, and the iOS app will grab the data from Firebase to display the states of the washers and dryers 
