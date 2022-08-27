import './firebase'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { NativeBaseProvider } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import GeneralRoute from './src/route/GeneralRoute'

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <GeneralRoute />
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  )
}
