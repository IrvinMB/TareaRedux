import { IAction } from "../../../models/IAction";
import IAlbum from "../../../models/IAlbum";
import { ACTUALIZAR_ALBUM, ACTUALIZAR_SELECTED_ALBUM } from "../../actions";

export interface IAlbumsState {
    albums: IAlbum[];
    selectedAlbum: number | null;
}

const initialState: IAlbumsState = {
    albums: [],
    selectedAlbum: null,
};

export default (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case ACTUALIZAR_ALBUM:
            return { ...state, albums: payload };
        case ACTUALIZAR_SELECTED_ALBUM:
            return { ...state, selectedAlbum: payload };
        default:
            return state;
    }
};