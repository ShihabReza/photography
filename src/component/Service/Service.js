
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const {name,img,quntity,price,time} = props.service
    return (
        <div className="col-xl-4 mt-5 text-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {quntity}
                    </Card.Text>
                    <Card.Text>
                    {time}
                    </Card.Text>
                    <Card.Text>
                    {price}
                    </Card.Text>
                    
                    <Button variant="dark">CheckOut</Button>
                </Card.Body>
                </Card>
        </div>
    );
};

export default Service;