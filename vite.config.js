module.exports = {
    build: {
      outDir: 'build',
      lib: {
        entry: './src/add.vite.js', // js 库的入口文件路径
        name: 'myVite', // js 库的名称
        fileName: (format) => `myVite.${format}.js`,
        formats: ['es', 'umd', 'cjs']
      },
      rollupOptions: {
        // 外部依赖，不会打包到 js 库中
        external: ['lodash'],
        output: {
          // 避免将外部依赖打包到 js 库中
          globals: {
            lodash: '_',
          },
        },
      },
    },
  };
  