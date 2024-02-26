// Header.js

import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor='#9134eb' barStyle='light-content' />
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#9134eb', padding: 10, width: '100%', height: '20%' }}>
        <View style={{ borderRadius: 50, overflow: 'hidden', marginRight: 10 }}>
          <Image
            source={(require('./images/webdevlogo.png'))}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </View>
        <Text style={{ color: '#fff', fontSize: 18 }}>Web Dev Points</Text>
      </View>
    </>
  );
};

export default Header;