
import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const Signin = () => {
    const navigate = useNavigate()
    const[username,setUsername] = useState()
    const[password,setPassword] = useState()


    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-centre">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credential to access your account"}></SubHeading>
                <InputBox onChange={e =>{
                    setUsername(e.target.value)
                }} placeHolder={"gm@gmail.com"} label={"Email"}/>
                <InputBox onChange={e =>{
                    setPassword(e.target.value)
                }} placeHolder={"min 8 letter"} label={"Password"}/>
                <div className="pt-4">
                    <Button onClick={async ()=>{
                        const response = await axios.post('http://localhost:3000/api/v1/user/signin',{
                            username,password
                        })

                        localStorage.setItem('token',response.data.token)
                        navigate('/dashboard')

                    }} label={"Sign In"}></Button>
                </div>
                <BottomWarning label={"Don't have an account?"} buttontext={"Sign up"} to={"/signup"}></BottomWarning>
                
            </div>
        </div>
    </div>


}