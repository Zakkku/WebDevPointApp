// DigitalCard.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon as PaperIcon, Button } from 'react-native-paper';

const DigitalCard = () => {
  return (
    <View style={{
      position: 'absolute',
      top: '10%',
      width: '87%',
      height: '28%',
      backgroundColor: '#fff',
      borderRadius: 15,
      padding: 15,
      borderWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4, // specifically for Android to ensure the shadow is visible
    }}>
      {/* digital card content will go here */}
      <View style={{
        flexDirection: 'row', alignItems: 'center', marginLeft: 5
      }}>
        <PaperIcon source="star" color='gold' size={20} />
        <Text style={{ fontSize: 15 }}>Web Dev Japan</Text>
      </View>

      <View style={{
        flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10
      }}>
        <PaperIcon source="star" color='grey' size={15} />
        <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 8 }}>Balance</Text>
        <Text style={{ fontSize: 21, color: 'black', fontWeight: 'medium' }}>$</Text>
        <Text style={{ color: 'black', fontSize: 21 }}>100</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 292 }}>
        <Image
          source={require('./images/Untitled.png')}
          style={{ width: 80, height: 110, resizeMode: 'contain' }}
        />
        <Button icon="refresh" mode="text" textColor='#3498db' onPress={() => console.log('Refresh was Pressed')}>
          Refresh
        </Button>
      </View>
    </View>
  );
};

export default DigitalCard;