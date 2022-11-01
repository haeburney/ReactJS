## Movie App 

```
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    });
  },[])
  console.log(movies);
  return (
    <div>
     {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}
```
위, 아래 코드는 동일한 기능을 하는 코드이다. 
요즘은 then 대신 **async-await**을 사용한다.
<br><br><br>
```
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const reponse = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  },[])
  
  return (
    <div>
     {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}
```
<br><br><br><br>

## map
map안에 있는 key는 매우 중요하다.
key는 React.js에서만, map안에서 component들을 render할 때 사용하는 것이다.

그리고 어떤 props를 가지고 있는지 알면 좋기 때문에
```
import React from 'react'
import PropTypes from "prop-types";

function Movie({coverImg, title, summary, genres }) {
  return (
      <div>
          <img src={coverImg} art={title} />
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
              {genres.map(g => <li key={g}> {g}</li>)}
          </ul>
      </div>
  )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
```
<br><br><br><br>

## React Router
페이지를 전환하는 것

App.js는 router를 render한다.
router는 URl을 보고있는 component이다.

<br><br><br><br>

## React Router
라우터에는 두 가지 종류가 있는데
한 가지는 HashBroswer
다른 하나는 Brower Router이다.


```
 return <Router>
    <Switch>
      
    </Switch>
  </Router>;

```
Switch가 하는 일은 Route를 찾는건데 Route는 url을 의미한다.
그리고 Route를 찾으면 컴포넌트를 렌더링한다.

HashBrower를 쓰면 url에 **#**이 들어가게 되는데
보통 사람들은 #이 들어가는 걸 원하지 않기 때문에
보통 Brower Router를 쓴다.

<br><br><br><br>

## Link
Link 는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트이다.

<br><br><br><br>

## React Route
다이나믹(동적) url을 지원해주기도 한다.
다이나믹하다는 건 url에 변수를 넣을 수 있다는 의미이다.


