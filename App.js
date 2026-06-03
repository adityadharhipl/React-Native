// // import React from 'react';
// // import {Text} from 'react-native';

// // export default function App() {
// //   return <Text>Hello World</Text>;
// // }


// import React from 'react';

// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Button,
//   Pressable,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';


// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={{ width: 200, height: 300 }}
//         source={{ uri: "https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
//       <Text style={styles.text}>
//         Hello Aditya Welcome to React Native
//       </Text>
//       <TouchableOpacity
//         style={{ width: 100
//           , height: 200, backgroundColor: 'green' }}
//         onPress={() => Alert.alert('Press Meeeee')}
//       >
//         <Text>Hello Press</Text>
//       </TouchableOpacity>
//       {/* <Button title="submit"></Button> */}
//       {/* <Pressable style={{padding:10 , backgroundColor:"yellow"}}>

//         <Text>Submit</Text>
//       </Pressable> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 29,
//   },
// });

// export default App;





import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from './src/navigation/RootNavigator';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <RootNavigator />
    </Provider>
  );
}
