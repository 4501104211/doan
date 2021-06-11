import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PRODUCT as ListFavourite } from '../data/dummy-data';

export default function FavoriteScreen({ navigation }) {
  return (
    <LinearGradient
      start={[0, 0]}
      end={[1, 1]}
      colors={['#fff', 'white']}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {ListFavourite.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => navigation.push('MealDetail', item)} style={styles.item}>
              <LinearGradient
                start={[0, 0]}
                end={[1, 1]}
                colors={['#fff', '#FABCFB', '#fff']}
                style={{ width: '100%', height: '100%', borderRadius: 20 }}
              >
                <View style={styles.image}>
                  <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={{ uri: item.imageUrl }}></Image>
                  <View style={styles.name}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17, fontStyle: 'italic', maxWidth: '100%' }}>{item.title}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: '90%' }}>
                  <View>
                    <Text style={styles.title}>Tình Trạng</Text>
                    <Text style={{ alignSelf: 'center' }}>{item.duration} Còn Hàng</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>Giá</Text>
                    <Text style={{ alignSelf: 'center' }}>{item.complexity.toUpperCase()}</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>Size</Text>
                    <Text style={{ alignSelf: 'center' }}>{item.affordability.toUpperCase()}</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  item: {
    height: 250,
    backgroundColor: '#eee',
    borderRadius: 20,
    elevation: 7,
    margin: 10
  },
  image: {
    padding: 10,
    height: '80%'
  },
  name: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});
