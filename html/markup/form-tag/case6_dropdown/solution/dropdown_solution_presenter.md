## Case6 : dropdown - 출제자 해설

### PC

```html
<!DOCTYPE html>
<html lang="kr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dropdown</title>
    <link rel="stylesheet" href="../css/dropdown_pc.css" />
  </head>
  <body>
    <h1 style="font-size: 24px">Dropdown 데스크탑UI</h1>

    <div class="dropdown">
      <div class="dropdown-wrapper">
        <button type="button" class="dropdown-main">옵션 선택하기</button>
        <ul class="dropdown-list">
          <li class="dropdown-item"><button type="button" class="dropdown-sub">첫번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">두번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">세번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">네번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">다섯번째 옵션</button></li>
        </ul>
      </div>
    </div>

    <div class="dropdown">
      <div class="dropdown-wrapper">
        <button type="button" class="dropdown-main" disabled="disabled">옵션 선택하기</button>
        <ul class="dropdown-list">
          <li class="dropdown-item"><button type="button" class="dropdown-sub">첫번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">두번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">세번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">네번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">다섯번째 옵션</button></li>
        </ul>
      </div>
    </div>

    <div class="dropdown">
      <div class="dropdown-wrapper">
        <button type="button" class="dropdown-main">옵션명이 길어지면 드롭다운도 늘어납니다.</button>
        <ul class="dropdown-list">
          <li class="dropdown-item"><button type="button" class="dropdown-sub">첫번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">두번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">세번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">네번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">다섯번째 옵션</button></li>
        </ul>
      </div>
    </div>

    <div class="dropdown">
      <div class="dropdown-wrapper open">
        <button type="button" class="dropdown-main">옵션 선택하기</button>
        <ul class="dropdown-list">
          <li class="dropdown-item"><button type="button" class="dropdown-sub">첫번째 옵션</button></li>
          <li class="dropdown-item selected"><button type="button" class="dropdown-sub">두번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">세번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">네번째 옵션</button></li>
          <li class="dropdown-item"><button type="button" class="dropdown-sub">다섯번째 옵션</button></li>
        </ul>
      </div>
    </div>
  </body>
</html>
```

```scss
@charset 'UTF-8';

.dropdown {
  margin-bottom: 20px;

  &-wrapper {
    position: relative;
    display: inline-block;
    vertical-align: top;

    &.open {
      .dropdown-main:after {
        transform: translateY(-50%) rotate(-180deg);
      }
      .dropdown-list {
        display: block;
      }
    }
  }

  &-main {
    position: relative;
    display: block;
    min-width: 120px;
    height: 34px;
    padding: 0 32px 0 12px;
    border: 1px solid #ced4da;
    outline: 0;
    font-size: 12px;
    letter-spacing: -0.5px;
    text-align: left;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 12px;
      width: 11px;
      height: 7px;
      background: url("../images/arrow-expand.png") no-repeat 50% 0; //
      background-size: 100%;
      transform: translateY(-50%);
    }

    &:disabled {
      color: rgba(0, 0, 0, 0.4);
      background-color: rgba(0, 0, 0, 0.05);

      &:after {
        opacity: 40%;
      }
    }
  }
  &-sub {
    display: block;
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0 10px;
    border: 0;
    outline: 0;
    font-size: 12px;
    letter-spacing: -0.5px;
    text-align: left;
    background-color: #fff;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      background-color: rgba(196, 196, 196, 0.2);
      font-weight: 600;
    }
  }

  &-list {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin: 10px 0 0 0;
    padding: 0;
    list-style: none;
    border: 1px solid #ced4da;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
  }

  &-item {
    &.selected .dropdown-sub {
      color: #2565d0;
      font-weight: 600;
      background: rgba(196, 196, 196, 0.2);
    }
  }
}
```

### Mobile

```html
<!DOCTYPE html>
<html lang="kr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dropdown</title>
    <link rel="stylesheet" href="../css/dropdown_mobile.css" />
  </head>
  <body>
    <h1 style="font-size: 24px">Dropdown 모바일UI</h1>

    <div class="dropdown">
      <select class="dropdown-main">
        <option>옵션 선택하기</option>
        <option>첫번째 옵션</option>
        <option>두번째 옵션</option>
        <option>세번째 옵션</option>
        <option>네번째 옵션</option>
        <option>다섯번째 옵션</option>
      </select>
    </div>
  </body>
</html>
```

```scss
@charset 'UTF-8';

.dropdown {
  position: relative;
  display: inline-flex;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 8px;
    height: 13px;
    background: url("../images/arrow-expand.png") no-repeat 50% 0;
    background-size: 100%;
    transform: translateY(-50%);
  }

  &-main {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 0 18px 0 0;
    border: 0;
    outline: 0;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.5px;
    text-align: left;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-appearance: none;
  }
}
```
