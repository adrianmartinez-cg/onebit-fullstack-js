import React, {Fragment} from "react";

const DescriptionWithLink = (props) => {
    return(
        <Fragment>
            <p>{props.text}</p>
            <a href = {props.link}>Leia mais</a>
        </Fragment>
    )
};

export default DescriptionWithLink;