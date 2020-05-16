import React, { useState } from 'react';
import {Button} from 'reactstrap';
import about from '../../assets/about.jpg'
function Aboutus() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(false);
  const [info, setInfo] = useState('More');
  
  const handleClick = () =>{
      setCount(!count)
      if(count){
          setInfo('More')
      }
      else{
          setInfo('Less')
      }
  }

  return (
    <div>
        <div style={{marginTop:'5%',display:'flex',justifyContent:'space-around', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', height:'40%', width:'100%'}}>
            <div style={{flex:'1'}}>
                <img src={about} height='100%' width='100%'></img>
            </div>
            <div style={{flex:'1', margin:'2%'}}>
                <h1>About us</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida rutrum quisque non tellus orci ac auctor augue. Penatibus et magnis dis parturient montes nascetur ridiculus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis.
                </p>
                <p>
                    {count && <Para/>}
                </p>
                <Button color='info' onClick={handleClick}>Show {info}</Button>
            </div>

        </div>
    </div>
  );
}

const Para = () => {
    return (
        <div>
         Lorem ipsum dolor . Gravida rutrum quisque non tellus orci ac auctor augue. Penatibus et magnis dis parturient montes nascetur ridiculus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis.

        </div>
    )
}


export default Aboutus
