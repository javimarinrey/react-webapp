import {Button, Form, InputGroup, Pagination, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {IClub} from "../../../../interfaces/IClub";
import ModalBase from "../../../../components/ModalBase";
import ClubModal from "./ClubModal";
import ModalConfirm from "../../../../components/ModalConfirm";
import {IConfirm} from "../../../../interfaces/IConfirm";
import axios from "axios";

export default function TabClubs() {
    const baseURL = "http://localhost:3000/api";
    const initialClub: IClub = {id: 0, name: '', city: 0, address: '', num_players: 0, num_teams: 0};
    const [clubs, setClubs] = useState<IClub[]>([]);
    const [searchClub, setSearchClub] = useState<string>('');
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [clubSelect, setClubSelect] = useState<IClub>(initialClub);
    const [confirm, setConfirm] = useState<IConfirm>({title: '', action: 'accept', show: false, handleClose: ()=>{}, message:''});

    useEffect(() => {
        getClubs()
    }, []);



    const deleteClub = (id: number) => {
        axios.delete(baseURL+'/club/'+id, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> {
                setConfirm({...confirm, show: false});
                getClubs();
            })
    }


    const getClubs = () => {
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



    return (
        <div>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Buscar club"
                    aria-label="Buscar club"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setSearchClub(e.target.value)}
                />
                <Button variant="primary" id="button-addon2" onClick={()=> {
                    setClubSelect(initialClub);
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
                    <th>Dirección</th>
                    <th>Ciudad</th>
                    <th style={{width: '80px'}} className="text-center"># Clubs</th>
                    <th style={{width: '120px'}} className="text-center"># Jugadores</th>
                </tr>
                </thead>
                <tbody>
                {clubs.filter(item => item.name.indexOf(searchClub) > -1).map((club, index) =>
                    <tr key={index}>
                        <td className="text-center">
                            <button type="button" className="btn btn-sm btn-primary me-1" onClick={()=> {
                                setClubSelect(club);
                                setIsShowModal(true);
                            } }><i className="bi bi-pencil-fill"></i></button>
                            <button type="button" className="btn btn-sm btn-danger" onClick={()=> {
                                setConfirm({
                                    message: `¿Deseas eliminar el club ${club.name}?`,
                                    title: 'Eliminar club',
                                    action: 'accept',
                                    show: true,
                                    handleClose: (action)=> {
                                        if (action === 'ok') {
                                            deleteClub(club.id);
                                        }
                                    }
                                })
                            }}><i className="bi bi-trash3"></i></button>
                        </td>
                        <td>{club.name}</td>
                        <td>{club.address}</td>
                        <td>{club.city}</td>
                        <td className="text-center">{club.num_teams}</td>
                        <td className="text-center">{club.num_players}</td>
                    </tr>
                )}
                </tbody>
            </Table>


            <ClubModal title={'Club'} show={isShowModal} handleClose={(action)=>{
                setIsShowModal(false);
                if (action === 'ok') {
                    getClubs();
                }
            }} club={clubSelect}></ClubModal>

            <ModalConfirm {...confirm}></ModalConfirm>

        </div>
    )
}