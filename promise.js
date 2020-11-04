let myintro =()=>{
    return new Promise((resolve,reject)=>{
        let intro = [{fname:'Shristi',
        lname:'Shrestha', 
        address:'Balaju',
        age:20,
        }]
        if (intro.length>0){
            resolve(intro)}
            else{
                reject ("Error")
            }
})
} 
myintro().then((result)=>{
    console.log("Success", result);
}).catch((error)=>{
    console.log("Error", error)
})