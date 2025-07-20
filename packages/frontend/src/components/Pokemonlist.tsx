import { useEffect, useState } from "react";
import './css/Pokemonlist.css';

type Pokemon = {
    id: number;
    name: string;
}

export default function Pokemonlist() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

// Charger toutes les images locales de pokémon
const imageMap = import.meta.glob('../assets/pokelist/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

// Fonction pour retrouver l'image par ID
const getImageById = (id: number): string | undefined => {
  const key = `../assets/pokelist/${id}.webp`;
  return imageMap[key];
};

    useEffect(() => {
        fetch('http://localhost:3000/pokemons')
        .then(response => response.json())
        .then(data => {
            setPokemons(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Pokemons indisponible:', error);
            setLoading(false);
        });
    }, []);

    if(loading) return <p>Chargement...</p>;

    return (
        <div id="boxList">
                {pokemons.map((pokemon) => {
                    const imageUrl = getImageById(pokemon.id);

                    return (
                        <div id="pokemonCard"
                        key={pokemon.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "10px",
                            textAlign: "center",
                        }}
                        >
                        {imageUrl ? (
                            <img
                            src={imageUrl}
                            alt={pokemon.name}
                            style={{
                                width: "200px",
                                height: "200px",
                                objectFit: "contain",
                                marginBottom: "8px",
                            }}
                            />
                        ) : (
                            <p>Image manquante</p>
                        )}
                        <p>{pokemon.name}</p>
                        </div>
                    );
                    })}
        </div>
    );
}
