import {Button, Modal} from "react-bootstrap";
import React from "react";

export interface IPropsModalBase {
    children: React.ReactNode;
    title: string;
    show: boolean;
    handleClose: (action: string)=> void;
}

export default function ModalBase(props:IPropsModalBase) {
    return (
        <Modal show={props.show} onHide={()=>props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>props.handleClose('close')}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>props.handleClose('ok')}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}