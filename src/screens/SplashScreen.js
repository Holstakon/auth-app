import { Center, Heading, HStack, Spinner } from 'native-base'

const SplashScreen = () => {
  return (
    <Center width='100%' height='100%' safeArea>
      <HStack space={2} justifyContent='center'>
        <Spinner color='primary.500' />
        <Heading color='primary.500' fontSize='md'>
          Loading...
        </Heading>
      </HStack>
    </Center>
  )
}

export default SplashScreen
