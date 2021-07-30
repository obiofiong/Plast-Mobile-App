import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const MySpace = () => {
	return (
		<View style={styles.MySpace}>
			<View>
				<Image
					style={{ width: 200, height: 200, marginBottom: 15 }}
					source={require("../util/ProgressImg/3.png")}
				/>
			</View>
			<Text style={styles.text}>My Space is currently in development</Text>
			{/* <Header /> */}
		</View>
	);
};

export default MySpace;

const styles = StyleSheet.create({
	MySpace: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: "700",
	},
});
