import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="blog ">
                <div className="qustion-one">
                    <h1>1. Difference between authorization and authentication</h1>
                    <h2>Authentication</h2>
                    <p>In authentication process, the identity of users are checked for providing the access to the system.	In authentication process, users or persons are verified.It is done before the authorization process.Authentication determines whether the person is user or not.</p>
                    <h2>Authorization</h2>
                    <p>While in authorization process, persons or users authorities are checked for accessing the resources.While in this process, users or persons are validated.While this process is done after the authentication process.While it needs users privilege or security levels.</p>
                </div>
                
                <div className="qustion-to mt-5">
                    <h1>2. Why are you using firebase? What other options do you have to implement authentication? </h1>
                    <p>Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div className="qustion-three mt-5">
                    <h1>3. What other services does firebase provide other than authentication</h1>
                    <p>To use the Firebase Storage we need to authenticate a user via Firebase authentication. The default security rules require users to be authenticated. Firebase Storage is basically a powerful and simple object storage, in which you can store your files easily.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;