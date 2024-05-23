const DATABASE_PATH = `http://localhost:4000`;

export default function login(
  email,
  password,
  setAuthUser,
  setIsLoggedIn,
  setBasket
) {
  setAuthUser(null);
  setIsLoggedIn(false);

  console.log(
    `Starting GET REQUEST from ${DATABASE_PATH} to get the user data`
  );

  fetch(`${DATABASE_PATH}/users?email=${email}&password=${password}`)
    .then((res) => {
      // Check for the response to be OK
      if (!res.ok) {
        console.error(
          `Getting user data from data base failed from ${email}! Reason: database backend response is ${res.status}!`
        );
        return;
      }
      return res.json();
    })
    .then((data) => {
      // Empty data check
      if (data[0] == null || data[0] === "") {
        console.error(
          `Getting user data from data base failed from ${email}! Reason: password or email wrong`
        );
        return;
      }
      let user = data[0];
      user.password = "";

      console.log("Getting user data from data base is a SUCCESS!", user);

      // Set the user in AuthContext
      setAuthUser(user);
      setIsLoggedIn(true);

      // Merge local storage with user database storage
      let newBasket = [];
      try {
        const localBasket = JSON.parse(localStorage.getItem("BASKET"));
        localBasket == null || localBasket === undefined
          ? (newBasket = [...user.basket])
          : (newBasket = [...localBasket, ...user.basket]);
      } catch (e) {
        newBasket = [...user.basket];
      }
      setBasket(newBasket);
      localStorage.setItem("BASKET", []);

      console.log("LOGIN SUCCESSFULLY");
    });
}

export function register(
  userRegisterRequest,
  setAuthUser,
  setIsLoggedIn,
  setBasket
) {
  setAuthUser(null);
  setIsLoggedIn(false);

  console.log(
    `Starting GET REQUEST from ${DATABASE_PATH} to check the user existence in database`
  );

  fetch(`${DATABASE_PATH}/users?email=${userRegisterRequest.email}`)
    .then((res) => {
      if (!res.ok) {
        throw Error(
          `Error at checking if the user with email ${userRegisterRequest.email} exists. Reason: database backend response is ${res.status}!`
        );
      }
      return res.json();
    })
    .then((data) => {
      if (data[0] == null && data[0] === undefined) {
        console.log(
          `Starting POST API to ${DATABASE_PATH} for creating a new user!`
        );

        fetch(`${DATABASE_PATH}/users`, {
          method: "POST",
          body: JSON.stringify(userRegisterRequest),
        })
          .then((res) => {
            if (!res.ok) {
              console.error(
                `Creating user data to data base failed with email ${userRegisterRequest.email}! Reason: database backend response is ${res.status}!`
              );
              return;
            }
            return res.json();
          })
          .then((data) => {
            if (data == null || data === "") {
              console.error(
                `Creating user to data base failed with email ${userRegisterRequest.email}! Reason: invalid data to register: ${userRegisterRequest}`
              );
              return;
            }
            let user = data;
            user.password = "";
            console.log("Creating user data to data base is a SUCCESS!", user);

            setAuthUser(user);
            setIsLoggedIn(true);

            // Merge local storage with user database storage
            let newBasket = [];
            try {
              const localBasket = JSON.parse(localStorage.getItem("BASKET"));
              localBasket == null || localBasket === undefined
                ? (newBasket = [...user.basket])
                : (newBasket = [...localBasket, ...user.basket]);
            } catch (e) {
              newBasket = [...user.basket];
            }
            setBasket(newBasket);
            localStorage.setItem("BASKET", []);

            console.log("REGISTER SUCCESSFULLY");
          });
      } else {
        console.error(
          `Failed to REGISTER user ${userRegisterRequest.username}. Reason: user already exists `
        );
      }
    });
}
