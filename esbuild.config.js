
require("esbuild").buildSync(
    {
        entryPoints: ['src/add.esbuild.js'],
        outfile: args.watch ? 'esbuild/bundle.js' : 'esbuild/bundle.[hash].js',
        bundle: true,
        minify: true,
        format: 'umd',
        globalName: 'myLibrary',
        plugins: [
          // 插件配置
        ],
      }
);
