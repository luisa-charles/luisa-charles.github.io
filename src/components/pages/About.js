import React from 'react';

const About = () => {
    return (
        <main id="about">
            {/* <h1 className="title">About</h1> */}
            <div className="flex-about">
                <img className="about-photo" src={"https://i.imgur.com/OX8tJy3.jpg"} alt={"Luisa Charles"} />
            </div>
            <ul className="flex-about">
                <li className="contact-info">07772714511</li>
                <li className="contact-info"><a href="mailto: ljcharles@hotmail.co.uk">Email Me @ ljcharles@hotmail.co.uk</a></li>
                {/* <li className="contact-info"><a href="https://www.linkedin.com/Luisa-Charles">Find me on LinkedIn</a></li> */}
            </ul>
            <div className="flex-about">
                <p>Luisa Charles is a recent graduate of BA (Hons) Interaction Design Arts from University of the Arts London, London College of Communication. She works across a wide range of media, from physical computing based interactive installations, to directing and designing for film and theatre. Much of her work comes under the umbrella of critical and speculative design, as well as applied work for gallery and private commissions.</p>
            </div>
        </main>
    );
};

export default About;