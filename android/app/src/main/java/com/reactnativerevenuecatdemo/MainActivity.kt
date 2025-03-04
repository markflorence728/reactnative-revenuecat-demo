package com.reactnativerevenuecatdemo

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.revenuecat.purchases.Purchases

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "reactnativerevenuecatdemo"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  /**
   * Called when the activity is first created. This is where you should initialize RevenueCat.
   * 
   * @param savedInstanceState If the activity is being re-initialized after previously being
   *                           shut down then this Bundle contains the data it most recently
   *                           supplied in onSaveInstanceState(Bundle). Note: Otherwise it is null.
   */
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    // Initialize RevenueCat with your API key
    Purchases.configure(this, "revenuecat_api_key")
  }
}
