let num=153;
let count=0;
for(let i=1;i<=num;i++)
{
    if(num%i==0)
    {
        count++;
    }
}
if (count==2)
{
    console.log("It is a prime number");
}
else {
    console.log("It is not a prime Number");
}