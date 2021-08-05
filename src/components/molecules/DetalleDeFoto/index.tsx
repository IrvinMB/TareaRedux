import styled from "@emotion/native";
import React, { useEffect } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { IState } from "../../../models/IState"
import { fetchDetalle } from "../../../store/actions/DetalleDeFotos";
import { actualizarSelectedAlbum } from "../../../store/actions/Albums";

const DetalleDeFoto: React.FC = () => {
    const dispatch = useDispatch();

    const selectedAlbum = useSelector((state: IState) => state.Albums.selectedAlbum);
    const albums = useSelector((state: IState) => state.Albums.albums);
    const { id } = albums[selectedAlbum || 0];
    const detalles = useSelector((state: IState) => state.AlbumDetail.detail)
    const filterDetail = detalles.filter((DetalleDeFoto: { albumId: number; }) => DetalleDeFoto.albumId === id)

    const onBackPress = () => {
        dispatch(actualizarSelectedAlbum(null));
    };

    useEffect(() => {
        dispatch(fetchDetalle());
    }, [])

    return (
        <View>
            <Button title="Regresar" onPress={onBackPress} />
            <FlatList
                data={filterDetail}
                renderItem={({ item }) => (
                    <View style={styles.cuadro}>
                        <Text style={styles.texto}>{item.title}</Text>
                        <Image
                            style={styles.image}
                            source={{ uri: item.thumbnailUrl }}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
      width: 75,
      height: 75,
      position: 'absolute', right: 8, top:10
    },
    cuadro: {
      flexDirection: "row",
      backgroundColor: 'grey',
      height: 100,
      padding: 20,
      margin: 5
    },
    texto: {
      flexDirection: "row",
      maxWidth:300,
      fontWeight: 'bold',
      padding: 5
    },
    boton: {
      fontWeight: 'bold',
      backgroundColor: 'grey',
      padding: 5
    },
  });


export default DetalleDeFoto;