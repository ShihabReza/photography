import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="blog">
                <div className="qustion-one">
                    <h1>Difference between authorization and authentication</h1>
                    <h2>Authentication</h2>
                    <p>In authentication process, the identity of users are checked for providing the access to the system.	In authentication process, users or persons are verified.It is done before the authorization process.Authentication determines whether the person is user or not.</p>
                    <h2>Authorization</h2>
                    <p>While in authorization process, persons or users authorities are checked for accessing the resources.While in this process, users or persons are validated.While this process is done after the authentication process.While it needs users privilege or security levels.</p>
                </div>
                <div className="qustion-to">
                    
                </div>
            </div>
        </div>
    );
};

export default Blog;