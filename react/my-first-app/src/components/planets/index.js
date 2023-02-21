import React, {Fragment} from 'react';
import Planet from './planet';

async function getPlanetsInfo(){
    let data = await fetch("http://localhost:3000/api/planets.json").then(resp => resp.json());
    return data;
}

class Planets extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            planets: []
        }
    }

    componentDidMount(){
        getPlanetsInfo().then((data) => {
            this.setState((state,props)=> ({
                planets: data['planets']
            }));
        });
    }

    retrieveIndex(planetName){
        return this.state.planets.findIndex((p)=> p.id === planetName.toLowerCase())
    }
    
    render(){
        if(this.state.planets.length > 0){
            return(
                <Fragment>
                    <h3>Planet list</h3>
                    {
                        this.state.planets.map((planet)=> {
                            return <Planet 
                                key= {planet.id}
                                id = {planet.id}
                                name = {planet.name}
                                description = {planet.description}
                                imgUrl = {planet.imgUrl}
                                link = {planet.link}
                                satellites = {this.state.planets[this.retrieveIndex(planet.name)]['satellites']}
                            />
                        })
                    }
                </Fragment>
            )
        }
        
    }
}



// satellites = {this.state.planets[planet.name]['satellites']}
export default Planets;