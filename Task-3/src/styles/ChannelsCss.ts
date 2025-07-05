import { Colors } from "@/res/colors";
import { StyleSheet } from "react-native";

const channelsStyles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		alignItems: "center",
		marginBottom: 25,
	},
	text: {
		color: Colors.fontColor,
		fontSize: 20,
	},
	solidButton: {
		backgroundColor: Colors.buttonBackgroundColor,
		paddingVertical: 10,
		paddingHorizontal: 25,
		borderRadius: 30,
		elevation: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		alignItems: "center",
		justifyContent: "center",
	},
	solidButtonText: {
		color: Colors.fontColor,
		fontSize: 14,
	},
});

export default channelsStyles;
