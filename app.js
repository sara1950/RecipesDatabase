const api = 'https://dummyjson.com/recipes/';
const search_api = 'https://dummyjson.com/recipes/search?q='

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getRecipes(api);

async function getRecipes(url){

    fetch(url)
    .then((response)=>{
        if(!response.ok) throw new Error('invalid');
        return response.json();
        
})
.then((data)=>{
    
    showRecipes(data.recipes);
   
    
})
    .catch(error=>console.log(error))
}


function showRecipes(recipes){
        main.innerHTML='';

         recipes.forEach((recipe)=>{
                    const {name, cookTimeMinutes, cuisine, image, instructions} = recipe

                    const RecipeEl = document.createElement('div')
                    RecipeEl.classList.add('card')

                    RecipeEl.innerHTML=
                    `<div class="card-inner">
                    <div class="card-front">
                    <img src="${image}" alt="${name}">
                    </div>
                    <div class="card-back">
                    <h2>${name}</h2>
                      <p>Cooking time (min):${cookTimeMinutes}</p> 
                        <p>Cuisine:${cuisine}</p>
                         </div> 
                        
                        </div> `

                        main.appendChild(RecipeEl);


                        const buttonEl = document.createElement('button')
                        buttonEl.classList.add('card')
                        buttonEl.innerHTML = "<h3>Hover here to find out how to prepare</h3>";
                        
                    
                        buttonEl.addEventListener('mouseover', ()=>{
                            for (let i=0; i < instructions.length; i++) {
                              
                            buttonEl.innerHTML = ` 
                             <div class="card-inner">
                    <div class="card-front">
                    <h2>Hover again<h2>
                     </div>
                       <div class="card-back">
                              <p>${instructions.join("")}</p>
                               </div>
                               </div>
            
                        `;
                  
                        // console.log(instructions[i]);
                         }
                        })
                 

                        main.appendChild(buttonEl);
        
    
                })

}






function pretraga(){


let upit = search.value;

if(!upit == '' ){
getRecipes(search_api + upit);
upit.value='';
}else{
    window.location.reload();
}


}




