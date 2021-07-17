const getPinCodes= Users=>{
    let arr=[];
    Users.map(elm=>{
        if (elm.pinCode){
            arr.push(elm.pinCode)
        }
    })
    arr=[...new Set(arr)]
    return arr;
}

module.exports= getPinCodes