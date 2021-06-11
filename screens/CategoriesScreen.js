import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../components/categories/listItem';

export default function FashionScreen({ navigation }) {
  return (
    <LinearGradient
      start={[0, 0]}
      end={[1, 1]}
      colors={['gray','gray']}
      style={styles.container}
    >
      
      <View>
        <ListItem navigation={navigation}></ListItem>
      </View>
    </LinearGradient>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10
  }
});