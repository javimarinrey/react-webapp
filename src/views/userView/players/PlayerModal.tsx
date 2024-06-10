import ModalBase from "../../../components/ModalBase";
import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import CitiesSelect from "../../../components/CitiesSelect";
import {IClub} from "../../../interfaces/IClub";
import axios from "axios";
import {ITeam} from "../../../interfaces/ITeam";
import {IPlayer} from "../../../interfaces/IPlayer";

export default function PlayerModal(props: {
    title: string,
    show: boolean,
    handleClose: (action: string) => void,
    player: IPlayer
}) {

    const baseURL = "http://localhost:3000/api";
    const [playerTmp, setPlayerTmp] = useState<IPlayer>(props.player)
    const [teams, setTeams] = useState<ITeam[]>([]);

    useEffect(() => {
        if (props.show) {
            setPlayerTmp(props.player)
            getTeams();
        }
        return () => {
        }
    }, [props.show])

    console.log('[PlayerModal] playerTmp ', playerTmp)

    const getTeams= () => {
        axios.get(baseURL+'/team', {})
            .then((response)=> {
                if (response.status === 200) {
                    setTeams(response.data);
                } else {
                    setTeams([]);
                }
            })
            .catch(error => console.error(error.message))
    }

    const createPlayer = (player: IPlayer) => {
        axios.post(baseURL+'/player', player, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> props.handleClose('ok'));
    }

    const updatePlayer = (player: IPlayer) => {
        axios.put(baseURL+'/player/'+player.id, player, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> props.handleClose('ok'));
    }

    const handleEvent = (action: string) => {
        if (action === 'close') {
            props.handleClose('close');
        } else {
            if (playerTmp.id === 0) {
                createPlayer(playerTmp);
            } else {
                updatePlayer(playerTmp)
            }
        }
    }

    return (
        <ModalBase title={props.title} show={props.show} handleClose={handleEvent} action={playerTmp.id === 0 ? 'insert' : 'update'}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={playerTmp?.first_name} onChange={(e) => setPlayerTmp({...playerTmp, first_name: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" value={playerTmp?.last_name} onChange={(e) => setPlayerTmp({...playerTmp, last_name: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Equipo</Form.Label>
                    <select className="form-select" value={playerTmp.team_id || 0} onChange={(e)=> setPlayerTmp({...playerTmp, team_id: Number(e.target.value)}) }>
                        <option value={0}></option>
                        {teams.sort((a, b) => {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                            return 0;
                        }).map((team, index) => <option key={index} value={team.id}>{team.name}</option>)}
                    </select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Num. Fed</Form.Label>
                    <Form.Control type="text" value={playerTmp?.num_fed || ''} onChange={(e) => setPlayerTmp({...playerTmp, num_fed: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>ELO</Form.Label>
                    <Form.Control type="text" value={playerTmp?.elo || ''} onChange={(e) => setPlayerTmp({...playerTmp, elo: Number(e.target.value || 0)})}/>
                </Form.Group>
                {/*<Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <CitiesSelect cityId={clubTmp?.city} citySelected={(cityId) => setClubTmp({...clubTmp, city: cityId}) }/>
                </Form.Group>*/}
            </Form>
        </ModalBase>
    )
}