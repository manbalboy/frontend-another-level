## Case4 : Radio Button - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="kr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>radio button</title>
    <link rel="stylesheet" href="../css/radiobutton.css" />
  </head>
  <body>
    <h1 style="font-size: 24px;">브라우저 기본형</h1>

    <!-- default 상태 -->
    <div>
      <input type="radio" name="default" id="default" />
      <label for="default">default</label>
    </div>

    <!-- checked 상태 -->
    <div>
      <input type="radio" name="default" id="checked" checked="checked" />
      <label for="checked">checked</label>
    </div>

    <!-- disabled 상태 -->
    <div>
      <input type="radio" name="default2" id="disabled" disabled="disabled" />
      <label for="disabled">disabled</label>
    </div>

    <!-- checked + disabled 상태 -->
    <div>
      <input type="radio" name="default2" id="checked-disabled" checked="checked" disabled="disabled" />
      <label for="checked-disabled">checked + disabled</label>
    </div>

    <hr />

    <h1 style="font-size: 24px;">sprite image로 디자인 구현해보기</h1>

    <!-- default 상태 -->
    <div class="item-radio">
      <input type="radio" name="group" id="item-default" class="input-radio" />
      <label for="item-default" class="input-label">default</label>
    </div>

    <!-- checked 상태 -->
    <div class="item-radio">
      <input type="radio" name="group" id="item-checked" class="input-radio" checked="checked" />
      <label for="item-checked" class="input-label">checked</label>
    </div>

    <!-- disabled 상태 -->
    <div class="item-radio">
      <input type="radio" name="group2" id="item-disabled" class="input-radio" disabled="disabled" />
      <label for="item-disabled" class="input-label">disabled</label>
    </div>

    <!-- checked + disabled 상태 -->
    <div class="item-radio">
      <input type="radio" name="group2" id="item-checked-disabled" class="input-radio" checked="checked" disabled="disabled" />
      <label for="item-checked-disabled" class="input-label">checked + disabled</label>
    </div>

    <hr />

    <h1 style="font-size: 24px;">옵션 텍스트가 길어질 경우</h1>

    <!-- sample -->
    <div class="item-radio">
      <input type="radio" name="sample" id="sample-option1" class="input-radio" checked="checked" />
      <label for="sample-option1" class="input-label">라디오 버튼 옵션 텍스트가 두줄이 됩니다.<br />라디오 버튼 옵션 텍스트가 두줄이 됩니다.</label>
    </div>
    <div class="item-radio">
      <input type="radio" name="sample" id="sample-option2" class="input-radio" />
      <label for="sample-option2" class="input-label">라디오 버튼 옵션 텍스트가 두줄이 됩니다.<br />라디오 버튼 옵션 텍스트가 두줄이 됩니다.</label>
    </div>
    <div class="item-radio">
      <input type="radio" name="sample" id="sample-option3" class="input-radio" />
      <label for="sample-option3" class="input-label">라디오 버튼 옵션 텍스트가 두줄이 됩니다.<br />라디오 버튼 옵션 텍스트가 두줄이 됩니다.</label>
    </div>
    <div class="item-radio">
      <input type="radio" name="sample" id="sample-option4" class="input-radio" disabled="disabled" />
      <label for="sample-option4" class="input-label">라디오 버튼 옵션 텍스트가 두줄이 됩니다.<br />라디오 버튼 옵션 텍스트가 두줄이 됩니다.</label>
    </div>
  </body>
</html>
```

### CSS

```css
hr {
  display: block;
  height: 1px;
  margin: 30px auto;
  border: 0;
  background-color: #959da5;
}

.item-radio {
  overflow: hidden;
  position: relative;
}

.item-radio .input-label {
  display: block;
  padding: 5px 0 5px 23px;
}

.item-radio .input-label:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 0;
  width: 16px;
  height: 16px;
  border: 0;
  outline: 0;
  background: url("../images/sprite_radio.png") no-repeat 0 0;
  background-size: 16px 40px;
}

.item-radio .input-radio {
  position: absolute;
  top: -50px;
  left: -50px;
}

.item-radio .input-radio:checked + .input-label:before {
  background-position: 0 -20px;
}

.item-radio .input-radio:disabled + .input-label {
  opacity: 0.5;
}
```

### SCSS

```scss
@charset 'UTF-8';

// reset
hr {
  display: block;
  height: 1px;
  margin: 30px auto;
  border: 0;
  background-color: #959da5;
}

// radio button
.item-radio {
  overflow: hidden;
  position: relative;

  .input-label {
    display: block;
    padding: 5px 0 5px 23px;

    &:before {
      content: "";
      position: absolute;
      top: 5px;
      left: 0;
      width: 16px;
      height: 16px;
      border: 0;
      outline: 0;
      background: url("../images/sprite_radio.png") no-repeat 0 0;
      background-size: 16px 40px;
    }
  }
  .input-radio {
    position: absolute;
    top: -50px;
    left: -50px;

    &:checked + .input-label:before {
      background-position: 0 -20px;
    }
    &:disabled + .input-label {
      opacity: 0.5;
    }
  }
}
```
