import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './contact.css'
import call from '../../assets/phone.png'
import chat from '../../assets/chat.png'
import tick from '../../assets/tick.png'



function Example() {
    const [count, setCount] = useState(true);
    const handleSubmit =()=>{
        setCount(!count)
        console.log(count)
    }
    const Complete=()=>{
        return(
            <div style={{textAlign:'center'}}>
                <img src={tick} height='50%' width='50%'></img>
                <p>
                    Thankyou for your response!! we'll get back to you shortly.
                </p>
            </div>
        )
    }

    const Fform=()=>{
        return(
            <div>
            <h2>Get in Touch with Us</h2><br></br>
                <Form>
                    <div class="f1">
                        <i class="fas fa-user-circle fa-2x"></i>
                        <Input type="text" placeholder="First Name" style={{marginLeft:'5px',marginRight:'5px'}}></Input>
                        <Input type="text" placeholder="Last Name"></Input>
                    </div><br></br>
                    <div style={{display:'flex'}}>
                    <i class="far fa-envelope fa-2x" ></i>
                    <Input type="email" placeholder="Email"  style={{marginLeft:'5px'}}></Input>
                    </div><br></br>
                    <div style={{display:'flex'}}>
                    <i class="fas fa-headset fa-2x"></i>
                    <Input type="select" placeholder="Select Query" style={{marginLeft:'5px'}}><br></br>
                        <option>Select Query</option>
                        <option>Support</option>
                        <option>Sales</option>
                        <option>Press & Media</option>
                    </Input>
                    </div><br></br>
                    <div style={{display:'flex'}}>
                        <i class="fas fa-phone-alt fa-2x"></i>
                        <Input type="number" placeholder="Contact Number" style={{marginLeft:'5px'}}></Input>
                    </div><br></br>
                    <Input type="textarea" placeholder="You'r Message..."></Input><br></br>
                    <Button color="primary" style={{align:'left', width:'100%', backgroundColor:'green', color:'white'}} onClick={handleSubmit}>Submit</Button>
                    <p style={{fontSize:'12px'}}>By clicking on SUBMIT, you acknowledge having read our <a href="...">Privacy notice</a></p>
                </Form>
                </div>
        );
    }

  return (
    <div>
    <div style={{margin:'5%'}}>
        
        <div class="b2"> 
            <div class="b21">
                <div>
                    <img src={call} style={{height:'40px'}}></img><br></br>
                    <h1>Sales Enquiries</h1>
                    <p>Interested in any of our products? Talk to our experts today</p>
                    <p>India: +91 44 6667 8040</p>
                    <p>Email: support@freshdesk.com (Availability 24*5)</p>
                    <hr></hr>
                </div>
                
                <div>
                    <img src={chat} style={{height:'40px'}}></img><br></br>
                    <h1>Support Enquiries</h1>
                    <p>Using any of our products and need help?</p>
                    <p>Get in touch with customer support</p>
                    <a href="...">Get Support -></a>
                    <hr></hr>
                </div>

                <div>

                </div>
            </div>
            
            <div class="b22" style={{height:'80%'}}>
                {count && <Fform/> || <Complete/>}

            </div>
        </div>
        
    </div>
</div>
  );
}


export default Example
