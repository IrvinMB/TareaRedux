import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { ACTUALIZAR_ALBUM, ACTUALIZAR_SELECTED_ALBUM } from '..';
import { IAction } from '../../../models/IAction';
import IAlbum from '../../../models/IAlbum';
import { IState } from '../../../models/IState';

export const actualizarAlbums = (payload: IAlbum[]) => ({
    type: ACTUALIZAR_ALBUM,
    payload
});

export const actualizarSelectedAlbum = (payload: number | null) => ({
    type: ACTUALIZAR_SELECTED_ALBUM,
    payload,
})

export const fetchAlbums =
    () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
        try {
            const albumResponse = await axios.get(
                'https://jsonplaceholder.typicode.com/albums'
            );
            dispatch(actualizarAlbums(albumResponse.data));
        }
        catch (error) {
            console.error(error)
        }
    }