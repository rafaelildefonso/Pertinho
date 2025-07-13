import { View, Text } from "react-native"
import { FontAwesome5, Feather, MaterialCommunityIcons } from "@expo/vector-icons"

import { Info } from "@/components/market/info"
import { s } from "./styles"

export type PropsDetails = {
  name: string
  description: string
  address: string
  phone: string
  coupons: number
  rules: {
    id: string
    description: string
  }[]
}

type Props = {
  data: PropsDetails
}

export function Details({ data }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.name}>{data.name}</Text>
      <Text style={s.description}>{data.description}</Text>

      <View style={s.group}>
        <Text style={s.title}>Informações</Text>

        <Info
          icon={props => <FontAwesome5 name="ticket-alt" size={20} color="#2D9CDB" {...props} />}
          description={`${data.coupons} cupons disponíveis`}
        />
        <Info
          icon={props => <Feather name="map-pin" size={20} color="#2D9CDB" {...props} />}
          description={data.address}
        />
        <Info
          icon={props => <Feather name="phone" size={20} color="#2D9CDB" {...props} />}
          description={data.phone}
        />
      </View>

      <View style={s.group}>
        <Text style={s.title}>Regulamento</Text>
        {data.rules.map((item) => (
          <Text key={item.id} style={s.rule}>
            {`\u2022 ${item.description}`}
          </Text>
        ))}
      </View>
    </View>
  )
}
