import { createContext } from "react";
import Comp from "./Comp";
const Fname=createContext()
function Home(){
    return(<>
    <Fname.Provider value="kavan">
        <Comp />        
    </Fname.Provider>
    </>
    )
}
export default Home;
export {Fname}