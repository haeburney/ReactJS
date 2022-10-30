## Deps
```
useEffect(() => {
    console.log("SEARCH FOR ", keyword);
  }, [keyword]);
  // [keyword] : 'keyword'가 변화할 때 코드를 실행할거라고 REACT.js에게 알려주는 것이다.

```
<br><br><br><br>

## useEffect
변경될 때만 실행이 되게 해준다.<br><br>

```
 useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
```
<br><br><br><br>

## Cleanup
![image](https://user-images.githubusercontent.com/76997276/198895818-199d0bbf-723b-4d85-9511-4d757042b539.png)


<br><br>

```
function Hello() {
  useEffect(() => {
    console.log("create :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello My Name is 예삐예삐오</h1>;
}

function App() {
  const [ showing, setShowing ] = useState(false);
  
  const onClick = () => setShowing((prev) => !prev );

  useEffect (()=>{
   
  }, [showing])

  return (
    <div>
     <button onClick={onClick}>{showing ? "hide" : "show"}</button>
     {showing? <Hello /> : null}
    </div>
  );
}
```
