import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants";

const NewNotification = ({ subject, date, imageSource }) => {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.avatar}
          source={imageSource}
        />
        <View style={styles.textContainer}>
          <Text style={styles.subject}>{subject}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default NewNotification;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    paddingVertical: 5,
    marginVertical: 5
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  subject: {
    color: COLORS.extraGray,
    fontWeight: "bold",
  },
  date: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: COLORS.grayLight,
  },
});
