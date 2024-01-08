import { s } from "./Input.style";
import { Text, View, TouchableOpacity, TextInput} from "react-native";


export function Input (){
return(
<View>

<TextInput
          style={s.input}
          placeholder="Entrez votre adresse e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={true}
        
        />

{/* <TouchableOpacity> </TouchableOpacity> */}



</View>
)
}





