import React from 'react';
import { View, Text } from 'react-native';
import navigationStyle from '../../components/navigationStyle';

const ImportBIP39 = () => {
  const text = 'text';

  const render = () => {
    return (
      <View>
        <Text>{text}</Text>
      </View>
    );
  };

  return render();
};

ImportBIP39.navigationOptions = navigationStyle({
  title: 'Import BIP39',
});

export default ImportBIP39;
