import {Button, Form, InputGroup, Pagination, Table} from "react-bootstrap";
import React from "react";
import {IClub} from "../../interfaces/IClub";

export default function UserTabClubs() {

    let clubs: IClub[] = [
        {id: 1, name: 'club1', address: 'address1', city: 'bcn', num_teams:10, num_players:20}
    ]

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
                />
                <Button variant="dark" id="button-addon2">
                    <i className="bi bi-search"></i> Buscar
                </Button>
                <Button variant="primary" id="button-addon2">
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
                    <th style={{width:'80px'}} className="text-center"># Clubs</th>
                    <th style={{width: '120px'}} className="text-center"># Jugadores</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="text-center">
                        <button className="btn btn-sm btn-primary me-1"><i className="bi bi-pencil-fill"></i></button>
                        <button className="btn btn-sm btn-danger"><i className="bi bi-trash3"></i></button>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td className="text-center">@mdo</td>
                    <td className="text-center">@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>LBird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>

            <div>
                <Pagination>{items}</Pagination>
            </div>
        </div>
    )
}