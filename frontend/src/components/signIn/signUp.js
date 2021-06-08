
import React , {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./signUp.css"
/* register */


const Register = ()=>{

    const [firstName,setfirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [country,setcountry]=useState("");
    const [dateOfBirth,setdateOfBirth]=useState("");
    const [gender,setgender]=useState("");
    const [phoneNumber,setphoneNumber]=useState("");
    const [location,setlocation]=useState("");
    const [image,setimage]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [stata, setStata] = useState(false); 
    const [stata1, setStata1] = useState(false);
    
    const cheakRegiste  =()=>{
    const newUser={ firstName, LastName, country, dateOfBirth, gender, phoneNumber, location,
        image, email, password};
      axios.post(`http://localhost:5000/register` , newUser)
       .then((response)=>{

     if(response.data._id ){
      
        console.log("result",response)
          setStata(true)
          setStata1(false)
        }else{
          setStata1(true)
          setStata(false)
          
        }
    
      }).catch((err)=>{
        console.log("Error")
      })
    }
    
      return (
        <>
        <div className ="allInput">
          <input className="inputs" type ="text" placeholder ="firstName here" onChange={(e)=>{
            setfirstName(e.target.value)
          }}/>
          <input className="inputs" type ="text" placeholder ="LastName here " onChange={(e)=>{
            setLastName(e.target.value)
          }}/>
          
          
           <input className="inputs" type ="date" placeholder ="dateOfBirth here" onChange={(e)=>{
            setdateOfBirth(e.target.value)
          }}/>
          <input className="inputs" type ="text" placeholder ="gender here " onChange={(e)=>{
            setgender(e.target.value)
          }}/>
          <input className="inputs" type ="tel" placeholder ="phoneNumber here" onChange={(e)=>{
            setphoneNumber(e.target.value)
          }}/>
          

            <input className="inputs" type ="text" placeholder ="image here " onChange={(e)=>{
            setimage(e.target.value)
          }}/>

          <input className="inputs" type ="text" placeholder ="email here" onChange={(e)=>{
            setemail(e.target.value)
          }}/>
          <input className="inputs" type ="password" placeholder ="password here" onChange={(e)=>{
            setpassword(e.target.value)
          }}/>
          
          

        </div>
        <div className="btn_reg"><button className="btn" onClick={cheakRegiste}>Register</button>
        {/*<div><p>You already have an account ?<span><Link to="/login"> log in</Link></span></p></div>*/}
        {stata?<div className="trueRegiste">The user has been created successfully</div> :""}
          {stata1?<div className="falseRegiste">Error happened while register, please try again</div> :""}</div>
        </>
      );
    }
    export default Register