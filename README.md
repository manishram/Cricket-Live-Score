# CricScore – Cricket Live Score, News & Stats 🏏
<img width="225" height="400" alt="1" src="https://github.com/user-attachments/assets/f528cf88-8713-4df7-8fb2-42b3a16497a9" />
<img width="225" height="400" alt="2" src="https://github.com/user-attachments/assets/81e38bfb-9a43-4f10-9181-8937817ea881" />
<img width="225" height="400" alt="4" src="https://github.com/user-attachments/assets/a654df64-1c4c-4510-883c-fa9e4cfc9dc9" />

CricScore is a mobile application built using **React Native** that provides real-time cricket scores, fixtures, points tables, and detailed match information. The app focuses on delivering a clean UI and fast access to cricket data for fans.

This project was built as a production-style app to demonstrate mobile development skills using modern React Native practices.

---

## Features

- 📊 Live cricket scores  
- 🗓 Fixtures & upcoming matches  
- 🏆 Points table for tournaments  
- 🏟 Match venues and records  
- 📰 Cricket news and updates  
- 📱 Clean, modern mobile UI  

---

## Tech Stack

- React Native  
- JavaScript / TypeScript  
- React Navigation  
- REST APIs for cricket data  
- Axios / Fetch  

---

## Screenshots
<img width="225" height="400" alt="3" src="https://github.com/user-attachments/assets/be082bf3-19ff-4618-8483-6ea928c25567" />
<img width="225" height="400" alt="8" src="https://github.com/user-attachments/assets/03212281-5fd2-4df2-a2ba-295cf8370a8b" />
<img width="225" height="400" alt="5" src="https://github.com/user-attachments/assets/3e9befb2-1356-4d5f-b91e-46d2174a8964" />
<img width="225" height="400" alt="6" src="https://github.com/user-attachments/assets/fd93cddc-766b-4707-b570-0efeb181324a" />
<img width="225" height="400" alt="7" src="https://github.com/user-attachments/assets/dd008a71-c78e-4f6f-91e7-89f4d7371679" />

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v12 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **React Native CLI** - Install globally using: `npm install -g react-native-cli`
- **JDK** (Java Development Kit 8 or higher)
- **Android Studio** with Android SDK
- **Android device** or **Android emulator** configured

### Android Studio Setup

1. Download and install [Android Studio](https://developer.android.com/studio)
2. Open Android Studio and go to SDK Manager
3. Install the following:
   - Android SDK Platform 29 (or higher)
   - Android SDK Build-Tools
   - Android SDK Platform-Tools
   - Android Emulator (if using emulator)
4. Set up environment variables:
   - `ANDROID_HOME` pointing to your Android SDK location
   - Add platform-tools to your PATH

## Installation

1. **Clone the repository** (if not already done):

   ```bash
   git clone https://github.com/manishram/Cricket-Live-Score
   cd Cricket-Live-Score
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Install Expo CLI** (if not installed):
   ```bash
   npm install -g expo-cli
   ```

## Running the Application

### Method 1: Using React Native CLI (Recommended for Android)

1. **Start the Metro bundler**:

   ```bash
   npm start
   ```

   or

   ```bash
   react-native start
   ```

2. **Run on Android** (in a new terminal):

   ```bash
   npm run android
   ```

   or

   ```bash
   react-native run-android
   ```

   This will:
   - Build the Android app
   - Install it on your connected device or running emulator
   - Start the application

### Method 2: Using Expo

```bash
expo start
```

Then:

- Press `a` to run on Android emulator
- Or scan the QR code with Expo Go app on your physical Android device

## Building APK/AAB for Production

### Generate Debug APK:

```bash
cd android
./gradlew assembleDebug
```

The APK will be generated at: `android/app/build/outputs/apk/debug/app-debug.apk`

### Generate Release AAB (Android App Bundle):

```bash
cd android
./gradlew bundleRelease
```

The AAB will be generated at: `android/app/build/outputs/bundle/release/app-release.aab`

## Troubleshooting

### Common Issues:

1. **Metro bundler cache issues**:

   ```bash
   npm start -- --reset-cache
   ```

2. **Android build fails**:

   ```bash
   cd android
   ./gradlew clean
   cd ..
   npm run android
   ```

3. **Dependencies issues**:

   ```bash
   rm -rf node_modules
   npm install
   ```

4. **Port already in use**:
   ```bash
   npx react-native start --port 8088
   ```

## Project Structure

- `/src/api` - API integration files
- `/src/assets` - Images, fonts, and other assets
- `/src/components` - Reusable React components
- `/src/screens` - Application screens
- `/android` - Android native code and configuration

## Firebase Configuration

This project uses Firebase for AdMob integration. Make sure:

- `google-services.json` is present in `android/app/` directory
- Firebase project is properly configured

## Tech Stack

- React Native 0.63.4
- Expo SDK 42
- React Navigation 5
- Firebase AdMob
- Axios for API calls
- React Native Paper for UI components

## Version

Current version: 1.0.1

## Package Name

com.cricscore.app








