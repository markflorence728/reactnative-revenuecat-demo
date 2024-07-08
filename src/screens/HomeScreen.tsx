import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import {getPurchaserInfo, purchaseProduct} from '../services/revenueCat';

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [purchaserInfo, setPurchaserInfo] = useState<any>(null);

  useEffect(() => {
    const fetchPurchaserInfo = async () => {
      const info = await getPurchaserInfo();
      setPurchaserInfo(info);
      setLoading(false);
    };

    fetchPurchaserInfo();
  }, []);

  const handlePurchase = async () => {
    const info = await purchaseProduct('your_product_id');
    setPurchaserInfo(info);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <Text style={styles.text}>
        {purchaserInfo
          ? 'You are a premium user!'
          : 'You are not a premium user.'}
      </Text>
      <Button title="Purchase" onPress={handlePurchase} />
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

export default HomeScreen;
