import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import MenuItem from '@material-ui/core/MenuItem';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
      label:"05px 04px"

    },
  },
}));

const handleChange = () => {
  
};

export default function MultilineTextFields() {
  
  
  const currencies = [
    {
      value: 'Karachi',
      label: 'Karachi',
    },
    {
      value: 'Lahore',
      label: 'Lahore',
    },
    {
      value: 'Islamabad',
      label: 'Islamabad',
    },
    
  ];

  return (
    // <form className={classes.root} noValidate autoComplete="off">
     <div style={{marginLeft:"01px",marginTop:"-08px"}}>
     
      <TextField style={{backgroundColor:"#fff",height:"48px",border:"none",width:'150px',marginTop:'8px',borderRadius:"5px"  ,
    
    }}
         
          select
          label="City"
         onClick={(e)=>{e.stopPropagation()}}
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
        

        {/* <TextField style={{backgroundColor:"#fff",height:"48px",border:"none",width:'207px',marginTop:'8px'}}
         
         select
         label="location"
        onClick={(e)=>{e.stopPropagation()}}
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
         
       </TextField> */}
    </div>
      
    // </form>
    
  );
}
