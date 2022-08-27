import { Button } from 'native-base'

const FormButton = ({ title, submitForm, loading, disabled }) => {
  return (
    <Button
      mt={2}
      colorScheme='indigo'
      onPress={submitForm}
      isLoading={loading}
      isDisabled={disabled}
    >
      {title}
    </Button>
  )
}

export default FormButton
