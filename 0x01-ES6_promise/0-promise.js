export default function getResponseFromAPI() {
  return new Promise(
    (resolve, reject) => {
      const connect = true;

      if (connect){
        resolve('Connection established');
      }
      else {
        reject(Error('Connection failed'));
      }
    }
  );
}
