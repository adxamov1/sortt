var elMovList = document.querySelector('.movie__list')
var elSel__category = document.querySelector('.sel__category')
var partMovie = movies.slice(0,100)
fnRender(partMovie)

function fnRender(data){
    elMovList.innerHTML = ''
    data.forEach((item)=>{
        var newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="card mt-3" style="width: 18rem;">
        <img src="	https://i.ytimg.com/vi/${item.ytid}/hq720.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.Title.toString().splice(0, 20)}</h5>
            <p class="card-text">${item.Categories.toString().splice(0, 15)}</p>
            <p class="card-text">${item.movie_year}</p>
            <p class="card-text">${item.imdb_rating}</p>
            <div class="d-flex justify-content-between align-items-center">
            <a href="https://www.youtube.com/watch?v=${item.ytid}" target="blank" class="btn 
            btn-primary">watch movie</a>
            <i onclick="setId(`${item.ytid}`)" class="bi bi-heart"></i>
            </div>
        </div>
        </div>
        `
    
        elMovList.appendChild(newLi)
    });
}


function fnYear(value){
  if(value == 'old'){
    fnRender(partMovie.sort((a,b)=>a.movie_year - b.movie_year));
  }else{
    fnRender(partMovie.sort((a,b)=>b.movie_year - a.movie_year));
  }
}

function fnRanting(value){
    if(value == 'min'){
      fnRender(partMovie.sort((a,b)=>a.imdb_rating - b.imdb_rating));
    }else{
      fnRender(partMovie.sort((a,b)=>b.imdb_rating - a.imdb_rating));
    }
  }


  var CategoriesArr = []
  partMovie.forEach((item)=>{
    if(CategoriesArr.includes(item.Categories) == false){
        CategoriesArr.push(item.Categories)
    }
  })
  CategoriesArr.sort().forEach((item)=>{
    var newOption = document.createElement('option')
    newOption.textContent = item
    newOption.value = item
    elSel__category.appendChild(newOption       )
  })
  
  
   function  fnCategory(value){
    fnRender(partMovie.filter((item)=>item.Categories == value));
   }
  
  
   function fnSearch(value){
      value.preventDefault()
      var val = value.target.inpSearch.value
      fnRender(part.Movie.filter((item)=>item.Title.toString().toLowerCase().includes(val.toLowerCase()) == true));
   }
  


   var faoArr = []
  function setId(id){
    faoArr.push(partMovie.find((item)=> item.ytid == id)) 
    console.log(faoArr);
  }
  
  
var arr = [5,4,3,2,2,5,7]
window.localStorage.setItem('a',JSON.stringify(arr))
console.log(arr);
console.log(JSON.parse(window.localStorage.getItem('a')));
  
  
  
  
  // console.log(arr.sort((a,b)=> a - b));