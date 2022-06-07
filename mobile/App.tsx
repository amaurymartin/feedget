import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { View } from "react-native";
import "react-native-gesture-handler";

import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <StatusBar
        backgroundColor="transparent"
        // eslint-disable-next-line react/style-prop-object
        style="auto"
        translucent
      />

      <Widget />
    </View>
  );
}
