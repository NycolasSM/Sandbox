codigo de dellay

const delay = ms => new Promise(res => setTimeout(res, ms));

const yourFunction = async () => {
  await delay(1000);
  console.log("Waited an additional 1s");
  await delay(5000);
  console.log("Waited an additional 5s");
};
yourFunction()