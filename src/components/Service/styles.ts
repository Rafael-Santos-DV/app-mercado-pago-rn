import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 14px 14px;
  border-radius: 50px;
`;

export const ServiceImage = styled.Image`
  width: 32px;
  height: 32px;
`;

export const Title = styled.Text`
  flex-wrap: wrap;
  font-size: 12px;
  text-align: center;
`;
