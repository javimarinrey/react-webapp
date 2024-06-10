import ModalBase from "../../../components/ModalBase";
import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import CitiesSelect from "../../../components/CitiesSelect";
import {IClub} from "../../../interfaces/IClub";
import axios from "axios";
import {ITeam} from "../../../interfaces/ITeam";

export default function TeamModal(props: {
    title: string,
    show: boolean,
    handleClose: (action: string) => void,
    team: ITeam
}) {

    const baseURL = "http://localhost:3000/api";
    const [equipoTmp, setEquipoTmp] = useState<ITeam>(props.team)
    const [clubs, setClubs] = useState<IClub[]>([]);

    useEffect(() => {
        if (props.show) {
            setEquipoTmp(props.team)
            getClubs();
        }
        return () => {
        }
    }, [props.show])

    console.log('[EquipoModal] equipoTmp ', equipoTmp)

    const getClubs= () => {
        axios.get(baseURL+'/club', {})
            .then((response)=> {
                if (response.status === 200) {
                    setClubs(response.data);
                } else {
                    setClubs([]);
                }
            })
            .catch(error => console.error(error.message))
    }

    const createEquipo = (equipo: ITeam) => {
        axios.post(baseURL+'/team', equipo, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> props.handleClose('ok'));
    }

    const updateEquipo = (equipo: ITeam) => {
        axios.put(baseURL+'/team/'+equipo.id, equipo, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> props.handleClose('ok'));
    }

    const handleEvent = (action: string) => {
        if (action === 'close') {
            props.handleClose('close');
        } else {
            if (equipoTmp.id === 0) {
                createEquipo(equipoTmp);
            } else {
                updateEquipo(equipoTmp)
            }
        }
    }

    return (
        <ModalBase title={props.title} show={props.show} handleClose={handleEvent} action={equipoTmp.id === 0 ? 'insert' : 'update'}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={equipoTmp?.name} onChange={(e) => setEquipoTmp({...equipoTmp, name: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Club</Form.Label>
                    <select className="form-select" value={equipoTmp.club_id || 0} onChange={(e)=> setEquipoTmp({...equipoTmp, club_id: Number(e.target.value)}) }>
                        <option value={0}></option>
                        {clubs.sort((a, b) => {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                            return 0;
                        }).map((club, index) => <option key={index} value={club.id}>{club.name}</option>)}
                    </select>
                </Form.Group>
                {/*<Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <CitiesSelect cityId={clubTmp?.city} citySelected={(cityId) => setClubTmp({...clubTmp, city: cityId}) }/>
                </Form.Group>*/}
            </Form>
        </ModalBase>
    )
}