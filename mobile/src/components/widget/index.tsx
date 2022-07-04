import { useCallback, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import TypeSelection from "../feedback/typeSelection";
import Form from "../feedback/form";

import theme from "../../theme";
import styles from "./styles";

export default function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [feedbackType, setFeedbackType] = useState<
    "BUG" | "IDEA" | "OTHER" | null
  >(null);

  const openWidget = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

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
        {feedbackType ? (
          <Form typeSelected={feedbackType} setFeedbackType={setFeedbackType} />
        ) : (
          <TypeSelection onTypeSelect={setFeedbackType} />
        )}
      </BottomSheet>
    </>
  );
}
