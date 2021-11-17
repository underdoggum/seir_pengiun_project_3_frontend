# Project 3 (Front-end)
## by Jameson Wang, Lucy Liu, & Nathan Noack

## Explanation of App

With so much waste in the modern era, from the plethora of restuarants tossing out tons of food, and also for those looking to save some money on food costs--whether it's a struggling small business or a hungry family--this app aims to solve both of those problems by creating a central shopping network for which those two roads to connect. Pulling from from our collective backgrounds in the restaurant and retail industries, we strive to use the power of the web, with the web development knowledge that we now have, to bring these people closer together for the betterment of both.

[Deployed frontend](https://unwasted.netlify.app/)\
[Backend repo](https://github.com/underdoggum/seir_penguin_project_3_backend)\
[Deployed backend](https://unwasted-penguins.herokuapp.com/)

## Technologies Used
- React
- Express
- Node
- Bootstrap
- SASS
- HTML

## Library/Techniques
- RESTful Routes
- CRUD
- Deployment with Heroku, Netlify 

## Intended Component Tree
```
App
 ├── Header
 ├── Main
 │     ├── Index
 │     └── Show
 └── Footer

```

## React Routing Table 
| Action         | Path                        | HTTP Verb | Purpose                                                                        |
|:--------------:|:---------------------------:|:---------:|:------------------------------------------------------------------------------:|
| Index          | /items                      | GET       | List all items                                                             |
| Show           | /items/:id                  | GET       | Show info about one item                                                   |

## User Stories
- Users can create an account or log in
- Users can 


- As a user, I can see a list of all my bookmarks when I visit the page
- As a user, I can click on one of my bookmarks and have it take me to the linked website
- As a user, I can create a new bookmark and see that it immediately loads on the page so that I know I successfully added a bookmark
- As a user, I can delete a bookmark so I can keep my list relevant
- As a user, I can update a bookmark in case I made a typo or the URL changed

## Challenges
