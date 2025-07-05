import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Buttonscomponent form "../components/Buttonscomponent";




const Contercomponent: React.FC = () => {
	const [counter, setcounter] = React.useState(0);

	function handlePlus() {
		

	}

	return (
		<View style={styles.container}>
			<Text style={styles.textContainer}>{counter}</Text>
			<Buttonscomponent/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 200,
		width: 200,
		borderRadius: 100,
		borderColor: "black",
		borderWidth: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		fontSize: 40,
	},
});

export default Contercomponent;
