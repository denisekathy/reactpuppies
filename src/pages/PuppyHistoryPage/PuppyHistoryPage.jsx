import React from "react";
import * as usersService from "../../utilities/users-service";

export default function PuppyHistoryPage() {
  async function handleCheckToken() {
    usersService.checkToken();
  }
  return (
    <>
      <h1>PuppyHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
