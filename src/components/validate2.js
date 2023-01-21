const validation2 =(data)=>{

    const errors={};

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
   

   return errors
}
export {validation2}