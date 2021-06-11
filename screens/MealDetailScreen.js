import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Svg, Circle } from 'react-native-svg';

export default function ProductScreen({ route}) {
  return (
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          colors={['#d8bfd8', '#ee82ee']}
          style={styles.background}>
        </LinearGradient>
        <Svg style={styles.circle}>
          <Circle cx="350" cy="500" r="180" fill="#ee82ee" style={{ opacity: 0.9 }} />
        </Svg>
        <Svg style={styles.circle}>
          <Circle cx="160" cy="230" r="220" fill="#d8bfd8" style={{ opacity: 0.8 }} />
        </Svg>
        <Svg style={styles.circle}>
          <Circle cx="20" cy="600" r="100" fill="#d8bfd8" style={{ opacity: 0.8 }} />
        </Svg>
        <View style={styles.infor}>
          <View style={styles.title}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', fontStyle: 'italic' }}>{route.params.title}</Text>
          </View>
          <View style={styles.image}>
            <Image style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 130 }} source={{ uri: route.params.imageUrl }}></Image>
          </View>
        </View>
        <View style={styles.information}>
          <Text style={{ fontStyle: 'italic', fontSize: 25 }}>Thông Tin</Text>
          {route.params.information.map((item, index) => {
            return (
              <Text style={{fontSize:16}} key={index}> - {item}</Text>
            )
          })}
        
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  circle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 30
  },
  infor: {
    width: '60%',
    height:445,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop:20,
    marginBottom: 10
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: 30
  },
  image: {
    width: 240 ,
    height: 200,
    marginTop: 90,
    marginRight: 25
  },
  information: {
    paddingHorizontal: 30
  },

});