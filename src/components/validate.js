const validation =(data)=>{

     const errors={};

    if(!data.name.trim()){
       errors.name="please fill this filed"
    }
    else{
        delete errors.name
    }
    if(!data.email){
        errors.email="please fill this filed"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email="Email address is invalid"
    }
    else {
        delete errors.email
    }
   
    if(!data.password){
        errors.password="Password is required"
    }
    else if(data.password.length <6){
        errors.password="Your password must be 6 charater or more"
    }
    else{
        delete errors.password
    }
    if(!data.confirmPassword){
        errors.confirmPassword="Confirm the password"
    }
    else if(data.password !== data.confirmPassword){
        errors.confirmPassword="Password do not match"
    }
    else{
        delete errors.confirmPassword
    }

    if(data.isAccepted){
        delete errors.isAccepted
    }
    else{
        errors.isAccepted="Accept a policy if you want use this site"
    }

    return errors
}
export {validation}