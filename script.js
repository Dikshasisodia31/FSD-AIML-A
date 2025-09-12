function register(cb){
    setTimeout(()=>{
       console.log("successfully registered");
       cb();
    },1000)
}

function sendEmail(cb){
    console.log("successfully send email");
    cb();
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

register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData();
            })
        })
    })
});
