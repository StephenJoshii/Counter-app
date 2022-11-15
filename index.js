let countP = document.getElementById("countPeople")
let count = 0

let saved=document.getElementById("save-el")



function increment(){
	count += 1
	console.log(count)
	countP.textContent = count

}

function save(){

   saved.textContent += count + " - "
   count = 0
   countP.textContent = 0
}