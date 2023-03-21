
// =======================================CONSTRUCTOR===============================
function contruct_element(){
    const body =document.querySelector('body');
    const group1=document.querySelector('group_1')
    const group2=document.querySelector('group_2')
    const newDiv=document.createElement('div')
    newDiv.setAttribute("id","container")
   
    const display=document.createElement('div');
    display.setAttribute("id","display")
        

    const newLabel={
        nombr_1:document.createElement('label'),
        nombre_2:document.createElement('label')
    }
    const newInputs={
        nombr_1:document.createElement("input"),
        nombr_2:document.createElement("input")
    
    }
    const newButton={
        btn:document.createElement('button')
    }
    for (const [key,value] of Object.entries(newLabel)) {
       
        value.setAttribute("class",key)
        value.innerText=key
        value.setAttribute("for",key);
        
        newDiv.appendChild(value);
    }
    for (const [key,value] of Object.entries(newInputs)) {
        value.setAttribute("class",key)
        value.setAttribute("type","text")
        value.setAttribute("id",key)
        newDiv.appendChild(value)
    }
    for (const [key,value] of Object.entries(newButton)) {
        value.setAttribute("class",key)
        value.innerText="calculer"
        newDiv.appendChild(value)
    }
    body.appendChild(newDiv);
    newDiv.appendChild(display)
}
contruct_element()
const display =document.querySelector('#display')
const btn =document.querySelector('.btn');
btn.addEventListener('click',calcul)
// =====================================FUNCTION CALCUL ++++++++++++++++++++++++++
function calcul(){
    let somme =0;
    let moyenne=0;
    const nb_1   =document.querySelector('#nombr_1').value;
    const nb_2   =document.querySelector('#nombr_2').value;
    let nb_1_1=parseInt(nb_1)
    let nb_2_1=parseInt(nb_2)
    
    somme=somme +(nb_1_1 + nb_2_1);
    moyenne=moyenne+(somme/2);
    if (nb_1 =="" && nb_2 =="") {
        alert("Veuillez entrer les deux nombres !!")  
    }else{
        display.innerHTML+=` <span>sommes est de :${somme}</span>  `;
        display.innerHTML+=`<span>la moyenne est de :${moyenne}</span>`;

    }
    

}

// ===========================================================================================================
// =============================================================================================================
console.log('test');

// ==========================================================================
// =============================================================================



