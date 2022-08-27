import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserInfoScreen from '../screens/UserInfoScreen'

const Stack = createNativeStackNavigator()

const UserRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='UserInfo' component={UserInfoScreen} />
    </Stack.Navigator>
  )
}

export default UserRoute
