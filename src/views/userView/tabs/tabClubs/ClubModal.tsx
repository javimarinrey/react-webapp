import ModalBase from "../../../../components/ModalBase";
import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import CitiesSelect from "../../../../components/CitiesSelect";

export default function ClubModal(props:{title: string, show: boolean, handleClose: (action: string)=>void}) {

    const [cityId, setCityId] = useState<number>(-1);

    useEffect(()=> {

        if (props.show) {
            setCityId(-1)
        }

        return()=> {

        }
    },[props.show])

    return (
        <ModalBase title={props.title} show={props.show} handleClose={props.handleClose}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Direction</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <CitiesSelect cityId={cityId} citySelected={(cityId)=>setCityId(cityId)}/>
                </Form.Group>
            </Form>
        </ModalBase>
    )
}