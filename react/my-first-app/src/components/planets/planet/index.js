import React, {Fragment} from 'react';
import DescriptionWithLink from '../../shared/DescriptionWithLink';

class Planet extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            satellites: props.satellites
        }
        this.name = props.name;
        this.imgUrl = props.imgUrl;
        this.description = props.description;
        this.link = props.link;
    }

    render(){
        
            return (
                <Fragment>
                    <h4>{this.name}</h4>
                    <img src={this.imgUrl} width= "250px" alt={"foto de "+ this.name}></img>
                    <DescriptionWithLink 
                        text={this.description}
                        link={this.link}
                    />
                    <p> Satélites: </p>
                    <ul>
                        {
                            this.state.satellites.map(s => <li>{s}</li>)
                        }
                    </ul>
                </Fragment>
            )
        
    }
}

export default Planet;