import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
}

const Homework1: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    // backgroundColor: "#722323",  // kept original color
    padding: 30,
    // marginVertical: ,          // add spacing between items
    borderRadius: 12,            // optional: smooth corners on container
  },
  textContainer: {
    display: "flex",
    backgroundColor: "#FFECCC",  
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    flexDirection: "row",
    
	

  },
  text: {
    color: "black",              // fixed typo from "wight"
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Homework1;
