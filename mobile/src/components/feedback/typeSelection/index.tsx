import { Image, Text, TouchableOpacity, View } from "react-native";

import feedbackTypes from "../../../utils/feedbackTypes";

import Copyright from "../../copyright";

import styles from "./styles";

type FeedbackType = keyof typeof feedbackTypes;

interface TypeSelectionProps {
  onTypeSelect: (feedbackType: FeedbackType) => void;
}

export default function TypeSelection({ onTypeSelect }: TypeSelectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave your feedback</Text>

      <View style={styles.typeSelection}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <TouchableOpacity
            key={key}
            onPress={() => onTypeSelect(key as FeedbackType)}
            style={styles.typeContainer}
          >
            <Image source={value.image} style={styles.typeImage} />

            <Text style={styles.typeTitle}>{value.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Copyright />
    </View>
  );
}
