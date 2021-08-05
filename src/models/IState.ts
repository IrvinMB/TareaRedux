import { IAlbumDetailReducerState } from "../store/reducers/AlbumDetail";
import { IAlbumsState } from "../store/reducers/Albums";
import { IPruebaReducerState } from "../store/reducers/Prueba";


export interface IState {
    Albums: IAlbumsState;
    Prueba: IPruebaReducerState;
    AlbumDetail: IAlbumDetailReducerState;
}