import {extendTheme, NativeBaseProvider} from 'native-base';
import React from 'react';
import {COLORS} from './constant';
import Routes from './routes';

const App = () => {
  const theme = extendTheme({
    components: {
      // Checkbox: {
      //   baseStyle: () => {
      //     return {
      //       _checked: {
      //         borderColor: COLORS.primary,
      //         bg: COLORS.primary
      //       }
      //     }
      //   }
      // }
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  );
};

export default App;
