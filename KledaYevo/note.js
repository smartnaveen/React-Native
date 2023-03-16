Project_Create -> npx react-native init Project_Name
Run_Metro -> npx react-native start
App_Connect_Android_Studio -> ADD_Device_IP_address
Enter_Ip_Address_In_Mobile -> (shake->setting->Debug server host & port for device-> ip:8081)
Package_Install -> npm i

//RUN_APP
npx react-native run-android
npx react-native run-ios

// Open android foler in android studio for android.
Android ->
 1. Physical .
  Open React Native project inside Android Studio -> Device Manager -> Physical -> Pair using Wi-Fi -> connect Device by Scan QR Code.
// Open .xcwrkspace in xcode for ios.
iOS:-> 
1. Physical.
Go inside your React Native Project folder inside -> iOS -> open .xcworkspace -> Setup signing …….
2.Simulator.
Firstly open simulator, hit command by terminal.

# Issues 
When delete install app then again install the issued comes.
adb uninstall PACKAGE_NAME ->(android->app->build.gradle - {applicationId "com.awesome"})
Example - adb uninstall “com.awesome”

For App Icon Changed -> android->app->src->main->res-> 5 images folder..(mipmap name se hoga..)
Build Clean -> ./gradlew clean

// How to Integrate Font?
// How to Integrate SVG Images?
// How to Integrate Vector-Icon?
// 
