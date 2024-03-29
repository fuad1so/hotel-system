import React, { useEffect, useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile.js";
import { AES } from "crypto-js";


const SearchResults = (props) => {
  const [selectedRow, setSelectedRow] = useState(false);
  const [customersprofile ,setCustomersprofile]= useState([]);
  const [sortedcolumn, setsorrtedColumn] = useState(null);
  const[sortdirection,setSortdirection  ]= useState('ASC');
 



  const RowSelection = (bookingId) => {
    setSelectedRow((SelectedRow) => 
      SelectedRow == bookingId ? null : bookingId);
  };

  const Handleprofile = (bookings) => { 
 
  setCustomersprofile(bookings)
    
 console.log(customersprofile);
  }

const handlesort=(column)=> {
  if(sortedcolumn===column){
    setSortdirection(sortdirection==='ASC' ? 'DESC' : 'ASC')
  } else{
    setsorrtedColumn(column);
    setSortdirection('ASC');
  }
if (sortedcolumn) {
const sortbookings = [... props.bookings];
  sortbookings.sort((a , b)=> {
  const aValue = a[sortedcolumn] ;
  const bValue = b[sortedcolumn] ;
  if (aValue<bValue) return sortdirection ==='ASC' ? -1 : 1;
  if (aValue>bValue ) return sortdirection ==='ASC' ? 1: -1;
  console.log('aValue:', aValue  )
  return 0;  }  )
  props.bookingCange ( sortbookings);}
 
  
}


  const calculateNumberOfNights = (checkInDate, checkOutDate) => {
    const start = moment(checkInDate);
    const end = moment(checkOutDate);
    return end.diff(start, "days");
  };
  if (!Array.isArray(props.bookings)) {
  return null; }
  return (
    <>
    
    <table className="table">
    <thead className={sortdirection==='ASC' ? "tablehead" : " tableheade" }>
        <tr>
          <th onClick={()=>handlesort('id') }   >ID</th>
          <th onClick={()=>handlesort('title') } >Title</th>
          <th onClick={()=>handlesort('firstName') }>FirstName</th>
          <th onClick={()=>handlesort('surname') }>Surname</th>
          <th onClick={()=>handlesort('email') }>Email</th>
          <th onClick={()=>handlesort('roomId') }>Room ID</th>
          <th onClick={()=>handlesort('checkInDate') }>Check-in Date</th>
          <th onClick={()=>handlesort('checkOutDate') }>Check-out Date</th>
          <th onClick={()=>handlesort('Nights') } >Nights</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map((booking,index) => (
          
          <tr
            key={booking.id}
            onClick={() => RowSelection(booking.id)}
            style={{
              backgroundColor: selectedRow === booking.id ? "lightgrey" : "inherit",
            }}
          >
            
            <td>{index+1}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>{calculateNumberOfNights(booking.checkInDate, booking.checkOutDate)}</td>
            <td>{<button className="profile" onClick={()=>Handleprofile(booking)}>show profile</button> }</td>
            
          </tr>
        ))}
      </tbody>
    </table>
    <button type="button" className="Nbt" onClick={() => props.addn(false)} key={'Newbooking'} > New booking </button>
   
{ customersprofile.length === 0 ? 
null :
    < CustomerProfile customersprofile = {customersprofile}/> }
  </>
  );

};

export default SearchResults;








