import { useState } from 'react';
import axios from "axios";
import './css/Signup.css';

import Rooftop from '../components/RoofTop';
import Navbar from '../components/Navbar';

type Signup = {
    nameteam: string,
    password: string
}


export default function Signup() {

    const [ formData, setFormData ] = useState({ nameteam: "", password: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/teams", formData);
            alert("Nouvelle team enregistré !");
            setFormData({ nameteam: "", password: "" });
        } catch (err) {
            console.error("Erreur lors de l'envoi :", err)
        }
    };



    return (
        <div>
            <Rooftop />
            <Navbar />
                <div id="boxForm">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="nameteam"
                                value={formData.nameteam}
                                onChange={handleChange}
                                placeholder="Nom de l'équipe"
                                className="inputForm"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Votre mot de passe"
                                className="inputForm"
                                required
                            />
                        </div>
                        <div id="buttonSub">
                            <button type="submit" className="InputButton">
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    );
}