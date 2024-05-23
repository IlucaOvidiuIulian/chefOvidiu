const DATABASE_PATH = `http://localhost:4000`;

export default function createOrder(newOrder, authUser, removeAllProductsFromBasket) {

    if (authUser == null) {
        fetch(`${DATABASE_PATH}/anonymousOrders`)
            .then((res) => {
                if (!res.ok) {
                    throw Error(`Getting old anonymous orders failed ${newOrder}! Reason: error from the backend json server, response is ${res.status}!`);
                }
                return res.json();
            })
            .then((previousAnonymousOrders) => {
                console.log("Previous anonymous orders: ", previousAnonymousOrders);
                console.log(`Starting PUT REQUEST for ${DATABASE_PATH} to save anonymous order`);

                if (previousAnonymousOrders.length <= 0) {
                    previousAnonymousOrders = [];
                }
                fetch(`${DATABASE_PATH}/anonymousOrders`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application.json",
                    },
                    body: JSON.stringify([...previousAnonymousOrders, newOrder]),
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw Error(`Creating new anonymous order failed ${newOrder}! Reason: error from the backend json server, response is ${res.status}!`);
                        }
                        return res.json();
                    })
                    .then((data) => {
                        console.log("NEW ANONYMOUS ORDER CREATED", data);
                        removeAllProductsFromBasket();
                    });
            });
    } else {
        fetch(`${DATABASE_PATH}/users/${authUser.id}`)
            .then((res) => {
                if (!res.ok) {
                    throw Error(`Creating new order failed ${newOrder}! Reason: error from the backend json server, response is ${res.status}!`);
                }
                return res.json();
            })
            .then((user) => {
                console.log("Previous orders: ", user.orders);
                console.log(`Starting GET API from ${DATABASE_PATH} to get the user data`);

                if (user.orders.length <= 0) {
                    user.orders = [];
                }
                fetch(`${DATABASE_PATH}/users/${authUser.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application.json",
                    },
                    body: JSON.stringify({ orders: [...user.orders, newOrder] }),
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw Error(`Creating new order failed ${newOrder}! Reason: error from the backend json server, response is ${res.status}!`);
                        }
                        return res.json();
                    })
                    .then((data) => {
                        console.log("New order created", data);
                        removeAllProductsFromBasket();
                    });
            });
    }
}