#!/usr/bin/env node
console.log('hi')


const axios =require('axios');
// let customer=[];
// let driver=[]
const Jadu=()=>{
    axios.get('http://localhost:8000/customers')
    .then((res)=>{
        // console.log(res.data);
        let customer=res.data;
// console.log('arr')
// console.log(arr)
// customer.push([...arr[0]]);
console.log('customer')
console.log(customer)
dri(customer)
    })
}

Jadu();

const dri=(customer)=>{
    axios.get('http://localhost:8000/drivers')
    .then((res)=>{
        // console.log(res.data);
        let driver=res.data
        // console.log(driver)
        list(customer,driver)
    })
}

function list(customer,driver){
console.log('following is the result of match')
console.log(driver.length+' '+customer.length)
if(driver.length<=customer.length){

for(let i=0;i<driver.length;i++){
    let points=[]
    for(let j=0;j<customer.length;j++){
        let point=0;
        if(Math.abs(driver[i].location-customer[j].location)<=3){
            point+=7
        }else if(Math.abs(driver[i].location-customer[j].location)<=5){
            point+=3
        }
        if(customer[j].rating>=driver[i].rating){
            point+=2
        }
        if(customer[j].noofrides<=2 && driver[i].noofrides>=3){
            point+=5
        }else if(customer[j].noofrides>2 && driver[i].noofrides<3){
            point+=2
        }
        points.push(point)
    }
    let max=0;
    for(let i=0;i<points.length;i++){
        if(max<points[i]){
            max=i
        }
    }
    console.log(driver[i].name+' '+customer[max].name)
    customer.splice(max,1)
}
if(customer.length>0){
    console.log('following is the list of failed fullfilled customer')
    for(let i=0;i<customer.length;i++){
        console.log(customer[i].name)
    }
}

}else{
    for(let i=0;i<customer.length;i++){
        let points=[]
        for(let j=0;j<driver.length;j++){
            let point=0;
            if(Math.abs(customer[i].location-driver[j].location)<=3){
                point+=7
            }else if(Math.abs(customer[i].location-driver[j].location)<=5){
                point+=3
            }
            if(customer[i].rating>=driver[j].rating){
                point+=2
            }
            if(customer[i].noofrides<=2 && driver[j].noofrides>=3){
                point+=5
            }else if(customer[i].noofrides>2 && driver[j].noofrides<3){
                point+=2
            }
            points.push(point)
        }
        let max=0;
        for(let i=0;i<points.length;i++){
            if(max<points[i]){
                max=i
            }
        }
        console.log(driver[max].name+' '+customer[i].name)
        driver.splice(max,1)
    }
    if(driver.length>0){
        console.log('following is the list of idle driver')
        for(let i=0;i<driver.length;i++){
            console.log(driver[i].name)
        }
    }
}
}
