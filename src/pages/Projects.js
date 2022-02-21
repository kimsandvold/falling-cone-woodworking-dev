import React, {useEffect} from "react";
import { Title } from "../Utils/Title";

const Projects = () =>{
    useEffect(() => {
        document.title = Title('Projects')
    },[]);

    return (
        <div>Projects</div>
    );
}

export default Projects;
