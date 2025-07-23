import { useEffect, useState } from 'react';

type Type = {
    id: number,
    name: string,
    color: number
}

export default function PokemonType() {

    const [types, setTypes] = useState<Type[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

        useEffect(() => {
        fetch('http://localhost:3000/types')
        .then(response => response.json())
        .then(data => {
            setTypes(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Types indisponible:', error);
            setLoading(false);
        });
    }, []);

    if(loading) return <p>Chargement...</p>;

    return (
        <div 
            style={{
                margin: "100px 30px 60px 30px",
                padding: "50px 30px",
                background: "#fff",
                marginTop: "60px",
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gridGap: "20px"
            }}>
            {types.map((type) => {
                return (
                        <div
                            key={type.id}
                            style={{
                            display: "inline-block",
                            width: "150px",
                            height: "60px",
                            borderRadius: "50px",
                            textAlign: "center",
                            alignContent: "center",
                            color: "#fff",
                            fontSize: "1.1rem",
                            background: `#${type.color}`,
                            
                        }}>{type.name}</div>
                )
            })}
            
        </div>
    )
}