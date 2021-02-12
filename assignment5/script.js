const searchBtn = document.getElementById('search_btn');
const mealList = document.getElementById('meal');
const mealRecipe_details_contant = document.querySelector('.mealRecipe_details_contant');


// event listaner
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);


//get meal List
function getMealList(){
     let searchIputTex = document.getElementById('search_input').value.trim();
     // console.log(searchIputTex);
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchIputTex}`)
     .then(res => res.json())
     .then(data => {
          // console.log(data);

          let html = "";
          if(data.meals){
               data.meals.forEach(meal => {
                    html +=`
                    <div class="meal_item" data-id ="${meal.idMeal}">
                    <div class="meal_img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>

                    <div class="meal_name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="potato_btn">Show Details</a>
                    </div>
                </div>
                    `;
                    
               });
               mealList.classList.remove('not_found');
          }else{
               html ="Sorry, we didn't find any meals";
               mealList.classList.add('not_found');
          }
          mealList.innerHTML = html;
     });
}
 