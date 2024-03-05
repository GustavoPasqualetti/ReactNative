import styled from "styled-components";

export const ContentIcon = styled.View`
justify-content: center;
flex-direction: row;
align-items: center;
gap: 5px;
border-radius: 18px;
padding: 9px 12px;

background-color: ${props => `${props.tabBarActiveBackgroundColor}`};
`

export const TextIcon = styled.Text`
font-size: 14px;
font-family: Quicksand_500Medium;
`