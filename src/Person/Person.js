
import React from 'react';

const person = (prosp) => {
    return (
        <div>
            <p onClick={prosp.click}>i'am {prosp.name} lem3alemm , i want to be best {prosp.job} developer </p>
        <p>{prosp.children}</p>
        <input type="number" onChange={prosp.changed}/>
        </div>)}
export default person;