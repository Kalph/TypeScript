## TypeScript?

TypeScript 란 마이크로소프트에서 개발한 오픈소스 프로그래밍 언어다 . 자신이 원하는 Type을 정의하고 프로그래밍을 하면 JavaScript로 컴파일 되어 실행할 수 있다

<br>

먼저 Node.js를 설치해주어야 한다.

Node.js를 설치하면 노드 패키지 관리자인 NPM을 사용할 수 있다. 이는 다른 패키지를 설치하는 데 도움이 된다.

<br>

## NPM?

Node Package Modules의 약자이다. Node.js에서 사용되는 모듈을 패키지로 모아놓은 것이다. 필요한 모듈을 npm을 통해서 간단하게 다운받을 수 있다. 
<br>

```js
npm install -g typescript ts-node
```

<br>

위의 명령어를 통해 TypeScript와 ts-node를 설치해 준다.

이를 위해선 cmd 창을 사용해야 하는데 반드시, <b>관리자 권한</b>으로 실행시켜 주어야 문제가 생기지 않는다.
<br>

쉽게 관리자 권한으로 실행시키는 방법은 아래와 같이 cmd를 검색시켜놓고 Crlt+Shift+Enter을 통해 관리자 권한으로 실행시킨다.

<br>

## NVM?

NVM(Node Version Manager)은 Node.js의 버전을 관리하기 위한 도구이다. 개발툴들이 다양해질수록 Node.js의 버전을 변경해주어야 한다. 이때 NVM을 사용한다. 아래의 문서를 참조하여 설치한다.

<br>
 
[nvm-sh/nvm](https://github.com/nvm-sh/nvm)

<br>

<br>

문서를 참조했다면 이제 설치한다. 아래 링크의 nvm-setup.zip을 다운받아 실행시켜

설치해준다.

참고로 이 설치 방법은 Window가 기준이다. 운영체제 별로 nvm 설치 방법이 다 다른 듯 하다.

<br>


[coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

<br>

이후 터미널을 열어 nvm version으로 설치된 것을 확인하자

<br>

```js
nvm version 혹은 nvm -v 명령어를 사용하여 확인한다.
1.1.7
```
<br>

이후 설치가 정상적으로 완료되었는지 확인한다.

<br>

```js
nvm -v
```

<br>

설치된 버전을 확인하는 명령어는 다음과 같다.

<br>

```js
nvm ls
```

<br>

다른 버전을 설치할 수도 있다

<br>

```js
nvm install 5.4.0
```

<br>

최신 버전을 자동으로 설치하는 방법이다.

<br>

```js
nvm install --lts
```

<br>

그러나 위의 명령어의 실행결과 아래와 같은 오류가 발생하였다.

<br>

```js
--lts.0.0

Node.js v--lts.0.0 is only available in 32-bit.

```

<br>

원인은 나도 모르겠다. ㅎㅎ... 대신 차선책을 찾아보았다. 아래와 같이 list available 명령어를 통해 설치할 수 있는 버전을 탐색 후 직접 설치해주는 방법이다.

<br>

```js
nvm list available
nvm install 버전
```

<br>

저 명령어란 녀석... 쓰고 싶다..ㅠ.ㅠ 
