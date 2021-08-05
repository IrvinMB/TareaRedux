import { IAction } from "../../../models/IAction";
import { ACTUALIZAR_PRUEBA } from "../../actions";

export interface IPruebaReducerState {
    prueba: string;
}

const initialState = {
    Prueba: 'Prueba',
};

export default (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case ACTUALIZAR_PRUEBA:
            return { ...state, prueba: payload };
        default:
            return state;
    }
};