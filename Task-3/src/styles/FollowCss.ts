import { Colors } from "@/res/colors";
import { StyleSheet } from "react-native";

const FollowStyles = StyleSheet.create({
	folowText: {
		color: Colors.fontColor,
		marginBottom: 15,
	},
	ChatContainer: {
		flexDirection: "row",
		gap: 5,
		alignItems: "center",
		marginBottom: 20,
	},
	innerChatContainer: {},
	innerImage: {
		width: 40,
		height: 40,
		borderRadius: 50,
		marginRight: 10,
	},
	innerText: {
		color: Colors.notificationColor,
	},
	titleText: {
		color: Colors.fontColor,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	mesgContaier: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	textContentContainer: {
		flex: 1,
	},
	msgText: {
		color: Colors.fontColor,
	},
	solidButton: {
		backgroundColor: Colors.followButtonColor,
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
		fontWeight: "800",
		fontSize: 14,
	},
});

export default FollowStyles;
