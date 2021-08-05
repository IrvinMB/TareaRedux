import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { ACTUALIZAR_DETALLES } from ".."
import { IAction } from "../../../models/IAction"
import IDetalleDeFoto from "../../../models/IDetalleDeFoto"
import { IState } from "../../../models/IState";

export const actualizarAlbumDetail = (payload: IDetalleDeFoto[]): IAction => ({
    type: ACTUALIZAR_DETALLES,
    payload,
});

export const fetchDetalle = () => async (
    dispatch: ThunkDispatch<IState, null, IAction>
) => {
    try {
        const photosResponse = await axios.get(
            'https://jsonplaceholder.typicode.com/photos'
        );
        dispatch(actualizarAlbumDetail(photosResponse.data))
    } catch (error) {
        console.error(error);
    }
}