import React, { useState } from "react";
import '../form.css';
import profile from '../img/Adobe_20230525_234703 (1).png';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    };

    const validateText = (text) => /^[A-Za-z\s]+$/.test(text);
    const validateNumbers = (number) => /^[0-9]+$/.test(number);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateText(firstName) || !validateText(lastName)) {
            document.querySelector('.errorFastName').textContent = 'You can only enter letters in the first and last name.';
        }

        if (password.length < 6 || !validateNumbers(password)) {
            document.querySelector('.errorPasword').textContent = 'The password can only have numbers and be longer than 6 characters.';
        }

        if (!validateNumbers(contactNumber)) {
            document.querySelector('.errorContactNumber').textContent = 'The contact number can only have numbers.';
        }

        if (!validateText(country)) {
            document.querySelector('.errorCountry').textContent = 'Country supports text only A-Z.';
        }

        if (!validateText(city)) {
            document.querySelector('.errorCity').textContent = 'City supports text only A-Z.';
        }

        if (!validateText(state)) {
            document.querySelector('.errorState').textContent = 'State supports text only A-Z.';
        }

        if (!validateNumbers(zipCode)) {
            document.querySelector('.errorZipCode').textContent = 'The zip code only accepts numbers 0-9.';
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Edit Profile</h2>
                <div className="profile">
                    <img src={profile} alt="" className="profile-image" />
                </div>

                <div className="namesRow">
                    <div className="fastName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" value={firstName} onChange={(event) => handleChange(event, setFirstName)} />
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" value={lastName} onChange={(event) => handleChange(event, setLastName)} />
                    </div>
                </div>
                <p className="errorFastName"></p>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="number">Contacts Number</label>
                <input type="text" name="number" id="number" value={contactNumber} onChange={(event) => handleChange(event, setContactNumber)} />
                <p className="errorContactNumber"></p>

                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" />

                <div className="locationRow">
                    <div className="right">
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" value={country} onChange={(event) => handleChange(event, setCountry)} />
                        <p className="errorCountry"></p>

                        <label htmlFor="state">State</label>
                        <input type="text" name="state" id="state" value={state} onChange={(event) => handleChange(event, setState)} />
                        <p className="errorState"></p>
                    </div>
                    <div className="left">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" value={city} onChange={(event) => handleChange(event, setCity)} />
                        <p className="errorCity"></p>

                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" name="zipCode" id="zipCode" value={zipCode} onChange={(event) => handleChange(event, setZipCode)} />
                        <p className="errorZipCode"></p>
                    </div>
                </div>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" value={password} onChange={(event) => handleChange(event, setPassword)} />
                <p className="errorPasword"></p>

                <input type="submit" name="enviar" id="enviar" />
            </form>
        </>
    );
};

export default Form;