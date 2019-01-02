# FullStackNEM
OpenClassroom Go full-stack with Node.js, Express, and MongoDB Project

Created a RESTful API for an online recipe app using Express, Node, and MongoDB.  

This Express app will be served up by a Node server running on port 3000, and it will be connected to a MongoDB Atlas cluster.  

Implemented the following endpoints:

GET  /api/recipes  — returns all recipes in database
GET  /api/recipe/:id  — returns the recipe with the provided ID from the database
POST  /api/recipes  — adds a new recipe to the database
PUT  /api/recipes/:id  — modifies the recipe with the provided ID
DELETE  /api/recipes/:id  — deletes the recipe with the provided ID
The front end app has already been built, and can be pulled from the following repo:

Here is the link to FRONT END APP:
https://github.com/OpenClassrooms-Student-Center/5614116-go-fullstack-recipe-frontend.git

To run the frontend app (Angular):
first running  npm install , and then ng serve  (requires the Angular CLI).

To run the backend app (Nodejs & Express):
After cloning (and an  npm install  ), the app must run with the command "  node server  " or "  nodemon server .
