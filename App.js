import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AboutScreen from "./src/screens/AboutScreen";
import ActivitiesScreen from "./src/screens/ActivitiesScreen";
import DeleteAccountScreen from "./src/screens/DeleteAccountScreen";
import LogoutScreen from "./src/screens/LogoutScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ScoreScreen from "./src/screens/ScoreScreen";
import SessionScreen from "./src/screens/SessionScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const switchNavigator = createSwitchNavigator({

    loginFlow: createStackNavigator({

        SignIn: SignInScreen,
        SignUp: SignUpScreen
    }),
    mainFlow: createBottomTabNavigator({
        activityFlow: createStackNavigator({
            Activities: ActivitiesScreen,
            Session: SessionScreen,
            Score: ScoreScreen
        }),
        profileFlow: createStackNavigator({
            Profile: ProfileScreen,
            Delete: DeleteAccountScreen,
            Logout: LogoutScreen
        }),
        About: AboutScreen,
    })
});

switchNavigator.navigationOption = {
    headerShown: 'false'
};

export default createAppContainer(switchNavigator);
