import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Heading } from 'native-base'

const FormHeader = ({ title }) => {
  return (
    <>
      <Heading mt='2/3' size='lg' fontWeight='600' color='coolGray.800'>
        Welcome
      </Heading>
      <Heading mt='1' size='xs' fontWeight='medium' color='coolGray.600'>
        {title}
      </Heading>
    </>
  )
}

export default FormHeader
