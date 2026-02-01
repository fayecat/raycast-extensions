module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  printWidth: 80,
  proseWrap: 'never',
  endOfLine: 'lf',
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$', // React 最前
    '<THIRD_PARTY_MODULES>', // 其他第三方依赖
    '^node:', // Node builtin 模块，prettier-plugin-sort-imports 用这个 pattern 匹配 builtin
    '^@/.*$', // 内部路径别名，按需修改
    '^\\.\\.?(/(?!.*\\.(css|less|scss)$).*)?$',
    '^.*\\.(css|less|scss)$', // 样式文件
  ],
  importOrderSeparation: true, // 分组之间空行
  importOrderSortSpecifiers: true, // 具体导入项也排序
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
}
