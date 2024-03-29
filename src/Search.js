import React, { useState } from "react";
import SearchButton from './SearchButton'; 


const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
 


  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    props.restbookings();
    console.log( "search value", searchInput)
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(searchInput);  
 }    
 <div className="label">
 <label htmlFor="customerName">Customer ID</label>
 <label className="customer-name" htmlFor="customerName">Customer name</label>
 </div>

  

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>

      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box"
          onSubmit={handleSubmit}
          >
            
            <div className="search-row">
              <input
                onChange={handleSearch}
                value={searchInput}
                type="text"
                id="customerId"
                className="form-control"
                placeholder="Customer name"
              />  
               <button className="search-btn btn-primary">Search</button>           
              
              
              {/* <SearchButton /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;


