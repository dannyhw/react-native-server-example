import { getStorybookUI } from "@storybook/react-native";
import { View } from "react-native";
import "./doctools";
import "./storybook.requires";

const StorybookUIRoot = getStorybookUI({
  enableWebsockets: true,
  onDeviceUI: false,
});

export default () => (
  <View style={{ marginTop: 52, flex: 1 }}>
    <StorybookUIRoot />
  </View>
);
