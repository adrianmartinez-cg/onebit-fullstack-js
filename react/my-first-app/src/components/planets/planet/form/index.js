import React, {Fragment, useState} from 'react';

const SatelliteForm = (props) => {

    const initialState = {
        satellites: []
    }

    const transformInputToArray = (input) => {
        return input.split(",");
    }

    const [fields,setFields] = useState(initialState);

    const handleChange = (event) => setFields({
        ...fields,
        [event.currentTarget.name]: transformInputToArray(event.currentTarget.value)
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addSatellites(fields.satellites);
        setFields(initialState);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="satellites">Adicionar satélites: </label>
                    <input id="satellites" type="text" name="satellites" value={fields.satellites.join()} onChange={handleChange}/>
                </div>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default SatelliteForm;