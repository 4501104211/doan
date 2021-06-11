import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Svg, Polygon } from 'react-native-svg';
import { FASHION } from '../../data/dummy-data';

export default function ListItem({ navigation }) {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.wrapper}>
                {FASHION.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.item} onPress={()=>navigation.push('ListMealsByCate',item)}>
                            <LinearGradient
                                start={[0, 0]}
                                end={[1, 1]}
                                colors={['orange','black']}
                                style={styles.polygon}>
                                <View style={styles.infor}>

                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item.title}</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        width: '37%',
        height: 150,
        
        backgroundColor: 'white',
        margin: 20,
        elevation: 7,
        borderRadius: 10,
          justifyContent: 'center',
          textAlign: 'center',
    },
    polygon: {
        borderRadius: 50,
        height: 150,
        justifyContent: 'center',
        textAlign: 'center',
    },
    infor: {
        width: '100%',
        position: 'absolute',
        bottom: 50,
        marginLeft: 10
    }
});
