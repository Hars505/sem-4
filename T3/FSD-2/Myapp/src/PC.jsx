import { createContext } from "react";
import C1 from "./C1";
const FirstName = createContext();
const LastName = createContext();
function Home() {
  return (
    <>
      <FirstName.Provider value="kavan">
        <LastName.Provider value="Roy">
          <C1 />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}
export default Home;
export { FirstName };
export { LastName };
