#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import <Purchases/Purchases.h>

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [Purchases configureWithAPIKey:@"revenuecat_api_key"];
  return YES;
}

@interface AppDelegate : RCTAppDelegate

@end
