import axios from "axios"
import { useEffect, useState } from "react"


export const Balance = () =>{
    const [balance,setBalance] = useState()

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token") 
            }
        })
        .then(response => {
            setBalance(response.data.balance)
        })
    },[balance])

    return <div className="flex">
        <div className="font-bold ml-4 text-lg">
            Your Balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
}