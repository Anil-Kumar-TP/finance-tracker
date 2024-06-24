import React, { useState } from 'react'
import './styles.css';
import Input from '../Input';
import Button from '../Button';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function SignupSignin () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function signupWithEmail () {
    setLoading(true);
    if (name !== "" && email !== "" && password !== "" && confirmPassword !== "") {
      if (password == confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("user created ", user);
          toast.success("user created");
          setLoading(false);
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('')
          createDoc(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          // ..
       });
      } else {
        toast.error("Passwords should match!")
        setLoading(false);
      }
    } else {
      toast.error("All fields are mandatory");
      setLoading(false);
   }
  }

  function createDoc () {
    //make sure user with the uid does not exist 
    // create a doc
  }

  return (
    <div className='signup-wrapper'>
      <h2 className='title'>Sign Up on <span style={{ color: "var(--theme)" }}>FinTrack.</span></h2>
      <form>
        <Input label='Full Name' state={name} setState={setName} placeholder='John Doe'/>
        <Input type='email' label='Email' state={email} setState={setEmail} placeholder='johndoe@gmail.com'/>
        <Input type='password' label='Password' state={password} setState={setPassword} placeholder='johndoe123' t/>
        <Input type='password' label='Confirm Password' state={confirmPassword} setState={setConfirmPassword} placeholder='johndoe123' />
        <Button text={loading ? "Loading..." : 'SignUp using Email and Password'} onClick={signupWithEmail} disabled={loading} />
        <p style={{textAlign:"center",margin:0}}>or</p>
        <Button text={loading ? "Loading..." : 'SignUp using Google'} blue={true}/>
      </form>
    </div>
  )
}

export default SignupSignin;