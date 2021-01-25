import React from "react";
import {
    Wrapper,
    Container,
    Title,
    PlaylistContainer,
    Thumb,
    PlaylistName,
    PlaylistDescription,
} from "./styles";

const playlists = () => (
    <Wrapper>
        <Title>Playlists</Title>
        <Container>
            <PlaylistContainer>
                <Thumb
                    source={{
                        uri:
                            "https://i.scdn.co/image/ab67706f00000003ec69f78942a99131ab104df5",
                    }}
                />
                <PlaylistName>Name</PlaylistName>
                <PlaylistDescription>description</PlaylistDescription>
            </PlaylistContainer>
        </Container>
    </Wrapper>
);

export default playlists;
