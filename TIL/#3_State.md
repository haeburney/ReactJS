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

