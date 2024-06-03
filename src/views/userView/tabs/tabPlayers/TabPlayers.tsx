import {Button, Dropdown, Form, InputGroup, Pagination, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {IClub} from "../../../../interfaces/IClub";
import ModalBase from "../../../../components/ModalBase";
import PlayerModal from "./PlayerModal";
import ModalConfirm from "../../../../components/ModalConfirm";
import {IConfirm} from "../../../../interfaces/IConfirm";
import axios from "axios";
import {ITeam} from "../../../../interfaces/ITeam";
import {IPlayer} from "../../../../interfaces/IPlayer";

export default function TabPlayers() {
    const baseURL = "http://localhost:3000/api";
    const initialPlayer: IPlayer = {id: 0, first_name: '', last_name: '', team_id: 0, team_name: ''};
    const [players, setplayers] = useState<IPlayer[]>([]);
    const [searchPlayer, setSearchPlayer] = useState<string>('');
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [playerSelect, setPlayerSelect] = useState<IPlayer>(initialPlayer);
    const [confirm, setConfirm] = useState<IConfirm>({title: '', action: 'accept', show: false, handleClose: ()=>{}, message:''});

    useEffect(() => {
        getPlayers()
    }, []);



    const deletePlayer = (id: number) => {
        axios.delete(baseURL+'/player/'+id, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> {
                setConfirm({...confirm, show: false});
                getPlayers();
            })
    }


    const getPlayers = () => {
        axios.get(baseURL+'/player', {})
            .then((response)=> {
                if (response.status === 200) {
                    setplayers(response.data);
                } else {
                    setplayers([]);
                }
            })
            .catch(error => console.error(error.message))
    }



    return (
        <div>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Buscar jugador"
                    aria-label="Buscar jugador"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setSearchPlayer(e.target.value)}
                />
                <Button type="button" variant="dark" id="button-addon2" onClick={() => {
                    getPlayers()
                }}>
                    <i className="bi bi-search"></i> Buscar
                </Button>
                <Button variant="primary" id="button-addon2" onClick={()=> {
                    setPlayerSelect(initialPlayer);
                    setIsShowModal(true);
                }}>
                    <i className="bi bi-plus-lg"></i> Añadir
                </Button>
            </InputGroup>

            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th style={{width: '100px'}} className="text-center">#</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Equipo</th>
                </tr>
                </thead>
                <tbody>
                {players.filter(item => item.last_name.indexOf(searchPlayer) > -1).map((player, index) =>
                    <tr key={index}>
                        <td className="text-center">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" size="sm">
                                    <i className="bi bi-gear-fill"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>{
                                        setPlayerSelect(player);
                                        setIsShowModal(true);
                                    }}><i className="bi bi-pencil-fill"></i> Editar</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>{
                                        setConfirm({
                                            message: `¿Deseas eliminar el jugador ${player.first_name}? ${player.last_name}`,
                                            title: 'Eliminar jugador',
                                            action: 'accept',
                                            show: true,
                                            handleClose: async (action) => {
                                                if (action === 'ok') {
                                                    await deletePlayer(player.id);
                                                }
                                                setConfirm({...confirm, show: false});
                                            }
                                        })
                                    }}><i className="bi bi-trash3"></i> Eliminar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td>{player.first_name}</td>
                        <td>{player.last_name}</td>
                        <td>{player.team_name}</td>
                    </tr>
                )}
                </tbody>
            </Table>


            <PlayerModal title={'Jugador'} show={isShowModal} handleClose={(action)=>{
                setIsShowModal(false);
                if (action === 'ok') {
                    getPlayers();
                }
            }} player={playerSelect}></PlayerModal>

            <ModalConfirm {...confirm}></ModalConfirm>

        </div>
    )
}