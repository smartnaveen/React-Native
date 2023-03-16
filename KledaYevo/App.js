import React from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList, ScrollView, Dimensions } from 'react-native'
import COLORS from './src/appManager/Colors'
import InterestsData from './src/localStorage/Interests'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    // <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <StatusBar animated={true} translucent backgroundColor={'transparent'} barStyle='light-content'/>
        {/* <View style={{height:StatusBar.currentHeight}}/> */}
        <FlatList data={InterestsData} 
        ListHeaderComponent={()=>{
          return(
            <View style={{height:StatusBar.currentHeight}}/> 
          )
        }}
        renderItem={({item})=> 
          <Item title={item.title}/>
        }
        ListFooterComponent={()=>{
          return(
            <View style={{height:windowHeight*.5}}/> 
          )
        }}
        keyExtractor={item => item.id} numColumns={2}
        />
      </View>
    // </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  vwContainFlatList:{
    topmargin: 30,
  },
  vwScroll: {
    width: windowWidth,
    height: windowHeight,
  },
  item: {
    flex:1,
    padding: 22,
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#5E5E5E',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
})