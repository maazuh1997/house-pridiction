import React from "react";

import Button from "@material-ui/core/Button";
//import Find from '../page/Find'
//import { Link } from "react-router-dom";
import MultilineTextFields from "../component/TextFiled";
//import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const properties = [
  {
    value: 'House',
    label: 'House',
  },
  {
    value: 'opper portion',
    label: 'portion',
  },
  {
    value: 'Farm House',
    label: 'Farm ',
  },
  
]
const Prices = [
  {
    value: '1,000,000',
    label: '1,000,000',
  },
  {
    value: '2,000,000',
    label: '2,000,000',
  },
  {
    value: '3,000,000',
    label: '3,000,000 ',
  },
  {
    value: '5,000,000',
    label: '5,000,000',
  },
]
const Area = [
  {
    value: '0-5 Marla',
    label: '0-5 Marla',
  },
  {
    value: '5-10 Marla',
    label: '5-10 Marla',
  },
  {
    value: '0-5 Kanal',
    label: '0-5 Kanal ',
  },
  {
    value: '5-10 Kanal',
    label: '5-10 Kanal ',
  },
  
]
const Beds = [
  {
    value: '1 Bed',
    label: '1 Bed',
  },
  {
    value: '2 Bed',
    label: '2 Bed',
  },
  {
    value: '3 Bed',
    label: '3 Bed ',
  },
  {
    value: '4 Bed',
    label: '4 Bed ',
  },
  {
    value: '5 Bed',
    label: '5 Bed ',
  },
  {
    value: '6 Bed',
    label: '6 Bed ',
  },
  {
    value: '7 Bed',
    label: '7 Bed ',
  },
  {
    value: '8 Bed',
    label: '8 Bed ',
  },
  {
    value: '9 Bed',
    label: '9 Bed ',
  },
  {
    value: '10+ Bed',
    label: '10+ Bed ',
  },
  
]


class Btn extends React.Component {




  render() {
    
    console.log("sss")
    return (
      <div>
        <div >
          <Accordion
      
            style={{
              width: "680px",
              background: "rgba(34,34,34,.85)",
              marginLeft: "20%",
              overflow: "visible",
              border:"none",
              borderRadius:"0px",
              padding: '0px 0px 08px',
            
              
            }}
          >
            <AccordionSummary 
          
            expandIcon={<div style={{fontSize:'10px',color:'white' }}><ExpandLessIcon /></div>}>

              <div>
              <MultilineTextFields />
</div>
              <form style={{ marginLeft: "01%" }}>
                <input
                  type="text"
                  placeholder="location"
                  style={{
                    padding: "0px 10px 0px",
                    display: "flex",
                    width: "300px",
                    height: "48px",
                    fontSize: "large",
                    border: "none",
                    borderRadius:"2px"
                  }}
                />
              </form>

              <form 
              
              
              style={{ marginLeft: "01%"}}>
            
                  <Button href="./find"
                  onClick={(e)=>{e.stopPropagation()}}
               
                    style={{
                      height: "48px",
                      backgroundColor: "green",
                      color: "#fff",
                      width: "155px",
                      listStyle:"none",
                      fontSize:"16px"
                    
                      
                    }} >
                    Find
                  </Button>
                
              </form>
           
            
            </AccordionSummary>
            <div>
            <div style={{marginLeft:'15px',float:"left",display:"flex",flexDirection:"row",marginTop:"-20px"}}>
            <TextField 
            style=
            {{backgroundColor:"#fff",height:"48px",border:"none",width:'151px',marginTop:'8px',borderRadius:"2px",
          
           
          }}
        
          select
          label="Property types"
         onClick={(e)=>{e.stopPropagation()}}
          onChange={this.handleChange}
          SelectProps={{
            native: true,
          }}
         
         
        >
          {properties.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          
        </TextField>
             <div style={{marginLeft:'8px',float:"left",display:"flex",flexDirection:"row"}}>
             <TextField style={{backgroundColor:"#fff",height:"48px",border:"none",width:'155px',marginTop:'8px',borderRadius:"5px"}}
          
          select
          label="Prices (PKR) Upto"
         onClick={(e)=>{e.stopPropagation()}}
          onChange={this.handleChange}
          SelectProps={{
            native: true,
          }}
         
         
        >
          {Prices.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          </TextField>
             </div>
             
            <div style={{marginLeft:'6.100px',float:"left",display:"flex",flexDirection:"row"}}>
            <TextField style={{backgroundColor:"#fff",height:"48px",border:"none",width:'157px',marginTop:'8px',borderRadius:"5px"}}
          
          select
          label="Area"
         onClick={(e)=>{e.stopPropagation()}}
          onChange={this.handleChange}
          SelectProps={{
            native: true,
          }}
         
         
        >
          {Area.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          </TextField>
              </div>
              <div style={{marginLeft:'07px',float:"left",display:"flex",flexDirection:"row"}}>
              <TextField style={{backgroundColor:"#fff",height:"48px",border:"none",width:'131px',marginTop:'8px',borderRadius:"5px"}}
          
          select
          label="Beds"
         onClick={(e)=>{e.stopPropagation()}}
          onChange={this.handleChange}
          SelectProps={{
            native: true,
          }}
         
         
        >
          {Beds.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          </TextField>
              </div>
        </div>
           </div>
 
            
           </Accordion>
         </div>
         
       </div>
     );
   }
 }
 export default Btn;
 