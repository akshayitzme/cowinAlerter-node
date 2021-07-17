const getDisIds= (Users)=>{
    let arr=[];
    Users.map(elm=>{
        if(elm.districtCode){
            arr.push(elm.districtCode)
        }
    })
    arr=[...new Set(arr)]
    return arr;
}

module.exports= getDisIds