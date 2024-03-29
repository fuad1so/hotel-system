import React, { useEffect, useState, CSSProperties  } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Loading from "./Loading.js";
import Addbooking from "./Addbooking.js";
import fakeBookings from "./data/fakeBookings.json";

const Bookings = (props) => {
  const [bookings, setBookings] = useState([]);
  const[data,setData] = useState([]);
  const [load,setLoad] = useState(true)
  const [addb,setAddb] = useState(true)

 const bookingCange= (book ) => {
  setBookings(book);
 }
  
const addn =(Nadd)=> {
  setAddb(Nadd)
}
const adds =(Nadd)=> {
  setAddb(Nadd)
}

useEffect(() => {
 setBookings(fakeBookings)
  },[])


  const search = (searchsInput) => {
    const filteredResults = fakeBookings.filter((item) => {
      
      return (
        (item.firstName.toString().toLowerCase().includes(searchsInput.toLowerCase()))||
        (item.surname.toString().toLowerCase().includes(searchsInput.toLowerCase())) )
        
  } ); 
  {setBookings(filteredResults);}
  console.log("booking:",bookings)
       } 

  const restbookings = () => {
   
    setBookings(fakeBookings);
    
  }
  
  useEffect(() => {
   setLoad(false)
}, []);
 

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} restbookings={restbookings} />
        
 { load===true ? 

  <Loading/> : addb===true ? <SearchResults bookings={bookings}  addn={addn} bookingCange={bookingCange} />  :
    <Addbooking bookingCange={bookingCange} adds={adds} /> }

  </div>
    </div>
  );
};

export default Bookings;

