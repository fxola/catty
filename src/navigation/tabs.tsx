import { Platform } from "react-native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useTheme } from "@shopify/restyle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Theme } from "@src/constants/theme";
import Text from "@src/components/base/text";
import CatSvg from "../../assets/svg/CatSvg";

import AllCats from "@src/features/cats/all-cats";
import CatsILike from "@src/features/cats/cats-i-like";

const Tab = createBottomTabNavigator();

function Tabs() {
  const { tabTintColor } = useTheme<Theme>();

  const commonTabOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: tabTintColor.active,
    tabBarInactiveTintColor: tabTintColor.inactive,
    headerShown: false,
    tabBarItemStyle: {
      paddingVertical: Platform.select({ android: 20 }),
    },
    tabBarStyle: { height: 90 },
    tabBarLabelPosition: "below-icon",
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllCats"
        component={AllCats}
        options={{
          ...commonTabOptions,
          tabBarLabel: ({ focused }) => {
            const textColor = focused ? "primaryText" : "primaryGrey";
            return (
              <Text color={textColor} variant="caption">
                All cats
              </Text>
            );
          },

          tabBarIcon: ({ color }) => (
            <CatSvg height={25} width={25} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CatsILike"
        component={CatsILike}
        options={{
          ...commonTabOptions,
          tabBarLabel: ({ focused }) => {
            const textColor = focused ? "primaryText" : "primaryGrey";
            return (
              <Text color={textColor} variant="caption">
                Cats I like
              </Text>
            );
          },
          tabBarIcon: ({ color, focused }) => {
            const name = focused ? "heart" : "heart-outline";
            return (
              <MaterialCommunityIcons name={name} color={color} size={27} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
