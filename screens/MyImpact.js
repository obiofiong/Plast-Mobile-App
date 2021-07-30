import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const MyImpact = () => {
	return (
		<View style={styles.MyImpact}>
			<View>
				<Image
					style={{ width: 200, height: 200, marginBottom: 15 }}
					source={require("../util/ProgressImg/1.png")}
				/>
			</View>
			<Text style={styles.text}>
				My Impact page currently in development...
			</Text>
			{/* <Header /> */}
		</View>
	);
};

export default MyImpact;

const styles = StyleSheet.create({
	MyImpact: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: "700",
	},
});
