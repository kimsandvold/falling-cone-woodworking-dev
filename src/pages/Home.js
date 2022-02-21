import Button from 'react-bootstrap/Button';
import React, {useEffect} from "react";
import { Title } from "../Utils/Title";

const Home = () => {
    useEffect(() => {
        document.title = Title('Home')
    },[]);

    return (
     <div>
         <h4>Home</h4>
     </div>
    );
}

export default Home;
