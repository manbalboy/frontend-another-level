## Case5 : button - 출제자 해설

### button

#### button.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Button</title>
    <link rel="stylesheet" href="../css/button.css" />
  </head>
  <body>
    <h1 style="font-size: 20px">버튼 텍스트가 2자 이하인 경우</h1>
    <button type="button" class="btn">확인</button>
    <a href="#" class="btn">확인</a>

    <h1 style="margin-top: 30px; font-size: 20px">버튼 텍스트가 4자 이상인 경우</h1>
    <button type="button" class="btn">저장하기</button>
    <a href="#" class="btn">저장하기</a>

    <h1 style="margin-top: 30px; font-size: 20px">버튼 텍스트가 길어진 경우</h1>
    <button type="button" class="btn">일이삼사오육칠팔구십</button>
    <a href="#" class="btn">일이삼사오육칠팔구십</a>

    <h1 style="margin-top: 30px; font-size: 20px">disabled 상태</h1>
    <button type="button" disabled="disabled" class="btn">저장하기</button>

    <h1 style="margin-top: 30px; font-size: 20px">[버튼 mixin] Color variation</h1>
    <div>
      <button type="button" class="btn">저장하기</button>
      <button type="button" class="btn btn-danger">저장하기</button>
      <button type="button" class="btn btn-warning">저장하기</button>
      <button type="button" class="btn btn-primary">저장하기</button>
      <button type="button" class="btn btn-success">저장하기</button>
      <button type="button" class="btn btn-dark">저장하기</button>
    </div>

    <h1 style="margin-top: 30px; font-size: 20px">[버튼 mixin] Outline color variation</h1>
    <div>
      <button type="button" class="btn btn-outline">저장하기</button>
      <button type="button" class="btn btn-outline-danger">저장하기</button>
      <button type="button" class="btn btn-outline-warning">저장하기</button>
      <button type="button" class="btn btn-outline-primary">저장하기</button>
      <button type="button" class="btn btn-outline-success">저장하기</button>
      <button type="button" class="btn btn-outline-dark">저장하기</button>
    </div>
  </body>
