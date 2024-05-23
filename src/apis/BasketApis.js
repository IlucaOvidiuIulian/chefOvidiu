const DATABASE_PATH = `http://localhost:4000`;

export default function updateBasket (newBasket, authUser) {
    console.log(`Starting GET API from ${DATABASE_PATH} to get the user data`);

    fetch(`${DATABASE_PATH}/users/${authUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify({ basket: newBasket }),
    })
      .then((res) => {
        if (!res.ok) {
            throw Error(`Saving basket products failed! Reason: error from the backend json server, response is ${res.status}!`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Update basket successfully", data);
        return data;
      });
  }