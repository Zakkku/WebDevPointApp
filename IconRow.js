// IconRow.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const buttonStyles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    color: '#3498db',
    fontSize: 30
  },
  text: {
    marginTop: 0,
    textAlign: 'center',
    color: '#3498db',
    fontSize: 12,
    fontWeight: 'bold'
  },
};

const MyButton = ({ iconName, label, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.container}>
      <Icon name={iconName} size={30} style={buttonStyles.icon} />
      <Text style={buttonStyles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const IconRow = () => {

  const navigation = useNavigation();

  const handleQRCodeScan = () => {
    navigation.navigate('Scanner2'); // Navigate to the screen with QR code scanning logic
  };

  return (
    <>
      <View style={{ flexDirection: 'row', marginTop: 130, width: '100%', justifyContent: 'space-evenly' }}>
        <MyButton iconName="credit-card-plus-outline" label="Charge" onPress={() => console.log('charge was pressed')} />

        <MyButton iconName="currency-jpy" label="Pay" onPress={() => console.log('pay was pressed')} />
        <MyButton iconName="logout" label="Log Out" onPress={() => navigation.navigate('Login')} />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 50, width: '100%', justifyContent: 'space-evenly' }}>
        <MyButton iconName="qrcode-scan" label="QR Code Scanner" onPress={() => navigation.navigate('Scanner')} />
        <MyButton iconName="qrcode-scan" label="QR Code Scanner2" onPress={handleQRCodeScan} />
      </View>
    </>

  );
};

export default IconRow;