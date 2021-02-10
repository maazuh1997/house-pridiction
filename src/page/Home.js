import React from 'react'
import Index from '../component/index'
import SliderData from '../page/SliderData'
import Location from '../page/Location'
import Footer from '../page/Footer'

function Home() {
    return (
        <div>
            <div style={{ backgroundImage: "url('bg.jpg')", height: "600px", backgroundRepeat: "no-repeat", backgroundSize: "100%",  marginTop: "-22px" }}>
                <Index />
            </div>

            <div style={{ marginTop: "100px" }} >
                <SliderData />
            </div>
            <div style={{ marginTop: "100px" }}>
                <Location />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Home;