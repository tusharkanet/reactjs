/* JavaScript Operators */

/*

1. Arithmetic Operators 
2. Assignment Operators 
3. Comparison (Relational) Operators 
4. Logical Operators
5. Special Operators

*/


/* Arithmetic Operators */

/*

1.    + (Addition)
2.    - (Subtraction)
3.    * (Multiplication)
4.    / (Division)
5.    % (Modulus)
6.    ++ (Increment)
7.    -- (Decrement)
8.    **(Exponentiation)

*/


/* Arithmetic Operators */

{
    // var a = 5;
    // var b = 3;
    // var c = a + b;
    // var c = a - b;
    // var c = a * b;
    // var c = a / b;
    // var c = a % b;
    // var c = ++a;     c = 6  
    // var c = --a;     c = 4
    // var c = a ** b;  5*5*5 = 125

    // console.log(c);   
}


/*  ASSIGEMENT OPERATOR  */

/*

= (Simple Assignment )

Ex: C = A + B will assign the value of A + B into C

+= (Add and Assignment)

Ex: C += A is equivalent to C = C + A

−= (Subtract and Assignment)

Ex: C -= A is equivalent to C = C - A

*= (Multiply and Assignment)

Ex: C *= A is equivalent to C = C * A

/= (Divide and Assignment)

Ex: C /= A is equivalent to C = C / A

%= (Modules and Assignment)

Ex: C %= A is equivalent to C = C % A

**= (Exponentiation and assignment)

Ex: C**=A IS equivalent to C=C**A

*/

{
    // var a = 3;
    // var b = 3;
    // var c = b+=a; // (b+=a) b=b+a
    // var c = b-=a; // b = b-a
    // var c = b*=a; // b = b*a
    // var c = a%=b  // a = a%b
    // var c = a/=b  // a = a/b;
    // var c = a**=b; // a = a ** b ;
    // var linebreak = "<br />";
    // console.log(c); 
}

/* Comparison Operators */

/*

== (Equal)
Checks if the value of two operands are equal or not, if yes, then the condition becomes true.
Ex: (A == B) is not true.

=== (identical equel and same type)
The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

!= (Not Equal)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.
Ex: (A != B) is true.


!==	(not equal value or not equal type)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.

> (Greater than)
Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.
Ex: (A > B) is not true.

< (Less than)
Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.
Ex: (A < B) is true.

>= (Greater than or Equal to)
Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A >= B) is not true.

<= (Less than or Equal to)
Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A <= B) is true.

*/

{
    // var a = 10;
    // var b = 11;
    
    // var c = a == b;
    // var c = a === b;
    // var c = a != b ;
    // var c = a !== b;   /////////////
    // var c = a > b;
    // var c = a < b;
    // var c = a >= b;
    // var c = a <= b ; 

    // console.log(c);
}

/* Logical Operators */

/*

&& (Logical AND)

If both the operands are non-zero, then the condition becomes true.
Ex: (A && B) is true.


|| (Logical OR)
If any of the two operands are non-zero, then the condition becomes true.
Ex: (A || B) is true.


! (Logical NOT)
Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it true.
Ex: ! (A && B) is false.

*/

/*

(a && b) => false
(a || b) => true
!(a && b) => true

*/

{

// let a = false
// let b = false
// let c = false
// let d = false

// let e = !(a && b || c || d);
// console.log(e);
  
}


/* Miscellaneous Operator

? tarnary operator
: (Conditional )
If Condition is true? Then value X : Otherwise value Y

*/

/*
((a > b) ? 100 : 200) => 200
((a < b) ? 100 : 200) => 100

*/

// let aggriment = 0;
// let age = aggriment == 0 ? "Login" : "Logout";
// document.write(age);