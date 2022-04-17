import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            {/* <div className="d-flex">
            
                <img style={{ width: '100%'}} src="https://img.freepik.com/free-photo/happy-women-laughing-digital-tablet_53876-129928.jpg?t=st=1650127336~exp=1650127936~hmac=2f1d91bcc163fd2796b4cfde8e26c89050d9a8c9ad95e1c170535551b31debf3&w=1380" alt="" />
                
            </div> */}
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/happy-women-laughing-digital-tablet_53876-129928.jpg?t=st=1650127336~exp=1650127936~hmac=2f1d91bcc163fd2796b4cfde8e26c89050d9a8c9ad95e1c170535551b31debf3&w=1380"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>Hi. I am a photographer</h1>
                    <h3>I capture life.moments.happiness.emotions.action.impression.beauty.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/happy-women-laughing-digital-tablet_53876-129928.jpg?t=st=1650127336~exp=1650127936~hmac=2f1d91bcc163fd2796b4cfde8e26c89050d9a8c9ad95e1c170535551b31debf3&w=1380"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>Hi. I am a photographer</h1>
                    <h3>I capture life.moments.happiness.emotions.action.impression.beau</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/happy-women-laughing-digital-tablet_53876-129928.jpg?t=st=1650127336~exp=1650127936~hmac=2f1d91bcc163fd2796b4cfde8e26c89050d9a8c9ad95e1c170535551b31debf3&w=1380"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h1>Hi. I am a photographer</h1>
                    <h3>I capture life.moments.happiness.emotions.action.impression</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            <div className="container">
                <h1  className="text-center mt-5">Service</h1>
                <div className="row">
                    {
                     services.map((service)=><Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Home;