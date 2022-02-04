// About scope chain

  var name="Aditya";//here Aditya is global
  console.log("Line no. 4 ",name);

  function sayName() {
      //var name = "rohit";
      console.log("Line no. 8 ", name);// since it is not having its own name it is asking to its parent.

    sayNmaeTwo();
      function sayNmaeTwo() {
          var name="Aditya Raj";
          console.log("Line no. 12 ", name);// it has its own name.
      }
  }
  sayName();

  // if any data is not available it can ask from its elder one but cannot ask from its younger i.e child.