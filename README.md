# Boss Machine  

## Project Overview



In this project, I created an entire API back-end to serve information to a Boss Machine. It is a management application to keep track of the minions, their works, 'million dollar' ideas, and busy meetings that are constantly scheduled.

  

## Technical Skills Used

By using **Express** - a web framework for **Node.js**, I created a web REST API which serves CRUD (Create, Read, Update, and Delete) operations upon receiving various kinds of HTTP methods.


> NOTE: 
> All front-end portion of this project has been provided by Codecademy (e.g. REACT, HTML/CSS). 
> 
> I hereby certify that `api.js`, `minion.js`, `idea.js`, `meeting.js`, and `checkMillionDollarIdea.js` files in `server` directory is my own work without referring to a solution provided by Codecademy .
  
    

## How to Use 
1. Install **Node.js** 
2. Open the root project directory in terminal
3. Run `npm install`
4. Run `npm run start`
5. Open **index.html** in a web browser (Chrome or Firefox)

## API Routes
* `/api/minions`
	* GET /api/minions to get an array of all minions.
	* POST /api/minions to create a new minion and save it to the database.
	* GET /api/minions/:minionId to get a single minion by id.
	* PUT /api/minions/:minionId to update a single minion by id.
	* DELETE /api/minions/:minionId to delete a single minion by id.

- `/api/minions/:minionId/work`
	- GET /api/minions/:minionId/work to get an array of all work for the specified minon.
	- POST /api/minions/:minionId/work to create a new work object and save it to the database.
	- PUT /api/minions/:minionId/work/:workId to update a single work by id.
	- DELETE /api/minions/:minionId/work/:workId to delete a single work by id.
* `/api/ideas`
	* GET /api/ideas to get an array of all ideas.
	* POST /api/ideas to create a new idea and save it to the database.
	* GET /api/ideas/:ideaId to get a single idea by id.
	* PUT /api/ideas/:ideaId to update a single idea by id.
	* DELETE /api/ideas/:ideaId to delete a single idea by id.

-  `/api/meetings`
	- GET /api/meetings to get an array of all meetings.
	- POST /api/meetings to create a new meeting and save it to the database.
	- DELETE /api/meetings to delete _all_ meetings from the database.