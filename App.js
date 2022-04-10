import {NativeBaseProvider, Text, Center,useColorMode,Box,useColorModeValue,Button} from 'native-base'

import LoginForm from './src/login-form';
import SignUpForm from './src/sign-up-form';
import Validation from './src/validation';
import SearchBar from './src/search-bar';
import Footer from './src/footer';
import MyTheme from './src/theme';

export default function App() {
   
  return (
     <NativeBaseProvider >
      <MyTheme/>
     </NativeBaseProvider>
  );
}
 