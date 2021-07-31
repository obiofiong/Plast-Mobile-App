import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/Home";
import FeedScreen from "./screens/Feed";
import MyImpactScreen from "./screens/MyImpact";
import DailyExperienceScreen from "./screens/DailyExperience";
import MySpaceScreen from "./screens/MySpace";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import tabBarIcons from "./util/TabBarIcons";
import RootStackScreen from "./screens/RootStackScreen";

export default function App() {
	const Tab = createBottomTabNavigator();
	// const MainStack = createStackNavigator();

	return (
		<NavigationContainer style={styles.container}>
			<RootStackScreen />

			{/* <Tab.Navigator
				initialRouteName="Home"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let Icon;
						let colorName = focused ? "#14C582" : color;

						// Icon = focused
						// 	? tabBarIcons.active[iconName]
						// 	: tabBarIcons.inactive[iconName];
						if (route.name === "Home") {
							Icon = focused ? "home-variant" : "home-outline";
						} else if (route.name === "Feed") {
							Icon = focused ? "view-headline" : "view-headline";
						} else if (route.name === "DailyExperience") {
							Icon = focused ? "calendar" : "calendar-outline";
						} else if (route.name === "MyImpact") {
							Icon = focused ? "equalizer" : "equalizer-outline";
						} else if (route.name === "MySpace") {
							Icon = focused ? "earth" : "earth";
						}

						// You can return any component that you like here!

						return (
							<MaterialCommunityIcons
								name={Icon}
								size={size}
								color={colorName}
							/>
						);
					},
				})}
				tabBarOptions={{
					activeTintColor: "#14C582",
					inactiveTintColor: "gray",
					showLabel: false,
				}}>
				<Tab.Screen name="Feed" component={FeedScreen} />
				<Tab.Screen name="DailyExperience" component={DailyExperienceScreen} />
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="MyImpact" component={MyImpactScreen} />
				<Tab.Screen name="MySpace" component={MySpaceScreen} />
			</Tab.Navigator> */}
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 20,
	},
});
