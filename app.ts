var a = 23;
let b = "abc";
let acb = false;


let arr = [23,54,65,"ram",{name:"dhanush"}];

let array :number[]  = [1,2,3,4]


//tuples(where we can put the exactly no of element in the array not more then that )

let barray:[string, number] = ["stringboy",5]

let arr8:[number, string] = [12,"ramsita"]

let array99:[string, ...number[]] = ["jay shree Ram", 12,31,34,55,6]



//enum 

enum userdata {
    ADMIN = "admin",
    guest = "gusest",
    owner = "ranjay"
}

userdata.owner;


let z; // any 
z=23;

let y:number;
y =23;


let h: unknown;

h = 12;
h = "harsh";

if (typeof h === "string")
  h.toUpperCase();


//void 
function abcd() : string{
    return "ranjay";
}
abcd();



//NUll
let u = null;

// Or for the union
let v: string | null;

v = "harshe";  // OK
v = null;      // OK



//Never

function abcde(): never {
    while(true){
    }
}

abcde();
console.log("Hey"); 