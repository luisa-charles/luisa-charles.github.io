import React from 'react';

const About = () => {
    return (
        <main>
            <h1 className="title">About</h1>
            <div className="columns">
            {/* <div> */}
            <div className="column">
            {/* <div> */}
                <img src={"https://i.imgur.com/OX8tJy3.jpg"} alt={"Luisa Charles"} />
            </div>
            <div className="column">
            {/* <div> */}
                <p>Luisa Charles is a recent graduate of BA (Hons) Interaction Design Arts from University of the Arts London, London College of Communication. She works across a wide range of media, from physical computing based interactive installations, to directing and designing for film and theatre. Much of her work comes under the umbrella of critical and speculative design, as well as applied work for gallery and private commissions.</p>
                <ul>
                    <li>07772714511</li>
                    <li><a href="emailto: ljcharles@hotmail.co.uk">Email Me</a></li>
                    <li><a href="https://www.linkedin.com/Luisa-Charles">Find me on LinkedIn</a></li>
                </ul>
            </div>
            </div>
        </main>
    );
};

export default About;