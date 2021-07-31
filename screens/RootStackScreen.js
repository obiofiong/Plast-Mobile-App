import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./SplashScreen";
import Auth from "./Auth/Auth";

const RootStackScreen = () => {
	const RootStack = createStackNavigatorNavigator();
	return (
		<RootStack.Navigator headerMode="none" initialRouteName="Auth">
			<RootStack.Screen name="SplashScreen" component={SplashScreen} />
			<RootStack.Screen name="Auth" component={Auth} />
		</RootStack.Navigator>
	);
};

export default RootStackScreen;

const styles = StyleSheet.create({});
