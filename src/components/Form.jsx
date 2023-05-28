import React, { useState } from "react";
import '../form.css'
import profile from '../img/Adobe_20230525_234703 (1).png'

const From = () => {

    const [fastName, setFastName] = useState('');
    const [lastName, setlastName] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateText(fastName) || !validateText(lastName)) {
            const fastNames = document.querySelector('.errorFastName');
            fastNames.textContent = 'You can only enter letters in the first and last name.'
        };

        if (password.length < 6 || !validateNumbers(password)) {
            const passwords = document.querySelector('.errorPasword');
            passwords.textContent = 'The password can only have numbers and be longer than 6 characters.'
        }

        if (!validateNumbers(contactNumber)) {
            const contactNumbers = document.querySelector('.errorContactNumber');
            contactNumbers.textContent = 'The contact number can only have numbers.'
        }

        if (!validateText(country)) {
            const countrys = document.querySelector('.errorCountry')
            countrys.textContent = 'Country supports text only A-Z'
        }

        if (!validateText(city)) {
            const citys = document.querySelector('.errorCity')
            citys.textContent = 'City supports text only A-Z'
        }

        if (!validateText(state)) {
            const states = document.querySelector('.errorState')
            states.textContent = 'State supports text only A-Z'
        }

        if (!validateNumbers(zipCode)) {
            const zipCodes = document.querySelector('.errorZipCode')
            zipCodes.textContent = 'The zip code only accepts numbers 0-9'
        }
    }

    const handleFastNameChange = (event) => {
        setFastName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setlastName(event.target.value);
    };

    const validatePassword = (event) => {
        setPassword(event.target.value);
    }

    const validateContactNumber = (event) => {
        setContactNumber(event.target.value);
    }

    const validateCity = (event) => {
        setCity(event.target.value)
    }

    const validateState = (event) => {
        setState(event.target.value)
    }

    const validateZipCode = (event) => {
        setZipCode(event.target.value)
    }

    const validateCountry = (event) => {
        setCountry(event.target.value)
    }

    const validateNumbers = (number) => {
        const numericPattern = /^[0-9]+$/;
        return numericPattern.test(number)
    }

    const validateText = (text) => {
        const pattern = /^[A-Za-z\s]+$/;
        return pattern.test(text);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Edit Profil</h2>
                <div className="profile">
                    <img src={profile} alt="" className="profile-image" />
                </div>

                <div className="namesRow">
                    <div className="fastName">
                        <label htmlFor="firstName">Fast Name</label>
                        <input type="text" name="firstName" id="firstName" value={fastName} onChange={handleFastNameChange} />
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleLastNameChange} />
                    </div>
                </div>
                <p className="errorFastName"></p>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="number">Contacts Number</label>
                <input type="text" name="number" id="number" value={contactNumber} onChange={validateContactNumber} />
                <p className="errorContactNumber"></p>

                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" />

                <div className="locationRow">
                    <div className="right">
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" value={country} onChange={validateCountry} />
                        <p className="errorCountry"></p>

                        <label htmlFor="state">State</label>
                        <input type="text" name="state" id="state" value={state} onChange={validateState} />
                        <p className="errorState"></p>
                    </div>
                    <div className="left">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" value={city} onChange={validateCity} />
                        <p className="errorCity"></p>

                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" name="zipCode" id="zipCode" value={zipCode} onChange={validateZipCode} />
                        <p className="errorZipCode"></p>
                    </div>
                </div>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" value={password} onChange={validatePassword} />
                <p className="errorPasword"></p>

                <input type="submit" name="enviar" id="enviar" />
            </form>
        </>
    )
}

export default From