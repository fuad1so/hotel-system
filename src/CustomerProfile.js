import { useState,useEffect } from "react"


const CustomerProfile = (props) => {   

return (   
    

    < >
<h6> Customer ID :  {props.customersprofile.id}  </h6>

{ props.customersprofile.vip && (
<h6> Customer Email: {props.customersprofile.email} </h6>  ) }


<h6> Customer Phone number:{props.customersprofile.phoneNumber}</h6> 
</>

)

    







}

export  default CustomerProfile  ;