// BillSplit.jsx
import React, { useState } from 'react';
import './BillSplit.css'; // Import CSS for styling

const BillSplit = () => {
    const [totalAmount, setTotalAmount] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [people, setPeople] = useState([]);
    const [payerIndex, setPayerIndex] = useState(null);
    const [amountPerPerson, setAmountPerPerson] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleNameChange = (index, value) => {
        const newPeople = [...people];
        newPeople[index].name = value;
        setPeople(newPeople);
    };

    const handlePayerChange = (index) => {
        setPayerIndex(index);
    };

    const handleSubmitNames = (event) => {
        event.preventDefault();
        if (numberOfPeople && numberOfPeople > 0) {
            const newPeople = Array.from({ length: numberOfPeople }, () => ({ name: '' }));
            setPeople(newPeople);
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter a valid number of people.');
        }
    };

    const calculateSplit = () => {
        if (totalAmount && payerIndex !== null && people.length > 0) {
            const splitAmount = (parseFloat(totalAmount) / (people.length - 1)).toFixed(2);
            setAmountPerPerson(splitAmount);
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter valid values and select a payer.');
            setAmountPerPerson(null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const contributions = people.map((person, index) => {
            return {
                name: person.name,
                amountOwed: index === payerIndex ? 0 : amountPerPerson,
            };
        });
        console.log('Final contributions:', contributions);
        // You can handle the final contributions as needed (e.g., save to state, send to an API, etc.)
    };

    return (
        <div className="bill-split-container">
            <h2 className="bill-split-header">Bill Split</h2>
            {people.length === 0 ? (
                <div className="bill-split-form">
                    <input
                        type="number"
                        placeholder="Total Amount"
                        value={totalAmount}
                        onChange={(e) => setTotalAmount(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Number of People"
                        value={numberOfPeople}
                        onChange={(e) => setNumberOfPeople(e.target.value)}
                    />
                    <button onClick={handleSubmitNames}>Set Names</button>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h3>Enter Each Person's Name:</h3>
                    {people.map((person, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder={`Person ${index + 1} Name`}
                                value={person.name}
                                onChange={(e) => handleNameChange(index, e.target.value)}
                            />
                            <label>
                                <input
                                    type="radio"
                                    name="payer"
                                    checked={payerIndex === index}
                                    onChange={() => handlePayerChange(index)}
                                />
                                Payer
                            </label>
                        </div>
                    ))}
                    <button type="button" onClick={calculateSplit}>Calculate Split</button>
                    {amountPerPerson && (
                        <div className="bill-split-result">
                            <h3>Each person owes: ₹{amountPerPerson} to {people[payerIndex]?.name}</h3>
                        </div>
                    )}
                    <button type="submit">Submit Contributions</button>
                </form>
            )}
        </div>
    );
};

export default BillSplit;
