import React, { useState } from "react";

const From = () => {

    const [lastName, setlastName] = useState('');
    const [fastName, setFastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateText(fastName)) {
            const fastNames = document.querySelector('.errorFastName');
            fastNames.textContent = 'Please enter only text in the Name field.'             
        };

        if (!validateText(lastName)) {
            const lastNames = document.querySelector('.errorLastName');
            lastNames.textContent = 'Enter only text in the Last Name field.'              
        };
    };

    const handleFastNameChange = (event) => {
        setFastName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setlastName(event.target.value);
    };

    const validateText = (text) => {
        const pattern = /^[A-Za-z\s]+$/;
        return pattern.test(text);
    };


return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Fast Name</label>
        <input type="text" name="name" id="name" value={fastName} onChange={handleFastNameChange}/>
        <p className="errorFastName"></p>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleLastNameChange}/>
        <p className="errorLastName"></p>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="number">Contacts Number</label>
        <input type="text" name="number" id="number" />

        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />

        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" />
        <label htmlFor="state">State</label>
        <input type="text" name="state" id="state" />
        <label htmlFor="zipCode">Zip Code</label>
        <input type="text" name="zipCode" id="zipCode" />
        <label htmlFor="country">Country</label>
        <input type="text" name="country" id="country" />

        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" />

        
        <input type="submit" name="enviar" id="enviar" />
    </form>
)
}

export default From