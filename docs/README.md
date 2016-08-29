# **ENLIVEN** #

[link to Enliven App - not live](##)

## MVP ##

_Enliven_ is a team collaboration tool inspired by Slack, built with Ruby on Rails and React - Redux. By the end of Week 9 at App Academy, this app will satisfy the criteria outlined below with intuitive and effortless navigation, while engaging the user in a well-designed experience.
 * Hosting on Heroku
 * Account creation, management, login
 * Guest/Demo login
 * Team creation, management
 * Channel chat/Message mentions
 * Direct Messages/Multi-Person DM
 * User notifications

## Implementation Timeline ##

###Phase One: Rails Backend Setup (1 Day)###
  *####Objective: Functioning rails project set up with auth ready to hook in to front-end authentication.####
    * New Rails project
    * User Model/Migration
    * Rails Auth Backend
    * StaticPages controller and root view to serve API
    * Review goals/objective

###Phase Two: Front-End Authentication (1 Day)###
  *####Objective: Set up frontend auth to interact with rails backend and create a secure login.####
    * Webpack/Dependencies setup
    * Redux authentication cycle
    * User sign-in/sign-up components
    * Blank component to display after successful login
    * Seed users into database
    * Style new feature
    * Review goals/objective

###Phase Three: Channel model and Components (1 Day)###
  *####Objective: Set up create/edit/destroy for Channel through API####
  * Channel model
  * Seed Channels to test API
  * API for create/edit/destroy
  * CRUD API for messages
  * Sending messages on channel
  * Deleting messages from convo
  * Style channel components
  * Seed more users/channels

###Phase Four: Message mode and Components (2 Days)###
  *####Objective: Set up create/destroy for Message through API####
    * Message belongs to Channel
    * Accurate timestamps and queuing messages
    * Message components
      - MessagesIndex
      - Message
      - MessageForm
    * Seed messages
    * Style messages and container
    * Review week's progress, update goals/timetable

####-- *END OF WEEK 1* --####

###Phase Five: Direct Messages (2 Days)###
  *####Objective: Implement DM service to keep private conversations off channel chat####
    * Create/Destroy API for Direct Message Chats
    * DM Creation Component on Home Page
    * Components
      - DMIndex
      - DM
      integrate:
      - Messages
      - MessageForm
    * DMs belong to Users
    * Multi-Person DM integration
    * Style DM Chat/Direct Message Index
    * Review functionality and style of app

###Phase Six: Search Message (1 Day)###
  *####Objective: Add search functionality to Home Page to search through _all_ messages, DM included.####
    * Components:
      - ResultDisplay
      - ResultDisplayItem <-- referring to Message Component
      - SearchForm
    * onClick activation for search display
    * All messages displayed accessible to user
    * Instant type-to-search functionality
    * Style search display and form

###Phase Seven: Guest/Demo Login (1/2 Day)###
  *####Objective: Add Guest button to Splashpage to allow employers to explore app####
    * Button on Splashpage with access rights to seeded information
    * Reset seed information upon logout
    * Messaging capability on dummy account
    * Seed dummy account with messages
    * Review progress/Phase Eight

###Phase Eight: Team Creation (1/2 Day)###
  *####Objective: CRUD API for Teams####
    * Teams have many users
    * Teams belong to one user
    * Components:
      - TeamsForm on Home Page
      - TeamEditForm
      - TeamUserIndex
    * Style teams component

###Phase Nine: Style App (remaining time ~ 1 Day)###
  *####Objective: Style app to visually impress####
    * Check thoroughly for usability bugs
    * Clean console throughout navigation
    * Style all elements to be coherent and supplementary to experience
    * Review project
