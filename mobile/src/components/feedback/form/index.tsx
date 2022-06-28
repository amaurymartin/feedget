import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowLeft, Camera, Trash } from "phosphor-react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { captureScreen } from "react-native-view-shot";

import feedbackTypes from "../../../utils/feedbackTypes";

import Copyright from "../../copyright";

import theme from "../../../theme";
import styles from "./styles";

interface FormProps {
  typeSelected: "BUG" | "IDEA" | "OTHER";
  setFeedbackType: (feedbackType: null) => void;
  setIsFeedbackSubmitted: (isFeedbackSubmitted: boolean) => void;
}

export default function Form({
  typeSelected,
  setFeedbackType,
  setIsFeedbackSubmitted,
}: FormProps) {
  const feedbackTypeSelected = feedbackTypes[typeSelected];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isFeedbackSubmitting, setIsFeedbackSubmitting] = useState(false);

  const returnToTypeSelection = useCallback(() => {
    setFeedbackType(null);
    setIsFeedbackSubmitted(false);
  }, []);
  const deleteShot = useCallback(() => setScreenshot(null), []);
  const takeShot = useCallback(() => {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);
  const submitFeedback = useCallback(() => {
    setIsFeedbackSubmitting(true);

    // submitting to backend
    // ...
    // submitted to backend

    setIsFeedbackSubmitted(true);
    setIsFeedbackSubmitting(false);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={returnToTypeSelection}>
          <ArrowLeft
            color={theme.colors.text_secondary}
            size={24}
            weight="bold"
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeSelected.image}
            style={styles.titleImage}
          />

          <Text style={styles.titleText}>{feedbackTypeSelected.title}</Text>
        </View>
      </View>

      <BottomSheetTextInput
        multiline
        placeholder="Give your feedback"
        placeholderTextColor={theme.colors.text_secondary}
        style={styles.input}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.screenshotContainer}
          onPress={screenshot ? deleteShot : takeShot}
        >
          {screenshot ? (
            <>
              <Image
                source={{ uri: screenshot }}
                style={styles.screenshotImage}
              />

              <Trash
                color={theme.colors.text_secondary}
                size={22}
                style={styles.screenshotTrashIcon}
                weight="fill"
              />
            </>
          ) : (
            <Camera color={theme.colors.text_primary} size={24} weight="bold" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={submitFeedback}
          style={styles.submitButtonContainer}
        >
          {isFeedbackSubmitting ? (
            <ActivityIndicator color={theme.colors.text_on_brand_color} />
          ) : (
            <Text style={styles.submitButtonTitle}>Submit Feedback</Text>
          )}
        </TouchableOpacity>
      </View>

      <Copyright />
    </KeyboardAvoidingView>
  );
}
