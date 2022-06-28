import { Image, Text, TouchableOpacity, View } from "react-native";

import successImage from "../../../assets/success.png";

import Copyright from "../../copyright";

import styles from "./styles";

interface ResultProps {
  onReturn: () => void;
}

export default function Result({ onReturn }: ResultProps) {
  return (
    <View style={styles.container}>
      <Image source={successImage} style={styles.image} />

      <Text style={styles.title}>Thank you for your feedback!</Text>

      <TouchableOpacity onPress={onReturn} style={styles.button}>
        <Text style={styles.buttonTitle}>New feedback</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
