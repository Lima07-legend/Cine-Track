# CineTrack — Project Plan

## Project Overview

**Project Name:** CineTrack  
**Project Type:** Movie Tracking Web Application

### Project Description

CineTrack is a web application that allows users to explore movies, manage their personal movie lists, save favorite movies, mark movies as watched, and write reviews and ratings.

### Main Pages

1. Dashboard
2. My List
3. Favorites
4. Explore
5. About
6. Settings

---

# Step 1 — Identify All Data (Nouns)

This step identifies the information that CineTrack needs to store and use.

## 1.1 Movie Data

| Variable Name | Data Type | Description | Example |
|---|---|---|---|
| id | Number | Unique ID of the movie | 1 |
| movieTitle | String | Title of the movie | The Dark Knight |
| rating | Number | Rating of the movie | 10 |
| isFavorite | Boolean | Whether the movie is a favorite | true |
| genre | String | Genre of the movie | Action |
| isWatched | Boolean | Whether the movie has been watched | false |
| poster | String | Movie poster image path or URL | poster.jpg |
| plot | String | Description or plot of the movie | A superhero movie |
| review | String | User's review of the movie | Amazing movie |
| year | Number | Year the movie was released | 2008 |

## 1.2 Explanation of Data Types

- **String:** Stores text, such as movie titles and descriptions.
- **Number:** Stores numerical values, such as ratings, IDs, and release years.
- **Boolean:** Stores either true or false values.

## 1.3 Movie Object Example

```javascript
const movie = {
    id: 1,
    movieTitle: "The Dark Knight",
    rating: 10,
    isFavorite: true,
    genre: "Action",
    isWatched: false,
    poster: "poster.jpg",
    plot: "A superhero movie",
    review: "Amazing movie",
    year: 2008
};
2.1 Main Actions
Inputs (Parameters) Checks Output Description
Check if movie exists and is not already a favorite No direct output Adds a movie to Favorites
Check if movie exists No direct output Marks a movie as watched
movieTitle Check if search input is not empty Movie cards Searches for movies by title
sortType Check whether sort type is valid Sorted movie cards Sorts movies by highest rating, newest year, or title
Check if movie exists Movie details card Displays complete movie information
id, review, rating Check movie ID, review input, and rating No direct output Saves a user's review and rating
 
2.2 Additional Actions
Inputs (Parameters) Checks Output Description
Check if movie is in Favorites Updated Favorites list Removes a movie from Favorites
Check if movie is in Watched Updated Watched list Removes a movie from Watched
Check if movie is in My List Updated My List Removes a movie from My List
Check if movie exists and is not already in the list Updated My List Adds a movie to My List
Check if genre is valid Filtered movie cards Displays movies belonging to a selected genre

2.3 Action Descriptions
addFavorite()
Adds a selected movie to the user's Favorites collection.
addWatched()
Changes the movie's watched status to true.
searchMovie()
Searches for a movie using its title and displays matching movie cards.
sortMovies()
Arranges movies according to the selected sorting option:
Highest rating
Newest release year
Title (alphabetical order)
displayMovieDetails()
Finds a movie using its ID and displays its details.
saveReview()
Saves the user's review and rating for a selected movie.

3.1 Movie Validations
Input           Validation
Movie ID        Must identify an existing movie
Movie Title     Must not be empty when searching
Rating          Must be a valid number within the chosen rating scale
Review          Must not be empty when submitting a review
Genre           Must match an available genre
ReleaseYear     Must be a valid year
FavoriteStatus  A movie should not be added twice
WatchedStatus   A movie should exist before being marked as watched

3.2 Error Handling
The application should handle situations such as:

Searching with an empty input.
Searching for a movie that does not exist.
Adding the same movie to Favorites more than once.
Adding an invalid movie ID.
Submitting an empty review.
Entering an invalid rating.
Selecting an unavailable sorting option.

3.3 User Feedback
When an operation is completed, the application should provide appropriate feedback.

Examples:
Movie added to Favorites.
Movie removed from Favorites.
Movie marked as Watched.
Review saved successfully.
No movies found.
Please enter a movie title.

Page 1 — Dashboard
Purpose
The Dashboard provides an overview of the user's movie activity.

Content
Welcome message.
Total movies in My List.
Total favorite movies.
Total watched movies.
Recently added movies.
Recently watched movies.

Actions
Navigate to My List.
Navigate to Favorites.
Navigate to Explore.
Open movie details.

Required Data
movieTitle
poster
rating
isFavorite
isWatched
id
 
Page2 - My list
Purpose
My List stores movies that the user wants to watch later.

Content
Page heading.
Movie cards.
Movie posters.
Movie titles.
Release years.
Ratings.

Actions
addToList()
removeFromList()
addWatched()
displayMovieDetails()
searchMovie()
sortMovies()

Required Data
id
movieTitle
poster
rating
genre
year
isWatched

Page3 - Favorites
Purpose
Favorites displays movies that the user has selected as favorites.

Content
Page heading.
Favorite movie cards.
Movie posters.
Movie titles.
Ratings.

Actions
addFavorite()
removeFavorite()
displayMovieDetails()
sortMovies()

Required Data
id
movieTitle
poster
rating
genre
year
isFavorite

Page 4 — Explore
Purpose
Explore allows users to discover and search for movies.

Content
Search bar.
Featured movies.
Popular movies.
Movie categories.
Genre sections.
Movie cards.

Actions
searchMovie()
sortMovies()
filterMovies()
displayMovieDetails()
addFavorite()
addToList()

Required Data
id
movieTitle
poster
rating
genre
plot
year

Page 5 — About
Purpose
The About page explains the CineTrack application.

Content
Introduction to CineTrack.
Project purpose.
Main features.
How the application works.
Information about the project.

Actions
Navigate to other pages.
Open relevant sections.

Required Data
This page mainly displays static information about the application.

Page 6 — Settings
Purpose
Settings allows users to manage application preferences.

Content
Settings heading.
Theme preferences.
Display preferences.
Application information.

Actions
Change theme.
Update available preferences.
Save settings.

Required Data
Settings-related values depend on the preferences implemented in the application.

Project Structure
CineTrack/
│
├── index.html
│
├── pages/
│   ├── dashboard.html
│   ├── my-list.html
│   ├── favorites.html
│   ├── explore.html
│   ├── about.html
│   └── settings.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── movies.js
│   ├── favorites.js
│   ├── my-list.js
│   ├── search.js
│   └── settings.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── CineTrack.md

