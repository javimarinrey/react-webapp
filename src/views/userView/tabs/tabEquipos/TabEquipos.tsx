import {Button, Form, InputGroup, Pagination, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {IClub} from "../../../../interfaces/IClub";
import ModalBase from "../../../../components/ModalBase";
import EquipoModal from "./EquipoModal";
import ModalConfirm from "../../../../components/ModalConfirm";
import {IConfirm} from "../../../../interfaces/IConfirm";
import axios from "axios";
import {IEquipo} from "../../../../interfaces/IEquipo";

export default function TabEquipos() {
    const baseURL = "http://localhost:3000/api";
    const initialEquipo: IEquipo = {id: 0, name: '', club_id: 0, num_players: 0};
    const [equipos, setEquipos] = useState<IEquipo[]>([]);
    const [searchEquipo, setSearchEquipo] = useState<string>('');
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [equipoSelect, setEquipoSelect] = useState<IEquipo>(initialEquipo);
    const [confirm, setConfirm] = useState<IConfirm>({title: '', action: 'accept', show: false, handleClose: ()=>{}, message:''});

    useEffect(() => {
        getEquipos()
    }, []);



    const deleteEquipo = (id: number) => {
        axios.delete(baseURL+'/equipo/'+id, {})
            .then((response)=> console.log(response))
            .catch(error => console.error(error.message))
            .finally(()=> {
                setConfirm({...confirm, show: false});
                getEquipos();
            })
    }


    const getEquipos = () => {
        axios.get(baseURL+'/equipo', {})
            .then((response)=> {
                if (response.status === 200) {
                    setEquipos(response.data);
                } else {
                    setEquipos([]);
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
                    onChange={(e) => setSearchEquipo(e.target.value)}
                />
                <Button variant="primary" id="button-addon2" onClick={()=> {
                    setEquipoSelect(initialEquipo);
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
                    <th>Club</th>
                    <th style={{width: '120px'}} className="text-center"># Jugadores</th>
                </tr>
                </thead>
                <tbody>
                {equipos.filter(item => item.name.indexOf(searchEquipo) > -1).map((equipo, index) =>
                    <tr key={index}>
                        <td className="text-center">
                            <button type="button" className="btn btn-sm btn-primary me-1" onClick={()=> {
                                setEquipoSelect(equipo);
                                setIsShowModal(true);
                            } }><i className="bi bi-pencil-fill"></i></button>
                            <button type="button" className="btn btn-sm btn-danger" onClick={()=> {
                                setConfirm({
                                    message: `¿Deseas eliminar el equipo ${equipo.name}?`,
                                    title: 'Eliminar equipo',
                                    action: 'accept',
                                    show: true,
                                    handleClose: (action)=> {
                                        if (action === 'ok') {
                                            deleteEquipo(equipo.id);
                                        }
                                    }
                                })
                            }}><i className="bi bi-trash3"></i></button>
                        </td>
                        <td>{equipo.name}</td>
                        <td>{equipo.club_id}</td>
                        <td className="text-center">{equipo.num_players}</td>
                    </tr>
                )}
                </tbody>
            </Table>


            <EquipoModal title={'Club'} show={isShowModal} handleClose={(action)=>{
                setIsShowModal(false);
                if (action === 'ok') {
                    getEquipos();
                }
            }} equipo={equipoSelect}></EquipoModal>

            <ModalConfirm {...confirm}></ModalConfirm>

        </div>
    )
}