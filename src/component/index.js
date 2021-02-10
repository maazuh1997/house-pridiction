import React, { Fragment } from 'react'
import Button from "@material-ui/core/Button";
import Btn from '../component/Button'
import { Link } from 'react-router-dom'




class Index extends React.Component {
  state = {

  }




  render() {

    return (
      <Fragment>
        <div style={{ textAlign: "center", marginTop: "-22px" }}>



          <h1 style={{ color: "#fff" }}> A Data Science Web App
               <br />to Predict Housing <br />   Property Prices.... </h1>
          <p style={{ color: "#fff" }}>Get Notification On Seller Leads </p>
          <p style={{ color: "#fff", marginTop: "-1%" }}>Before The Property Gets Listed </p>
          
        </div>
        {/* <div style={{ alignItems: "center", textAlign: "center" }}>
          <li style={{ listStyle: "none" }} to="./Home">
          <Link style={{ color: "#fff", border: "1px solid #fff", margin: "10px", width: "200px", padding:'50' }} to="./">Home</Link>
            <Button style={{ color: "#fff", border: "2px solid #fff", margin: "10px", width: "100px" }}>Home</Button>
            <Button style={{ color: "#fff", border: "2px solid #fff", width: "100px" }}>Buy</Button>

            <Button style={{ color: "#fff", border: "2px solid #fff", width: "100px", margin: "10px" }}>Project</Button>
          </li>

        </div> */}

        <div style={{ margin: 150 }}>
          <Btn />
        </div>

      </Fragment>
    )
  }
}
export default Index;