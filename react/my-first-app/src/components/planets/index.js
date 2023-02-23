import React, {Fragment, useState, useEffect} from 'react';
import Planet from './planet';
import Form from './form';

async function getPlanetsInfo(){
    let data = await fetch("http://localhost:3000/api/planets.json").then(resp => resp.json());
    return data;
}

const Planets = (props) => {

    const [planets,setPlanets] = useState([]);

    window.planets = planets;

    useEffect(() => {
        getPlanetsInfo().then(data => {
            setPlanets(data['planets']);
        });
    },[]);

    const addPlanet = (newPlanet) => {
        setPlanets([...planets,newPlanet]);
    }

    const retrieveIndex = (planetName) => {
        return planets.findIndex((p)=> p.id === planetName.toLowerCase());
    }

    return(
        <Fragment>
            <h3>Planet list</h3>
            <hr/>
            <Form addPlanet = {addPlanet}/>
            <hr/>
            {
                planets.map((planet)=> {
                    return <Planet 
                        key= {planet.id}
                        id = {planet.id}
                        name = {planet.name}
                        description = {planet.description}
                        imgUrl = {planet.imgUrl}
                        link = {planet.link}
                        satellites = {planets[retrieveIndex(planet.name)]?.['satellites'] ?? []}
                    />
                })
            }
        </Fragment>
    );
};

export default Planets;