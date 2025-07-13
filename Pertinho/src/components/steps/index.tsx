import { View, Text } from "react-native"
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons"

import { s } from "./styles"
import { Step } from "../step"

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>

      <Step
        icon={props => <Ionicons name="location-sharp" size={32} color="#2D9CDB" {...props} />}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />

      <Step
        icon={props => <MaterialCommunityIcons name="qrcode-scan" size={32} color="#2D9CDB" {...props} />}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />

      <Step
        icon={props => <FontAwesome5 name="ticket-alt" size={32} color="#2D9CDB" {...props} />}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
      />
    </View>
  )
}
