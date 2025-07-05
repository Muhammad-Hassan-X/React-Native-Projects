import { Colors } from "@/res/colors";
import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Headerstyles from "../styles/HeaderCss";

const HeaderComponent: React.FC = () => {
	return (
		<View style={Headerstyles.container}>
			<Text style={Headerstyles.text}>Updates</Text>
			<View style={Headerstyles.Iconscontainer}>
				<Icon
					name='search'
					size={24}
					color={Colors.fontColor}
				/>
				<Entypo
					name='dots-three-vertical'
					size={24}
					color={Colors.fontColor}
				/>
			</View>
		</View>
	);
};

export default HeaderComponent;
