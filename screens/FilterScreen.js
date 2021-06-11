import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';

export default function FilterScreen() {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const saveFilters = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian
    };
    console.log(appliedFilters);
  }
  return (
    <View style={styles.container}>
      <Text style={{ marginVertical: 25, fontWeight: 'bold', fontSize: 20 }}>Available Filters / Restrictions</Text>
      <View style={styles.wrapper}>
        <View style={styles.item}>
          <Text>Gluten-free</Text>
          <Switch
            trackColor={{ false: "gray", true: "rgba(255,0,0,0.4)" }}
            thumbColor={isGlutenFree ? "rgba(255,0,0,0.8)" : "#fff"}
            onValueChange={newValue => setIsGlutenFree(newValue)}
            value={isGlutenFree}
          >
          </Switch>
        </View>
        <View style={styles.item}>
          <Text>Lactose-free</Text>
          <Switch
            trackColor={{ false: "gray", true: "rgba(255,0,0,0.4)" }}
            thumbColor={isLactoseFree ? "rgba(255,0,0,0.8)" : "#fff"}
            onValueChange={newValue => setIsLactoseFree(newValue)}
            value={isLactoseFree}
          >
          </Switch>
        </View>
        <View style={styles.item}>
          <Text>Vegan</Text>
          <Switch
            trackColor={{ false: "gray", true: "rgba(255,0,0,0.4)" }}
            thumbColor={isVegan ? "rgba(255,0,0,0.8)" : "#fff"}
            onValueChange={newValue => setIsVegan(newValue)}
            value={isVegan}
          >
          </Switch>
        </View>
        <View style={styles.item}>
          <Text>Vegatarian</Text>
          <Switch
            trackColor={{ false: "gray", true: "rgba(255,0,0,0.4)" }}
            thumbColor={isVegetarian ? "rgba(255,0,0,0.8)" : "#fff"}
            onValueChange={newValue => setIsVegetarian(newValue)}
            value={isVegetarian}
          >
          </Switch>
        </View>
        <Button title="SAVE" onPress={saveFilters}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  wrapper: {
    width: '70%',
    height: 230,
    justifyContent: 'space-between'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});