import { Box, Center, VStack } from 'native-base'
import FormHeader from '../components/FormHeader'
import FormInputEmail from '../components/FormInputEmail'
import FormInputPassword from '../components/FormInputPassword'
import FormButton from '../components/FormButton'
import SwitchScreenLink from '../components/SwitchScreenLink'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const checkValid = () => {
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setErrorEmail('Please enter a valid email!')
      return false
    }
    if (!password.match(/^(?!.*\s)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
      setErrorPassword('Please enter a valid password!')
      return false
    }
    return true
  }

  const handleSignUp = async () => {
    if (checkValid()) {
      try {
        setLoading(true)
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          setErrorEmail('User already exist!')
        }
        setLoading(false)
      }
    }
  }

  return (
    <Center width='100%' safeArea>
      <Box width='90%' maxWidth='250'>
        <FormHeader title='Sign up to continue!' />
        <VStack space='3' mt='5'>
          <FormInputEmail
            email={email}
            setEmailValue={(text) => [setEmail(text), setErrorEmail('')]}
            errorEmail={errorEmail}
          />
          <FormInputPassword
            password={password}
            setPasswordValue={(text) => [setPassword(text), setErrorPassword('')]}
            errorPassword={errorPassword}
          />
          <FormButton
            title='Sign up'
            submitForm={handleSignUp}
            loading={loading}
            disabled={!email || !password}
          />
          <SwitchScreenLink screenName='SignIn' />
        </VStack>
      </Box>
    </Center>
  )
}

export default SignUpScreen
