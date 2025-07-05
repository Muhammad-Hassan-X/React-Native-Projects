import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import FollowStyles from "../styles/FollowCss";

const FollowComponent: React.FC = () => {
	return (
		<View>
			<Text style={FollowStyles.folowText}>Find channels to follow</Text>
			<View style={FollowStyles.ChatContainer}>
				<View style={FollowStyles.innerChatContainer}>
					<Image
						source={{
							uri: "https://picsum.photos/seed/1/200/200",
						}}
						style={FollowStyles.innerImage}
					/>
				</View>
				<View style={FollowStyles.textContentContainer}>
					<View style={FollowStyles.mesgContaier}>
						<View>
							<Text style={FollowStyles.titleText}>hi</Text>

							<Text style={FollowStyles.msgText}>55k followers</Text>
						</View>
						<TouchableOpacity
							style={FollowStyles.solidButton}
							activeOpacity={0.7}>
							<Text style={FollowStyles.solidButtonText}>Follow</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default FollowComponent;
