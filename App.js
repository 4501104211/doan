import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CategoryStack from './routes/categoryStack';
import FavoriteStack from './routes/favoriteStack';
import FilterStack from './routes/filterStack';
import CustomDrawer from './shared/customDrawer';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const MealsFavTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="MealsTab"
      activeColor='#fff'
      shifting={true}
      activeColor="#FB421A"
    >
      <Tab.Screen
        name="MealsStack"
        component={CategoryStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'rgba(255, 185, 71, 1)',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />
        }}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          tabBarLabel: 'Giỏ Hàng',
          tabBarColor:  'rgba(255, 185, 71, 1)',
          tabBarIcon: ({ color }) => <Ionicons name="cart-outline" size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="CategoryStack"
        drawerContent={props => <CustomDrawer {...props}></CustomDrawer>}
        drawerContentOptions={{
          activeTintColor: 'orange',
        }}
      >
        <Drawer.Screen
          name="MealsFavTab"
          component={MealsFavTab}
          options={{
            title: 'Categories',
            drawerIcon: ({ color }) => <MaterialIcons name="category" size={24} color={color} />
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="FilterStack"
          component={FilterStack}
          options={{
            title: 'Filter',
            drawerIcon: ({ color }) => <FontAwesome5 name="filter" size={24} color={color} />
          }}
        >
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
