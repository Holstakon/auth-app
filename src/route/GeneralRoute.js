import { useAuth } from '../hooks/useAuth'
import UserRoute from './UserRoute'
import AuthRoute from './AuthRoute'
import SplashScreen from '../screens/SplashScreen'

const GeneralRoute = () => {
  const { isAuth, isLoading } = useAuth()
  if (isLoading) {
    return <SplashScreen />
  }
  return isAuth ? <UserRoute /> : <AuthRoute />
}

export default GeneralRoute
