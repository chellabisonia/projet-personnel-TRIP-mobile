import { Image, View, Text } from "react-native";
import { s } from "./Header.style";
import logo from "../../assets/logo.jpeg";

function Header() {
  return (
    <>
      <Image style={s.img} source={logo} resizeMode="contain"></Image>
      <Text style={s.txt}>
        Bienvenue Inscrivez-vous gratuitement {'\n'}
        {`                `}ou connectez-vous
      </Text>
    </>
  );
}

export { Header };
