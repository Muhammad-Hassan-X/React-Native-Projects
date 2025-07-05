import { Colors } from "@/res/colors";
import { StyleSheet } from "react-native";

const ChatStyles = StyleSheet.create({
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
	timeContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
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
	notificastionContainer: {
		width: 25,
		height: 25,
		borderRadius: 50,
		backgroundColor: Colors.notificationColor,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	notificationText: {
		color: Colors.backgroundColor,
		fontSize: 10,
		fontWeight: "900",
	},
});

export default ChatStyles;
