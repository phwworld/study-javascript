/**
 * try...catch
 * 
 */

function runner() {
  try {
    console.log("hello1");

    throw new Error("error");

    console.log("hello2");
  } catch (error) {
    console.log("-----");
    // console.log(error);
  }

}

runner();