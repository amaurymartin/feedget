import { useCallback, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import TypeSelection from "../feedback/typeSelection";
import Form from "../feedback/form";
import Result from "../feedback/result";

import theme from "../../theme";
import styles from "./styles";

export default function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [feedbackType, setFeedbackType] = useState<
    "BUG" | "IDEA" | "OTHER" | null
  >(null);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

  const openWidget = useCallback(() => bottomSheetRef.current?.expand(), []);
  const resetFeedback = useCallback(() => {
    setFeedbackType(null);
    setIsFeedbackSubmitted(false);
  }, []);

  function renderFeedback() {
    if (isFeedbackSubmitted) return <Result onReturn={resetFeedback} />;
    if (feedbackType)
      return (
        <Form
          typeSelected={feedbackType}
          setFeedbackType={setFeedbackType}
          setIsFeedbackSubmitted={setIsFeedbackSubmitted}
        />
      );
    return <TypeSelection onTypeSelect={setFeedbackType} />;
  }

  return (
    <>
      <TouchableOpacity onPress={openWidget} style={styles.button}>
        <ChatTeardropDots
          color={theme.colors.text_on_brand_color}
          size={24}
          weight="bold"
        />
      </TouchableOpacity>

      <BottomSheet
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
      >
        {renderFeedback()}
      </BottomSheet>
    </>
  );
}
