import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import {purchaseProduct} from '../services/revenueCat';

const PurchaseScreen: React.FC = () => {
  const handlePurchase = async () => {
    const purchaserInfo = await purchaseProduct('your_product_id');
    console.log(purchaserInfo);
  };

  return (
    <View style={styles.container}>
      <Header title="Purchase" />
      <Text style={styles.text}>Purchase a premium subscription:</Text>
      <Button title="Buy Now" onPress={handlePurchase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default PurchaseScreen;