</html>
```

#### button.scss

```scss
@charset "utf-8";

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  height: 38px;
  margin: 0;
  padding: 0 12px;
  border: 0;
  outline: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.5px;
  background-color: #6c757d;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: darken(#6c757d, 5%);
    text-decoration: none;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &-danger {
    background-color: #f15d5d;
    &:hover {
      background-color: darken(#f15d5d, 5%);
    }
  }
  &-warning {
    background-color: #ffc107;
    &:hover {
      background-color: darken(#ffc107, 5%);
    }
  }
  &-primary {
    background-color: #5d04d9;
    &:hover {
      background-color: darken(#5d04d9, 5%);
    }
  }
  &-success {
    background-color: #06bf9d;
    &:hover {
      background-color: darken(#06bf9d, 5%);
    }
  }
  &-dark {
    background-color: #212529;
    &:hover {
      background-color: darken(#212529, 5%);
    }
  }

  &-outline {
    border: 1px solid #6c757d;
    background-color: #fff;
    color: #6c757d;

    &:hover {
      color: #fff;
      background-color: #6c757d;
    }
  }
  &-outline-danger {
    border: 1px solid #f15d5d;
    background-color: #fff;
    color: #f15d5d;

    &:hover {
      color: #fff;
      background-color: #f15d5d;
    }
  }
  &-outline-warning {
    border: 1px solid #ffc107;
    background-color: #fff;
    color: #ffc107;

    &:hover {
      color: #fff;
      background-color: #ffc107;
    }
  }
  &-outline-primary {
    border: 1px solid #5d04d9;
    background-color: #fff;
    color: #5d04d9;

    &:hover {
      color: #fff;
      background-color: #5d04d9;
    }
  }
  &-outline-success {
    border: 1px solid #06bf9d;
    background-color: #fff;
    color: #06bf9d;

    &:hover {
      color: #fff;
      background-color: #06bf9d;
    }
  }
  &-outline-dark {
    border: 1px solid #212529;
    background-color: #fff;
    color: #212529;

    &:hover {
      color: #fff;
      background-color: #212529;
    }
  }
}
```

### button-mixin.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Button</title>
    <link rel="stylesheet" href="../css/button-mixin.css" />
  </head>
  <body>
    <h1 style="font-size: 20px">버튼 텍스트가 2자 이하인 경우</h1>
    <button type="button" class="btn">확인</button>

    <h1 style="margin-top: 30px; font-size: 20px">버튼 텍스트가 4자 이상인 경우</h1>
    <button type="button" class="btn">저장하기</button>

    <h1 style="margin-top: 30px; font-size: 20px">버튼 텍스트가 길어진 경우</h1>
    <button type="button" class="btn">일이삼사오육칠팔구십</button>

    <h1 style="margin-top: 30px; font-size: 20px">disabled 상태</h1>
    <button type="button" disabled="disabled" class="btn">저장하기</button>

    <h1 style="margin-top: 30px; font-size: 20px">[버튼 mixin] Color variation</h1>
    <div>
      <button type="button" class="btn">저장하기</button>
      <button type="button" class="btn btn-danger">저장하기</button>
      <button type="button" class="btn btn-warning">저장하기</button>
      <button type="button" class="btn btn-primary">저장하기</button>
      <button type="button" class="btn btn-success">저장하기</button>
      <button type="button" class="btn btn-dark">저장하기</button>
    </div>

    <h1 style="margin-top: 30px; font-size: 20px">[버튼 mixin] Outline color variation</h1>
    <div>
      <button type="button" class="btn btn-outline">저장하기</button>
      <button type="button" class="btn btn-outline-danger">저장하기</button>
      <button type="button" class="btn btn-outline-warning">저장하기</button>
      <button type="button" class="btn btn-outline-primary">저장하기</button>
      <button type="button" class="btn btn-outline-success">저장하기</button>
      <button type="button" class="btn btn-outline-dark">저장하기</button>
    </div>
  </body>
</html>
```

#### button-mixin.scss

```scss
@charset "utf-8";

@mixin button($color) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  height: 38px;
  margin: 0;
  padding: 0 12px;
  border: 0;
  outline: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.5px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: $color;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
  &:hover {
    background-color: darken($color, 5%);
  }
}

@mixin button-outline($color) {
  @include button($color);

  border: 1px solid $color;
  color: $color;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: $color;
  }
}

.btn {
  @include button(#6c757d);
}
.btn-danger {
  @include button(#f15d5d);
}
.btn-warning {
  @include button(#ffc107);
}
.btn-primary {
  @include button(#5d04d9);
}
.btn-success {
  @include button(#06bf9d);
}
.btn-dark {
  @include button(#212529);
}

.btn-outline {
  @include button-outline(#6c757d);
}
.btn-outline-danger {
  @include button-outline(#f15d5d);
}
.btn-outline-warning {
  @include button-outline(#ffc107);
}
.btn-outline-primary {
  @include button-outline(#5d04d9);
}
.btn-outline-success {
  @include button-outline(#06bf9d);
}
.btn-outline-dark {
  @include button-outline(#212529);
}
```

#### button-mixin2.scss

```scss
@charset "utf-8";

@mixin button($color, $outline: true) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  height: 38px;
  margin: 0;
  padding: 0 12px;
  border: 0;
  outline: 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.5px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;

  @if $outline {
    color: $color;
    border: 1px solid $color;
    background-color: #fff;

    &:hover {
      color: #fff;
      background-color: $color;
    }
  } @else {
    color: #fff;
    background-color: $color;

    &:hover {
      background-color: darken($color, 5%);
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
}

.btn {
  @include button(#6c757d, $outline: false);
}
.btn-danger {
  @include button(#f15d5d, $outline: false);
}
.btn-warning {
  @include button(#ffc107, $outline: false);
}
.btn-primary {
  @include button(#5d04d9, $outline: false);
}
.btn-success {
  @include button(#06bf9d, $outline: false);
}
.btn-dark {
  @include button(#212529, $outline: false);
}

.btn-outline {
  @include button(#6c757d, $outline: true);
}
.btn-outline-danger {
  @include button(#f15d5d, $outline: true);
}
.btn-outline-warning {
  @include button(#ffc107, $outline: true);
}
.btn-outline-primary {
  @include button(#5d04d9, $outline: true);
}
.btn-outline-success {
  @include button(#06bf9d, $outline: true);
}
.btn-outline-dark {
  @include button(#212529, $outline: true);
}
```
