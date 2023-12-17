import React, {useState} from "react";
import axios from 'axios';

function Fact(){
  const [fact, setFact] = useState("")

  async function getData (){
    const result = await axios.get("https://catfact.ninja/fact")
    setFact(result.data.fact)
  }

  return (
    <div className="container">
      <button onClick={getData}>Next Fact</button>
      <h1>{fact}</h1>
    </div>
  );

}

export default Fact;