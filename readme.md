



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


## Instructions Client

We already know how to connect backend and frontend, we will continue with this laboratory, now ready to start 🚀

## Iteration #1: Setting the folders/files structure

we need to install  axios  to our project run `npm i axios` in the root level from client.
In order to have everything organized, we will first create a couple of folders and files. 
- **containers** / **components** / **services**: To keep things nice and clean, we will also create separate folders for `celebrities` and `movies`: `containers/celebrities` and `containers/movies`. Also, we will create a couple of files in each folder:
    - `containers/celebrities/Celebrities.js`
    - `containers/celebrities/New-celebrity.js`
    - `containers/celebrities/Nelebrity-details.js`
    - `containers/celebrities/Edit-celebrity.js`

    - `containers/movies/New-movie.js`
    - `containers/movies/Movies.js`
    - `containers/movies/Movie-details.js`
    - `containers/movies/Edit-movie.js`

Obviously, naming is the matter of preference so we used very descriptive names for routes and views.

## Iteration #2: Adding New Celebrities

1. In the services folder we need to create a `celebrities.js` file in this file, we create our function to add new celebrities use axios.

2. In containers/celebrities/New-celebrity.js   file:
   - Add an `<h2>` for the page's heading.
   - Add a `<form>` tag that makes a POST request to `/celebrities/create`.
   - Add `<input>` tags inside the form so the user can fill in values for each attribute of the celebrity.  Make an input for `name`, `occupation`, and `catchPhrase`
   - Add a `<button>` tag in the form so the user can submit the form once they are done filling it out.
3. Connect the function to create  a new celebrities
    - If there is an error, render the `error message` in view so the user can try again and 
    - If there is no error, redirect to the page with the list of celebrities

## Iteration #3: Listing Our Celebrities

Now, when we've got some celebrities in the database, we can start working with them in our Express app. Let's **display a list of all the celebrities**.

1. In the services folder we need to create a `celebrities.js` file in this file, we create our function to get all celebrities.
2. In the `containers/celebrities/Celebrities.js` file:
    - Add an `<h2>` tag for the page's heading.
    - Use a `map` loop to display tags with each celebrity's `name`.

## Iteration #4: Adding New Movies

Okay, the next step is to make it so the user can **add new movies to the database from the frontend**.

### Steps we will follow in this iteration:
 1. In the services folder we need to create a `movies.js` file in this file, we create our function to add new movie.
   2. In  the `containers/celebrities/New-movie.js` file we need to create the form to create a new movie, make sure you pass all the celebrities from your database so your users can choose which ones are in the cast of the movie you're just creating (**hint**: You will have to use [select multiple](https://reactjs.org/docs/forms.html#the-select-tag) tag)
  - Make sure the form is making a POST request to the other route you just created (`/movies/create`)
  - In your post route, create an object with all the info you just received from the form. (Remember, `req.body`)
  - Use this object to create a new movie in the database and redirect back to the page with your list of all movies
  - Make sure to add a link to the form on the movies page so the user can easier navigate.

## Iteration #6: Listing Our Movies

Now that we've got some movies in the database, let's make a page where we list all our movies, just like we did with the `celebrity` model.

### Steps we will follow in this iteration:

Go back and review how you did this for the `celebrity` model.  You'll need to:

 -In the services folder we need to create a `movies.js` file in this file, we create our function to get all movie.
  - Create a to Movies.js  render the file in which we will display movies.
  - Use a database query to retrieve all the movies from your database and render the view
  - Use a `map` loop to display all your *movie titles* on that page.

## Iteration #7: The Movie Details Page

We've got a list of all movies that displays each of their *titles*, but what if we want to see the other details? In our `container/movies/Movies.js` we have our list of movies, let's add links so that the user can click on any movie's title, and go to a details page of each movie.  On this page, we will show all the details of that movie.

|     Route         |      Description      |
|--------------|-----------------------|
| `/movies/:id` | Show a specific movie |

### Steps we will follow in this iteration:

1. We need `/:id` part to change dynamically as we click on different movies' titles. This being said, as part of the loop that displays each movie's title, add a link that goes to the `/movies/:id` route with the `:id` replaced by the actual movie's id 🔑
2. In the services folder we need to create inside `movies.js`, a new function to get detailed movies to consume the data
3. In the `container/movies/Movie-details.js` file:
    - Add an `<h2>` for the page's heading.
    - Display tags with the movie's `title`, `genre`, `plot` and `cast`.

## Iteration #8: Deleting Movies

Now that we have a list of movies, a movie details page, and a page to create new movies, we only have 2 features left to implement: *editing* celebrities and *deleting* them.  Since deleting is simpler, let's start with that.


### Steps we will follow in this iteration:

1. In the `movies/Movie-details.js` file:
    - Add a `<form>` tag that makes a POST request to `/movies/:id/delete` where the `:id` is replaced by the actual `id` of the movie.
    - Add a `<button>` tag inside the form so that it can be submitted.
2. In the services folder we need to create inside `movies.js`, a new function to delete this movie.


## Iteration #9: Editing Movies

Final piece of our CRUD puzzle: **editing existing movies**.


1. In the `movies/Movie-details.js` file:
    - Add a `<form>` tag that makes a POST request to `/movies/:id/delete` where the `:id` is replaced by the actual `id` of the movie.
    - Add a `<button>` tag inside the form so that it can be submitted.
2. In the services folder we need to create inside `movies.js`, a new function to delete this movie.


### Steps we will follow in this iteration:

1. In the `movies/Edit-movie.js` file:
    - Add a `<form>` tag that makes a POST request to `/movies/:id/edit` where the `:id` is replaced by the actual `id` of the movie.
    - Add a `<button>` tag inside the form so that it can be submitted.
2. In the services folder we need to create inside `movies.js`, a new function to edit this movie.



Now you can come back to the bonus part related to the celebrity model :wink:.


**That's it! 🏆**

Happy Coding! :heart:


Now we have an application that connects to the backend!!!
