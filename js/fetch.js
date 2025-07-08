function getData(data,nextdata){
    setTimeout(() =>{
        console.log(data);
        if(nextdata){
            nextdata();

        }
    },1000);
}
getData(1,()=>{
    console.log("fetching data 1");
});
getData(2,()=>{
    console.log("fetching data 2")
});
let p=new Promise((resolve,reject)=>{
    console.log("hello");
    

});
 console.log(p);
let d=new Promise((resolve,reject)=>{
    let s=8;
    if(s===8){
        resolve("success");
    }
    else{
        reject("not successfull");
    }
});