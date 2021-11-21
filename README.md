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
- CRUD functionality
- Deployment with Heroku, Netlify 

## Intended Component Tree
```
App
 ├── Header
 ├── Main
 │     ├── Index
 │     ├── NewItem
 │     └── EditItem
 └── Footer

```

## React Routing Table 

ADD LOGIN INFO

| Action         | Path                        | Request   | Purpose                                                      |
|:--------------:|:---------------------------:|:---------:|:------------------------------------------------------------:|
| Index          | /items                      | GET       | List all items                                               |
| Show           | /items                      | GET       | Show details about a specific item selected within the list  |
| Delete         | /items                      | DELETE    | Delete the item selected within the list                     |
| Edit           | /editItem/:id               | PUT       | Edit the item that was selected in the Index                 |
| Create         | /newItem                    | POST      | Show info about one item                                     |

## User Stories

new:
- Users can create an account or log in
- Once logged in, users can see their list of items for sale
- Users can click on an item in the list, and specific details for that item are shown within the same page
- On a selected item, users can click an edit button to go to a form page for editing that item
- On a selected item, users can click a delete button to remove that item from their list


old:
- Users can create an account or log in
- Users can see a list of all restaurants and their shopping cart (main index route)
- Users can click on their shopping cart, and it shows all items in the cart (cart is extra feature)
- In the shopping cart, users can delete items (extra feature)
- In the list of restaurants, users can click on a restaurant, which goes to a show page for that restaurant and all items that restaurant offers
- In the show page for that restaurant, users can create items, update items, and delete them


example:
- As a user, I can see a list of all my bookmarks when I visit the page
- As a user, I can click on one of my bookmarks and have it take me to the linked website
- As a user, I can create a new bookmark and see that it immediately loads on the page so that I know I successfully added a bookmark
- As a user, I can delete a bookmark so I can keep my list relevant
- As a user, I can update a bookmark in case I made a typo or the URL changed

## Challenges
- One major challenge involved determining the scope of work to be accomplished within the project's timeframe. We had to refactor many of the cool features we originally wanted to implement in a way that had us reach MVP with our app first, and only then tack on additional functionality to ensure that we, at the minimum, reached MVP and allowed time for bug-fixing.