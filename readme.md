![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Mongoose Movies



## This Lab is separte in two parts (Server & Cliente)

## Introduction
As a summary of out basic CRUD journey, we will work on creating the app for movies and celebrities.
The goal of this exercise is to practice *CRUD* on at least one of the models (building the full CRUD for the *movie model* is mandatory) and *documents relationships* (between the two models), just like we did in out *library-project*.
So let's see what are some user stories related to the *celebrity* model:

- The user should be able to:

**1. Add new celebrities**\
**2. See the list of celebrities**

**BONUS** for celebrities model:
- See the details of a specific celebrity
- Update existing celebrities
- Delete celebrities

**Please come back to the bonus part when you finish the full CRUD on *movie* model.**

In the second part of the application, when you already have a couple of celebrities in your database, let's figure out what we will do regarding *movie* model. As we said, we will have a full CRUD on this model, which means the user can:

**6. Add new movies**\
**7. See the list of all movies**\
**8. See the details of a specific movie**\
**9. Update existing movies**\
**10. Delete movies**

Now when we know the overview of the app, let's proceed to creating it.


## Requirements

- Fork this repo
- Clone this repo


## Submission

- Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```
- Create Pull Request so your TAs can check up your work.


## Instructions Server

### Iteration 0 | Initialize the project

After forking and cloning the project, you will have to add a `starter_code/.env` file and add in it the following line:

```
PORT=3000
```

And you have to install all the dependencies:

```bash
$ cd starter_code
$ npm install
```

Now you are ready to start 🚀

## Iteration #1: Setting the folders/files structure

In order to have everything organized, we will first create a couple of folder and files. 
- **Routes**: In our `routes` folder, let's create separate files for our `celebrities` and `movies`. The naming is up to you, but we will use the following: `routes/celebrities-routes.js` and `routes/movies-routes.js`;

Obviously, naming is the matter of preference so we used very descriptive names for routes.

## Iteration #2: The `celebrity` model

Our first step is to create the `celebrity` model and add some celebrities in our database.

The `celebrity` model should have:
- `name` - String (like _Tom Cruise, Beyonce, Daffy Duck,_ etc.)
- `occupation` - String (what the celebrity does, why they are famous.  For example _actor, singer, comedian_, or you can put _unknown_ if your celebrity is someone like Kim Kardashian)
- `catchPhrase` - String (every celebrity needs a good catch phrase.  Well maybe not all of them have one in real life, but all of _our_ celebrities will have a catch phrase.  This can be pretty much anything.)


### Steps we will follow in this iteration:

1. Create the `celebrity.js` model file in the `models` folder.
2. In the `celebrity.js` model file:
    - Create the `Celebrity` model with the schema.
    - Create the celebrity schema with `name`, `occupation` and `catchPhrase`.
    - Export the `Celebrity` model.

## Iteration #2: Adding New Celebrities

Now that we have defined *celebrity* model, let's make it so the user can **add new celebrities to the database**.

|     Route     | HTTP Verb |          Description          |
|---------------|-----------|-------------------------------|
|   `/celebrities/create`   |   POST    | Send the data from the form to this route to create the celebrity and save it to the database  |

### Steps we will follow in this iteration:

1. In that request file (insomnia/postman) create the JSON with the next keys:
   - Add a key as `name`.
   - Add a key as `occupation`.
 - Add a key as `catchPhrase`.
   
2. Create the `/celebrities/create` POST route in `routes/celebrities-routes.js`.
3. In that route we have to **create** an instance of the `Celebrity` model (don't forget, we should get all the info from the form through *req.body*)
    - If there is an error, return `JSON` with status  `500` or `204` so the user can try again and 
    - If there is no error, return `JSON` with status `200` and one messages that say `congratulations the celebrity was created`.


## Iteration #3: Listing Our Celebrities

Now, when we've got some celebrities in the database, we can start working with them in our Express app. Let's **get a list of all the celebrities**.

Here's the route we will be using:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/celebrities` |    GET    | Show all celebrities |

### Steps we will follow in this iteration:

1. Create the `/celebrities` GET route in `routes/celebrities.js`.
2. In the route:
    - Use `find()` method on the `Celebrity` model to retrieve all the celebrities
    - If everything is okay, return `JSON` with status `200` with the array of celebrities into the view as a variable
    - If there's an error,  return `JSON` with status  `500` or `204`.

## Celebrities - Done! At least for now 😉

## Iteration #4: The `movie` model

Now when we've started all this good work, let's keep up strong and build all the routes for the *movie* model. But first, let's create the *movie* model.


The `movie` model should have:
- `title` - String
- `genre` - String
- `plot` - String
- `cast` - Array of object IDs referencing the *celebrity* model (basically, the array of celebrities' IDs) 


### Steps we will follow in this iteration:

Go back and review what you did to create the `celebrity` model.  You'll need to create a file for the model, and in that file, you'll need to create a schema for the model as well. Don't forget, you have to export the `Movie` model.

## Iteration #5: Adding New Movies

Okay, the next step is to make it so the user can **add new movies to the database**.

|     Route     | HTTP Verb |          Description          |
|---------------|-----------|-------------------------------|
|   `/movies/create`   |   POST    | Send the data from the form to this route to create the movie and save it to the database  |

### Steps we will follow in this iteration:

Review how you did this for the `celebrity` model.
  - Create new route, this route  send the data to after from JSON file on (insomnia/postman) is filled out
  - Make sure the request file  is making a POST request to the other route you just created (`/movies/create`)
  - In your post route, create an object with all the info you just received from the data from (insomnia/postman). (Remember, `req.body`)


## Iteration #6: Listing Our Movies

Now that we've got some movies in the database, let's make a page where we list all our movies, just like we did with the `celebrity` model.

Here's the route we will be using:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/movies` |    GET    | Show all movies |


### Steps we will follow in this iteration:

Go back and review how you did this for the `celebrity` model.  You'll need to:
  - Create a GET route that will response with all celebrities
  - Use a database query to retrieve all the movies from your database and return JSON


## Iteration #7: The Movie Details 

We've got a list of all movies, but what if we want to see the other details? let's to create the route.

Here's the route we will be using:

|     Route     | HTTP Verb |      Description      |
|---------------|-----------|-----------------------|
| `/movies/:id` |    GET    | Show a specific movie |


### Steps we will follow in this iteration:

1. We need `/:id`  replaced by the actual movie's id 🔑
2. Create the `/movies/:id` GET route in `routes/movies-routes.js`.
3. In the route:
    - On the `Movie` model call `findOne()` or `findById()` method to retrieve the details of a specific movie by its `id`
        - Don't forget you have `cast` as the array of celebrity `id`s, and we need to `populate()` in order to get the full data about the celebrities 🎯
    - If everything is fine (*.then()*), return `JSON` with status `200` and  one message
    - If there's an error, catch it.


## Iteration #8: Deleting Movies

Now that we have a list of movies, a movie details, and a route to create new movies, we only have 2 features left to implement: *editing* celebrities and *deleting* them.  Since deleting is simpler, let's start with that.

|        Route         | HTTP Verb |       Description       |
|----------------------|-----------|-------------------------|
| `/movies/:id/delete` |   POST    | Delete a specific movie |

### Steps we will follow in this iteration:

1. Create the `/movies/:id/delete` POST route in your `routes/movies-routes.js` file
2. In the route:
    - Use the `Movie` model's `findByIdAndRemove()` method to delete the specific movie by its `id`.
    - If everything is good (`.then()`), return `JSON` with status `200` and  one message 
    - If there's an error, catch it

## Iteration #9: Editing Movies

Final piece of our CRUD puzzle: **editing existing movies**.

Here are the routes we will be using:

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
|   `/movies/:id`    |   POST    | Send the data from the form to this route to update the specific movie         |

### Steps we will follow in this iteration:


5. Create `/movies/:id` POST route in the `routes/movies-routes.js` file
6. In that route:
    - Create an object with movie's model keys and it's values should come from the request file submission (which is `req.body`)
    - Now you can apply different methods - `update()` or `findByIdAndUpdate()` to find the movie and send the updated values to the database.
    - If there is no error, return  return `JSON` with status `200` and one message

Now you can come back to the bonus part related to the celebrity model :wink:.


**That's it! 🏆 for the moment  😈**

Happy Coding! :heart:

we finish the first part well Done


