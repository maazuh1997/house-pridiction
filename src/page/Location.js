import { Divider } from '@material-ui/core'
import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/Slider.css";

import Slider from "react-slick";


class Loaction extends React.Component {
    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };

        return (
            <div>

                <div style={{ textAlign: 'center' }}>
                    <h1>Popular Properties </h1>
                </div>
                {/* <div>
                    <h3>Popular Locations In Wanted</h3>
                </div> */}

                {/* <div style={{ display: "flex", flexDirection: "column", }}>

                    <i style={{ display: "flex", flexDirection: "column" }}>Lahore(1,402)</i>

                    <i style={{ display: "flex", flexDirection: "column" }}>Lahore(1,402)</i>
                    <i style={{ display: "flex", flexDirection: "column" }}>Lahore(1,402)</i>
                    <i style={{ display: "flex", flexDirection: "column" }}>Lahore(1,402)</i>

                </div> */}
    <div className="App">

                <Slider {...settings}>
                    <div>
                        <img style={{ height: 240, width: 250 }} src="https://propertysellutions.com/wp-content/uploads/2019/10/Featured-Homes.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{ height: 240, width: 250 }} src="http://3.bp.blogspot.com/-55lmJoeWaME/T_KA6xZCh_I/AAAAAAAAABQ/m4IfUOx67LI/w1200-h630-p-k-no-nu/right+VSM-17.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{ height: 240, width: 250 }} src="https://assets.architecturaldesigns.com/plan_assets/325000069/original/22530DR_nu-front-03_1573581939.jpg?1573581940" alt="" />
                    </div>
                    <div>
                        <img style={{ height: 240, width: 250 }} src="https://associateddesigns.com//sites/default/files/plan_images/main/garage_plan_20-058_front.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{ height: 240, width: 250 }} src="https://p.rdcpix.com/v07/l78e5ed44-m0xd-w1020_h770_q80.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{ height: 240, width: 250 }} src="https://i.pinimg.com/originals/4d/7a/ce/4d7aceac9ad78c5809ffa5064e88e4f4.jpg" alt="" />
                    </div>
                </Slider>
                </div>
                <br />
                <br />



            </div>
        )
    }
}
export default Loaction;