let calc = document.getElementsByClassName('button');
console.log(calc);
let dis = document.getElementById('display');
console.log(dis);
let sim_cal = document.getElementById('calculator');
console.log(sim_cal);

let num1 ;
let mun2;
let result;
let first = '';
let second = '';
let operator;
let v;
for (let i=0; i<calc.length; i++){
    let inp = calc[i];
    

    inp.addEventListener('click', (event) => {
        let temp = v;
        v = inp.innerHTML;
        // console.log(v);
        if (v == 'AC' || v == 'mc' || v == 'm+' || v == 'm-' || v == 'mr'){
            dis.textContent = '0';
            first = '';
        }
        else{
            if(v == '1' || v == '2' || v == '3' || v == '4' || v == '5' || v == '6' || v == '7' || v == '8' || v == '9' || v == '0' || v=='.'){
                if (temp == '=' || temp == '%' || temp == '<i class="fa-solid fa-square-root-variable"></i>' || temp =='π'){
                    first = v;
                }
                else{
                    first += v;
                }
                
            }
            dis.textContent = first;

            if( v=='+' || v=='-' || v=='%' || v=='x' || v=='<i class="fa-solid fa-square-root-variable"></i>' || v=='<i class="fa-solid fa-divide"></i>' ){
            operator = v;
            num1 = Number(first);
            first = '';
            
            }
            if (v=='π'){
                first = showPi();
            }
        

            if (v=='=' && operator=='+'){
               num2 = Number(first);
               first = add(num1,num2);
            }
            if (v=='=' && operator=='-'){
                num2 = Number(first);
                first = minus(num1,num2);
             }
            
            if (v=='=' && operator=='x'){
                num2 = Number(first);
                first = muntiply(num1,num2);
             }
             if (v=='%'){
                first = percent(num1);
             }
             if (v=='=' && operator=='<i class="fa-solid fa-divide"></i>'){
                num2 = Number(first);
                first = divide(num1,num2);
             }
             if (v=='<i class="fa-solid fa-square-root-variable"></i>'){
                first = root(num1);
             }
            
        // console.log(num1);
        // console.log(num2);
        }

        
        
    })
   
}

function add(first, second){
   let res = first + second;
   console.log(res);
   dis.textContent = res;
   return res;
}
function muntiply(first,second){
    let res = first * second;
    dis.textContent = res;
    return res;
}
function percent (num){
    let res = num/100.0;
    dis.textContent = res;
    console.log(res);
    return res;

}
function divide(first, second){
    let res = first/second;
    dis.textContent = res;
    return res;
}
function root(num){
    let res = Math.sqrt(num);
    dis.textContent = res;
    return res;
}
function showPi(){
    let res = Math.PI;
    dis.textContent = res;
    return res; 
}
function minus(first, second){
    let res = first - second;
    dis.textContent = res;
    return res;
}