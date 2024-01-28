import React,{useState} from "react";

const Tabs = ({tablist}) =>{
    const [activetab,setactivetab] = useState(tablist[0])
    console.log(activetab)
    return(
        <div>
            <div>
                <ul>
               {
               tablist.map((item)=>(
                <li onClick={()=>setactivetab(item)}>{item.title}</li>
               ))
               }
               </ul>
            </div>
            {/* {activetab!="" && <p>{activetab.content}</p>} */}
            <p>{activetab.content}</p>
        </div>
    )
}
export default Tabs;