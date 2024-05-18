import React from "react";
import {Accordion, Breadcrumb, Nav, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
import Ingredients from "./Ingredients";

export default function IngredientsView() {

    const ingredients = [
        { key: '0', header: 'Aceites', body: <Ingredients type={'aceites'}/>},
        { key: '1', header: 'Lácteos', body: <Ingredients type={'lacteos'}/>},
        { key: '2', header: 'Legumbres', body: <Ingredients type={'legumbres'}/>},
        { key: '3', header: 'Setas / Hongos', body: <Ingredients type={'setas'}/>},
        { key: '4', header: 'Verduras', body: <Ingredients type={'verduras'}/>},
        { key: '5', header: 'Frutas', body: <Ingredients type={'frutas'}/>},
        { key: '6', header: 'Cereales / Harina', body: <Ingredients type={'cereales'}/>},
        { key: '7', header: 'Pescado', body: <Ingredients type={'pescado'}/>},
        { key: '8', header: 'Marisco', body: <Ingredients type={'marisco'}/>},
        { key: '9', header: 'Carnes', body: <Ingredients type={'carnes'}/>},
        { key: '10', header: 'Bebidas', body: <Ingredients type={'bebidas'}/>}
    ];

    return (
        <div>
            <Accordion>
            {ingredients.map((item, idx)=> {
                return (
                    <Accordion.Item eventKey={item.key} key={idx}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>
                            {item.body}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
            </Accordion>
        </div>
    )
}