# Simple Time Converter in AFrame

This project is a browser AR/VR application that displays various time zones that I created using AFrame and Apache Cordova. The purpose of this project was to use what I've learned on other devices besides just mobile and desktop.
***Refer to the demo videos for a demonstration of it being run on an iPhone!***

## Installation

Note: This installation guide is for browser only. For running this application on a VR Headset or AR/VR Simulator on iOS, please refer to [Apache Cordova's Documentation](https://cordova.apache.org/docs/en/latest/)!

To set up the application on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aaronlin592/aframe-cordova-project.git
   ```

2. **Navigate to the AFrame Directory**:
   ```bash
   cd a-frame
   ```

3. **Run the application in browser**:
   ```bash
   live-server
   ```

## Usage

- **Time Zone Cycle**: Press anywhere in the blue circle to cycle between timezones.
   - Cycle between Local Time, London, New York, Tokyo, Hawaii, Korea.

## Development & Tech Stack

This project was developed using the AFrame framework and incorporates various resources like Cordova to handle native device support:

- **AFrame**: Framework for AR/VR development.
- **Apache Cordova & XCode**: Mobile device (iOS) support for AFrame.
- **HTML5**: Basic browser AR/VR structure.
- **JavaScript**: Logic Handling/Event Handlers for AFrame.