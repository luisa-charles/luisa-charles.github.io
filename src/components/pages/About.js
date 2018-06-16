import React from 'react';

const About = () => {
    return (
        <main>
            <h1 className="title">About</h1>
            <div className="columns">
            <div className="column">
                <img src={"https://i.imgur.com/OX8tJy3.jpg"} alt={"Picture of Luisa"} />
            </div>
            <div className="column">
                <p>Luisa Charles is a legend.</p>
                <br />
                <p>That is all.</p>
                <br />
                <p>Made with ♥︎ by Helena.</p>
            </div>
            </div>
        </main>
    );
};

export default About;