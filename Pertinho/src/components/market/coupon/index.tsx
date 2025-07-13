import { Text, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"

import { s } from "./styles"
import { colors } from "@/styles/theme"

type Props = {
  code: string
}

export function Coupon({ code }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Utilize esse cupom</Text>

      <View style={s.content}>
        <FontAwesome5 name="ticket-alt" size={24} color={colors.green.light} />
        <Text style={s.code}>{code}</Text>
      </View>
    </View>
  )
}
