import { View, Text, Button } from "react-native";
import React from "react";

interface Props {
	handlePlus: () => void;
	handleMinus: () => void;
}

const Buttonscomponent: React.FC<Props> = () => {
	return (
		<View>
			<Button
				title='Plus'
				
			/>
			<Button
				title='Minus'
				
			/>
		</View>
	);
};

export default Buttonscomponent;
