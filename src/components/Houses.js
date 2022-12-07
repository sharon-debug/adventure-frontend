import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import './HouseCard'

const Houses = () => {
    
  const { id } = useParams();
  const [house, setHouse] = useState([]);

useEffect(() => {
    fetch(`http://127.0.0.1:3000/houses${id}`)
      .then((r) => r.json())
      .then((house) => setHouse(house));
  }, []);
}

  export default Houses;