import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
    display: flex;
    flex: 2;
    flex-direction: column;
    background: #23262b;
`;

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: "center",
        paddingLeft: 16,
    },
}))``;

export const Title = styled.Text`
    margin: 0 16px;
    font-weight: bold;
    font-size: 16px;
    color: #60d761;
`;
export const PlaylistContainer = styled.View`
    margin: 0 16px;
`;
export const Thumb = styled.Image`
    height: 250px;
    width: 250px;
`;
export const PlaylistName = styled.Text`
    font-size: 16px;
    color: #ffffff;
`;
export const PlaylistDescription = styled.Text`
    font-size: 14px;
    color: #c4c4c4;
`;
