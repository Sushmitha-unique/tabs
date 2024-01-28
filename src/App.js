import React from "react";
import Tabs from "./Components/Tabs";

const tablist =[
    {
        title:"Tab 1",
        content:"This is discription of tab 1"
    },
    {
        title:"Tab 2",
        content:"This is discription of tab 2"
    },
    {
        title:"Tab 3",
        content:"This is discription of tab 3"
    }
]
const App = () =>{
   return(
    <div>
        <Tabs  tablist={tablist}/>
    </div>
   )
}

export default App;