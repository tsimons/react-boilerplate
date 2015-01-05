#Game Watch#
Provides a chess timer style watch for an unlimited amount of players. Synchronizes time over a socket connection

#Features#
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


#Basic workflow#
# First user connects
# Party is created
# Generate room name
# click mailto link to send room name to other players
# Party is configured
# Other players connect to website either by emailed link or directly
# If not auto joined (query param). provide a way to enter the party using the room name
# Players configure personal settings
# Game is started
# First User's timer is started
# First user's timer is stopped
# Second user's timer is started
# ...
# Time runs out for first user
# First user's timer no longer runs
# End is clicked
# Reconfigure party with everyone still in it
# Start new round
# Timer starts
# ...
# reset is clicked
# same configuration is used
