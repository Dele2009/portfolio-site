componenet is a reusable and self contained piece of user interface
in jsx javascript can be embbeded directly
use className instead of class in jsx
jsx is not for giving like html5


native-
in react if u export by default u can't import using a variable le

CLASS COMPONENT
class -clasname extends React.Component{
    render(){
        return(
            html
        );
    }
}
DESTRUCTURING
let array=["ibadan","lagos","oyo"]
let[ojo,jay,hay]=array

REST
let number=[1,2,3,4,5,6,7,8]
let [,...rest]=number

object
let person={
    name:"john",
    age:30
}
let{
    name,
    age
}=
console.log(name) //output john

let peroson:{
    name:"tunji",
    age:31,
    address:{
        city:"ibadan",
        state:"oyo",
        country:"nigeria"

    }        

}
let {name,age,address:{
    city,
    state,
    country
}}=person

console.log(country);
spead can be used to cobine a

const arr1=[1,2,3,4]
const arr2=[5,6,7,8]

const cobinearr=[...arr1, ...arr2]
console.log(cobinearr)

REACT HOOKS


import React, {useState} from 'react';

INSTALL LIBRIES

react-router-dom
react-bootstrap bootstrap
typed.js
framer
react-scroll
react-awesome-reveal
react-icons