// two different answers

function afterEquals(string) {
    return string.split('=').pop();
  }
  
  function afterEqualsRegexp(string) {
    return string.match(/=(.+)/)[1];
  }
  
  console.log("with split:" + afterEquals("var myVar = test1,test2,test3") );
  
  console.log("with regexp:" + afterEqualsRegexp("var myVar = test1,test2,test3") );