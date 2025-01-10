require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.TATUM_API_KEY;
const BASE_URL = "https://api.tatum.io/v3/ethereum/account/balance"; // URL Tatum API

console.log("Loaded API Key:", API_KEY);

app.post("/get-balance", async (req, res) => {
  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ error: "Address is required" });
  }

  try {
    const response = await axios.get(`${BASE_URL}/${address}`, {
      headers: { "x-api-key": API_KEY },
    });

    res.json({ balance: response.data.balance });
  } catch (error) {
    console.error("Error fetching balance:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to fetch balance" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
