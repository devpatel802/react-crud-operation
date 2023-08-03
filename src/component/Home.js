/*import React from "react";
import "./Employee.js";
import Employee from "./Employee.js";

function Home(){

    return(
        <div style={{margin:"10rem"}}>
            <Table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                    </tr>
                </thead>
               <tbody>
                {
                    Employee && Employee.length > 0
                    ?
                    Employee.map((item)=>{
                        return(
                            <tr>
                                <td>
                                {item.Name}
                                </td>
                                <td>
                                {item.Age}
                                </td>
                            </tr>
                        )
                    })
                    :
                    "No Any data"
                }
               </tbody>
            </Table>
            
        </div>
    )

}*/
import React, { useState } from 'react'

const Home = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
  return <>
 
 <form>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input onChange={ (e) => setName(e.target.value)} type="text" className="form-control"  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email     </label>
    <input type="email" onChange={ (e)=> setEmail(e.target.value) } className="form-control" />
  </div>
 {name}
 {email}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


</>
}

export default Home
