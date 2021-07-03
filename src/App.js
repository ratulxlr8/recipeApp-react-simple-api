
import Recipe from './Recipe';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const APP_ID = "f5dd35d2";
  const APP_KEY = "2abfbecc36a815275a3222cc98fa050c";
  
  const [recipies, setrecipies] = useState([]);
  const [search,setSearch] =useState("");
  const [query,setqUERY]=useState('chicken');
  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setrecipies(data.hits);
    console.log(data.hits);
  };
  const updateSearch= e =>{
    setSearch(e.target.value);

  }

  const getSearch = e =>{
    e.preventDefault();
    setqUERY(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form className="searchy-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button
          className="search-buttnon">
          Search
        </button>

      </form>
      <div className="recipes">
      {recipies.map(recipie => (
        <Recipe
          key={recipie.recipe.label}
          title={recipie.recipe.label}
          calories={recipie.recipe.calories}
          image={recipie.recipe.image}
          ingredients={recipie.recipe.ingredients}
        />


      ))}
      </div>
    </div>
  );
}

export default App;
