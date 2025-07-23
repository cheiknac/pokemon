import { useEffect, useState } from 'react';
import photoTeam from '../assets/1200px-Team_Plasma-NB.png'

type Team = {
    id: number,
    name: string,
    description: string
}


export default function PokemonTeam() {

    const [ teams, setTeams ] = useState<Team[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        fetch('http://localhost:3000/teams')
        .then(response => response.json())
        .then(data => {
            setTeams(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Teams indisponible:', error);
            setLoading(false);
        });
    }, []);

        if(loading) return <p>Chargement...</p>;

    return (
        <div
            style={{
                margin: "100px 30px 60px 30px",
                padding: "30px",
                borderRadius: "1rem",
                background: "#fff",
                marginTop: "60px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: "20px"
            }}>
            {teams.map((team) => {
                return (
                    <div
                    key={team.id}
                    style={{
                        textAlign: "center",
                        border: "1px solid #eaeaea",
                        padding: "20px",
                        borderRadius: "1rem"
                    }}>
                        <img style={{
                            width: "200px"
                        }}
                        src={photoTeam} 
                        alt="team pokemon"/>
                        <h2 style={{
                            fontSize: "1.8rem",
                            fontWeight: "900"
                            }}>{team.name}</h2>
                        <p style={{
                            fontSize: "1.1rem"
                        }}><strong>Slogan:</strong> "{team.description}"</p>
                    </div>
                )
            })}
        </div>
    )
}