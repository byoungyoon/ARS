# ARS

## log

project log

- 1일차 : https://blog.naver.com/bur5698/222821274737
- 2일차 : https://blog.naver.com/bur5698/222822997286
- 3일차 : https://blog.naver.com/bur5698/222828619235
- 4일차 : https://blog.naver.com/bur5698/222831675195
- 5일차 : https://blog.naver.com/bur5698/222833188380
- 6일차 : https://blog.naver.com/bur5698/222837866218
- 7일차 : https://blog.naver.com/bur5698/222843224770
- 8일차 : https://blog.naver.com/bur5698/222855144427
- 9일차 : https://blog.naver.com/bur5698/222861162533

error log

- router로 경로 이동 시 webpack 관련 오류

```
its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
```

> webpack에서 historyfallback시 기준이 되는 경로가 없을 경우 발생하는 오류  
> 해결법 : webpack output 설정에 publicPath 입력

- label 사용시 for 관련 오류

```
Invalid DOM property `for`. Did you mean `htmlFor`?
```

> JSX에서 html을 사용할 경우 본질은 JavaScript 이기 때문에 for을 직접적으로 사용하면 발생하는 오류
> 해결법 : for을 htmlFor로 변경한다.

- css flex로 정렬 시 부모 요소 벗어나는 오류

> flew 중첩 시 margin이나 padding 사용할 경우 부모요소가 벗어나게 되는데 fix 해줘도 안되는 오류
> 해결법 : flex => grid 자체로 바꾸어서 해결
