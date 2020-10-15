import styled from 'styled-components/native';

export const SearchBarContainer = styled.View`
  background-color: #f0eeee;
  height: 50px;
  border-radius: 5px;
  margin: 15px 10px;
  padding: 0 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
`;

export const IconContainer = styled.View`
  width: 30px;
  height: 30px;
  display: flex;
  align-self: center;
`;

export const SearchBarInput = styled.TextInput`
  margin-right: 20px;
  padding: 10px 10px;
  font-size: 18px;
  display: flex;
`;
