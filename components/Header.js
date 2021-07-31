import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcons from "react-native-vector-icons/Ionicons";

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<TouchableOpacity>
				<MaterialCommunityIcons name="menu" size={23} color="#389C76" />
			</TouchableOpacity>
			<Text style={styles.headerText}>DASHBOARD</Text>
			<View style={styles.rightHeader}>
				<TouchableOpacity style={styles.rightHeaderItem}>
					<IonIcons name="notifications" size={18} color="#389C76" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.rightHeaderItem}>
					<MaterialCommunityIcons name="message" size={18} color="#389C76" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		// borderBottomRightRadius: 6,
		// borderBottomLeftRadius: 6,
		flexDirection: "row",
		height: "12%",
		backgroundColor: "#bae5cd",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	headerText: {
		fontWeight: "600",
		fontSize: 16,
		color: "#000000",
	},
	rightHeader: {
		flexDirection: "row",
	},
	rightHeaderItem: {
		marginHorizontal: 4,
	},
});
