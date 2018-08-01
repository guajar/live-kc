/*jshint esversion: 6*/

function hacerAlgoPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(
            () => {
                console.log('Hacer algo que ha ocupado un tiempo...');
                let number = Math.random();
                if(number < 0.7) {
                    resolve(number);
                }else {
                    reject(number);
                }
            }, 2000);
    });
}

hacerAlgoPromise()
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
});