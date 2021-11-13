# React Shop App

## Contributor
- @manbalboy(정훈)

## Tech Requirement (Tech Stack)
- React (create-react-app)
- Eslint, prettier
- Jest

### eslint test plugin install 
```shell
    npm i eslint-plugin-jest-dom eslint-plugin-testing-library -D
```

### prettier install
```shell
    npm i prettier eslint-config-prettier eslint-plugin-prettier -D
```
### eslintrc.json
```json
{
  "plugins": [
    "testing-library",
    "jest-dom",
    "prettier"
  ],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## Scripts
```
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
```


## webstorm
- rsf
- rc
