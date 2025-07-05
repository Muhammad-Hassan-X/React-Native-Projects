import { Text, View, Image, ImageBackground, FlatList } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import StatusStyles from "../styles/StatusCss";
import { Colors } from "@/res/colors";
import { StatusData, statusData } from "@/assets/data/data";

const StatusComponent: React.FC = () => {
	const renderStatus = ({ item }: { item: StatusData }) => (
		<ImageBackground
			source={{ uri: item.backgroundImage }}
			resizeMode='cover'
			style={StatusStyles.statusContainer}>
			<View
				style={[
					StatusStyles.statusInnerContainer,
					item.id !== 1 && StatusStyles.profileContainer,
				]}>
				<Image
					source={{ uri: item.image }}
					style={StatusStyles.profileImage}
					resizeMode='cover'
				/>
				{item.id === 1 && (
					<View style={StatusStyles.statusIcon}>
						<Icon
							name='plus'
							size={10}
							color={Colors.backgroundColor}
						/>
					</View>
				)}
			</View>

			<Text style={[StatusStyles.innerText, StatusStyles.text]}>
				{item.name}
			</Text>
		</ImageBackground>
	);

	return (
		<View style={StatusStyles.outercontainer}>
			<Text style={StatusStyles.statusText}>Status</Text>
			<FlatList
				data={statusData}
				renderItem={renderStatus}
				keyExtractor={(item) => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default StatusComponent;
