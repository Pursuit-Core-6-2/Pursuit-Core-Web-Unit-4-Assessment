/*
JOSEPH P. PASAOA
Global Helper Functions | YouTube Abbreviated | Unit 4 Assessment
*/


const processInput = (input, descriptionString) => {
  let output = {
    pass: null,
    payload: ""
  };
  switch (descriptionString) {
    case "searchTxt":
      console.log(input);
      if (!input || !input.trim()) {
        output.payload = "Invalid search. Please re-enter your query and try again.";
      }
    break;
    default :
      console.log("You're not supposed to be here.");
    break;
  }
  return output;
}


module.exports = {
  processInput
}
