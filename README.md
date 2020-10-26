# DietDoctorPOC
Install Instructions:
 Run instructions for iOS:
    • cd "yourPathToFolder/dietDoctorTest" && npx react-native run-ios
    - or -
    • Open dietDoctorTest/ios/dietDoctorTest.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "yourPathToFolder/dietDoctorTest" && npx react-native run-android

  Run instructions for Windows and macOS:
    • See https://aka.ms/ReactNative for the latest up-to-date instructions.

On the Splash and Landing Screens I am showing the work I can do with images, no images where provided for this project, however give your self a chance and compare these screens with the app in the store, what differences do you find?
I also added some opacity to Login button that skip button doesn't have. Tap on Login and hold, you will see the 
transparency that skip doesn't provide.

I locked the orientation so this app replicates the app in the store. **

The projeect is working on iOS and Android as well. You can make them work from the repository, but for Android, 
I am attaching the APK file.

Login Section.
It has a custom navigation bar.
I didn't use redux here, since the execise can be done without it by using just hooks, but in a real app, it might be need and would be located inside the logic folder (Actions, reducers, type-constants).
I followed the same kind of validation and error messaging used in the real app.

Android and iOS have different navigation behaviors.
