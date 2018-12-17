import React, { Component } from 'react';

const programs = (props) => (
    <div className = "program-info">
        {props.name && <p> Temperature  = {props.name}</p>}        
</div>
); 
export default programs;