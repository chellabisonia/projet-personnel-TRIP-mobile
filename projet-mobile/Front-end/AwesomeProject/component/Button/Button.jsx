import { s } from "./Button.style";
import {TouchableOpacity, Text} from "react-native";



export function Button (){
return(
<>

<TouchableOpacity style={s.btn}> 
<Text style={s.txt}>Go ahead</Text>
</TouchableOpacity>




</>

)
}


