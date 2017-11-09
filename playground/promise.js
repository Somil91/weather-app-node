
var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('It worked'); 
        reject('It didnt worked'); 
    }, 2500);
    
});


somePromise.then((msg) => {
    console.log('Success', msg)
}, (error) => {
    console.log('Error', error)
});
