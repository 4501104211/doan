import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../screens/FavoriteScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { HeaderFav, HeaderDetail } from '../shared/header';

const Stack = createStackNavigator();

export default function FavoriteStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          headerBackground: ()=><Image style={{width:'100%',height:'100%'}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJZzjye7T666Zbjar6ZDKUim7Ez4TYp66SE2Z4_FVaZkttQOPLJ88BSg2fjEIOZshS_4&usqp=CAU'}}></Image>,
          headerTitle: ()=><HeaderFav drawerNavigation={navigation}></HeaderFav>
        }}
      >
      </Stack.Screen>
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({ headerTitle: () => <HeaderDetail param={route.params}></HeaderDetail> })}
      >
      </Stack.Screen>
    </Stack.Navigator>
  )
}