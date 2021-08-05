const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const btn_search = document.querySelector("#search");
const btn_reset = document.querySelector("#reset");
const text = document.querySelector("#text");
const same = text.innerHTML;
var arr = [];

btn_toggle.onclick = () => {
  if(btn_toggle.innerText=="Show Calculation"){
      btn_toggle.innerText = "Show Author";
      let id = 630610715;
      let add = length.value;
      let sum = id+add;
      author.innerText = sum
  }else{
      btn_toggle.innerText = "Show Calculation";
      author.innerText = "630610715 KANYANATTHAWEE SIRI";
  }
}

// more codes for Search and Reset buttons here
btn_search.onclick = () => {
  arr = same.split(" ")
  var search = " "
  for(let i =0; i< arr.length; i++){
    if(arr[i].length > length.value){
      search += "<span style = 'color: " + color.value +"' >" + arr[i] + "</span>" +" "
    }else{
      search += arr[i]+" "
    }
  }
  text.innerHTML = search;
}

btn_reset.onclick = () => {
  length.value = 5;
  color.value= "#FF0000";
  text.innerHTML  = same;
} 