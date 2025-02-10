// "We have wrapped the UserContextProfile component inside the UserContextProvider, which means that any value or state provided by UserContextProvider will be accessible inside UserContextProfile and its children."

import UserContextProvider from "./UserContextProvider";
import UserContextPRofile from "./UserContextProfile";

function App() {
  return (
    <div>
      <UserContextProvider>
        <UserContextPRofile />
      </UserContextProvider>
    </div>
  );
}

export default App;
