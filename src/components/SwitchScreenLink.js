import { useNavigation } from '@react-navigation/native'
import { Text, Link, HStack } from 'native-base'

const SwitchScreenLink = ({ screenName }) => {
  const navigation = useNavigation()
  return (
    <HStack mt='6' justifyContent='center'>
      <Text fontSize='sm' color='coolGray.600'>
        {screenName === 'SignUp' ? 'I have already account. ' : 'I am a new user. '}
      </Text>
      <Link
        _text={{ fontSize: 'sm', color: 'blue.400' }}
        onPress={() => navigation.navigate(screenName)}
      >
        {screenName === 'SignUp' ? 'Sing up' : 'Sign in'}
      </Link>
    </HStack>
  )
}

export default SwitchScreenLink
