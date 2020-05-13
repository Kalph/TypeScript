function delay(item:number) { 
    return new Promise(resolve => 
      setTimeout(() => { 
        console.log(item); 
        resolve(); 
      }, 500) 
    ); 
  } 
  
  async function basic() { 
    await delay(1); 
    console.log("Done");
    return "basic"; 
  }
basic();

