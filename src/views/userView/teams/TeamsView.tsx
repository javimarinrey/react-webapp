import {Button, Dropdown, Form, InputGroup, Pagination, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import TeamModal from "./TeamModal";
import ModalConfirm from "../../../components/ModalConfirm";
import {IConfirm} from "../../../interfaces/IConfirm";
import axios from "axios";
import {ITeam} from "../../../interfaces/ITeam";

export default function TeamsView() {
    const baseURL = "http://localhost:3000/api";
    const initialTeam: ITeam = {id: 0, name: '', club_id: 0, club_name: '', num_players: 0};
    const [teams, setTeams] = useState<ITeam[]>([]);
    const [searchTeam, setSearchTeam] = useState<string>('');
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [teamSelect, setTeamSelect] = useState<ITeam>(initialTeam);
    const [confirm, setConfirm] = useState<IConfirm>({title: '', action: 'accept', show: false, handleClose: ()=>{}, message:''});

    useEffect(() => {
        getTeams()
    }, []);



    const deleteTeam = (id: number) => {
        axios.delete(baseURL+'/team/'+id, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> {
                setConfirm({...confirm, show: false});
                getTeams();
            })
    }


    const getTeams = () => {
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



    return (
        <div>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Buscar equipo"
                    aria-label="Buscar equipo"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setSearchTeam(e.target.value)}
                />
                <Button type="button" variant="dark" id="button-addon2" onClick={() => {
                    getTeams()
                }}>
                    <i className="bi bi-search"></i> Buscar
                </Button>
                <Button variant="primary" id="button-addon2" onClick={()=> {
                    setTeamSelect(initialTeam);
                    setIsShowModal(true);
                }}>
                    <i className="bi bi-plus-lg"></i> Añadir
                </Button>
            </InputGroup>

            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th style={{width: '70px'}} className="text-center">#</th>
                    <th>Nombre</th>
                    <th>Club</th>
                    <th style={{width: '120px'}} className="text-center"># Jugadores</th>
                </tr>
                </thead>
                <tbody>
                {teams.filter(item => item.name.indexOf(searchTeam) > -1).map((team, index) =>
                    <tr key={index}>
                        <td className="text-center">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" size="sm">
                                    <i className="bi bi-gear-fill"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>{
                                        setTeamSelect(team);
                                        setIsShowModal(true);
                                    }}><i className="bi bi-pencil-fill"></i> Editar</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>{
                                        setConfirm({
                                            message: `¿Deseas eliminar el equipo ${team.name}?`,
                                            title: 'Eliminar equipo',
                                            action: 'accept',
                                            show: true,
                                            handleClose: async (action) => {
                                                if (action === 'ok') {
                                                    await deleteTeam(team.id);
                                                }
                                                setConfirm({...confirm, show: false});
                                            }
                                        })
                                    }}><i className="bi bi-trash3"></i> Eliminar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td>{team.name}</td>
                        <td>{team.club_name}</td>
                        <td className="text-center">{team.num_players}</td>
                    </tr>
                )}
                </tbody>
            </Table>


            <TeamModal title={'Club'} show={isShowModal} handleClose={(action)=>{
                setIsShowModal(false);
                if (action === 'ok') {
                    getTeams();
                }
            }} team={teamSelect}></TeamModal>

            <ModalConfirm {...confirm}></ModalConfirm>

        </div>
    )
}