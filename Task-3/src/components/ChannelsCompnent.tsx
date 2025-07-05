import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import channelsStyles from "../styles/ChannelsCss";

const ChannelsCompnent: React.FC = () => {
	return (
		<View style={channelsStyles.container}>
			<Text style={channelsStyles.text}>Channels</Text>
			<TouchableOpacity
				style={channelsStyles.solidButton}
				activeOpacity={0.7}>
				<Text style={channelsStyles.solidButtonText}>Explore</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ChannelsCompnent;
