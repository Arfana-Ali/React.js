//  "What values does our Context Provider provide?"

import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const user = { name: "Arfana", code: 402866 };

  return (
    <div>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
