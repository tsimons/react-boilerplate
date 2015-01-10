# Game Watch
Provides a chess timer style watch for an unlimited amount of players. Synchronizes time over a socket connection

## Features
* Create a party
* Configure:
** At party creation:
*** Time limit
*** Pause after round robin
** At player join:
*** Name
*** Color
* Stop the watch
* Pause the watch
* Reset current timer
** Require multiple approvals?
* See all other players timers
** Display current timer larger
* Tick up mode to figure out how long players usually take
* Track games and common times per user
* End game
* Eliminate a single user
* Use laptop/ipad/tv as a status monitor


## Basic workflow
1. First user connects
1. Party is created
1. Generate room name
1. click mailto link to send room name to other players
1. Party is configured
1. Other players connect to website either by emailed link or directly
1. If not auto joined (query param). provide a way to enter the party using the room name
1. Players configure personal settings
1. Game is started
1. First User's timer is started
1. First user's timer is stopped
1. Second user's timer is started
1. ...
1. Time runs out for first user
1. First user's timer no longer runs
1. End is clicked
1. Reconfigure party with everyone still in it
1. Start new round
1. Timer starts
1. ...
1. reset is clicked
1. same configuration is used
