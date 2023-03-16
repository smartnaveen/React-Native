import { StyleSheet, Text, View, Button } from 'react-native'
import { React, useEffect, useState } from 'react'

const HomeScreen = ({ navigation, route }) => {

  const [post, setpost] = useState('Nothing')

  useEffect(() => {
    if (route.params?.post) {
      console.log(route.params.post);
      setpost(route.params.post)
    }
  }, [route.params?.post]);


  return (
    <View style={{ flex: 1}}>
      <Text>{post}</Text>
      <Button style={{ padding: 5 }}
        title="Go to Details"
        onPress={
          () =>
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
              name: 'naveen kumar'
            })
        }
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />

      <Button
        title="API"
        onPress={() => navigation.navigate('HookEffect')}
      />

      <Button title='Love Calculator' onPress={() => { navigation.navigate('LoveCalculator') }} />
      <Button title='BMI' onPress={() => { navigation.navigate('BMI') }} />
      <Button title='Bmicalculator' onPress={() => { navigation.navigate('Bmicalculator') }} />
      <Button title='FloatingButton' onPress={() => { navigation.navigate('FloatingButton') }} />
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})