import { useEffect, useState } from "react";
import Modal from "./Modal";
import StatBar from "./StatBar";

import './css/Pokemonlist.css';

type Pokemon = {
    id: number;
    name: string;
    hp: number;
    atk: number;
    def: number;
    atk_spe: number;
    def_spe: number;
    speed: number;
}

export default function Pokemonlist() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    //States ouverture fermeture Modal
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    // Ajoute un état pour le Pokémon sélectionné
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

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
                            padding: "20px",
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
                        <button 
                            onClick={() => {
                                setSelectedPokemon(pokemon); 
                                setModalOpen(true);
                                }}>{pokemon.name}</button>

                        </div>
                    );
                    })}
                    <Modal 
                    isOpen={isModalOpen} 
                    onClose={() => {
                        setModalOpen(false);
                        setSelectedPokemon(null);
                        }}
                    >
                        {selectedPokemon && (
                            <div style={{ textAlign: 'center' }}>
                                <h2>{selectedPokemon.name}</h2>
                                {getImageById(selectedPokemon.id) && (
                                <img
                                    src={getImageById(selectedPokemon.id)}
                                    alt={selectedPokemon.name}
                                    style={{ width: "200px", height: "200px", objectFit: "contain" }}
                                />
                                )}

                                <div className="characterPoke">
                                    <StatBar label="HP" value={selectedPokemon.hp} />
                                    <StatBar label="Attaque" value={selectedPokemon.atk} />
                                    <StatBar label="Défense" value={selectedPokemon.def} />
                                    <StatBar label="Attaque spécial" value={selectedPokemon.atk_spe} />
                                    <StatBar label="Défense spécial" value={selectedPokemon.def_spe} />
                                    <StatBar label="Vitesse" value={selectedPokemon.speed} />
                                </div>
                            </div>
                        )}

                    </Modal>
        </div>
    );
}
