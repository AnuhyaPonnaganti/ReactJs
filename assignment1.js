import React from 'react';

function Assignment1() {
    const profiles = [
        {
            name: 'Scott Ayres',
            title: 'Busting social media myths at the Social Media Lab...',
            connections: 23,
            image: 'user.png',
            sharedConnections: [
                'user.png'
            ],
            name1:'.2nd',
        },
        {
            name: 'Richard Beeson',
            title: 'SaaS Customer Onboarding Manager / Producer and...',
            connections: 7,
            image: 'user.png',
            sharedConnections: [
                'user.png'
            ],
            name1:'.2nd',
        },
        {
            name: 'Jacob Hilpertshofer',
            title: 'Harness your social media content and engagemen...',
            connections: 5,
            image: 'user.png',
            sharedConnections: [
                'user.png'
            ],
            name1:'.2nd',
        },
        {
            name: 'Stephanie Sweeney',
            title: 'Customer Support / Software QA Tester',
            connections: 4,
            image: 'user.png',
            sharedConnections: [
                'user.png'
            ],
            name1:'.2nd',
        },
        {
            name: 'Sarah Hecker',
            title: 'US Support & Affiliate Manager at Agorapulse',
            connections: 3,
            image: 'user.png',
            sharedConnections: [
                'user.png'
            ],
            name1:'.2nd',
        },
        {
            name: 'Curt Ziegler',
            title: 'Customer Support Hero at Agorapulse',
            connections: 3,
            image: 'user.png',
            sharedConnections: [
                'user.png'
            ],
            name1:'.2nd',
        },
        {
            name: 'Hannah Recker',
            title: 'Inbound & Marketing Operations Manager at...',
            connections: 4,
            image: 'user.png',
            sharedConnections: [
                'user.png'
            ],
            name1:'.2nd',
        },
        {
            name: 'Michael Angiletta',
            title: 'Growth Marketing | CMO | Agorapulse',
            connections: 3,
            image: 'user.png',
            sharedConnections: [
                'user.png'
            ],
            name1:'.2nd',
        },
    ];

    return (
        <div>
            <style>
                {`
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f5f5f5;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        padding: 20px;
                    }
                    .card {
                        background-color: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                        margin: 10px;
                        width: 250px;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        text-align: center;
                        transition: transform 0.2s;
                    }
                    .card:hover {
                        transform: translateY(-5px);
                    }
                    .profile-pic {
                        border-radius: 50%;
                        width: 60px;
                        height: 60px;
                        margin-bottom: 10px;
                    }
                    .shared-connection-pic {
                        border-radius: 50%;
                        width: 20px;
                        height: 20px;
                        margin-right: 5px;
                    }
                    .name {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .name1 {
                       color: #777;
                        font-size: 12px;
                        margin-bottom: 10px;  
                    }
                    .title {
                        color: #777;
                        font-size: 14px;
                        margin-bottom: 10px;
                    }
                    .shared-connections {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                        color: #333;
                        margin-bottom: 10px;
                    }
                    .connect-button {
                        background-color: #0073b1;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    .connect-button:hover {
                        background-color: #005582;
                    }
                `}
            </style>
            <div className="container">
                {profiles.map((profile, index) => (
                    <div className="card" key={index}>
                        <img src={profile.image} alt={profile.name} className="profile-pic" />
                        <div className="name"><span>{profile.name}  </span><span className="name1">{profile.name1}</span></div>
                        <div className="title">{profile.title}</div>
                        <div className="shared-connections">
                            {profile.sharedConnections.map((pic, picIndex) => (
                                <img key={picIndex} src={pic} alt="Shared Connection" className="shared-connection-pic" />
                            ))}
                             {profile.connections} shared connections
                        </div>
                        <button className="connect-button">Connect</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignment1;
