import React, { useContext } from 'react'
import { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import {query, where, getDocs} from 'firebase/firestore'
import { usersRef } from '../Firebase/Firebase'
import { appState } from '../App'
import bcrypt from 'bcryptjs'
import swal from "sweetalert";
import {  useNavigate } from "react-router-dom"
const Login = () => {
    const navigate = useNavigate()
    const useAppState = useContext(appState)
    const [login, setLoginn] = useState([
        {
          mobile:"",
          password:""
        }
    ]);
    const [loading, setLoading] = useState(false)

    const loginClick = async () => {
        setLoading(true);
        try {
          const quer = query(usersRef, where('mobile', '==', login.mobile))
          const querySnapshot = await getDocs(quer);
          querySnapshot.forEach((doc) => {
              const _data = doc.data();
                // console.log(_data);
            const isUser = bcrypt.compareSync(login.password, _data.password);
            if(isUser) {
                useAppState.setLogin(true);
              useAppState.setUserName(_data.name);
              swal({
                title: "Logged In",
                icon: "success",
                buttons: false,
                timer: 3000
              })
              navigate('/')
            } else {
              swal({
                title: "Invalid Credentials",
                icon: "error",
                buttons: false,
                timer: 3000
              })
            }
          })
        } catch (error) {
          swal({
            title: error.message,
            icon: "error",
            buttons: false,
            timer: 3000
          })
        }
        setLoading(false);
      }

  return (
    <>
    <div className="login-main-box">
        <div className="login-main">
            <div className="login-heading">
            <h1>Login</h1>
            </div>
            <div className="login-form">
                <label htmlFor='mobile_no'>Mobile NO.</label>
                <input
                 type="number"
                 name="mobile_no"
                 id="mobile_no"
                 value={login.mobile}
                 onChange={(e)=> setLoginn({...login , mobile: e.target.value})}
            />
            <label htmlFor='password'>Password</label>
                <input
                 type="password"
                 name="password"
                 id="password"
                 value={login.password}
                 onChange={(e)=> setLoginn({...login , password: e.target.value})}
            />
            <button onClick={loginClick}>{loading ? <TailSpin height={25} color="black" /> : "Login"}</button>
            </div>
            <div className='login-signup'>
            <p><span>Don't have account? </span><Link to={'/signup'}><span>SignUp</span></Link></p>
            </div> 
            <div>
            <p>Note: Your Data (Mobile No. , password)  is fully protected even me(Aditya Singh) can't see your password (protected by bcrypt) ) </p>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Login