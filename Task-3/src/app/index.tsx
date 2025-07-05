import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Colors } from "@/res/colors";
import HeaderComponent from "../components/HeaderComponent";
import StatusComponent from "../components/StatusComponent";
import ChannelsCompnent from "../components/ChannelsCompnent";
import ChatComponent from "../components/ChatComponent";
import { chatData } from "@/assets/data/chatdata";
import FollowComponent from "../components/FollowComponent";
const index: React.FC = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<HeaderComponent />
				<StatusComponent />
				<ChannelsCompnent />
				{/* {chatData.map((element: any) => (
					<ChatComponent
						{...element}
						key={element.id}
					/>
				))} */}
				<FollowComponent />
			</View>
		</ScrollView>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		padding: 30,
		flex: 1,
		backgroundColor: Colors.backgroundColor,
		
	},
	text: {
		color: Colors.fontColor,
	},
});
