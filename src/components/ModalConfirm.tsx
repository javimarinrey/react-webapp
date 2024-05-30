import ModalBase from "./ModalBase";
import {IConfirm} from "../interfaces/IConfirm";

export default function ModalConfirm(props:IConfirm) {
    return (
        <ModalBase title={props.title} show={props.show} handleClose={props.handleClose} action={props.action}>
            <div>{props.message}</div>
        </ModalBase>
    )
}