import React, {Fragment} from 'react';
import DescriptionWithLink from '../../shared/DescriptionWithLink';

const Planet = (props) => {
    return (
        <Fragment>
            <h4>{props.name}</h4>
            <img src={props.imgUrl} width= "250px" alt={"foto de "+ props.name}></img>
            <DescriptionWithLink 
                text={props.text}
                link={props.link}
            />
        </Fragment>
    )
};

export default Planet;