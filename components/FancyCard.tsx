import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Image</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{
                uri:'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg'        }} 
        style={styles.cardImage}
        />
           <View style={styles.cardBody}>
            <Text>image</Text>
           </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
       padding:8,
       margin:9,
       fontWeight:'bold'

    },
    card:{

    },
    cardElevated:{

    },
    cardImage:{
        height:100,
        padding:8,
        margin:10
    },
    cardBody:{
          padding:8
    }
})