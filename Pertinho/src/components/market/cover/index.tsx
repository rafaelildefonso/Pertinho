import { ImageBackground, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { router } from "expo-router"

import { s } from "./styles"
import { Button } from "@/components/button"

type Props = {
  uri: string
}

export function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={s.container}>
      <View style={s.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.Icon icon={Ionicons} />
        </Button>
      </View>
    </ImageBackground>
  )
}
