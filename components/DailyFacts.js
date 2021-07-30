import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DailyFacts = () => {
	return (
		<View style={styles.dailyFactsContainer}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Facts Of the Day</Text>
				<View style={styles.headerUnderline}></View>
			</View>
			<View style={styles.dailyFact}>
				<Text style={styles.factHeader}>Did You Know?</Text>
				<Text style={styles.factText}>
					As of 2015, humans have generated 6.3 billion metric tons of plastic
					waste, and only 9% of that waste has actually been recycled.{" "}
				</Text>
			</View>
		</View>
	);
};

export default DailyFacts;

const styles = StyleSheet.create({
	dailyFactsContainer: {
		padding: 15,
		alignItems: "center",
	},
	dailyFact: {
		height: 200,
		width: 300,
		marginVertical: 10,
		backgroundColor: "#14C582",
		borderRadius: 25,
		padding: 20,
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "flex-end",
		marginVertical: 20,
		marginHorizontal: 10,
		width: "100%",
	},
	headerText: {
		fontSize: 18,
	},
	headerUnderline: {
		flex: 1,
		marginHorizontal: 8,
		width: "90%",
		height: 1,
		backgroundColor: "green",
	},
	factHeader: {
		fontWeight: "600",
		fontSize: 18,
		color: "#fff",
		textAlign: "center",
		height: "20%",
	},
	factText: {
		color: "#fff",
		textAlign: "center",
		height: "80%",
		fontSize: 18,
	},
});
