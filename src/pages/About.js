import React, {useEffect} from "react";
import { Title } from "../Utils/Title";

const About = () =>{
    useEffect(() => {
        document.title = Title('About')

    },[]);
    return (
        <p>
            Falling Cone Woodworking is a website to showcase ideas and concepts when it comes to woodworking design. Feel free to get in touch if you want to have a chat.
        </p>
    );
}

export default About;
