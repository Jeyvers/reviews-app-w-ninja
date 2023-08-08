import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../app/home";
import ReviewDetails from "../app/reviewDetails";
import About from "../app/about";

const screens = {
  Home: Home,
  ReviewDetails: {
    screen: ReviewDetails,
  },
  About: {
    screen: About,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
