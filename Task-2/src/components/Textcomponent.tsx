import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const Textcomponent: React.FC = () => {
	const [counter, setcounter] = React.useState(0);
	const handlePlus = () => {
		setcounter(counter);
	};
	const handleMinus = () => {
		setcounter(counter - 1);
	};

	return (
		<View>
			<Text style={styles.text}>This is my react native counter</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		padding: 10,
		textAlign: "center",
	},
});

export default Textcomponent;
