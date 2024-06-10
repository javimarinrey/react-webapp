import {Button, Dropdown, Form, InputGroup, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {IConfirm} from "../../../interfaces/IConfirm";
import {ITournament} from "../../../interfaces/ITournament";
import axios from "axios";
import ModalConfirm from "../../../components/ModalConfirm";
import TournamentModal from "./TournamentModal";
import {Link, useNavigate} from "react-router-dom";

export default function TournamentsView() {

    const baseURL = "http://localhost:3000/api";
    const initialTournament: ITournament = {id: 0, name: '', mode: 'P'};
    const [tournaments, setTournaments] = useState<ITournament[]>([]);
    const [searchTournament, setSearchTournament] = useState<string>('');
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [tournamentSelect, setTournamentSelect] = useState<ITournament>(initialTournament);
    const [confirm, setConfirm] = useState<IConfirm>({title: '', action: 'accept', show: false, handleClose: ()=>{}, message:''});

    const navigate = useNavigate();

    const getTournaments = () => {
        axios.get(baseURL+'/tournament', {})
            .then((response)=> {
                if (response.status === 200) {
                    setTournaments(response.data);
                } else {
                    setTournaments([]);
                }
            })
            .catch(error => console.error(error.message))
    }

    const deleteTournament = (id: number) => {
        axios.delete(baseURL+'/tournament/'+id, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> {
                setConfirm({...confirm, show: false});
                getTournaments();
            })
    }

    useEffect(() => {
        getTournaments()
    }, []);



    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Buscar torneo"
                    aria-label="Buscar torneo"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setSearchTournament(e.target.value)}
                />
                <Button type="button" variant="dark" id="button-addon2" onClick={() => {
                    getTournaments();
                }}>
                    <i className="bi bi-search"></i> Buscar
                </Button>
                <Button variant="primary" id="button-addon2" onClick={()=> {
                    setTournamentSelect(initialTournament);
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
                    <th>Modo</th>
                </tr>
                </thead>
                <tbody>
                {tournaments.filter(item => item.name.indexOf(searchTournament) > -1).map((tournament, index) =>
                    <tr key={index}>
                        <td className="text-center">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" size="sm">
                                    <i className="bi bi-gear-fill"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/*<Dropdown.Item onClick={()=>{
                                        setTournamentSelect(tournament);
                                        setIsShowModal(true);
                                    }}><i className="bi bi-pencil-fill"></i> Editar</Dropdown.Item>*/}
                                    <Dropdown.Item onClick={()=>{
                                        navigate(`/user/tournament/${tournament.id}`);
                                    }}><i className="bi bi-trophy-fill"></i> Ir al torneo</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>{
                                        setConfirm({
                                            message: `¿Deseas eliminar el torneo ${tournament.name}?`,
                                            title: 'Eliminar torneo',
                                            action: 'accept',
                                            show: true,
                                            handleClose: async (action) => {
                                                if (action === 'ok') {
                                                    await deleteTournament(tournament.id);
                                                }
                                                setConfirm({...confirm, show: false});
                                            }
                                        })
                                    }}><i className="bi bi-trash3"></i> Eliminar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td><Link to={`/user/tournament/${tournament.id}`}>{tournament.name}</Link></td>
                        <td>{tournament.mode}</td>
                    </tr>
                )}
                </tbody>
            </Table>

            <TournamentModal title={'Torneo'} show={isShowModal} handleClose={(action)=>{
                setIsShowModal(false);
                if (action === 'ok') {
                    getTournaments();
                }
            }} tournament={tournamentSelect}></TournamentModal>

            <ModalConfirm {...confirm}></ModalConfirm>
        </div>
    )
}