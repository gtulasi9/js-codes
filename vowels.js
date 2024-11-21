//a,e,i,o,u tulasi prasanna vineetha
let name="vineetha";
let vowels="aeiou";
let count=0;
for(let char of name.toLowerCase())
    {
        if(vowels.includes(char))
        {
            count++;
        }
}
console.log("My name is Prasanna having vowels : "+count);


