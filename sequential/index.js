const { taskOne, taskTwo } = require('./tasks');


async function main() {
  try {
    console.time('Measuring time');
    const results = await Promise.all ([taskOne(), taskTwo()])

    console.timeEnd('Measuring time'); 

    console.log('Task One returned: ', valueOne[0]);
    console.log('Task Two returned: ', valueTwo[1]);
    
  
  }
  catch (e)  {
    console.log(e); 
  }
}

main();