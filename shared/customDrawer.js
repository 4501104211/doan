import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawer(props) {
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={['#dcdcdc', '#20b2aa']}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <Drawer.Section>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 50 }}>
                        <Text style={[styles.title, { fontStyle: 'italic', color: 'red' }]}>TFT</Text>
                        <Text style={styles.title}>FASHION</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="cart-sharp" size={10} color="red" />
                            <Ionicons name="cart-sharp" size={40} color="red" />
                            <Ionicons name="cart-sharp" size={40} color="red" />
                            <Ionicons name="cart-sharp" size={40} color="red" />
                        </View>
                    </View>
                </Drawer.Section>
                <DrawerContentScrollView {...props}>
                    <Drawer.Section>
                        <DrawerItemList {...props} />
                    </Drawer.Section>
                </DrawerContentScrollView>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    userInfor: {
        flexDirection: 'row',
        marginBottom: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});