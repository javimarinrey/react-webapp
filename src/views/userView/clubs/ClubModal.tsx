import ModalBase from "../../../components/ModalBase";
import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import CitiesSelect from "../../../components/CitiesSelect";
import {IClub} from "../../../interfaces/IClub";
import axios from "axios";

export default function ClubModal(props: {
    title: string,
    show: boolean,
    handleClose: (action: string) => void,
    club: IClub
}) {

    const baseURL = "http://localhost:3000/api";
    const [clubTmp, setClubTmp] = useState<IClub>(props.club)

    useEffect(() => {
        if (props.show) {
            setClubTmp(props.club)
        }
        return () => {
        }
    }, [props.show])

    console.log('[ClubModal] clubTmp ', clubTmp)

    const createClub = (club: IClub) => {
        axios.post(baseURL+'/club', club, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> props.handleClose('ok'));
    }

    const updateClub = (club: IClub) => {
        axios.put(baseURL+'/club/'+club.id, club, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> props.handleClose('ok'));
    }

    const handleEvent = (action: string) => {
        if (action === 'close') {
            props.handleClose('close');
        } else {
            if (clubTmp.id === 0) {
                createClub(clubTmp);
            } else {
                updateClub(clubTmp)
            }
        }
    }

    return (
        <ModalBase title={props.title} show={props.show} handleClose={handleEvent} action={clubTmp.id === 0 ? 'insert' : 'update'}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={clubTmp?.name} onChange={(e) => setClubTmp({...clubTmp, name: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Direction</Form.Label>
                    <Form.Control type="text" value={clubTmp?.address} onChange={(e) => setClubTmp({...clubTmp, address: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <CitiesSelect cityId={clubTmp?.city} citySelected={(cityId) => setClubTmp({...clubTmp, city: cityId}) }/>
                </Form.Group>
            </Form>
        </ModalBase>
    )
}