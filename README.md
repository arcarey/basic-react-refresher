# Simple React Refresher
The purpose of Simple React Refesher is to give me a chance to knock the rust off of basic React syntax after spending a year away in the land of Angular. 

## This application utilizes: 
Vite for the build and development server.

Axios for API calls.

The NYT public API for source content.

Atmos for color pallet generation.

Jest for testing.


## To Run the Application:
Clone the repo

Create a .env file in the root directory with the following 

NYT_TOP_STORIES_KEY='YOUR_KEY' (LiveFront, this key will be provided in my email with the link)
NYT_TOP_STORIES_URL='https://api.nytimes.com/svc/topstories/v2/home.json?api-key='

To install the needed packages:

run - npm i

To start the dev server:

run - npm run dev

To run the test suite:

run - npm test