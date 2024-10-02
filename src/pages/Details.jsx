import React from "react";
import { useParams } from 'react-router-dom';
import data from '../data/datas.json';
import CardDetailArtisan from '../components/CardDetailArtisan';
import About from '../components/About';
import Contact from '../components/Contact';
import "../styles/details.css";

function Details(){
    const { artisanId } = useParams()
    const selectedArtisan = data.find(artisan => artisan.id === artisanId)
    return(
        <section className="page">
            <h2>{selectedArtisan.name}</h2>
            <div className="sep1"></div>
            <ul className='row list-card list-artisan'>
                <CardDetailArtisan
                    specialty={selectedArtisan.specialty}
                    location={selectedArtisan.location}
                    website={selectedArtisan.website}
                    note={selectedArtisan.note}
                />
                <About
                    about={selectedArtisan.about} 
                />
            </ul>
            <Contact />
        </section>
    );
}

export default Details;