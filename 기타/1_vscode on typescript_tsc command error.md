<br>

[TypeScript tutorial with Visual Studio Code](https://code.visualstudio.com/docs/typescript/typescript-tutorial)

<br>

[VSCode TypeScript 프로젝트 생성하기](https://aerocode.net/303)

<br>

[`PowerShell` VSCode 터미널 오류 : 이 시스템에서 스크립트를 실행할 수 없으므로 ~ .ps1 파일을 로드할 수 없습니다](https://singa-korean.tistory.com/21)

<br>

위의 설정을 참조하여 vsocde 설정을 마친다.

<br>


터미널에선 문제가 없는데 vsocode 내부의 터미널에서는 tsc를 입력하면 사진과 같은 오류가 발생한다.
<br>
원인은 vscode에서만 문제가 생긴다는 데에 있다. 터미널 상태를 보자 아마 cmd가 아닐 것이다. cmd로 교체해주자. 직접 교체해줘도 되고 ctrl+shift+p 명령어를 사용해줘도 된다.

<br>
굳이 powershell을 사용한다면 해당 오류를 해결해야 할 필요가 있다.
<br>
문제의 원인은 파워쉘의 스크립트 실행 권한이 제한되어 있기 때문이다. 파워쉘을 관리자 권한으로 실행시켜주자.
<br>
이후 아래 명령어를 입력시켜준다.

<br>

`Set-ExecutionPolicy RemoteSigned`

<br>

이제 tsc 명령어를 실행시켰을 때 정상적으로 동작함을 알 수 있다.

<br>
