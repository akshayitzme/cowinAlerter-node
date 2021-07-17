const moment= require('moment')

const makeDate= ()=>{
    let today= new Date(); 
    let date= moment(today).format("DD/MM/YYYY")
    return date;
}

module.exports= makeDate