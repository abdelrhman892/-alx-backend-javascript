export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const good = { status: 200, body: 'Success' };
      resolve(good);
    }
    else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
