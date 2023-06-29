const axios = require('axios');
import axios, * as others from 'axios';

const query = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka`;
  
  axios.get(query).then((response)=>{
      console.log(response.data.drinks[0].strDrink);
      console.log(response.data.drinks[0].strCategory);
      console.log(response.data.drinks[0].strInstructions);
      console.log(response.data.drinks[0].strIngredient1);
      console.log(response.data.drinks[0].strIngredient2);
      console.log(response.data.drinks[0].strIngredient3);
      console.log(response.data.drinks[0].strIngredient4);
      console.log(response.data.drinks[0].strIngredient5);

      
  
  }
  );