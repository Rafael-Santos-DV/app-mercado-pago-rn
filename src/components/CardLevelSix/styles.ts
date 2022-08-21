import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 5px;
  margin-top: 10px;
  background-color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  overflow: hidden;
`;

export const RowOne = styled(LinearGradient).attrs({
  colors: ["#a80e90", "#911287", "#361862", "#0F1A52"],
  start: {
    x: 0.2,
    y: 0,
  },
  end: {
    x: 1,
    y: 2,
  },
})`
  flex-direction: row;
  align-items: center;
  padding: 13px;
`;

export const Title = styled.Text`
  color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  font-size: 17px;
  flex: 1;
  text-align: left;
  font-family: "Inter_800ExtraBold";
`;

export const ColumnInstallments = styled.View`
  flex: 1;
  border-left-width: 3px;
  border-color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  padding-left: 5px;
  margin-left: 10px;
`;

export const RowText = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const TextIns = styled.Text<{ through?: boolean }>`
  color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  font-family: "Inter_800ExtraBold";
  text-decoration: ${({ through }) => (through ? "line-through" : "none")};
`;

export const List = styled.View`
  padding: 10px;
`;

export const ImageL = styled.Image``;

export const BoxImage = styled.View`
  flex: 0.2;
`;

export const BoxList = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  padding: 0 8px;
`;

export const TextL = styled.Text`
  padding-left: 10px;
  flex: 1;
  font-size: 13px;
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 10px;
  border-top-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
`;

export const TextFooter = styled.Text`
  font-family: "Inter_800ExtraBold";

  color: ${({ theme: { COLORS } }) => COLORS.BACKGROUND_BLUE_WAFE};
`;
