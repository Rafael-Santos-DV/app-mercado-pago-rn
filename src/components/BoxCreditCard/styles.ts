import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${({ theme: { COLORS } }) => COLORS.BACKGROUND_BLACK};
  border-radius: 5px;
  overflow: hidden;
`;

export const ColumnOne = styled.ImageBackground`
  flex: 1;
  padding: 10px;
`;

export const FirstRow = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const BoxImages = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Right = styled.View``;

export const CardText = styled.Text`
  color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  font-family: "Inter_800ExtraBold";
`;

export const Balance = styled.Text`
  color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  font-weight: bold;
  font-size: 16px;
  margin: 2px 0;
`;

export const ColumnTwo = styled.View`
  width: 50%;
  align-content: center;
  justify-content: center;
`;

export const RowColumnTwo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
`;

export const TextRow = styled.Text`
  color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  margin-left: 20px;
  font-size: 9px;
  margin: 10px 8px;
`;

export const CircleImage = styled.View`
  padding: 12px;
  width: 20px;
  align-items: center;
  justify-content: center;
  height: 20px;
  background-color: ${({ theme: { COLORS } }) => COLORS.GREY_CARD};
  border-radius: 50px;
`;

export const ImageCard = styled.Image`
  width: 14px;
  height: 10px;
`;
