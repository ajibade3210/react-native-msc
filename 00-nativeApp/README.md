---

Native React StyleSheet.Create({})
This creates an id for every instance when rendered, so on pre-render it jus draws it from the saved styles instead of creating another

- You can separate your components as common or shared ( includes a "common" or "shared" directory to house reusable components.)
- To create a click able area we can use pressAble (hitSlop) or touchOpacity (when clicks it changes opacity 0-1)
- The index.d.ts file in a TypeScript project typically serves as the declaration file for the project.
- PropsWithChildren
- ImagePropsTypes
- FlatList vs Scrollview
- <FlatList/> numColumns={2} // after changing this reload
-
- useColorScheme
- StatusBar
- "react-native-haptic-feedback": "^2.2.0",
-     "react-native-snackbar": "^2.6.2"
- react-native-track-player
- Using Rect.memo in React Native (the whole page and components are rendered whenever there is any change on the screen, to prevent this we can pass a component via React.memo(theComponent) this will only render when changes happen in the component)
- cd ios
- Pod install
- <Text onnPress>
- In React Native, you can't use the same syntax for defining margins as you would in web development using CSS. React Native uses a different styling system that resembles JavaScript objects for styling components.
- To achieve the equivalent of margin: 0 15; in React Native, you would use the marginHorizontal property:
- ActivityIndicator
- Difference btw navigation.navigate and navigation.push

1. Clean and Rebuild:
   Sometimes, issues might arise due to cached configurations. Try cleaning and rebuilding your project:
   For iOS:
   bash

Copy code
cd ios rm -rf Pods/ Podfile.lock build/ DerivedData/ pod install cd .. react-native run-ios
For Android:
bash

Copy code
cd android ./gradlew clean cd .. react-native run-android
7

# React Native Introduction

### Create App

`npx react-native init bgChanger`

### Start App

`npx react-native run-android`

### Notes

On the web style is done from left to right, on mobile it is done from top to bottom.

### Terminologies:

- View: (selectable, )
- Text:
- TextInput:
- SafeAreaView:
- ScrollView: (attributes `keyboardShouldPersistTaps`)
- StyleSheet:
- useColorScheme:
- Apperance Module:
- Linking:
- FlatList:
   - horizontal
   - pagingEnabled
   -
- DeepLinking:
- TouchableOpacity:
- TouchableOpacity:
- Linking:
- Image:
- Pressable
- https://reactnavigation.org/docs/navigation-lifecycle/

### Dependencies

- Yup
- [formik](https://formik.org/docs/overview)
- [react-native-bouncy-checkbox](https://react-native-bouncy-checkbox.com)
- - @react-native-community/slider
- "react-native-snackbar": "^2.6.2",
- "react-native-vector-icons": "^10.0.3"
- @react-navigation/native
- react-native-screens
- react-native-safe-area-context

### Important Commands:

/Users/ajibade/Library/Android/sdk/emulator/emulator @Pixel_4_API_UpsideDownCake

### Writing Ideas:

- Setting Up React Native on Your Device
- React Native Crash Course for React Developers.
- writing test in react native.
- Errors are your friend go ahead and read them.
- - React Native Navigation
- Understanding Nodejs Modules
- Testing
- Drag and Drop
- Date Picker
- Multiple step form and progress bar
- Context In React Native
- Using Axios
- Camera and Photo Image Picker
- Firebase Setup

- <!-- style={styles.container} -->

### Tools..

- [UIColorPicker](https://www.uicolorpicker.learncodeonline.in/)
- [Dribble](https://www.dribble.com)

Setting Up navigatio.
Install:

- @react-navigation/native
- react-native-screens
- react-native-safe-area-context

Next we need to install the type of navigation, it can be stack, tab, drawer etc.

- @react-navigation/stack
- @react-navigation/native-stack

Steps.

- Import Nav Dependencies
- Using NavigationContainer from react-navigation/native.
- And CreateNativeStackNavigator from @react-navigation/native-stack
- Next import your Screens.
-
