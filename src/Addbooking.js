import { useState , useEffect} from "react"
import datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';


const Addbooking = (props)=> {
    let updatetestbook = {firstName:true,
        surname: true,
        email: true,
       roomId: true, }
       const [errortest, setErrortest ] = useState(updatetestbook)  
    const [ errormessage, setErrormessage]=useState('') 
    const [selectedDate, setSelectedDate] = useState(null);
    const  [ onbook , setOnebook ]= useState ({

        Id:'',
        firstName:'',
        surname: '',
        email: '',
        title : '',
        roomId: '',
        checkInDate: '',
        checkOutDate:''
    })

const handleformChange=(event)=> {

const { value,id} = event.target;
setOnebook((prevData) =>( { ... prevData, [id]:value}));
}



useEffect(() => {
  
    console.log("onbook during render:", onbook);
   
  });  

const handleAdd =(event)=> {
    event.preventDefault();
   
   if (isValid(onbook,updatetestbook))
    {
    props.bookingCange ((prevDataa) => [...prevDataa, onbook]);
    setOnebook ( {
        firstName:'',
        surname: '',
        email: '',
        title : '',
        roomId: '',
        checkInDate: '',
        checkOutDate:''   }) }

        else {
            setErrormessage(  'there are some mistakes in the form ')
            setTimeout(() => { setErrormessage(null)},4000)    
        }

        return (
            <div className="red">

                errormessage &&
                   <h1> {errormessage} </h1> 
                   
                   
            </div> )

    } 




const isValid=(onbook,updatetestbook)=> {
   

 !(onbook.firstName==="") ? updatetestbook.firstName= true :updatetestbook.firstName=false;
 !(onbook.surname==="") ? updatetestbook.surname=true : updatetestbook.surname=false ;
(onbook.email.includes("@") && onbook.email.includes(".")) ? updatetestbook.email=true : updatetestbook.email=false ;
    !isNaN(onbook.roomId) ? updatetestbook.roomId=true: updatetestbook.roomId=false  ;  
   setErrortest(updatetestbook);
   
    console.log("updatetestbook during render:", errortest);
return updatetestbook.firstName && updatetestbook.surname && updatetestbook.email && updatetestbook.roomId 
   

 
   

}










    return (
        <>
        <div className="redAlert" >

                {errormessage &&
                               <p> {errormessage} </p> }                
            </div>
    <div  className= " addform" >
<form onSubmit={handleAdd}  className= " Addform" >
 <label   className="addlabel"> First Name  </label>
<input value={onbook.firstName } type="text" id="firstName" placeholder="first name" onChange ={handleformChange} className={errortest.firstName ? 'isValis' : 'Invalid' }  />
<label   className="addlabel"> Sur Name  </label>
<input value={onbook.surname} type="text" id="surname" placeholder="lastname " onChange ={handleformChange} className={errortest.surname ? 'isValis' : 'Invalid' } />
<label   className="addlabel"> E-mail  </label>
<input value={onbook.email} type="text" id="email" placeholder="email " onChange ={handleformChange}  className={errortest.email ? 'isValis' : 'Invalid' } />
<label   className="addlabel"> Title  </label>
<input value={onbook.title} type="text" id="title" placeholder="title" onChange ={handleformChange}   />
<label   className="addlabel"> Rooom ID  </label>
<input value={onbook.roomId} type="text" id="roomId" placeholder="room id " onChange ={handleformChange} className={errortest.roomId ? 'isValis' : 'Invalid' } />
<label   className="addlabel"> Check in date  </label>
<input value={onbook.checkInDate} type="date" id="22" placeholder="checkindate " className="start"  onChange ={handleformChange} />
<label   className="addlabel"> Check out date   </label>
<input value={onbook.checkOutDate} type="date" id="22" placeholder="checkoutdate" className="end"  onChange ={handleformChange} />
<button type= 'submit'  >ADD   </button>
<button type="button" onClick={()=> props.adds(true)}>Back  </button>

</form>
</div>      
</>
)

      
}
export default Addbooking ;