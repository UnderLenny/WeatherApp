# WeatherApp

## Project Description
WeatherApp is a React Native application designed to provide weather information for various cities. Users can search and view current weather, and other useful weather-related information.

## Current Status
The project is 80% complete. While the main features are implemented, a few tasks remain for full completion:
- [ ] Implement saving favorite cities
- [ ] Add multi-language support
- [ ] Add a weather forecast for several days ahead
- [ ] Optimize application performance
- [ ] Add tests for core modules

## Features
- City weather search
- Display current temperature, humidity, wind speed, and other parameters

## Installation
To run the application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/UnderLenny/WeatherApp.git
    cd WeatherApp
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory of the project and add your API key for the weather service:
    ```
    API_KEY=your_api_key_here
    BASE_URL= I used: http://api.weatherapi.com/v1
    ```

4. Start the application:
    ```bash
    npm run start
    ```

## Technologies Used
- React Native
- Expo
- Axios (for making HTTP requests)
- Tailwind CSS (for styling)

## Contribution
If you wish to contribute to the project, please follow these steps:

1. Fork this repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes and commit them (`git commit -m 'Add some AmazingFeature'`)
4. Push your changes to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the LICENSE file for details.
