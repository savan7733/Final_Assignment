import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081';

// Function to get products
export const getProducts = async () => {
    try {
        // Use backticks for template literals
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Optionally throw the error to handle it elsewhere
    }
};
// Function to add a product
export const addProduct = async (product) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/products`, product);
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Function to place an order (if you have it)
// const staticOrderData = {
//     "orderItems": [
//         {
//             "productId": 1,
//             "quantity": 2
//         }
//     ]
// };
export const placeOrder = async (order) => {
    const orderItemsArray = {orderItems: []};
    for (let i = 0; i < order.items.length; i++) {
        orderItemsArray.orderItems.push({
            productId: order.items[i].id, // Use id from order.items
            quantity: 1             // Keep the quantity static or adjust as needed
        });
    }
    console.log(orderItemsArray);

    try {
        const response = await axios.post('http://localhost:8080/orders', orderItemsArray);
        return response.data;
    } catch (error) {
        console.error('Error placing order:', error);
        throw error;
    }
};
