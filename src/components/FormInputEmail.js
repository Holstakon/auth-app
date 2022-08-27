import { FormControl, Input, WarningOutlineIcon } from 'native-base'

const FormInputEmail = ({ email, setEmailValue, errorEmail }) => {
  return (
    <FormControl isInvalid={errorEmail !== ''}>
      <FormControl.Label>Email</FormControl.Label>
      <Input value={email} onChangeText={setEmailValue} />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
        {errorEmail}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

export default FormInputEmail
