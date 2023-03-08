import React, {Fragment, useState, useEffect} from 'react';
import DescriptionWithLink from '../../shared/DescriptionWithLink';
import SatelliteForm from './form';

const Planet = (props) => {

    const initialState = {
        id : props.id,
        name : props.name,
        description : props.description,
        imgUrl : props.imgUrl,
        link : props.link,
        satellites : props.satellites
    }

    const [planetData,setPlanetData] = useState(initialState);

    const addSatellites = (satellites) => {
        let prevSatellites = planetData.satellites;
        setPlanetData({...planetData, satellites: [...prevSatellites, ...satellites]});
    }

    return (
        <Fragment>
            <h4>{planetData.name}</h4>
            <img src={planetData.imgUrl} width= "250px" alt={"foto de "+ planetData.name}></img>
            <DescriptionWithLink 
                text={planetData.description}
                link={planetData.link}
            />
            <SatelliteForm addSatellites = {addSatellites} />    
            <p> Satélites: </p>
            <ul>
                {
                    planetData.satellites.map((s,index) => <li key={index}>{s}</li>)
                }
            </ul>
        </Fragment>
    );
};
export default Planet;