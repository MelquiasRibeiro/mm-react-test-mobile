import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
    display: flex;
    flex: 1;
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
}))`
    margin: 16px;
`;

export const Title = styled.Text`
    margin: 8px 8px;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #60d761;
`;
export const PlaylistContainer = styled.View``;
export const Thumb = styled.Image`
    height: 350px;
    width: 350px;
`;
export const PlaylistName = styled.Text``;
export const PlaylistDescription = styled.Text``;
