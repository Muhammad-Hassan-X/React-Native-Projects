import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Homework1 from "./components/Homework1";

const index = () => {
	return (
		<ScrollView style={styles.contaner}>
			<Homework1 title='My name is Hassan' />
			<Homework1 title='I am 22 years old ' />
			<Homework1 title='Here is my accout : hassanhunter133@gmail.com' />
			<Homework1 title='I love react ' />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	contaner: {


		backgroundColor: "#722323",
	},
});

export default index;
