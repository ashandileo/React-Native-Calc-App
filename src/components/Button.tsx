import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}

const Button = ({ onPress, title, isBlue, isGray }: ButtonProps) => {
  const theme = useContext(ThemeContext);

  const getTouchableOpacityStyle = () => {
    if (isBlue) return Styles.btnBlue;

    if (isGray) return Styles.btnGray;

    if (theme === "light") return Styles.btnLight;

    return Styles.btnDark;
  };

  const getTextStyle = () => {
    if (isBlue || isGray) return Styles.smallTextLight;

    if (theme === "dark") return Styles.smallTextLight;

    return Styles.smallTextDark;
  };

  return (
    <TouchableOpacity onPress={onPress} style={getTouchableOpacityStyle()}>
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
