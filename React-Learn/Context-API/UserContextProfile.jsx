// "What values are we accessing from our store?"
import { useContext } from "react";
import UserContext from "./UserContext";

const UserContextPRofile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>USER DETAILS</h1>
      <h2>Name : {user.name} </h2>
      <h2>Code : {user.code} </h2>
    </div>
  );
};

export default UserContextPRofile;
