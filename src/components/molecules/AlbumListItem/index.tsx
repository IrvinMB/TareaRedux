import styled from '@emotion/native';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import IAlbum from '../../../models/IAlbum';
import { actualizarSelectedAlbum } from '../../../store/actions/Albums';

export interface AlbumListItemProps {
    album: IAlbum;
    index: number;
}

const AlbumListItem: FC<AlbumListItemProps> = ({ album, index }) => {
    const dispatch = useDispatch();
    const onPress = () => {
        dispatch(actualizarSelectedAlbum(index));
    };

    return (
        <ItemContainer onPress={onPress}>
            <Text>
                {++index}. {album.title}
            </Text>
        </ItemContainer>
    )
}

const ItemContainer = styled.TouchableOpacity`
  background-color: hsl(220.88888888888889, 84.90566037735847%, 68.82352941176471%);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  padding: 8px 12px;
  margin: 4px 0;
  height:65px;
`;

export default AlbumListItem;