// function login(){
//     setTimeout(()=>{
//         console.log("Diksha login successfull");
//     },2000)
// }

function login(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("Diksha login successfull");
        resolve("login done");
       },2000)
    })
}


// function getData(){
//     setTimeout(()=>{
//        console.log("data is fetched");
//     },8000)
// }
function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("data is fetched");
        resolve("getting data");
       },8000)
    })
}


// function calculateData(){
//     setTimeout(()=>{
//         console.log("Loading......");
//     },11000)
// }
function calculateData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("Loading....");
        resolve("data is calculated");
       },11000)
    })
}


// function sendSMS(){
//     setTimeout(()=>{
//         console.log("send SMS");
//     },12000)
// }
function sendSMS(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("send SMS");
        resolve("send SMS");
       },12000)
    })
}


// function logout(){
//     setTimeout(()=>{
//         console.log("Logout suggesfully");
//     },13000)
// }
function logout(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("logout successfully");
        resolve("logout done");
       },13000)
    })
}

login()
.then(getData)
.then(calculateData)
.then(sendSMS)
.then(logout)
.then(()=>{
    console.log("All steps are done successfully");
})
.catch(()=>{
    console.log("Error fetched");
})