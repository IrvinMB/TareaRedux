import React, { useEffect } from "react"
import { View, ActivityIndicator, FlatList, Text, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { IState } from "../../../models/IState"
import { fetchAlbums } from "../../../store/actions/Albums"
import AlbumListItem from "../../molecules/AlbumListItem"

const AlbumList: React.FC = () => {
    const albums = useSelector((state: IState) => state.Albums.albums)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums())
    }, []);

    return (
        <View>
            {albums.length > 0 ? (
                <>
                    <Text style={styles.contenedor}>Albumes</Text>
                    <FlatList
                        data={albums}
                        renderItem={({ item, index }) => (
                            <AlbumListItem
                                key={item.id}
                                album={item}
                                index={index}
                            />
                        )}
                    />
                </>
            ) : (
                <ActivityIndicator color="#000" />
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
      display: 'flex',
      padding: 16,
  
    }
  });

export default AlbumList