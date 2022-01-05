function promessa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('executou');
      resolve()
    }, 2000);
  })
}

 export default async function resolvePromessa () {
  await promessa()
  console.log('terminou');
}