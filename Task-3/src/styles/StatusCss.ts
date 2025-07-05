import { Colors } from "@/res/colors";
import { StyleSheet } from "react-native";

const StatusStyles = StyleSheet.create({
	statusContainer: {
		height: 150,
		width: 90,
		borderRadius: 15,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		overflow: "hidden",
		position: "relative",
		marginRight: 10,
	},

	statusInnerContainer: {
		height: 40,
		width: 40,
		borderRadius: 50,
		marginLeft: 3,
		marginTop: 5,
		// overflow: "hidden",

		position: "relative",
	},

	profileImage: {
		height: "100%",
		width: "100%",
		borderRadius: 50,
	},

	statusIcon: {
		position: "absolute",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		bottom: -2,
		right: -3,
		height: 20,
		width: 20,
		backgroundColor: Colors.notificationColor,
		borderRadius: 30,
		padding: 5,
		elevation: 3,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},

	text: {
		color: Colors.fontColor,
	},
	statusText: {
		color: Colors.fontColor,
		fontSize: 24,
		marginBottom: 20,
	},

	innerText: {
		padding: 8,
		fontSize: 12,
	},
	profileContainer: {
		borderColor: Colors.notificationColor,
		borderWidth: 2,
		padding: 3,
		borderRadius: 50,
	},
	flatListContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 10,
	},
	outercontainer: {
		marginTop: 40,
	},
});

export default StatusStyles;
