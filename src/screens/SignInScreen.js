import { Box, Center, VStack } from 'native-base'

import FormHeader from '../components/FormHeader'
import FormInputEmail from '../components/FormInputEmail'
import FormButton from '../components/FormButton'
import FormInputPassword from '../components/FormInputPassword'
import SwitchScreenLink from '../components/SwitchScreenLink'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorForm, setErrorForm] = useState({
    errorEmail: '',
    errorPassword: '',
  })

  const handleSignIn = async () => {
    try {
      if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        setErrorForm({
          ...errorForm,
          errorEmail: 'Invalid email!',
          errorPassword: '',
        })
        return
      }
      setLoading(true)
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error.message)
      if (error.message === 'Firebase: Error (auth/user-not-found).') {
        setErrorForm({
          ...errorForm,
          errorEmail: 'User not found!',
          errorPassword: '',
        })
      }
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        setErrorForm({
          ...errorForm,
          errorEmail: '',
          errorPassword: 'Wrong password!',
        })
      }
      setLoading(false)
    }
  }

  return (
    <Center width='100%' safeArea>
      <Box width='90%' maxWidth='250'>
        <FormHeader title='Sign in to continue!' />
        <VStack space='3' mt='5'>
          <FormInputEmail
            email={email}
            setEmailValue={(text) => setEmail(text)}
            errorEmail={errorForm.errorEmail}
          />
          <FormInputPassword
            password={password}
            setPasswordValue={(text) => setPassword(text)}
            errorPassword={errorForm.errorPassword}
          />
          <FormButton
            title='Sign in'
            submitForm={handleSignIn}
            loading={loading}
            disabled={!email || !password}
          />
          <SwitchScreenLink screenName='SignUp' />
        </VStack>
      </Box>
    </Center>
  )
}

export default SignInScreen
