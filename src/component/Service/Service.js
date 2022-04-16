
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const {name,img,description,price} = props.service
    return (
        <div className="col-xl-4 mt-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Card.Text>
                    {price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
        </div>
    );
};

export default Service;