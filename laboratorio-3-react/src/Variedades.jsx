import { useEffect, useState } from "react";
import "./styles.css";

import gta5 from "./imagenes/gta5.png";
import minecraft from "./imagenes/minecraft.png";
import fortnite from "./imagenes/fortnite.png";
import rdr2 from "./imagenes/rdr2.png";
import godofwar from "./imagenes/godofwar.png";
import spiderman from "./imagenes/spiderman.png";
import lastofus from "./imagenes/lastofus.png";
import cyberpunk from "./imagenes/cyberpunk.png";
import fc26 from "./imagenes/fc26.png";
import callofduty from "./imagenes/callofduty.png";
import forza from "./imagenes/forza.png";
import mortalkombat from "./imagenes/mortalkombat.png";

function Variedades() {

    const [videojuegos, setVideojuegos] = useState([]);

    const nombres = [
        "Grand Theft Auto V",
        "Minecraft",
        "Fortnite",
        "Red Dead Redemption 2",
        "God of War",
        "Marvel's Spider-Man",
        "The Last of Us",
        "Cyberpunk 2077",
        "EA Sports FC 26",
        "Call of Duty",
        "Forza Horizon 5",
        "Mortal Kombat 1"
    ];

    const descripciones = [
        "Un juego de acción y mundo abierto donde puedes explorar Los Santos y realizar diferentes misiones.",
        "Un juego de construcción y supervivencia donde puedes explorar un mundo abierto y crear diferentes estructuras.",
        "Un battle royale donde puedes competir contra otros jugadores y buscar la victoria.",
        "Una aventura de mundo abierto ambientada en el Viejo Oeste, con exploración, acción y una historia extensa.",
        "Una aventura de acción protagonizada por Kratos y Atreus dentro de la mitología nórdica.",
        "Una aventura de acción donde puedes recorrer Nueva York utilizando las habilidades de Spider-Man.",
        "Una aventura narrativa donde Joel y Ellie deben sobrevivir mientras recorren un mundo afectado por una infección.",
        "Un RPG de mundo abierto ambientado en Night City, con misiones, vehículos y diferentes personajes.",
        "Un videojuego de fútbol con diferentes equipos, jugadores y modos de juego.",
        "Un juego de disparos con diferentes modos, mapas y enfrentamientos.",
        "Un juego de carreras de mundo abierto donde puedes conducir diferentes vehículos.",
        "Un juego de lucha donde diferentes personajes se enfrentan utilizando habilidades especiales."
    ];

    const imagenes = [
        gta5,
        minecraft,
        fortnite,
        rdr2,
        godofwar,
        spiderman,
        lastofus,
        cyberpunk,
        fc26,
        callofduty,
        forza,
        mortalkombat
    ];

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setVideojuegos(datos.slice(0, 12));
            })
            .catch((error) => {
                console.log("Error al consumir la API:", error);
            });

    }, []);

    return (

        <div className="pagina">

            <nav className="navbar navbar-dark bg-dark">

                <div className="container">

                    <span className="navbar-brand mb-0 h1">
                        🎮 GameZone
                    </span>

                </div>

            </nav>


            <div className="contenedor">

                <div className="encabezado">

                    <h1>Catálogo de Videojuegos</h1>

                    <p>
                        Explora nuestra selección de videojuegos
                    </p>

                </div>


                <div className="productos">

                    {videojuegos.map((videojuego, indice) => (

                        <div className="tarjeta" key={videojuego.id}>

                            <img
                                src={imagenes[indice]}
                                alt={nombres[indice]}
                            />

                            <div className="contenido">

                                <span className="categoria">
                                    Videojuego
                                </span>

                                <h2>
                                    {nombres[indice]}
                                </h2>

                                <p>
                                    {descripciones[indice]}
                                </p>

                                <button className="btn btn-primary">
                                    Ver videojuego
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );
}

export default Variedades;