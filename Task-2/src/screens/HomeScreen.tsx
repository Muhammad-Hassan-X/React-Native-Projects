import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Textcomponent from "../components/Textcomponent";
import Contercomponent from "../components/Contercomponent";

const HomeScreen: React.FC = () => {
	return (
		<View style={styles.container}>
			<Textcomponent />
			<Contercomponent />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});
export default HomeScreen;
