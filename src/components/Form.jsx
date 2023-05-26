import React, { useState } from "react";
import '../form.css'

const From = () => {

    const [lastName, setlastName] = useState('');
    const [fastName, setFastName] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');

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

        if (password.length < 6 || !validateNumbers(password)) {
            const password = document.querySelector('.errorPasword');
            password.textContent = 'The password can only have numbers and be longer than 6 characters.'
        }

        if (!validateNumbers(contactNumber)) {
            const contactNumbers = document.querySelector('.errorContactNumber');
            contactNumbers.textContent = 'The contact number can only have numbers.'
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

    const validateNumbers = (number) => {
        const numericPattern = /^[0-9]+$/;
        return numericPattern.test(number)
    }

    const validateText = (text) => {
        const pattern = /^[A-Za-z\s]+$/;
        return pattern.test(text);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div class="row">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" value={lastName} onChange={handleFastNameChange} />
                    <p className="errorFastName"></p>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleLastNameChange} />
                    <p className="errorLastName"></p>
                </div>
            </div>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="number">Contacts Number</label>
            <input type="text" name="number" id="number" value={contactNumber} onChange={validateContactNumber} />
            <p className="errorContactNumber"></p>

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
            <input type="text" name="password" id="password" value={password} onChange={validatePassword} />
            <p className="errorPasword"></p>

            <input type="submit" name="enviar" id="enviar" />
        </form>
    )
}

export default From