function myintro(){
    let intro= {fname:'Shristi',
    lname:'Shrestha', 
    address:'Balaju',
    age:20}
    return intro;
}

async function getintro(){
	try{
		var intro= await myintro();
		console.log(intro);

	}
	catch(e){
		console.log("Error is :", e)

	}
}
getintro();