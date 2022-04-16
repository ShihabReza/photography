import React, { useEffect, useState } from 'react';
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
            <div>
                <img style={{ width: '100%'}} src="https://img.freepik.com/free-photo/happy-women-laughing-digital-tablet_53876-129928.jpg?t=st=1650127336~exp=1650127936~hmac=2f1d91bcc163fd2796b4cfde8e26c89050d9a8c9ad95e1c170535551b31debf3&w=1380" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    {
                     services.map((service)=><Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
            <p className="text-center mt-5">Copyright © 2015 Bob Smith</p>
        </div>
    );
};

export default Home;