module.exports = {
  plugins: [
    // require('autoprefixer'), // 自动添加浏览器前缀
    require('postcss-preset-env')({
      stage: 1, // 启用所有较新的 CSS 特性
      autoprefixer: { grid: true }, // 启用 grid 布局的自动前缀
    }),
  ],
};