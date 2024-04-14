import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.Container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>More</Text>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    headingText:{
    
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:10
    },
    card:{
      width:100,
      height:100,
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:4,
      margin:8,
      color:'#000000'
    },
    cardElevated:{
        backgroundColor:'#9992',
        elevation: 4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#EF5353"

    },
    Container:{
        padding:8
    }

    });