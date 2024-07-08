import Purchases from 'react-native-purchases';

/**
 * Configures RevenueCat with the provided API key.
 */
const configureRevenueCat = () => {
  Purchases.setDebugLogsEnabled(true);
  Purchases.configure({apiKey: 'your_revenuecat_api_key'});
};

/**
 * Fetches the cusomter info.
 *
 * @returns The customer info if available.
 */
const getCustomerInfo = async () => {
  try {
    const customerInfo = await Purchases.getCustomerInfo();
    return customerInfo;
  } catch (e) {
    console.error('Failed to get customer info:', e);
  }
};

/**
 * Makes a purchase.
 *
 * @param productId The product identifier.
 */
const purchaseProduct = async (productId: string) => {
  try {
    const {customerInfo} = await Purchases.purchaseProduct(productId);
    return customerInfo;
  } catch (e) {
    console.error('Failed to make purchase:', e);
  }
};

export {configureRevenueCat, getCustomerInfo, purchaseProduct};
