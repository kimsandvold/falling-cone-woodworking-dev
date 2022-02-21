import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Title } from "../Utils/Title";

const Projects = () => {
    useEffect(() => {
        document.title = Title('Projects')
    }, []);

    return (
        <div>
            <h4>Projects</h4>
            <div className="row">
                <div className="col-6">
                   One
                </div>
                <div className="col-6">
                    Two
                </div>
            </div>
        </div>
    );
}

export default Projects;
