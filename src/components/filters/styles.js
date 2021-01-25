import styled from "styled-components/native";

export const Wrapper = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    background: #23262b;
`;

export const Container = styled.View`
    background: #23262b;
`;

export const Title = styled.Text`
    margin: 48px 16px;
    font-weight: bold;
    font-size: 16px;
    color: #60d761;
`;
export const FiltersContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin: 8px 8px 8px 16px;
    align-items: center;
    justify-content: center;
`;

export const PickerStyle = styled.View`
    height: 40px;
    border: 1px solid #c4c4c4;
    padding: 0px 16px 0 16px;
    flex: 1;
    margin: 0px 8px 0 0;
`;

export const PriceInput = styled.TextInput.attrs(() => ({
    autoCorrect: false,
    clearTextOnFocus: true,
    placeholder: "search by name",
    placeholderTextColor: "#c4c4c4",
}))`
    height: 40px;
    border: 1px solid #c4c4c4;
    text-align: center;
    margin: 0 16px;
    color: #c4c4c4;
    font-size: 16px;
`;
