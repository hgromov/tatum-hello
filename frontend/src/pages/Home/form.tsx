import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [labelText, setLabelText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    if (!inputValue) {
      setLabelText("Please enter a valid Ethereum address.");
      return;
    }

    try {
      setIsLoading(true)
      const response = await axios.post("http://localhost:5000/get-balance", {
        address: inputValue,
      });

      const balance = response.data.balance;

      setLabelText(`Balance: ${balance} ETH`);
    } catch (error) {
      console.error(
        "Error fetching balance:",
        error.response ? error.response.data : error.message
      );
      setLabelText("Failed to fetch balance. Please try again.");
    }

    setIsLoading(false)
  };

  return (
    <div>
      <p>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            const element = event.currentTarget as HTMLInputElement;
            const value = element.value;
            setInputValue(value);
          }}
          placeholder="Enter ETH wallet address to get balance"
          className="addressInput"
        />
      </p>
      <button onClick={handleButtonClick} className="getBallanceButton">
        {isLoading ? "loading.." : "Get Balance"}
      </button>
      <p className="labelText">{labelText}</p>
    </div>
  );
}

export default Form;
