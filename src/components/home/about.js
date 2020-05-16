import React from 'react'
import learn from '../../assets/learn.svg'
import help from '../../assets/revenue.svg'
import explore from '../../assets/explore.svg'


const about = () => {
    return (
        <div>
            <div style={{textAlign:'center', marginTop:'3%'}}>
                <h1>Let's Talk Product</h1>
                <p style={{color:'grey', fontSize:'120%'}}>This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</p>

                <div class='container' style={{display:'flex', justifyContent:'space-around'}}>
                    <div style={{height:'100%', width:'30%'}}>
                        <img src={learn} height='70%' width='70%'></img>
                        <h3>
                            Learn
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing eliagna aliqua. Sed odio morbi quis commodo odio aenean.
                        </p>
                    </div>
                        
                    <div style={{height:'100%', width:'30%'}}>
                        <img src={explore} height='70%' width='70%'></img>
                        <h3>
                            Explore
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor qua. Sed odio morbi quis commodo odio aenean.
                        </p>
                    </div>

                    <div style={{height:'100%', width:'30%'}}>
                        <img src={help} height='60%' width='70%'></img>
                        <h3>
                            Customer support
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, smod tempor incididunt ut. morbi quis commodo odio aenean.
                        </p>
                    </div>
                </div>
            </div>         
        </div>
    )
}

export default about
