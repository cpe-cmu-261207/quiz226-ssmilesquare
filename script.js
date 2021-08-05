const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const btn_search = document.querySelector("#search");
const btn_reset = document.querySelector("#reset");
const data = document.querySelector("#data");
const original = data.innerHTML;
var arr = [];

btn_toggle.onclick = () => {
  // your code here
  if(btn_toggle.innerText=="Show Calculation")
  {
    btn_toggle.innerText = "Show Author";
    let id = 630610715;
    let input = length.value;
    let ans = id+input;
    author.innerText = (ans).toString();
  }
  else
  {
    btn_toggle.innerText = "Show Calculation";
    author.innerText = "630610715 KANYANATTHAWEE SIRI";
  }
}

// more codes for Search and Reset buttons here

btn_reset.onclick = () => {
  length.value = 5;
  color.value= "#FF0000";
  data.innerHTML  = original;
} 

btn_search.onclick = () => {
  arr = original.split(" ")
  var search = " "
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > length.value){
      search += "<span style = 'background-color: " + color.value +"' >" +arr[i] + "</span>" +" "
    }else{
      search += arr[i]+" "
    }
  }
  data.innerHTML = search;
  
}