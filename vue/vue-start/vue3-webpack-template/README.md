# Webpack 기본 템플릿

__webpack__: 모듈(패키지) 번들러의 핵심 패키지<br>
__webpack-cli__: 터미널에서 Webpack 명령(CLI)을 사용할 수 있음<br>
__webpack-dev-server__: 개발용으로 Live Server를 실행(HMR)<br>

__html-webpack-plugin__: 최초 실행될 HTML 파일(템플릿)을 연결<br>
__copy-webpack-plugin__: 정적 파일(파비콘, 이미지 등)을 제품(`dist`) 폴더로 복사<br>

__sass-loader__: SCSS(Sass) 파일을 로드<br>
__postcss-loader__: PostCSS(Autoprefixer)로 스타일 파일을 처리<br>
__css-loader__: CSS 파일을 로드<br>
__style-loader__: 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
__babel-loader__: JS 파일을 로드<br>

__@babel/core__: ES6 이상의 코드를 ES5 이하 버전으로 변환<br>
__@babel/preset-env__: Babel 지원 스펙을 지정<br>
__@babel/plugin-transform-runtime__: Async/Await 문법 지원<br>

__sass__: SCSS(Sass) 문법을 해석(스타일 전처리기)<br>
__postcss__: Autoprefixer 등의 다양한 스타일 후처리기 패키지<br>
__autoprefixer__: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인<br> 

## 주의사항!

- `npm i -D webpack-dev-server@next`로 설치(webpack-cli 버전(@4^)과 일치)!<br>
- `package.json` 옵션으로 `browserslist` 추가!<br>
- `.postcssrc.js` 생성(PostCSS 구성 옵션)!<br>
- `.babelrc.js` 생성(Babel 구성 옵션)!<br>

## vue 설치 패키지 
```shell
npm i vue@next # vue3 설치
npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc
npm i -D file-loader
npm i -D eslint eslint-plugin-vue babel-eslint
npm i -D jest @vue/test-utils@next vue-jest@next jest-serializer-vue babel-jest babel-core@bridge #test
```


## TEST 관련
### 모듈	설명
- vue-jest	: Vue 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일합니다.
- jest-serializer-vue	: 저장된 Jest Snapshot을 VueJS에 맞게 개선하기 위해 사용합니다.
- babel-jest : JS/JSX 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일합니다.
- babel-core@bridge : Babel 6버전과의 호환을 위해 설치합니다. 관련 이슈가 있습니다.

> 비교적 최신 NuxtJS나 Vue CLI를 사용한다면 이미 내부에 @babel/core와 @babel/preset-env가 포함되어 있습니다.
자신의 프로젝트를 확인하여 다음 모듈의 추가 설치 여부를 결정하세요.

### 모듈	설명
- @babel/core :	Babel 7버전입니다.
- @babel/preset-env : Babel의 지원 스펙을 지정합니다.

[Jest 구성옵션 더보기](https://jestjs.io/docs/configuration)

[관련설정 블로그](https://heropy.blog/2020/05/20/vue-test-with-jest/)

```js
// jest.config.js
module.exports = {
  // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목록입니다.
  // 일반적으로 많이 사용되는 모듈의 확장자를 지정합니다.
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  // `@`나 `~` 같은 경로 별칭을 매핑합니다.
  // E.g. `import HelloWorld from '~/components/HelloWorld.vue';`
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  // TODO: 프로젝트에 맞는 경로로 수정하세요!
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // 일치하는 경로에서는 모듈을 가져오지 않습니다.
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  // TODO: 프로젝트에 맞는 경로로 수정하세요!
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/dist'
  ],
  // 정규식과 일치하는 파일의 변환 모듈을 지정합니다.
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // Jest Snapshot 테스트에 필요한 모듈을 지정합니다.
  snapshotSerializers: [
    'jest-serializer-vue'
  ]
}
```

- babel 설정
```js
module.exports = {
  presets: ['@babel/preset-env'],
  env: {
    test: {
      presets: [[
        '@babel/preset-env', {
          debug: true
        }
      ]]
    }
  }
}
```