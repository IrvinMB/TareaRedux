import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { IState } from '../../../models/IState';
import AlbumList from '../../organisms/AlbumList';
import DetalleDeFoto from '../../molecules/DetalleDeFoto';

const Home: React.FC = () => {
    const selectedAlbum = useSelector((state: IState) => state.Albums.selectedAlbum)
    return (
        <View>{selectedAlbum ? 
        <DetalleDeFoto /> : 
        <AlbumList />
        }</View>
    );
}

export default Home;