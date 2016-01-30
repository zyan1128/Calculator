window.onload=function(){
	
	var nums=document.getElementsByClassName('num'),
	ops=document.getElementsByClassName('oprator'),
	nums2=document.getElementsByClassName('num2'),
	ops2=document.getElementsByClassName('oprator2'),
	sc=document.getElementById('screen'),
	first=document.getElementById('first'),	
	equl=document.getElementById('denghao'),
	sc2=document.getElementById('screen2'),
	equl2=document.getElementById('denghao2'),
	Memory2=document.getElementById('Memory2'),
	firstNumber='',secondNumber='',result='',
	yunsuanfu='',index=1,index1=1,	
	firstNumber2='',sencondNumber2='',result2='',
	yunsuanfu2='',index3=1,index4=1,jc='1',jcresult='1',
	cun2='',cunj2='';
	
	for(var i=0;i<nums.length;i++){
		nums[i].onclick=function(){			
			if(sc.innerHTML.indexOf('.')!=-1&&this.innerHTML=='.'){return;}
			if(!yunsuanfu){
				if(firstNumber.length<11){
					if(this.innerHTML=='+/-'&&firstNumber.indexOf('-')==-1){
						firstNumber='-'+firstNumber;
						sc.innerHTML=firstNumber;
					}else{
						if(this.innerHTML!='+/-'){
							firstNumber+=this.innerHTML;
							sc.innerHTML=firstNumber;
						}else{
							return;
						}
					}
				}else{		
					firstNumber+=this.innerHTML;					
					sc.innerHTML=firstNumber.slice(index++);
				}
			}else{
				if(secondNumber.length<11){
					if(this.innerHTML=='+/-'&&secondNumber.indexOf('-')==-1){
						secondNumber='-'+secondNumber;
						sc.innerHTML=secondNumber;
					}else{
						if(this.innerHTML!='+/-'){
							secondNumber+=this.innerHTML;
							sc.innerHTML=secondNumber;
						}else{
							return;
						}
					}	
				}else{
					secondNumber+=this.innerHTML;
					sc.innerHTML=secondNumber.slice(index1++);
				}
				
			}
		}
	}

	for(var i=0;i<ops.length;i++){
		ops[i].onclick=function(){
			if(!sc.innerHTML){return};
			if(this.innerHTML=='+' || this.innerHTML=='-' || this.innerHTML=='*' || this.innerHTML=='/'){
				if(result){
					firstNumber=result;
				}
				if(yunsuanfu=='+'){
					firstNumber=Number(firstNumber)+Number(secondNumber)+'';
				}
				if(yunsuanfu=='-'){
					firstNumber=Number(firstNumber)-Number(secondNumber)+'';
				}
				if(yunsuanfu=='*'){
					if(secondNumber==''){secondNumber='1'};
					firstNumber=Number(firstNumber)*Number(secondNumber)+'';
				}
				if(yunsuanfu=='/'){
					if(secondNumber==''){secondNumber='1'};					
					firstNumber=Number(firstNumber)/Number(secondNumber)+'';
				}
				yunsuanfu=this.innerHTML;
				secondNumber='';
			}	
			if(this.innerHTML=='AC'){
				sc.innerHTML='0';
				firstNumber='';
				secondNumber='';
				yunsuanfu='';
				equl='';
				result='';
				Memory.innerHTML='';
			}			
		}
	}

	equl.onclick=function(){
		if(yunsuanfu=='+'){
			result=Number(firstNumber)+Number(secondNumber);
			sc.innerHTML=result;
		}
		if(yunsuanfu=='-'){
			result=Number(firstNumber)-Number(secondNumber);
			sc.innerHTML=result;
		}
		if(yunsuanfu=='*'){
			result=Number(firstNumber)*Number(secondNumber);
			sc.innerHTML=result;
		}
		if(yunsuanfu=='/'){
			result=Number(firstNumber)/Number(secondNumber);
			sc.innerHTML=result;
		}
		// console.log(firstNumber,secondNumber, result);
		// if(String(result).length>10){
		// 	result=Number(result);
		// 	sc.innerHTML=result.toExponential(5);
		// }
		firstNumber='';secondNumber='';yunsuanfu='';equl='';

	}
	
	for(var i=0;i<nums2.length;i++){
		nums2[i].onclick=function(){			
			if(sc2.innerHTML.indexOf('.')!=-1&&this.innerHTML=='.'){return;}
			if(!yunsuanfu2){				
				if(firstNumber2.length<23){
					if(this.innerHTML=='+/-'&&firstNumber2.indexOf('-')==-1){
						firstNumber2='-'+firstNumber2;
						sc2.innerHTML=firstNumber2;
					}else{
						if(this.innerHTML!='+/-'){
							firstNumber2+=this.innerHTML;
							sc2.innerHTML=firstNumber2;
						}else{
							return;
						}
					}
				}else{				
					firstNumber2+=this.innerHTML;					
					sc2.innerHTML=firstNumber2.slice(index3++);
				}
			}else{
				
				if(sencondNumber2.length<23){
					if(this.innerHTML=='+/-'&&sencondNumber2.indexOf('-')==-1){
						sencondNumber2='-'+sencondNumber2;
						sc2.innerHTML=sencondNumber2;
					}else{
						if(this.innerHTML!='+/-'){
							sencondNumber2+=this.innerHTML;
							sc2.innerHTML=sencondNumber2;
						}else{
							return;
						}
					}	
				}else{
					sencondNumber2+=this.innerHTML;
					sc2.innerHTML=sencondNumber2.slice(index4++);
				}
				
			}
		}
	}

	for(var i=0;i<ops2.length;i++){
		ops2[i].onclick=function(){
			if(!sc2.innerHTML){return};
			if(this.innerHTML=='+' || this.innerHTML=='-' || this.innerHTML=='*' || this.innerHTML=='/' ){
				if(result2){
					firstNumber2=result2;
				}
				if(yunsuanfu2=='+'){
					firstNumber2=Number(firstNumber2)+Number(sencondNumber2)+'';
				}
				if(yunsuanfu2=='-'){
					firstNumber2=Number(firstNumber2)-Number(sencondNumber2)+'';
				}
				if(yunsuanfu2=='*'){
					if(sencondNumber2==''){sencondNumber2='1'};
					firstNumber2=Number(firstNumber2)*Number(sencondNumber2)+'';
				}
				if(yunsuanfu2=='/'){
					if(sencondNumber2==''){sencondNumber2='1'};					
					firstNumber2=Number(firstNumber2)/Number(sencondNumber2)+'';
				}
				
				yunsuanfu2=this.innerHTML;
				sencondNumber2='';
			}	
			if(this.innerHTML=='AC'){
				sc2.innerHTML='0';
				firstNumber2='';
				sencondNumber2='';
				yunsuanfu2='';
				equl2='';
				result2='';
			}			
		}
	}

	equl2.onclick=function(){
		if(yunsuanfu2=='+'){
			result2=Number(firstNumber2)+Number(sencondNumber2);
			sc2.innerHTML=result2;
		}
		if(yunsuanfu2=='-'){
			result2=Number(firstNumber2)-Number(sencondNumber2);
			sc2.innerHTML=result2;
		}
		if(yunsuanfu2=='*'){
			result2=Number(firstNumber2)*Number(sencondNumber2);
			sc2.innerHTML=result2;
		}
		if(yunsuanfu2=='/'){
			result2=Number(firstNumber2)/Number(sencondNumber2);
			sc2.innerHTML=result2;
		}
		// if(String(result2).length>23){
		// 	result2=Number(result2);
		// 	sc2.innerHTML=result2.toExponential(16);
		// }
		firstNumber2='';sencondNumber2='';yunsuanfu2='';equl2='';

	}

}