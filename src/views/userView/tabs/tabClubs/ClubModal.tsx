import ModalBase from "../../../../components/ModalBase";
import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import CitiesSelect from "../../../../components/CitiesSelect";
import {IClub} from "../../../../interfaces/IClub";

export default function ClubModal(props: {
    title: string,
    show: boolean,
    handleClose: (action: string) => void,
    club: IClub
}) {

    const [cityId, setCityId] = useState<number>(-1);
    const [clubTmp, setClubTmp] = useState<IClub>(props.club)

    useEffect(() => {

        if (props.show) {
            setCityId(-1)
            setClubTmp(props.club)
        }

        return () => {

        }
    }, [props.show])

    console.log('[ClubModal] club ', props.club)
    return (
        <ModalBase title={props.title} show={props.show} handleClose={props.handleClose} action={clubTmp.id === 0 ? 'insert' : 'update'}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={clubTmp?.name} onChange={(e) => setClubTmp({...clubTmp, name: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Direction</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <CitiesSelect cityId={cityId} citySelected={(cityId) => setCityId(cityId)}/>
                </Form.Group>
            </Form>
        </ModalBase>
    )
}