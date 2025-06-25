let a=20;
console.log(a)
let b=20.59;
console.log(b)
let c=30
console.log(c)
d="shiva"
let f=true
let e=null;
let j=undefined
let g;
let h=Symbol("symbol")
console.log(d)
console.log(e)
console.log(f)
console.log(g)
let i=BigInt(458468413215498653126786548749684n)
let s={
    name:"shiva",
    age:30,
    isStudent:false
}
let x=0;
let y=8;
let arr=[1,35,7,8,9]
console.log(h)
console.log(i)
console.log(s)
console.log(arr)
console.log("Arithmatic operators")
console.log("Addition",a+b)
console.log("Subtraction",a-b)
console.log("Multiplication",a*b)
console.log("Division",a/b)
console.log("Modulus",a%b)
console.log("Exponentiation",a**b)
console.log("Assignment Operators")
x += 5;
y *= 2;
console.log("x+=5",x)
console.log("y*=2",y)
console.log("Comparison operators")
console.log("Equal:",a==b)
console.log("Not Equal:",a!=b)
let q=2;
let r='2'
console.log("Equal with Type Coercion:",q==r);
console.log("Strict Equal",a==b);
console.log("Strict not Equal",a!=b);
console.log("Greater than",a>b);
console.log("Lesser than",a<b);
console.log("Greater than or equal",a>=b);
console.log("Lesser than",a<=b);
console.log("Logical Operators");
console.log("AND",a>5 && b<10);
console.log("OR",a>5 || b<10);
console.log("NOT",!(a>5));
console.log("Bitwise Operators")
console.log("Bitwise AND",a&b)
console.log("Bitwise OR",a|b)
console.log("Bitwise XOR",a^b)
console.log("Left Shift",a<<b)
console.log("Right Shift",a>>b)
console.log("Ternary Operator")
console.log("Typeof Operator")
console.log("Type of a",typeof a);
console.log("Type of b",typeof b);
console.log("Type of x",typeof x);
console.log("Type of y",typeof y);
console.log("Type of canVote:",typeof canVote)
let age=18;
if(age>18){
    console.log("you are eligible to vote")

}
else if(age<18){
    console.log("you are not eligible to vote")
}
else{
    console.log("equal to 18")}
for(let i=0;i<5;i++)
    console.log("For loop iteration"+i);
let k=0;
while(k<5){
    console.log("while loop iteration: "+j)
    k++;
}
let l=0;
do{
    console.log("Do-while loop iteration: "+l)
    l++;
}
while(l<5);
let arr1=[10,20,30,40,50]
for(let value of arr1){
    console.log("for...of loop values"+value);
}
let obj={a:1,b:2,c:3};
for(let key in obj){
    console.log("for ..of loop key: "+key)
}