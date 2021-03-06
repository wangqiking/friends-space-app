import React, { Component } from 'react'

import { 
    Text, 
    View,
    Image,
    Button,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';

const baseURL = 'http://192.168.199.165:3000/resource/image/';

export default class FriendItem extends Component {
  render() {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={()=>{
                console.log('xxx');
                if(this.props.tapItem){
                    this.props.tapItem(this.props);
                }
                
            }}
        >
            <Image 
                style={styles.image}
                source={{uri:baseURL+this.props.image}}
            />
            <View>
                <Text
                    style={styles.name}
                >{this.props.nickname}</Text>
                <Text
                    style={styles.sign}
                >{this.props.sign}</Text>
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    image:{
        width:40,
        height:40,
        margin:10,
    },
    name:{
        fontSize:20,
    },
    sign:{
        fontSize:18,
        color:'gray'
    }
  })