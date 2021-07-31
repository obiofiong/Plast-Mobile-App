import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DailyFacts from "../components/DailyFacts";
import Header from "../components/Header";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";

const Home = ({ navigation }) => {
	return (
		<View style={styles.home}>
			<Header />
			<ScrollView>
				<ProfileDetails />
				<DailyFacts />
				<Text>More content coming soon...</Text>
			</ScrollView>
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
