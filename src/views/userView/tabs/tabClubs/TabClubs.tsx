import {Button, Form, InputGroup, Pagination, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {IClub} from "../../../../interfaces/IClub";
import ModalBase from "../../../../components/ModalBase";
import ClubModal from "./ClubModal";

export default function TabClubs() {

    const [clubs, setClubs] = useState<IClub[]>([]);
    const [searchClub, setSearchClub] = useState<string>('');
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    useEffect(() => {
        setClubs([
            {id: 1, name: 'club1', address: 'address1', city: 'bcn', num_teams: 10, num_players: 20}
        ])
    }, []);


    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
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
                <Button variant="dark" id="button-addon2">
                    <i className="bi bi-search"></i> Buscar
                </Button>
                <Button variant="primary" id="button-addon2" onClick={()=> setIsShowModal(true)}>
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
                            <button className="btn btn-sm btn-primary me-1"><i className="bi bi-pencil-fill"></i>
                            </button>
                            <button className="btn btn-sm btn-danger"><i className="bi bi-trash3"></i></button>
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
            {/*<Pagination>{items}</Pagination>*/}

            <ClubModal title={'Club'} show={isShowModal} handleClose={(action)=>{
                console.log('click', action);
                setIsShowModal(false);
            }}></ClubModal>
        </div>
    )
}