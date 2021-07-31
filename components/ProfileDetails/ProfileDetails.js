import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProfileStats from "./ProfileStats";

const ProfileDetails = () => {
	return (
		<View style={styles.profileDetailsContainer}>
			<View style={styles.profileAvatarContainer}>
				<TouchableOpacity activeOpacity={0.7} style={styles.profileImageCircle}>
					<Image
						style={styles.profileImage}
						source={require("../../util/profile.jpg")}
					/>
					{/* <View style={}></View> */}
				</TouchableOpacity>
				<View style={styles.profileTextContainer}>
					<Text>Hello</Text>
					<Text style={styles.profileTextName}>John</Text>
				</View>
			</View>
			<ProfileStats />
		</View>
	);
};

export default ProfileDetails;

const styles = StyleSheet.create({
	profileDetailsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 25,
		fontSize: 25,
	},
	profileAvatarContainer: {
		// justifyContent: "center",
		alignItems: "center",
	},
	profileImageCircle: {
		width: 90,
		height: 90,
		borderRadius: 90 / 2,
		borderColor: "#389C76",
		borderWidth: 1,
		padding: 9,
		backgroundColor: "#fff",
	},
	profileImage: {
		width: 70,
		height: 70,
		borderRadius: 70 / 2,
		// backgroundColor: "#DFC9C9",
		// borderWidth: 5,
	},
	profileTextContainer: {
		flexDirection: "row",
		marginVertical: 10,
	},
	profileTextName: {
		fontWeight: "800",
		marginHorizontal: 5,
	},
});
