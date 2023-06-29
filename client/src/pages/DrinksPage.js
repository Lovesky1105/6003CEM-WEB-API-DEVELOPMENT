import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function DrinksPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
      .then(response => response.json())
      .then(data => setRecords(data.drinks)) // Extract drinks array from the response
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <ul>
        {records.map((drink, index) => (
          <li key={index}>
            {drink.idDrink} | {drink.strDrink}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DrinksPage;