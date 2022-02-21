import React, { useEffect } from "react";
import { Title } from "../Utils/Title";

const About = () => {
    useEffect(() => {
        document.title = Title('About')

    }, []);
    return (
        <div className="row">
            <div className="col-8">
                <h4>About</h4>
                <p>
                    Falling Cone Woodworking is a website to showcase ideas and concepts when it comes to woodworking design. Feel free to get in touch if you want to have a chat.
                </p>
            </div>
            <div className="col-4">
                <h4>Contact</h4>
                <a href=""><i class=""></i>Visit on Facebook</a>
            </div>
        </div>

    );
}

export default About;
