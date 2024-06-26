function getResponseFromAPI(){
    return new Promise(
        (resolve, reject) => {
            let connect = true;

            if (connect){
                resolve("Connection established")
            }
            else {
                reject(Error("Connection failed"))
            }
        }
    );
}
