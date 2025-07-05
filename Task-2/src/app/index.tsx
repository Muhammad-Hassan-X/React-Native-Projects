import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaView, StyleSheet } from "react-native";

const index: React.FC = () => {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<HomeScreen />
			</SafeAreaView>
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
    padding:40,
	},
	text: {
		fontSize: 25,
		fontWeight: "500",
	},
});

export default index;
