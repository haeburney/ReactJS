## array랑 합칠 때 **닷닷닷**
```
var array = [1, 2, 3];

console.log([6, array]) 	//	[6, Array(3)] / 0: 6 / 1: [1, 2, 3]
console.log([6, ...array])	//	[6, 1, 2, 3]
```
<br><br><br><br>

## map
> 하나의 array에 있는 item을 내가 원하는 무엇이든지 바꿔주는 역할
예전 array를 가져와서 변형하는 것

<br><br>
```
['min','hyun','soo','ji'].map(() => ":)");	// [':)', ':)', ':)', ':)']

['min','hyun','soo','ji'].map((item) => item.toUpperCase());  // ['MIN', 'HYUN', 'SOO', 'JI']
```
<br><br><br><br>
![](https://velog.velcdn.com/images/dovnaldisn/post/1696d096-cf7d-46d5-bfcc-83047e4e47c5/image.png)

이건 react가 기본적으로 list에 있는 모든 item들을 인식하기 때문에 발생하는 에러이다.
<br><br><br><br>
```
  {toDos.map((item, index) => <li key={index}i>{item}</li>)}
```
이런 식으로 key={index}를 넣어주면 된다.
<br><br>
