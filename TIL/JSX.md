## JSX 
JSX는 JavaScript를 확장한 문법이다. <br>
기본적으로 React 요소를 만들 수 있게 해준다. <br>
생긴 게 HTML이랑 비슷하기 때문에, <br>
JSX로 React 요소를 만드는게 개발자들 입장에서는 굉장히 편하다. <br><br>

브라우저가 JSX를 이해할 수 있게 뭔가를 설치해줘야 한다. <br>
![image](https://user-images.githubusercontent.com/76997276/198532530-2a530829-09b9-4593-be57-c729523f9503.png)  <br> <br>
이런 식으로 바꿔줘야 한다. <br>
이걸 하는데 Babel을 사용하려고 한다. <br>

<br><br><br>

## Babel
코드를 변환해주는 역할 <br>
JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔준다. <br>
https://babeljs.io/

![image](https://user-images.githubusercontent.com/76997276/198529927-aad41512-a62a-4786-aec5-fcaff26a0894.png) <br>
이렇게 바꿀 수 있다.  <br><br><br><br>
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
    const Title = (<h3 id="title" 
        onMouseEnter = {() => console.log("mouse enter")}> 
        Hello I'm a title</h3>);

    const Button = (<button style={{
        backgroundColor: "skyblue",
    }} onClick = { () => console.log("I'm clicked")}>Click ME</button>); 

    const container = React.createElement("div", null, [Title, Button]);
    //  두개를 reder하고 싶다면 위 같이 만들어서 배열을 두면 된다.

    ReactDOM.render(container, root);

</script>

</html>
```
<br><br><br>
