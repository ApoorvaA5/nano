React Client for Book Search App_
## Frontend

This project uses React.js and NextUI to create a user interface with tabs for searching book details and author information.

### Tabs

The application features two tabs:

• **Book Details**: Search for book information
• **Author Search**: Search for author information

Both tabs utilize the same API endpoints to fetch data.

Overview

This React client application allows users to search for books and authors, and view detailed information about each. It uses NextUI for styling components and interacts with the API server to fetch data.

Setup

1. Clone the repository or copy the code into a new directory.
2. Install dependencies using npm install or yarn install.
3. Start the development server using npm start or yarn start.


API Calls

* GET ${API_HOST}/books?q=${query}&page=${page}&limit=1: Searches for books and returns a list of results.
* GET ${API_HOST}/authors?q=${query}: Searches for authors and returns a list of results.

Environment Variables

* API_HOST: The URL of the API server (default: http://localhost:3000/api/search)

Instructions

1. Ensure the API server is running (see API server README for instructions).
2. Start the React client development server using npm start or yarn start.
3. Open a web browser and navigate to http://localhost:3000.
4. Use the search bars to find books and authors, and click on items to view detailed information.

Dependencies

* React
* NextUI
* Axios (for API calls)


Note: Make sure to replace the API_HOST variable with the correct URL if your API server is hosted elsewhere.

