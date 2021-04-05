import React from 'react';

import {Form} from 'react-bootstrap';


const CustomSqlInput=(props)=>{

    return <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control as="textarea" rows={3} name={props.name||'customSql'} onChange={props.onChange} defaultValue={props.value} />
    </Form.Group>
    </Form> 
    

}

export default CustomSqlInput;