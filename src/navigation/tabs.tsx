import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllCats from "@src/features/all-cats";
import CatsILike from "@src/features/cats-i-like";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllCats"
        component={AllCats}
        options={{
          tabBarLabel: "All cats",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CatsILikeCatsILike"
        component={CatsILike}
        options={{
          tabBarLabel: "Cats I like",
          headerShown: false,
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
