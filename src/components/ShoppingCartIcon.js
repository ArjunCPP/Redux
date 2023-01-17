// import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native'
// function ShoppingCartIcon(props) {
//     const navigation = useNavigation()
//     return (
//       <TouchableOpacity
//         onPress={() => navigation.navigate('Cart')}
//         style={{ marginRight: 10 }}>
//         <Ionicons name="ios-cart" size={32} color='#101010' />
//       </TouchableOpacity>
//     )
//   }

//   export default ShoppingCartIcon

import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function ShoppingCartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={styles.button}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
    
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ShoppingCartIcon;
