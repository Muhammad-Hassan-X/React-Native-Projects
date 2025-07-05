import ChatStyles from "@/src/styles/ChatCss";
import React from "react";
import { Image, Text, View } from "react-native";

interface ChatData {
	id: string;
	name: string;
	message: string;
	time: string;
	notificationCount: number;
	imageUrl: string;
}
const ChatComponent: React.FC<ChatData> = ({
	imageUrl,
	name,
	time,
	notificationCount,
	message,
}) => {
	return (
		<View style={ChatStyles.ChatContainer}>
			<View style={ChatStyles.innerChatContainer}>
				<Image
					source={{
						uri: imageUrl,
					}}
					style={ChatStyles.innerImage}
				/>
			</View>
			<View style={ChatStyles.textContentContainer}>
				<View style={ChatStyles.timeContainer}>
					<Text style={ChatStyles.titleText}>{name}</Text>
					<Text style={ChatStyles.innerText}>{time}</Text>
				</View>
				<View style={ChatStyles.mesgContaier}>
					<Text style={ChatStyles.msgText}>{message}</Text>
					<View style={ChatStyles.notificastionContainer}>
						<Text style={ChatStyles.notificationText}>
							
							{notificationCount}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ChatComponent;
