//your JS code here. If required.
let text=document.querySelector("#text");
let delay=document.querySelector("#delay");
let output=document.querySelector("#output");
let btn=document.querySelector("#btn");

function display(){
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{output.innerText=`${text.value}`;
				   resolve("displayed");
				   }
			   ,Number(delay.value));
	})
} 
async function display1()
{
await display();
}
btn.addEventListener("click",display1);