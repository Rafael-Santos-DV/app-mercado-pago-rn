import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  padding: 13px 15px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-width: 2px;
`;

export const RowOne = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const BoxAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextAmount = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-right: 10px;
`;

export const More = styled.View`
  flex-direction: row;
`;

export const RowTwo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const RowThree = styled.View``;
