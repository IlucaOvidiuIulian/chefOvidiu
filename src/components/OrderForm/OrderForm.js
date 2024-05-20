import React from "react";
import Logo from "../Logo/Logo";
import { useAuth } from "../../contexts/AuthContext";
export default function OrderForm() {
  const { isLoggedIn, authUser } = useAuth();
  console.log(authUser);
  return (
    <div className="overlay">
      <div className="order-form">
        <Logo width={300} />
        <form>
          <input
            type="text"
            placeholder="Nume Prenume"
            value={isLoggedIn ? authUser.username : ""}
            required
          />
          <input type="text" placeholder="Adresa" value="" required />
          <input
            type="number"
            placeholder="Nr telefon"
            maxLength="10"
            required
          />
          <input type="text" placeholder="Nr card" maxLength="19" required />

          <input type="number" placeholder="cvv" required />
        </form>
      </div>
    </div>
  );
}
