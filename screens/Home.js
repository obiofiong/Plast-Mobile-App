import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DailyFacts from "../components/DailyFacts";
import Header from "../components/Header";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";

const Home = () => {
	return (
		<View style={styles.home}>
			<Header />
			<ProfileDetails />
			<DailyFacts />
			<Text>This is the Home screen</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	home: {
		flex: 1,
		backgroundColor: "#FBF8FB",
	},
});
