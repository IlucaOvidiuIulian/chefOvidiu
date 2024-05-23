const DATABASE_PATH = `http://localhost:4000`;

export default function fetchProducts(setProducts) {
    console.log(`Starting GET API from ${DATABASE_PATH}/products to fetch all products from database`);

    setProducts([]);

    fetch(`${DATABASE_PATH}/products`)
        .then(res => {
            if (!res.ok) {
                throw Error(`Getting all products failed! Reason: database backend response is ${res.status}!`);
            }
            return res.json();
        })
        .then(data => {
            if (data[0] == null || data[0] === undefined) {
                throw Error(`Failed fetching all products from database. Reason: no data provided from data base`);
            }
            setProducts(data);
            console.log('Successfully fetching PRODUCTS from Database', data);
        })
};
