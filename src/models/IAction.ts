import IAlbum from "./IAlbum";
import IDetalleDeFoto from "./IDetalleDeFoto";

export interface IAction {
    type: string;
    payload?: string | number | IAlbum[] | IDetalleDeFoto[];
}