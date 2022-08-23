import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  margin-top: 10px;
  padding: 2px;
  align-items: flex-start;
`;

export const IconFooter = styled(Icon)<{ active?: boolean }>`
  color: ${({ active, theme: { COLORS } }) =>
    active ? COLORS.BACKGROUND_BLUE_WAFE : "#363637"};
  font-size: 30px;
`;

export const Image = styled.Image`
  width: 25px;
  height: 25px;
`;

export const QrCode = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${({ theme: { COLORS } }) => COLORS.BACKGROUND_BLUE_WAFE};
  border-radius: 25px;
  transform: translateY(-10px);
`;

export const Column = styled.View`
  flex: 1;
  align-items: center;
  height: 50px;
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.Text<{ active?: boolean }>`
  color: ${({ active, theme: { COLORS } }) =>
    active ? COLORS.BACKGROUND_BLUE_WAFE : "#363637"};
  font-size: 11px;
  /* flex: 1; */
`;
