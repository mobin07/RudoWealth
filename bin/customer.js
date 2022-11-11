#!/usr/bin/env node

const axios =require('axios');
const Jadu=()=>{
    axios.get('http://localhost:8000/customers')
    .then((res)=>{
        console.log(res.data);
    })
}

Jadu();