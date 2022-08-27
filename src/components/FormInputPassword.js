import { FormControl, Input, Pressable, Icon, WarningOutlineIcon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'

const FormInputPassword = ({ password, setPasswordValue, errorPassword }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl isInvalid={errorPassword !== ''}>
      <FormControl.Label>Password</FormControl.Label>
      <Input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChangeText={setPasswordValue}
        InputRightElement={
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Icon
              as={
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                />
              }
              size={6}
              mr='2'
            />
          </Pressable>
        }
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
        {errorPassword}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

export default FormInputPassword
