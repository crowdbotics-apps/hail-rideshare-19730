import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile93083Navigator from '../features/UserProfile93083/navigator';
import Maps93064Navigator from '../features/Maps93064/navigator';
import Settings93042Navigator from '../features/Settings93042/navigator';
import Settings93027Navigator from '../features/Settings93027/navigator';
import NotificationList93026Navigator from '../features/NotificationList93026/navigator';
import Maps93025Navigator from '../features/Maps93025/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile93083: { screen: UserProfile93083Navigator },
Maps93064: { screen: Maps93064Navigator },
Settings93042: { screen: Settings93042Navigator },
Settings93027: { screen: Settings93027Navigator },
NotificationList93026: { screen: NotificationList93026Navigator },
Maps93025: { screen: Maps93025Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
