import Purchases from 'react-native-purchases';

const configureRevenueCat = () => {
  Purchases.setDebugLogsEnabled(true);
  Purchases.configure({apiKey: 'your_revenuecat_api_key'});
};

const getPurchaserInfo = async () => {
  try {
    const purchaserInfo = await Purchases.getCustomerInfo();
    return purchaserInfo;
  } catch (e) {
    console.error('Failed to get purchaser info:', e);
  }
};

export {configureRevenueCat, getPurchaserInfo};
