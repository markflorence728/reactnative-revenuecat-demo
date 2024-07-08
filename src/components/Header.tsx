import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;
