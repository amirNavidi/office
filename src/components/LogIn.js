
import React ,{useState,useEffect }from 'react';
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css"
import { validation2 } from './validate2';

const LogIn =()=>  {

 
    const [data,setDate]=useState({
        email:"",
        password:"",
    })

    const [errors,setErrors] =useState({});
    
    const [touched ,setTouched] =useState({})
    
    const focousHandler=(ev)=>{
         setTouched( {...touched,[ev.target.name]:true})
    }




    useEffect(()=>{
        setErrors(validation2(data))
    },[data,touched])


    const cahngeHandler=(ev)=>{
  
           setDate({...data ,[ev.target.name]:ev.target.value})
       
    }
    const submitHandler=(ev)=>{
        ev.preventDefault();
        if(!Object.keys(errors).length){

        notify(`welcome to your site ` ,"success")
         console.log("hello");
        }
        else{
            console.log("out");
           notify("please complite all of filed " ,"error")
           setTouched({
            
               email:true ,
               password:true ,
           
            })
           
         
        }
    }


        return (
            <div>
                <div className={styles.parent} >
                    <h1 className={styles.logIn}>LogIn</h1>
                    <form onSubmit={submitHandler}>
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
                        <br/><br/><br/><br/><br/>
                        <div className={styles.linkParent}>
                        <Link to='/signup'>Sign Up</Link>
                        <input onClick={submitHandler} onFocus={focousHandler} type="submit" value="LogIn" />
                        </div>
                        </form>
                 
                    
                </div>
            <ToastContainer />
            </div>
        );
    
}

export default LogIn;