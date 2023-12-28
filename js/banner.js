/*-------------------定义变量--------------------*/
var cts = document.querySelectorAll('.cts1');	//点击框
var ctf = document.querySelectorAll('.ctf1');	//图片
// console.log(cts.length);
// console.log(ctf.length);

for(let i=0;i<cts.length;i++)
{
	cts[i].addEventListener('mouseover',function(){
		for(let j=0;j<cts.length;j++)
		{
			ctf[j].style.opacity='0';
		}
		ctf[i].style.opacity='1';
	})
}

var ot = document.querySelectorAll('.ot1');	//点击框
var os = document.querySelectorAll('.os1');	//图片
// console.log(cts.length);
// console.log(ctf.length);

for(let i=0;i<ot.length;i++)
{
	ot[i].addEventListener('mouseover',function(){
		for(let j=0;j<ot.length;j++)
		{
			os[j].style.opacity='0';
		}
		os[i].style.opacity='0.7';
	})
}
