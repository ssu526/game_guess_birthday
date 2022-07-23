const setsContainerEl = document.querySelector(".sets-container")
const done_button = document.querySelector(".done_button");
const resultEl = document.querySelector(".result");
const clear_button = document.querySelector(".clear_button");

const sets = [
                [[1,3,5,7],[9,11,13,15],[17,19,21,23],[25,27,29,31]],
                [[2,3,6,7],[10,11,14,15],[18,19,22,23],[26,27,30,31]],
                [[4,5,6,7],[12,13,14,15],[20,21,22,23],[28,29,30,31]],
                [[8,9,10,11],[12,13,14,15],[24,25,26,27],[28,29,30,31]],
                [[16,17,18,19],[20,21,22,23],[24,25,26,27],[28,29,30,31]],
             ];


for(let i=0;i<5;i++){
    setsContainerEl.appendChild(displaySet(sets[i],i));
}


function displaySet(set, i){
    const setEl = document.createElement("div");
    setEl.classList.add("set");

    set.forEach(row=>{
        const rowEl = document.createElement("div");
        rowEl.classList.add("row");

        row.forEach(n=>{
            rowEl.innerHTML+=`<div class="column">${n}</div>`;
        })

        setEl.appendChild(rowEl);
    })

    setEl.innerHTML += `<div class="answer-container"><input type="checkbox" value=${Math.pow(2, i)} class="answer"/><span>Yes</span></div>`

    return setEl;
}

done_button.addEventListener('click', ()=>{
    let result = 0;
    const answers = document.querySelectorAll('.answer');

    answers.forEach(ans => {
        if(ans.checked){
            result += parseInt(ans.value);
        }
    })

    if(result==0){
        resultEl.innerHTML = "Please make your selections.";
    }else{
        resultEl.innerHTML = "Your birthday is "+ result+"!";
    }
})

clear_button.addEventListener("click", ()=>{
    document.querySelectorAll('.answer').forEach(ans => {ans.checked=false;})
    resultEl.innerHTML="";
})
