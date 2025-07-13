import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons"
import { ReactNode } from "react"

type IconProps = {
  size?: number
  color?: string
}

export const categoriesIcons: Record<string, (props: IconProps) => ReactNode> = {
  "146b1a88-b3d3-4232-8b8f-c1f006f1e86d": props => <MaterialCommunityIcons name="silverware-fork-knife" {...props} />,
  "52e81585-f71a-44cd-8bd0-49771e45da44": props => <FontAwesome5 name="shopping-bag" {...props} />,
  "57d6e5ff-35f6-4d21-a521-84f23d511d25": props => <FontAwesome5 name="bed" {...props} />,
  "826910d4-187d-4c15-88f4-382b7e056739": props => <MaterialCommunityIcons name="movie" {...props} />,
  "abce52cf-b33b-4b3c-8972-eb72c66c83e4": props => <FontAwesome5 name="coffee" {...props} />,
}
