module.exports = {
  // 사전에 정의된 전역 변수 설정
  env: {
    browser: true,
    node: true,
  },

  // 사용 가능한 규칙 세트
  extends: [
    // 'plugin:vue/vue3-essential', // Lv1
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3

    'prettier',
  ],
  // 구문 분석할 패키지 설정(Babel, ES6^ => ES5)
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier'],
  // 추가적인 코드 규칙을 설정
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 'vue/multiline-html-element-content-newline': 'off',

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        // bracketSpacing: true,
        bracketSameLine: true,
        arrowParens: 'avoid',
      },
    ],
  },
};
