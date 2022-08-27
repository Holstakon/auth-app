import { getAuth, signOut } from 'firebase/auth'
import { Box, Button, Text } from 'native-base'
import { useSelector } from 'react-redux'

const UserInfoScreen = () => {
  const user = useSelector((state) => state.auth.user)

  const handleSignOut = async () => {
    const auth = getAuth()
    await signOut(auth)
  }

  return (
    <Box height='100%' width='100%' safeArea>
      <Text>User id: {user?.uid}</Text>
      <Text>email: {user?.email}</Text>
      <Button onPress={handleSignOut}>SIGN OUT</Button>
    </Box>
  )
}

export default UserInfoScreen
