# Beta Laundry


## Project Overview

I currently live in a fraternity (Beta Theta Pi at University of Cincinnati), and one of our biggest problems is finding time for 50+ brothers to do their laundry with only two washers and two dryers. 

To solve this problem, I built a RaspberryPi board that has switches connected to each washer and dryer. Brothers will simply flip the switch on when they're using the machine and flip it off when they're done. The RaspberryPi will then send the `on/off` status to a Firebase database. Now to find out the status of the machines, I created a GroupMe Bot in our "in-house" group (just everyone living in the house) that listens for a `/laundry` command to be sent. The bot will then reply with either `Open` or `Taken` for the washers and dryers. 


## Bread Board

pictures of the bread board are coming soon...

## GroupMe Bot

The GroupMe Bot is written in TypeScript and Node.js and is hosted on a Heroku server. It reads the data from a Google Firebase database, formats a message, and then sends the message into the in-house GroupMe group whenever someone sends the command `/laundry`.

View the `beta-laundry-groupme` folder to see the bot. 
