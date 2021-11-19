## Case6 : Dropdown

### 케이스 주제

Form 요소 중 하나인 드롭다운(Dropdown) 문제입니다.  
아래 이미지를 참고해서 데스크탑과 모바일에 최적화된 드롭다운을 구현해주세요.

### 기능 요구사항

1. 옵션 선택하기 클릭시 하위 옵션 리스트가 펼쳐진다.
2. 옵션명이 길어질 경우 Dropdown의 전체 길이도 함께 늘어나야 한다.
3. 데스크탑(PC) UI 기본 디자인 정의
   - 버튼의 최소 가로값 120px
   - 고정 높이값 34px (텍스트는 영역 안에서 세로 가운데 정렬)
   - 테두리 라운드 값 2px
   - 옵션 텍스트가 늘어날 경우 좌/우 여백은 12px을 유지한다.
   - 하위 옵션 텍스트 1개당 최소 높이값 30px, 텍스트 12px/마우스오버시 배경색 rgba(196, 196, 196, 0.2)
4. 모바일(Mobile) UI 기본 디자인 정의
   - 옵션 텍스트 14px/bold
   - 옵션 텍스트와 화살표 간격 18px

### 문제

<img src="dropdown.png" width="847">
<img src="dropdown-layer.png" width="360">

### 아이콘 이미지 경로

- Desktop icon : `images/arrow-down.png`
- Mobile icon : `images/arrow-expend.png`

### 주요 학습 키워드

- 브라우저 기본 `<select>`태그를 사용하지 않고 Dropdown을 구현하는 방법을 학습한다.

### 작성해주셔야 하는 question 파일경로

`./question/html/dropdown_pc.html`  
`./question/scss/dropdown_pc.scss`  
`./question/html/dropdown_mobile.html`
`./question/scss/dropdown_mobile.scss`

### 실행 방법

#### PC

경로
`./question/html`
dropdown_pc.html 열기

#### Mobile

경로
`./question/html`
dropdown_mobile.html 열기
