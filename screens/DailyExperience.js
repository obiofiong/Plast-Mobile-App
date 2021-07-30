import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const DailyExperience = () => {
	return (
		<View style={styles.DailyExperience}>
			<View>
				<Image
					style={{ width: 200, height: 200, marginBottom: 15 }}
					source={require("../util/ProgressImg/2.png")}
				/>
			</View>
			<Text style={styles.text}>
				DailyExperience is currently in development...
			</Text>
			{/* <Header /> */}
		</View>
	);
};

export default DailyExperience;

const styles = StyleSheet.create({
	DailyExperience: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: "700",
	},
});
