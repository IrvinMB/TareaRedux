import styled from "@emotion/native";
import React, { useEffect } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { IState } from "../../../models/IState"
import { fetchDetalle } from "../../../store/actions/DetalleDeFotos";
import { actualizarSelectedAlbum } from "../../../store/actions/Albums";

const AlbumDetail: React.FC = () => {
    const dispatch = useDispatch();

    const selectedAlbum = useSelector((state: IState) => state.Albums.selectedAlbum);
    const albums = useSelector((state: IState) => state.Albums.albums);
    const { id } = albums[selectedAlbum || 0];
    const detalles = useSelector((state: IState) => state.AlbumDetail.detail)
    const filterDetail = detalles.filter((albumDetail: { albumId: number; }) => albumDetail.albumId === id)

    const onBackPress = () => {
        dispatch(actualizarSelectedAlbum(null));
    };

    useEffect(() => {
        dispatch(fetchDetalle());
    }, [])

    return (
        <Container>
            <Button title="Regresar" onPress={onBackPress} />
            <FlatList
                data={filterDetail}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Text style={styles.center}>{item.title}</Text>
                        <Image
                            style={styles.image}
                            source={{ uri: item.thumbnailUrl }}
                        />
                    </View>
                )}
            />
            {/* <Image
                source={{ uri: thumbnailUrl }}
            /> */}
        </Container>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 75,
        height: 75,
        borderRadius: 15,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        padding: 10,
        marginBottom: 15,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: '#CCC'
    },
    center: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

const Container = styled.View`
    padding: 16px;
    height: 100%;
`

export default AlbumDetail;