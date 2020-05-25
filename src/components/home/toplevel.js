import React from 'react'
import Image from '../../assets/image.svg'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';




const toplevel = () => {
    return (
        <div>
            <div style={{display:'flex', marginTop:'1%'}}>
                <div style={{ marginTop:'7%',marginRight:'1%'}}>
                    <h6 style={{fontSize:'4em'}}>Welcome to</h6> 
                    <h1 style={{fontSize:'7em', color:'rgb(255,101,132)', fontFamily:'sans-serif'}}>Honest <span style={{fontSize:'0.5em',color:'rgb(108,99,255)'}}>Designs</span></h1>

                     <Form inline>
                        <FormGroup className="mr-sm-2 mb-sm-0">
                            <Input type="text" name="query" placeholder="Query...?" />
                        </FormGroup>
                        <Button color='info'>Search</Button>
                    </Form> 
                </div>
                <div style={{flex:'2'}}>
                    <img src={Image} height='100%' width='100%'/>
                </div>
            </div>
            <hr></hr>

            <div>
                
            </div>
        </div>
    )
}

export default toplevel
