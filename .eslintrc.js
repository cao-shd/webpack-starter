module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    semi: 1, // 代码必须以分号结束
    'comma-dangle': [1, 'always-multiline'], // 对象或数组多行写法时，最后一个值加逗号
  },
};
