import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert,
	SafeAreaView,
	StatusBar,
} from "react-native";

export default function App() {
	const [count, setCount] = React.useState(0);

	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const decrementCount = () => {
		const newCount = count - 1;
		if (newCount < 0) {
			Alert.alert(
				"Negative Value Alert",
				`The counter is now ${newCount}, which is a negative number.`
			);
		}

		setCount(newCount);
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle='dark-content' />
			<View style={styles.content}>
				<Text style={styles.title}>React Native Counter</Text>
				<Text style={styles.counterText}>{count}</Text>

				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={[styles.button, styles.decrementButton]}
						onPress={decrementCount}
						activeOpacity={0.7}>
						<Text style={styles.buttonText}>-</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[styles.button, styles.incrementButton]}
						onPress={incrementCount}
						activeOpacity={0.7}>
						<Text style={styles.buttonText}>+</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f4f7",
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 32,
		fontWeight: "600",
		color: "#333",
		marginBottom: 40,
	},
	counterText: {
		fontSize: 80,
		fontWeight: "bold",
		color: "#007AFF",
		marginBottom: 40,
	},
	buttonContainer: {
		flexDirection: "row",
	},
	button: {
		width: 80,
		height: 80,
		marginHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 40,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	incrementButton: {
		backgroundColor: "#34C759",
	},
	decrementButton: {
		backgroundColor: "#FF3B30",
	},
	buttonText: {
		fontSize: 40,
		color: "#fff",

		fontWeight: "bold",
	},
});
