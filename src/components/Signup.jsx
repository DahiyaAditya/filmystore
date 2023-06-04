import React from 'react'
import { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import app from '../Firebase/Firebase'
import swal from 'sweetalert'
import bcrypt from 'bcryptjs'
import { addDoc } from "firebase/firestore";
import { usersRef } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
const auth = getAuth(app);


const Signup = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState([
    {
      name:"",
      mobile:"",
      password:""
    }
]);
  const [loading, setLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false);
  const [OTP, setOTP] = useState("");
  const auth = getAuth();
    
  const generateRecaptha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  }

const requestOtp = () => {
  setLoading(true);
  generateRecaptha();
  let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91${signup.mobile}`, appVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      swal({
        text: "OTP Sent",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      setOtpSent(true);
      setLoading(false);
    }).catch((error) => {
      console.log(error)
    })
}

const verifyOTP = () => {
  try {
    setLoading(true);
    window.confirmationResult.confirm(OTP).then((result) => {
      uploadData();
      swal({
        text: "Sucessfully Registered",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      navigate('/login')
      setLoading(false); 
    })
  } catch (error) {
    console.log(error);
  }
}

const uploadData = async () => {
  try {
    const salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(signup.password, salt);
    await addDoc(usersRef, {
      name: signup.name,
      password: hash,
      mobile: signup.mobile
    });
  } catch(err) {
    console.log(err);
  }
  // await addDoc(usersRef , {signup});
}

  return (
    
   
    <>
    <div className="login-main-box">
    {
      otpSent ?
      <div className="login-main">
            <div className="login-heading">
            <h1>Sign Up</h1>
            </div>
            <div className="login-form">
            <label htmlFor='name'>OTP</label>
                <input
                 type="text"
                 name="otp"
                 id="otp"
                 value={OTP}
                 onChange={(e)=> setOTP(e.target.value)}
            />
            <button onClick={verifyOTP}>{loading ? <TailSpin height={25} color="black" /> : "Confirm Otp"}</button>
            </div>
            <div className='login-signup'>
            <p><span>Already have account? </span><Link to={'/login'}><span>Login</span></Link></p>
            </div> 
        </div>
    :
        <div className="login-main">
            <div className="login-heading">
            <h1>Sign Up</h1>
            </div>
            <div className="login-form">
            <label htmlFor='name'>Name</label>
                <input
                 type="text"
                 name="name"
                 id="name"
                 value={signup.name}
                 onChange={(e)=> setSignup({...signup , name: e.target.value})}
            />
                <label htmlFor='mobile_no'>Mobile NO.</label>
                <input
                 type="number"
                 name="mobile_no"
                 id="mobile_no"
                 value={signup.mobile}
                 onChange={(e)=> setSignup({...signup , mobile: e.target.value})}
            />
            <label htmlFor='password'>Password</label>
                <input
                 type="password"
                 name="password"
                 id="password"
                 value={signup.password}
                 onChange={(e)=> setSignup({...signup , password: e.target.value})}
            />
            <button onClick={requestOtp}>{loading ? <TailSpin height={25} color="black" /> : "Request OTP"}</button>
            </div>
            <div className='login-signup'>
            <p><span>Already have account? </span><Link to={'/login'}><span>Login</span></Link></p>
            </div> 
        </div>
}
<div id="recaptcha-container"></div>
 </div>
    </>
    
  )
}

export default Signup