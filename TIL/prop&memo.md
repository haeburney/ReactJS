## props
부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법 

<br><br><br><br>
### style 복붙해서 만들지 않고 props를 이용해서 여러 컴포넌트 만들기
```
<script type="text/babel">
   function Btn({ coffee, big }) {
        return (<button
            style={{
                backgroundColor: "skyblue",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize: big ? 18 : 15
            }}
        >{coffee}</button>);
   }

     
    function App(){
        return (
            <div> {/* JSX의 내부 */}
                <Btn coffee="Save Changes" big={true} />
                <Btn coffee="Continue" big={false} />
                 {/* Btn() 함수를 불러서 coffee라는 인자를 보내는 것 */}
            </div>
        )
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);

</script>
```
<br><br><br><br>

## Memo
렌더링 될 때 업데이트(?)가 되지 않은 컴포넌트는 리렌더링 안되게 기억해주는 것.
<br>

```
function Btn({ coffee, changeValue }) {
        return (<button
            onClick={changeValue}
            style={{
                backgroundColor: "skyblue",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10
            }}
        >{coffee}</button>);
   }

   const MemorizeBtn = React.memo(Btn);
     
    function App(){
        const [value, setValue] = React.useState("Save Changes");
        const changeValue = () => setValue("Revert Changes");
        return (
            <div> {/* JSX의 내부 */}
                <MemorizeBtn coffee={value} changeValue={changeValue}/>
                <MemorizeBtn coffee="Continue" />
                 {/* Btn() 함수를 불러서 coffee라는 인자를 보내는 것 */}
            </div>
        )
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
```
<br><br><br><br>

## Prop Types
```
<script src="https://unpkg.com/prop-types@15.8.1/prop-types.js"></script>
```
prop-type을 다운 받아 사용할 수 있다.
<br><br><br>
```
Btn.propType = {
        text: PropTypes.string.isRequired,
        fontSize: PropTypes.number,
    }
```
Btn의 propType을 명시해줬다.<br>
그러면 사용자가 정의한 type에 어긋나면 에러 메세지로 알려 줄 수 있다.<br>
(원래는 문법상 오류가 없기 때문에 에러 메세지가 뜨지 않음)<br>
<br><br><br>
```
function Btn({ text, fontSize = 14 }) {
    // 만약 fontSize의 값이 없다면 default로 14 크기를 갖게 된다.
        return (<button
            style={{
                backgroundColor: "skyblue",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize,
            }}
        >{text}</button>);
   }

   const MemorizeBtn = React.memo(Btn);

   Btn.propType = {
        text: PropTypes.string.isRequired,
        fontSize: PropTypes.number,
    }
     
    function App(){

        return (
            <div> 
                <Btn text="Save Changes" fontSize={18} />
                <Btn text="Continue"  />
            </div>
        )
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
```
<br><br>
