import React from 'react'
import CustomizedTables from '../page/Tabel'
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Footer from '../page/Footer'

export default function Find() {

  return (
    <div >


      <div>

        <form style={{ backgroundImage: "url('bg.jpg')", height: "600px", backgroundRepeat: "no-repeat", backgroundSize: "100%", marginTop: "-18px" }}>
          <div style={{ color: "#fff", marginLeft: "60px", marginTop: "0px" }}>
            
            <p style={{padding:40}}>Housing properties</p>
          </div>
        </form>

        <div style={{ textAlign: "center", marginTop: "-390px" }}>



          <h1 style={{ color: "#fff" }}> A Data Science Web App
                <br />to Predict Housing <br />   Property Prices.... </h1>
          <p style={{ color: "#fff" }}>Get Notification On Seller Leads </p>
          <p style={{ color: "#fff", marginTop: "-1%" }}>Before The Property Gets Listed </p>
          <br /> <br />
          <h2 style={{ color: "#fff" ,  }}>Result Generated Below as a Data Set Table...</h2>
        </div>
      </div>
      <div style={{ marginTop: "150px" }}>
        <CustomizedTables />
      </div>
      <div style={{ marginBottom:'40px',marginTop: "40px", backgroundColor: "green", width: "200px", height: "40px", textAlign: "center", marginLeft:'665px'   }}>
        <Button href="./chart" style={{ color: "#fff", textAlign: "center", justifyContent: 'center' }}>Generate graph</Button>
      </div>

      <div>
                <Footer />
            </div>
    </div>
  )
}