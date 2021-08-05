import { IAction } from "../../../models/IAction";
import IDetalleDeFoto from "../../../models/IDetalleDeFoto";
import { ACTUALIZAR_DETALLES } from "../../actions";

export interface IAlbumDetailReducerState {
    detail: IDetalleDeFoto[];
}

const initialState = {
    detail: []
};

export default (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case ACTUALIZAR_DETALLES:
            return { ...state, detail: payload }
        default:
            return state;
    }
}