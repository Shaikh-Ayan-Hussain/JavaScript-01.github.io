const price_per_kg= 500;

var  weight_in_grams= prompt("How much chicken do you want to");

weight_in_grams =parseFloat(weight_in_grams);

const total_price_per_chicken = (weight_in_grams * price_per_kg) / 1000 ; 

alert(`You have to pay ${total_price_per_chicken} for ${weight_in_grams}gm of chicken`);