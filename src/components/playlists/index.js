import React from "react";
import { ActivityIndicator } from "react-native";
import {
    Wrapper,
    Container,
    Title,
    PlaylistContainer,
    Thumb,
    PlaylistName,
    PlaylistDescription,
} from "./styles";

const Playlists = ({ playlists, loading }) => (
    <Wrapper>
        <Title>Playlists</Title>
        {loading ? (
            <ActivityIndicator size="large" color="#FaFaFA" />
        ) : (
            <Container>
                {playlists.map((playlist) => (
                    <PlaylistContainer key={playlist.id}>
                        <Thumb
                            source={{
                                uri: playlist.images[0].url,
                            }}
                        />
                        <PlaylistName>{playlist.name}</PlaylistName>
                        <PlaylistDescription>
                            {playlist.description}
                        </PlaylistDescription>
                    </PlaylistContainer>
                ))}
            </Container>
        )}
    </Wrapper>
);

export default Playlists;
