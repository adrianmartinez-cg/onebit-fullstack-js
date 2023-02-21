import React, {Fragment, useState} from 'react';

const Form = (props) => {

    const initialState = {
        name: '',
        description: '',
        imgUrl: '',
        link: '',
        satellites: []
    }

    const [fields,setFields] = useState(initialState);

    const handleChange = (event) => setFields({
        ...fields,
        [event.currentTarget.name]: event.currentTarget.value // [] - Computed property name
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addPlanet(fields);
        setFields(initialState);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input id="description" type="text" name="description" value={fields.description} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="link">Link: </label>
                    <input id="link" type="text" name="link" value={fields.link} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="imgUrl">Image Url: </label>
                    <input id="imgUrl" type="text" name="imgUrl" value={fields.imgUrl} onChange={handleChange}/>
                </div>
                <br/>
                <input type="submit"/>
            </form>

        </Fragment>
    )
}

export default Form;