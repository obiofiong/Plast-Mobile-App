import React from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const DailyFacts = () => {
	return (
		<View style={styles.dailyFactsContainer}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Facts Of the Day</Text>
				<View style={styles.headerUnderline}></View>
			</View>
			<ScrollView
				style={styles.dailyFactScroll}
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToInterval
				decelerationRate="fast">
				<TouchableOpacity activeOpacity={0.6} style={styles.dailyFact}>
					<Text style={styles.factHeader}>Did You Know?</Text>
					<Text style={styles.factText}>
						As of 2015, humans have generated 6.3 billion metric tons of plastic
						waste, and only 9% of that waste has actually been recycled.{" "}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.6} style={styles.dailyFact}>
					<Text style={styles.factHeader}>Did You Know?</Text>
					<Text style={styles.factText}>
						As of 2015, humans have generated 6.3 billion metric tons of plastic
						waste, and only 9% of that waste has actually been recycled.{" "}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.6} style={styles.dailyFact}>
					<Text style={styles.factHeader}>Did You Know?</Text>
					<Text style={styles.factText}>
						As of 2015, humans have generated 6.3 billion metric tons of plastic
						waste, and only 9% of that waste has actually been recycled.{" "}
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default DailyFacts;

const styles = StyleSheet.create({
	dailyFactsContainer: {
		paddingHorizontal: 15,
		alignItems: "center",
	},
	dailyFactScroll: {
		width: "100%",
		padding: 10,
	},
	dailyFact: {
		height: 200,
		width: 300,
		marginVertical: 10,
		marginHorizontal: 5,
		backgroundColor: "#14C582",
		borderRadius: 25,
		padding: 20,
		shadowColor: "gray",
		shadowOffset: {
			width: 400,
			height: 8,
		},
		shadowRadius: 10,
		elevation: 3,
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "flex-end",
		marginVertical: 20,
		// marginHorizontal: 20,
		width: "90%",
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
		justifyContent: "center",
		color: "#fff",
		textAlign: "center",
		height: "80%",
		fontSize: 18,
	},
});
