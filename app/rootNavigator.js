import { StackNavigator } from 'react-navigation';
import HomeScreen from './containers/Home';

const AppNavigator = StackNavigator(
  {
    homeScreen : { screen : HomeScreen },
  },
  {
    initialRouteName: 'homeScreen',
    navigationOptions: {
      header: null,
      cardStack: { gesturesEnabled: false },
    },

    headerMode: 'screen',
    lazyLoad: true,
  }
);

export default AppNavigator;
