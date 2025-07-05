import { Colors } from "@/res/colors";
import { StyleSheet } from "react-native";

const Headerstyles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		position: "fixed",
	},
	Iconscontainer: {
		display: "flex",
		flexDirection: "row",
		gap: 15,
	},
	text: {
		color: Colors.fontColor,
		fontSize: 25,
	},
});
export default Headerstyles;
