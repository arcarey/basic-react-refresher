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

NYT_TOP_STORIES_KEY="YOUR_KEY" (LiveFront, this key will be provided in my email with the link)


To install the needed packages:

run - `npm i`

To start the dev server:

run - `npm run dev`

To serve on your local network to check out with a mobile device:

run - `npm run dev -- --host`

To run the test suite:

run - `npm test`

To run the test suite with test coverage:

run - `npm run coverage`


## Future Development:

landscape mobile scaling 

filter buttons should be refactored to be radio or checkbox buttons

Selector buttons should also have an 'affirmative' check for active filter rather than just color for a11y standards  

Keyboard navigation for stories. Right now keyboard tabbing allows navigation to invisible stories

Aria labels and full a11y audit 