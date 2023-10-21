import React, { useState } from 'react';
const Input = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    }
    console.log(inputValue);
    return (
        <input type="text" value={inputValue} onChange={handleInputValue}></input> 
    );
};

export {Input};