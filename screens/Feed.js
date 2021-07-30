import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Feed = () => {
	return (
		<View style={styles.feed}>
			<View>
				<Image
					style={{ width: 200, height: 200, marginBottom: 15 }}
					source={require("../util/ProgressImg/6.png")}
				/>
			</View>
			<Text style={styles.text}>Feed is currently in development...</Text>
			{/* <Header /> */}
		</View>
	);
};

export default Feed;

const styles = StyleSheet.create({
	feed: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: "700",
	},
});
