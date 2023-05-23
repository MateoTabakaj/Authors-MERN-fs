import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ProductForm = (props) => {

    const { initialName,nameErr,  onSubmitProp } = props;
    const [name, setName] = useState(initialName);

    const navigate = useNavigate();
    

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name });
        // window.location.reload()
        // navigate('/')
    }

    return (
    <div className='Form'>
        {/* <h6>Add a new author</h6> */}
        <Link to={'/'}>Go to Home</Link>
        <form onSubmit={onSubmitHandler}>
        {/* {errors.map((err, index) => (
                    <p key="{index}">{err.message}</p>
                ))} */}
            <p>
                {/* <label></label><br /> */}
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                    {nameErr? <>{nameErr}</>:""}
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
            </p>
            
            <input type="button" value="Cancel" onClick={() => navigate('/')} />
            <input type="submit" />
        </form>
    </div>
    )
}
export default ProductForm;

