#!/usr/bin/env node
const fs = require('fs')

const [,, ...args] = process.argv

const eslintrcFileName = '.eslintrc'
const eslintrc = {
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "off",
    "strict": ["error", "global"],
    "curly": "warn"
  }
}
const eslintrcString = JSON.stringify(eslintrc, null, 2)

const prettierrcFileName = '.prettierrc'
const prettierrc = {
  "trailingComma": "es5",
  "singleQuote": true,
  "arrowParens": "always",
  "semi": false
}
const prettierrcString = JSON.stringify(prettierrc, null, 2)


fs.writeFile(eslintrcFileName, eslintrcString, (err) => {
  if (err) console.log(err)
  console.log(`File ${eslintrcFileName} created`)
})

fs.writeFile(prettierrcFileName, prettierrcString, (err) => {
  if (err) console.log(err)
  console.log(`File ${prettierrcFileName} created`)
})
