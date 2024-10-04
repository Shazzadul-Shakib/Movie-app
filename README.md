# Movie Mania

A React application for browsing and filtering movies using Tailwind CSS for styling. This project retrieves movie data from The Movie Database (TMDB) API and allows users to filter and sort movies.

## Features

- Browse movies retrieved from TMDB API
- Filter movies by genre
- Sort movies by release year (newest to oldest, oldest to newest)
- Responsive design for various screen sizes

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- TMDB API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Installation

To set up the project on your local machine, follow these steps:

1. **Clone the repository**:
   Replace `yourusername` with your actual GitHub username.
   ```bash
   git clone https://github.com/yourusername/movie-mania.git

2. navigate to the project directory by running `cd movie-mania`, and then install the required dependencies with `npm install`. 

3. To use the TMDB API, you will need an API key. Start by signing up at TMDB. Once you have an account, create a new API key in the API section of your account. After obtaining your API key, create a `.env.local` file in the root of your project and add your API key as follows: `VITE_API_KEY=your_api_key`, making sure to replace `your_api_key` with your actual TMDB API key. 

4. To start the application in development mode, use the command `npm run dev`. Your application will be running at `http://localhost:5173`.
