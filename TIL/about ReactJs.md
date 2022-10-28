기술은 도구를 고치기 위해 만들어진다. <br>
기술이 고치려고 하는 문제를 이해하면 그 기술을 더 잘 이해할 수 있게 된다. <br><br><br>

## React JS는 웹사이트에 interactivity(상호작용)을 만들어 준다.


<br><br><br>
## React JS를 설치하기 위해서는 두 개의 Javascript 코드를 import 해야 한다.
① react <br>
② react-dom <br><br>

### React JS는 엔진과 같은 역할
React JS는 어플리케이션이 아주 interactive하도록 만들어주는 library이고<br>

### react-dom은 React element를 HTML에 두는 역할
react-dom은 library 또는 package인데 모든 React element들을 HTML body에 둘 수 있도록 해준다.<br>


<br><br><br>

## 비교 

vanilla.html<br>
```
<!DOCTYPE html>
<html lang="en">
<body>
    <span>Total clicks: 0</span>
    <button id="btn">Click me</button>

    <script>
        var counter = 0;
        const button = document.getElementById("btn");
        const span = document.querySelector("span");

        function handleClick(){
            counter = counter + 1;
            span.innerText = `Total clicks: ${counter}`;
        }
        button.addEventListener("click", handleClick);
    </script>
</body>
</html>
```
<br><br><br>
react <br>
```
<!DOCTYPE html>
<html lang="ko">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script>
    const root = document.getElementById("root");
    const span1 = React.createElement("span", {id : "sexy-span"}, "Hi");
    // createElement function을 가진 React object에 접근할 수 있다.
    // span1을 생성했고 span1을 나타내야함! 

    // React.createElement의 두번째 인자로 올 수 있는 건 span의 property들이다.
    // property는 class name이 될 수도 있고, id가 될 수도 있다.
    // 3번째는 span의 내용이다. 

    ReactDOM.render(span1, root);
    // render의 의미 : React element를 가지고 HTML로 만들어 배치한다는 것
    // 사용자에게 보여주는 거지 
    // 그리고 reactDOM에게 어디에 span을 둘 것인지 알려줘야 한다.
    // span을 root 안에 render 해줘 
</script>

</html>
```
<br><br>
**React JS에서는 모든 것이 Javascript로 시작한다.**<br>
그 다음에 HTML이 되는 것이다.<br>
이게 바로 React JS 파워의 핵심이다.<br><br>

React JS가 element를 생성하고 있다.<br>
이 말은 React JS는 업데이트가 필요한 element를 업데이트할 것이라는 말이고<br>
바로 React JS가 결과물인 HTML을 업데이트할 수 있다는 것이다.<br>
그래서 React JS는 유저에게 보여질 내용을 컨트롤 할 수 있다.<br>
<br><br><br>


