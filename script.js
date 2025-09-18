function register(cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
       console.log("successfully registered");
       resolve();
     },1000)
    });
}

function sendEmail(cb){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
       console.log("successfully send email");
       resolve();
     },1000)
    })
}
function login(cb){
    
    console.log("successfully login");
    cb();
}
function getData(cb){
    console.log("successfully get the data");
    cb();
}
function displayData(){
    console.log("successfully displaying data");
}

register()
.then(sendEmail)
.then(login)
.then(getData)
.then(displayData)
.catch(()=>{
    console.log("undefined error");
})
  

