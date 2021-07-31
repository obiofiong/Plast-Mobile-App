import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileStats = () => {
	return (
		<View style={styles.profileStatsContainer}>
			<TouchableOpacity style={styles.profileStat}>
				<View style={styles.profileStatHead}>
					<Text style={styles.profileStatTitle}>Profile Complete</Text>
					<Text style={styles.profileStatPercent}>30%</Text>
				</View>
				<View style={styles.profileStatBar}>
					<View style={styles.profileStatBarFill}></View>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.profileStat}>
				<View style={styles.profileStatHead}>
					<Text style={styles.profileStatTitle}>Daily Experience</Text>
					<Text style={styles.profileStatPercent}>30%</Text>
				</View>
				<View style={styles.profileStatBar}>
					<View style={styles.profileStatBarFill}></View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ProfileStats;

const styles = StyleSheet.create({
	profileStatsContainer: {
		justifyContent: "center",
		alignItems: "center",
		width: "60%",
	},
	profileStat: {
		width: "90%",
		marginVertical: 10,
	},
	profileStatHead: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 5,
		paddingHorizontal: 3,
	},
	profileStatTitle: {
		fontWeight: "400",
		// marginRight: 8,
	},
	profileStatPercent: {},
	profileStatBar: {
		height: 15,
		backgroundColor: "#fff",
		borderColor: "#EBEBEB",
		borderWidth: 1,
		borderRadius: 15 / 2,
	},
	profileStatBarFill: {
		backgroundColor: "#389C76",
		width: "30%",
		height: "100%",
		borderColor: "#EBEBEB",
		borderWidth: 1,
		borderRadius: 15 / 2,
	},
});
