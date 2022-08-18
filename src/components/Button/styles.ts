import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme: { COLORS } }) => COLORS.NAVY_BLUE};
  padding: 10px 15px;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 11px;
`;
