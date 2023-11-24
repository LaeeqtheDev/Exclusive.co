// Constant for the API endpoint
const API_ENDPOINT = 'https://fakestoreapi.com/products';

// Function to fetch data from the API
const fetchProducts = () => {
  return fetch(API_ENDPOINT)
    .then((res) => res.json())
    .then((json) => {
      console.log(json); // Log the fetched data to the console
      return json;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error for further handling if needed
    });
};

export { API_ENDPOINT, fetchProducts };
