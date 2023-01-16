import Products from "./Products"

const MyPromise = (time, task) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Products.length>0){
                resolve(task)
            }else{
                reject("Error")
                console.log(reject)
            }
        }, time)
        })
}

export default MyPromise