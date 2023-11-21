# HouseAR Project

ARReactNative is a demonstration project that combines the power of React Native for mobile app development and .NET Core for the backend API. The goal is to showcase the integration of these technologies to create an augmented reality (AR) application.

## Overview

The project is structured to exhibit a seamless communication between the React Native frontend and the .NET Core backend. The backend API adheres to the CQRS pattern to handle commands for generating AR houses.

## Project Structure

- **ARReactNative**
  - `House.cs`: Definition of the `House` class representing AR houses.
  - `Program.cs`: Entry point for the .NET Core application.
  - `HouseController.cs`: REST API controller for handling AR house generation commands.
  - `HouseCommand.cs`: Command model for generating AR houses.
  - `HouseCommandHandler.cs`: Command handler for generating AR houses.
- **ReactNativeApp**
  - `App.tsx`: React Native app component for displaying AR house information.

## Features

- **AR House Generation**: The API supports the generation of AR houses based on user-defined dimensions.
- **CQRS Pattern**: Commands for generating AR houses are handled using the CQRS (Command Query Responsibility Segregation) pattern.
- **React Native Frontend**: The React Native app displays information about the generated AR houses.

## How to Use

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/ARReactNative.git
    cd HouseAR
    ```

2. **Run the .NET Core API:**

    ```bash
    cd back
    dotnet run
    ```

3. **Run the React Native App:**

    ```bash
    cd front
    npx react-native run-android
    ```

    or

    ```bash
    cd ReactNativeApp
    npx react-native run-ios
    ```

## Dependencies

- .NET Core 7 or later
- Node.js
- React Native CLI

## Contributing

Feel free to contribute to the project by opening issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
