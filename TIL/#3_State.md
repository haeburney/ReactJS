## state를 바꾸는 2가지 방법

### setCounter를 이용해서 우리가 원하는 값을 넣어주는 것 (직접 설정)

### 이전 값을 이용해서 현재 값을 계산 해내는 것 (함수 전달)
현재 state를 기반으로 계산을 하고 싶다면, 함수를 이용하는 거야.

```
   const [counter, setCounter] = React.useState(0);
        const onClick = () => {
          //  setCounter(5);
          setCounter((current) => current + 1);
        }
```
<br><br><br><br><br>
## 시 -> 분 / 분 -> 시로 바꾸는거 만들기 
```
function App(){
        const [minutes, setMinutes] = React.useState();
        const onChange = (event) => {
            setMinutes(event.target.value);
        }

        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <label htmlFor="minutes">Minutes</label>
                <input
                    value={minutes}
                    id="minutes"
                    placeholder="Minutes"
                    type="number" 
                    onChange={onChange} />
                <h4>You want to convert {minutes}</h4>    
                <label htmlFor="hours">hours</label>
                <input id="hours" placeholder="Hours" type="number" />
            </div>
        )
    }
```
<br><br><br><br><br><br>
## State Practice part One
```
   function App(){
        const [minutes, setMinutes] = React.useState();
        const onChange = (event) => {
            setMinutes(event.target.value);
        }
        const reset = (event) => setMinutes(0);
    

        return (
            <div>
                <h1 className="title">Super Converter</h1>

                <div>
                    <label htmlFor="minutes">Minutes</label> &nbsp; 
                    <input
                        value={minutes}
                        id="minutes"
                        placeholder="Minutes"
                        type="number"
                        onChange={onChange} />
                </div> <br />

                <div>
                    <label htmlFor="hours">hours</label> &nbsp; 
                    <input
                        value={Math.round(minutes / 60)}
                        id="hours"
                        placeholder="Hours"
                        type="number" />
                </div> <br />
                <button onClick={reset}>Reset</button>
            </div>
        )
    }

    ReactDOM.render(<App />, root);
```
<br><br><br><br><br><br>
## State Practice part Two 
```
 function App(){
        const [amount, setAmount] = React.useState(0);
        const [flipped, setFlipped] = React.useState(false);
        const onChange = (event) => {
            setAmount(event.target.value);
        }
        const reset = (event) => setAmount(0);
        const onFlip = () => {
            reset();
            setFlipped((current) => !current);
        }

        return (
            <div>
                <h1 className="title">Super Converter</h1>

                <div>
                    <label htmlFor="minutes">Minutes</label> &nbsp; 
                    <input
                        value={flipped? amount * 60 : amount}
                        id="minutes"
                        placeholder="Minutes"
                        type="number"
                        onChange={onChange} 
                        disabled={flipped}/>
                </div> <br />

                <div>
                    <label htmlFor="hours">hours</label> &nbsp; 
                    <input
                        value={flipped? amount : Math.round(amount / 60)}
                        id="hours"
                        placeholder="Hours"
                        type="number" 
                        onChange={onChange} 
                        disabled={!flipped} />
                </div> <br />
                <button onClick={reset}>Reset</button> &nbsp; 
                <button onClick={onFlip}>Flip</button>
            </div>
        )
    }

    ReactDOM.render(<App />, root);
```
<br><br><br><br><br>
## 시 <-> 분 & km <-> mile 변경 
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
   
    function MinutesToHours(){
        const [amount, setAmount] = React.useState(0);
        const [flipped, setFlipped] = React.useState(false);
        const onChange = (event) => {
            setAmount(event.target.value);
        }
        const reset = (event) => setAmount(0);
        const onFlip = () => {
            reset();
            setFlipped((current) => !current);
        }

        return (
            <div>
                <div> 
                    <label htmlFor="minutes">minutes</label> &nbsp; 
                    <input
                        value={flipped? amount * 60 : amount}
                        id="minutes"
                        placeholder="Minutes"
                        type="number"
                        onChange={onChange} 
                        disabled={flipped}/>
                </div> <br />

                <div>
                    <label htmlFor="hours">hours</label> &nbsp; 
                    <input
                        value={flipped? amount : Math.round(amount / 60)}
                        id="hours"
                        placeholder="Hours"
                        type="number" 
                        onChange={onChange} 
                        disabled={!flipped} />
                </div> <br />
                <button onClick={reset}>Reset</button> &nbsp; 
                <button onClick={onFlip}>{flipped? "Turn back" : "Invert"}</button>
            </div>
        )
    }

    function KmToMiles(){
        const [amount, setAmount] = React.useState(0);
        const [flipped, setFlipped] = React.useState(false);
        const onChange = (event) => {
            setAmount(event.target.value)
        }
        const reset = (event) => setAmount(0);
        const onFlip = () => {
            reset();
            setFlipped((current) => !current)
        }

       return (
            <div>
                <div>
                    <label htmlFor="km">km</label> &nbsp;
                    <input 
                        value={flipped? amount * 1.609344: amount}
                        id="km"
                        placeholder="km"
                        type="number"
                        onChange={onChange}
                        disabled={flipped}
                    />
                </div> <br />

                <div>
                    <label htmlFor="mile">mile</label> &nbsp;
                    <input 
                        value={flipped? amount : amount * 0.621371}
                        id="mile"
                        placeholder="km"
                        type="number"
                        onChange={onChange}
                        disabled={!flipped}
                    />
                </div> <br />
                <button onClick={reset}>reset</button> &nbsp;
                <button onClick={onFlip}>{flipped ? "Turn back" : "Invert" }</button>
            </div>
        );
    }

    function App(){
        const [index, setIndex] = React.useState("xx");
        const onSelect = (event) => {
           setIndex(event.target.value);
        }
        return (
            <div>
                <h1>Super Converter</h1>
                <select value={index} onChange={onSelect}>
                    <option value="xx">Select your units</option>
                    <option value="0">Minutes & Hours</option>
                    <option value="1">Km & Miles</option>
                </select> 
                <br /><hr /><br />
                {index === "xx" ? "Please select your units" : null }
                {index === "0"? <MinutesToHours /> : null }
                {index === "1"? <KmToMiles /> : null }
               {/* 분할 정복 
                중괄호 안에는 JS를 쓸 수 있다. */}
            </div>
        )
    }

    ReactDOM.render(<App />, root);

</script>

</html>
```
