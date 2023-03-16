import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({ route, navigation }) => {
    const { itemId, otherParam, name } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
          <Text>Details Screen</Text>
          <Text>itemId: {itemId}</Text>
          <Text>otherParam: {otherParam}</Text>
          <Text>UserName: {name}</Text>
          
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()}
          />
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({})