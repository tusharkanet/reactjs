// let String40 = "   This is most common lecture!   "
// console.log(String40);
// console.log(String40.length);
// let String41 = String40.trimStart();
// console.log(String41);
// console.log(String41.length);

/******  String trimEnd() ******/

// let String42 = "   This is most common lecture!   "
// console.log(String42);
// console.log(String42.length);
// let String43 = String42.trimEnd();
// console.log(String43);
// console.log(String43.length);

/******  String padStart() ******/

// let String44 = "This is Common langauage!"
// console.log(String44);
// console.log(String44.length);
// let String45 = String44.padStart(30 , "1");
// console.log(String45);
// let Number1  = "500"
// let Number2  = Number1.padStart(2 , 0)
// console.log(Number2);

/******  String padEnd() ******/

// let Number1  = "500"
// let Number2  = Number1.padEnd(4 , 0)
// console.log(Number2);
// console.log(typeof(Number2));
// let Number3 = parseFloat(Number2)
// console.log(Number3);
// console.log(typeof(Number3));

/******  String charCodeAt() ******/

// let String46 = "This is most CoMmon!"
// let String47  = String46.charCodeAt(15);
// console.log(String47);

/****** String split() ******/

// let String48 = "Wow! What a Place."
// console.log(String48);
// let String49 = String48.split("");
// console.log(String49);

/******  String includes() , true and false ******/

// let String50 = "Wow!WhataPlace."
// console.log(String50);
// let String51 = String50.includes(".")
// console.log(String51);

/* JAVASCRIPT STRING METHOD */

// String indexOf()
// String lastIndexOf()
// String search()
// String includes()
// String startsWith()
// String endsWith()
// String match()
// String matchAll()

/******   String indexOf() ******/

// let String52 = "Wow! What a Place."
// console.log(String52);
// let String53  = String52.indexOf("a" , 8)
// console.log(String53);

/******   String lastIndexOf() ******/

// let String54 = "Why Need Form Valiadation In Web Development"
// console.log(String54);
// let String55  = String54.lastIndexOf("m" , 20)
// console.log(String55);

/******  String search() ******/

let String56 = "Why Need Form Valiadation In Web Development";
console.log(String56);
let String57 = String56.search("W");
console.log(String57);

/******  String startsWith() ******/

// let String56 = "Why Need Form Valiadation In Web Development"
// console.log(String56);
// let String57 = String56.startsWith("h");
// console.log(String57);

/******  String endWith() ******/

// let String58 = "Why Need Form Valiadation In Web Development  "
// console.log(String58);
// let String59 = String58.endsWith(" ");
// console.log(String59);

/******  String match() ******/

/* After Regx */

/******  String matchall()/ remider with array ******/
// JavaScript Number Methods

/*

toString()        Returns a number as a string
toExponential()    Returns a number written in exponential notation
toFixed()          Returns a number written with a number of decimals
toPrecision()      Returns a number written with a specified length
ValueOf()          Returns a number as a number

*/

/* toString() */

// let Number1  = 150

// let Number2 = Number1.toString()
// console.log(Number2)
// console.log(typeof(Number2))

// let Number3 = (89+20).toString()
// console.log(Number3)
// console.log(typeof(Number3));

// let Number4 = (150).toString()
// console.log(Number4)
// console.log(typeof(Number4));

/*  toExponential() */

// toExponential() returns a string, with a number rounded and written using exponential notation.

// let  a = 2500000

// let b  = a.toExponential()
// console.log(b)
// let c = a.toExponential(10)
// console.log(c)

/*  toFixed() */
// let fix1 = 5.4545

// let fix2 = fix1.toFixed()
// console.log(fix2)
// let fix3  = fix1.toFixed(10)
// console.log(fix3)

/* toPrecision()pre */

{
  let pre1 = 5;
  let pre2 = pre1.toPrecision(1);
  let pre3 = pre1.toPrecision(2);
  let pre4 = pre1.toPrecision(3);
  let pre5 = pre1.toPrecision(4);
  let pre6 = pre1.toPrecision(5);
  let pre7 = pre1.toPrecision(6);
  console.log(pre1);
  console.log(pre2);
  console.log(pre3);
  console.log(pre4);
  console.log(pre5);
  console.log(pre6);
  console.log(pre7); 
}

/* ValueOf()  */
// {
//   const numbers = 150
//   let Number1  = numbers.valueOf()
//   let Number2  = (15-26).valueOf()
//   let Number3  = (255*5).valueOf()
//   console.log(Number1)
//   console.log(Number2)
//   console.log(Number3)
//   console.log(typeof(Number3))

// }

// let vv= 122;
// let v = vv.valueOf()
// console.log(v);
// console.log(typeof(v));

//   var l = (22-9).valueOf()
//   console.log(l);
//   console.log(typeof(l));
// }
