# Marvel Movie Directory

## Description

This App is for Marvel fans who want to get information about their favorite Marvel characters and explore the Marvel Cinematic Universe Timeline, ordered by release date.

Future features will include: a favorites view to allow users to compile a list of their favorite Marvel superheroes and a watch trailers view incorporating the YouTube API to let users search for and watch MCU trailers.

### Dependencies

Run `nvm use 16` followed by `npm install` in the project folder to install dependencies related to Express.

Go to client folder `cd client` and run `nvm use 16` followed by `npm install` to install dependencies related to React.

### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `nvm use 16` and then `npm start` to start client server in development mode with hot reloading in port 3000.
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5002`

### Flow Diagram

Homepage is a with gallery view of Marvel superheroes and the ability to select a featured superhero and read a short bio and see list of MCU appearances. Data currently included in the js file but can be moved to database.
Timeline view is a timeline of MCU movies with data stored in the database.
Favorites view will allow users to create a list of favorite superheroes.
Watch view will allow users to search for MCU movie trailers using the YouTube API.

### API Routes

Future Feature.

Add screenshot of API routes.

### Database Schema

For MVP, one database storing info related to the MCU timeline. Database includes id, release year, title, and external link to the Marvel.com website.

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
