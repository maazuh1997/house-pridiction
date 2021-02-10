import React from 'react'

 import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
 const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
  
      },
    },
  }));

export default function Select(){
    const classes = useStyles();
  

    const handleChange = (event) => {
    
    };
    return(
        <div >
        <form 
        style={{ backgroundColor:'rgba(34,34,34,.85)',width:"100%"
        ,transition: 'min-height .3s ease-in',height:"160px"}}
        className={classes.root} noValidate autoComplete="off">
     
     
        
          <div style={{backgroundColor:"#fff",height:"55px",border:"none" ,width:"05%"  ,borderRadius:"6px",marginLeft:"25%",marginTop:"07px",display:"flex",flexDirection:"row",float:"left"}}>
        <TextField style={{width:"88%" }}
           
            select
            label="location"
           
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
           
           
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          </div>
          <div style={{backgroundColor:"#fff",height:"55px",border:"none" ,width:"07%"  ,borderRadius:"6px",display:"flex",flexDirection:"row",float:"left",marginTop:"07px",marginLeft:"10px"}}>
          <TextField style={{height:"48px",width:"95%"}}
           
            select
            label="location"
           
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
           
           
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          </div>
          <div style={{backgroundColor:"#fff",height:"55px",border:"none" ,width:"13%"  ,borderRadius:"6px",display:"flex",flexDirection:"row",float:"left",marginTop:"07px",marginLeft:"10px"}}>
                     <input
    type="text"
    placeholder="location"
    style={{
      
      // display: "flex",
      
      fontSize: "large",
      border: "none",

    }}/>
  </div>
  <div style={{backgroundColor:"#fff",height:"55px",border:"none" ,width:"07%"  ,borderRadius:"6px",display:"flex",flexDirection:"row",float:"left",marginTop:"07px",marginLeft:"10px"}}>
          <TextField style={{height:"48px",width:"100%",border:"none"}}
           
            select
            label="location"
           
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
           
           
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          </div>
          <div style={{backgroundColor:"#fff",height:"55px",border:"none" ,width:"07%"  ,borderRadius:"6px",display:"flex",flexDirection:"row",float:"left",marginTop:"07px",marginLeft:"10px"}}>
          <TextField style={{height:"48px",width:"100% "}}
           
           select
           label="location"
          
           onChange={handleChange}
           SelectProps={{
             native: true,
           }}
          
          
         >
           {currencies.map((option) => (
             <option key={option.value} value={option.value}>
               {option.label}
             </option>
           ))}
         </TextField>
         </div>
         <div style={{backgroundColor:"#fff",height:"55px",border:"none" ,width:"07%"  ,borderRadius:"6px",display:"flex",flexDirection:"row",float:"left",marginTop:"07px",marginLeft:"10px"}}>
       
          <TextField style={{height:"48px",width:"100% "}}
           
           select
           label="location"
          
           onChange={handleChange}
           SelectProps={{
             native: true,
           }}
          
          
         >
           {currencies.map((option) => (
             <option key={option.value} value={option.value}>
               {option.label}
             </option>
           ))}
         </TextField>
          </div>
    
          
    
{/*                     
                    <form style={{marginLeft:"02%",marginTop:"01%"}}>
                      
                        <Button  style={{height:"60px",backgroundColor:"green",color:'#fff',width:"100px"}}>Find</Button>
                  
                    </form>
         */}
         
          
      </form>

      </div>
    )
}