# React + Vite

 # Weather Forecast Application

This is a weather forecast application built with React.js that fetches and displays current weather and a 5-day forecast for a specified city using the OpenWeatherMap API.

## Table of Contents
- [Setup Instructions](#setup-instructions)

- [Assumptions]
## The application assumes that the user enters a valid city name. Invalid city names will trigger an error message.
## The application uses the metric system for temperature by default but allows users to toggle between Celsius and Fahrenheit.
## The user is assumed to have basic knowledge of using web applications.


- [Usage]
## Search for a City: Enter the name of a city in the search input field and press enter or click the search button. The application will display the current weather and a 5-day forecast.

## Toggle Temperature Unit: You can switch between Celsius and Fahrenheit by clicking the toggle button.

## View Weather Information:

## The current weather will display the city name, temperature, weather condition, and an icon representing the weather.
## Below the current weather, a 5-day forecast will be shown, including the high and low temperatures for each day along with weather icons.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
   cd weather-forecast-app


## Install Dependencies: Make sure you have Node.js installed. Then run:
npm install

## Obtain an API Key: Sign up at OpenWeatherMap and get your API key. Replace the placeholder API key in the useWeather.js file:
const API_KEY = `Your API Key`

## Run the Project: Start the development server:
npm run dev


## Open in Browser: Open your browser and navigate to http://localhost:3000 to view the application.

