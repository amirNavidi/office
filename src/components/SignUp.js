
import React ,{useState,useEffect }from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import {Link} from "react-router-dom"

import styles from "./SignUp.module.css"


import { validation } from './validate';

const SignUP =()=>  {

 
    const [data,setDate]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false,


    })

    const [errors,setErrors] =useState({});
    
    const [touched ,setTouched] =useState({})
    
    const focousHandler=(ev)=>{
         setTouched( {...touched,[ev.target.name]:true})
    }




    useEffect(()=>{
        setErrors(validation(data))
    },[data,touched])


    const cahngeHandler=(ev)=>{
       if(ev.target.name=="isAccepted"){
           setDate({...data ,[ev.target.name]:ev.target.checked})
       }
       else{
           setDate({...data ,[ev.target.name]:ev.target.value})
       }
    }
    const submitHandler=(ev)=>{
        ev.preventDefault();
        if(!Object.keys(errors).length){

        notify(`welcome to your site ${data.name}`,"success")
         console.log("hello");
        }
        else{
            console.log("out");
           notify("please complite all of filed " ,"error")
           setTouched({
               name:true ,
               email:true ,
               password:true ,
               confirmPassword :true ,
               isAccepted:true
            })
           
         
        }
    }


        return (
            <div>
                <div className={styles.parent} >
                    <h1 className={styles.logIn}>Sign UP</h1>
                    <form onSubmit={submitHandler}>
                        <div className={styles.fildParent}>
                            <label>Name</label> 
                            <input 
                            className={(errors.name && touched.name)? styles.fildErr : styles.fild}
                            type ="text"
                            name="name"
                            value={data.name} 
                            onChange={cahngeHandler} 
                            onFocus={focousHandler}/>
                            {errors.name && touched.name &&<span>{errors.name}</span>}
                            <br/>
                        </div>

                        <div className={styles.fildParent}>
                            <label>Email</label>
                            <input 
                             className={(errors.email && touched.email)? styles.fildErr : styles.fild}
                            type ="email" 
                            name="email" 
                            value={data.email} 
                            onChange={cahngeHandler} 
                            onFocus={focousHandler}/>
                            {errors.email && touched.email &&<span>{errors.email}</span>}
                            <br/>
                        </div>

                        <div className={styles.fildParent}>
                            <label>Password</label>
                            <input 
                             className={(errors.password && touched.password)? styles.fildErr : styles.fild}
                            type ="password" 
                            name="password" 
                            value={data.password} 
                            onChange={cahngeHandler} 
                            onFocus={focousHandler}/>
                            {errors.password && touched.password &&<span>{errors.password}</span>}
                            <br/>
                        </div>

                        <div className={styles.fildParent}>
                            <label>Confirm Password</label>
                            <input 
                             className={(errors.confirmPassword && touched.confirmPassword)? styles.fildErr : styles.fild}
                            type ="password" 
                            name="confirmPassword" 
                            value={data.confirmPassword} 
                            onChange={cahngeHandler} 
                            onFocus={focousHandler}/>
                            {errors.confirmPassword && touched.confirmPassword &&<span>{errors.confirmPassword}</span>}
                            <br />
                            <br />
                        </div>
                        <div >
                            <input type="file" />
                            <button>Show picture</button>
                        </div>
                        <br/>

                        <div className={styles.accept}>
                        <label >I accpet all policy</label>
                        <input type ="checkbox" name="isAccepted" value={data.isAccepted} onChange={cahngeHandler} />
                        </div>
                        <br/>
                        {errors.isAccepted && touched.isAccepted &&<span>{errors.isAccepted}</span>}
                        <br/><br/><br/><br/><br/>
                        <div className={styles.linkParent}>
                        <Link to='/login'>Log In</Link>
                        <input onClick={submitHandler} onFocus={focousHandler} type="submit" value="SignUp" />
                        </div>
                        </form>
                 
                    
                </div>
            <ToastContainer />
            </div>
        );
    
}

export default SignUP;