import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PRODUCT } from '../data/dummy-data';

export default function ListMealsByCate({ route, navigation }) {
    const listMealsByCate = PRODUCT.filter(item => item.fashionIds.includes(route.params.id));
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={['#fff', 'white']}
            style={styles.container}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                {listMealsByCate.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.push('MealDetail', item)} key={index} style={styles.item}>
                            <LinearGradient
                                start={[0, 0]}
                                end={[1, 1]}
                                colors={['#fff', route.params.color, '#fff']}
                                style={{ width: '100%', height: '100%', borderRadius: 20 }}
                            >
                                <View style={styles.image}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 20}} source={{ uri: item.imageUrl }}></Image>
                                    <View style={styles.name}>
                                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:17,fontStyle:'italic',maxWidth:'100%'}}>{item.title}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width:'90%' }}>
                                    <View>
                                        <Text style={styles.title}>Tình Trạng</Text>
                                        <Text style={{alignSelf:'center'}}>{item.duration}còn hàng </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.title}>Giá</Text>
                                        <Text style={{alignSelf:'center'}}>{item.complexity.toUpperCase()}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.title}>Size</Text>
                                        <Text style={{alignSelf:'center'}}>{item.affordability.toUpperCase()}</Text>
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
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    item: {
        height: 200,
        backgroundColor: 'white',
        borderRadius: 40,
        elevation: 20,
        margin: 50
    },
    image: {
        padding: 20,
        height: '100%',
    },
    name: {
        width:'100%',
        height: 20,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});