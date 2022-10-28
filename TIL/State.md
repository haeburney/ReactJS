## state?
기본적으로 데이터가 저장되는 곳 <br>
그리고 Reat.js는 UI에서 바뀐 부분만 업데이트 해준다. <br>

<br><br><br>

## useState
```
 const data = React.useState();
 console.log(data);
```
<br>

![image](https://user-images.githubusercontent.com/76997276/198699412-8826201c-d91e-4b30-95ca-59be5393980a.png)
<br>
React.useState() 함수는 초기값을 설정할 수도 있다.<br><br><br>

```
const car = ["ice","golmery"]
const [myCar, loveCar] = car;

console.log(myCar)    //  'ice'
console.log(loveCar)  //  'golmery'
```
<br><br>
리액트에 대한 강의를 하나 듣고 이 강의를 들으니까 진짜 이해가 쏙쏙된다.<br>
어찌 이렇게 개념을 재밌게 잘 가르쳐주시는거지..<br><br><br><br><br>

## setState 
```
const [counter, modifier] = React.useState(0);
```
modifier 함수는 그 값으로 업데이트하고 리렌더링을 일으킬 것이다.<br><br><br><br><br>

```
<!DOCTYPE html>
<html lang="ko">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");
    
    // UI rerendering

    function App(){
        const [counter, setCounter] = React.useState(0);
        const onClick = () => {
            setCounter(counter+1);
        }
       
        return (
            <div>
                <h3>Total clicks : {counter}</h3>
                <button onClick={onClick}>Click Me</button>
            </div>
        )
    }

    ReactDOM.render(<App />, root);

</script>

</html>
```
<br>
데이터가 바뀔 때마다 컴포넌트를 리렌더링하고 UI를 refresh 해준다. <br>
state가 바뀌면 리렌더링이 일어나게 된다. <br><br><br><br>


