import React from 'react'
import logo from  "../Images/logo.gif"

function Footer() {

    let follow = ['Pininterest', 'Facebook', 'Dribble']
    let follow2 = ['Behance', 'Twitter', 'Youtube']
    return (
        <div style={{ backgroundColor: "#282828", color: 'white', fontFamily: 'Garamond' }}>

            <div className='d-flex smcol' style={{ paddingTop: 20, paddingBottom: 30 }}>
                <div className='w-100' style={{ padding:"2px 25px", marginTop:20}} >
                    <h3 style={{textAlign:'left'}}>FOLLOW US</h3>

                    <div className='d-flex' style={{ justifyContent: 'center', textAlign: 'left', marginTop: 30 }}>
                        <div className='w-100'>
                            {
                                follow.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <h5>{e}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className='w-100'>
                            {
                                follow2.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <h5>{e}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>





                </div>
                <div className='w-100' style={{textAlign:'left', marginTop:20, padding:"2px 25px"}}>
                    <h3 style={{textAlign:'left'}}>CONTACT</h3>

                    <div style={{ marginTop: 30  }}>
                        <h5>RB Store Center</h5>
                        <h5>12 Fifth Avenue, Assam, AS 10160</h5>
                        <h5>887-666-851</h5>
                        <h5>rbstore@gmail.com</h5>

                    </div>

                </div>

            </div>

            {/* <img src={logo}/> */}

        </div>
    )
}

export default Footer