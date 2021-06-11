import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export function HeaderCate({ drawerNavigation }) {
    const onClickOpenDrawer = () => {
        drawerNavigation.openDrawer();
    }
    return (
       
        <View style={styles.header}>
            
            <View style={styles.title}>
                <Text style={[styles.textTitle, { color: '#BEBEBE'}]}>MY SHOP🛍️</Text> 
            </View>
           
        </View>
     
    )
}

export function HeaderFav({ drawerNavigation }) {
    const onClickOpenDrawer = () => {
        drawerNavigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            
            <View style={styles.title}>
            
                <Text style={[styles.textTitle, { color: '#BEBEBE' }]}>Sản Phẩm👘</Text>
            </View>
        </View>
    )
}

export function HeaderListMeals({ param }) {
    return (
        <View style={styles.header}>
             <View style={styles.title}>
            
            <Text style={[styles.textTitle, { color: 'red' }]}>Kết Quả📱</Text>
        </View>
        </View>
    )
}

export function HeaderDetail({ param }) {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 50, height: 40, borderRadius: 80 }}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 80 }} source={{ uri: param.imageUrl }}></Image>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold', maxWidth: 200 }}>{param.title}</Text>
                    <Text style={{ fontSize: 12, color: 'gray' }}>Đẹp,Rẻ,Bền</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => console.log('Mark as favorite!')}>
                <AntDesign name="star" size={30} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export function HeaderFilter({ drawerNavigation, navigation }) {
    const onClickOpenDrawer = () => {
        drawerNavigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            
            <View style={[styles.title,{justifyContent:'space-between',alignItems:'center'}]}>
                <Text style={[styles.textTitle, { color: 'white' }]}>Filter</Text>
                <AntDesign style={{marginLeft:10}} name="filter" size={24} color="white" />
            </View>
          {/* { <TouchableOpacity>
                <Entypo name="save" size={24} color="black" />
            </TouchableOpacity> } */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        flexDirection: 'row',
        marginRight: 20
        
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
