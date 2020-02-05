import React, { useState } from 'react';
import './Regis.css';

const Regis = props => {
    const [sub, setSub] = useState(0)
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');

    const [fn, setFn] = useState(firstname);
    const [ln, setLn] = useState(lastname);

    const handleSubmit = () => {
        setSub(1);
        props.handleSubmit({ firstname, lastname });
        setFn(firstname)
        setLn(lastname)
    }
    return (
        <div>
            <h2>{props.firstname} {props.lastname}</h2>
            <div>
                <input type="text" placeholder="First name" onChange={e => setfirstname(e.target.value)}></input>
                <input type="text" placeholder="Last name" onChange={e => setlastname(e.target.value)}></input>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                {sub === 1 && firstname === fn && lastname === ln ?
                    (<h3>{firstname} {lastname}</h3>) : ''}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Regis;