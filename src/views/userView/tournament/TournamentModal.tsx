import ModalBase from "../../../components/ModalBase";
import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import CitiesSelect from "../../../components/CitiesSelect";
import {IClub} from "../../../interfaces/IClub";
import axios from "axios";
import {ITournament} from "../../../interfaces/ITournament";

export default function TournamentModal(props: {
    title: string,
    show: boolean,
    handleClose: (action: string) => void,
    tournament: ITournament
}) {

    const baseURL = "http://localhost:3000/api";
    const [tournamentTmp, setTournamentTmp] = useState<ITournament>(props.tournament)

    useEffect(() => {
        if (props.show) {
            setTournamentTmp(props.tournament)
        }
        return () => {
        }
    }, [props.show])

    const createTournament = (tournament: ITournament) => {
        axios.post(baseURL+'/tournament', tournament, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> props.handleClose('ok'));
    }

    const updateTournament = (tournament: ITournament) => {
        axios.put(baseURL+'/tournament/'+tournament.id, tournament, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> props.handleClose('ok'));
    }

    const handleEvent = (action: string) => {
        if (action === 'close') {
            props.handleClose('close');
        } else {
            if (tournamentTmp.id === 0) {
                createTournament(tournamentTmp);
            } else {
                // updateTournament(tournamentTmp)
            }
        }
    }

    return (
        <ModalBase title={props.title} show={props.show} handleClose={handleEvent} action={tournamentTmp.id === 0 ? 'insert' : 'update'}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={tournamentTmp?.name} onChange={(e) => setTournamentTmp({...tournamentTmp, name: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Modo juego</Form.Label>
                    <Form.Control maxLength={1} disabled={true} type="text" value={tournamentTmp?.mode} onChange={(e) => setTournamentTmp({...tournamentTmp, mode: e.target.value})}/>
                </Form.Group>
            </Form>
        </ModalBase>
    )
}