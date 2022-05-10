module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    module: {
      rules: [
        {
          // 拡張子は.ts の場合にする
          test: /\.ts$/,
          // tsの場合はts-loaderを使用してTypeScript をコンパイルする。の意味
          use: 'ts-loader',
        },
      ],
    },
    // これを定義しないと import 文で拡張子を書く必要が生まれる。割と必須。
    resolve: {
      // 拡張子を配列で指定
      extensions: [
        '.ts', '.js',
      ],
    },
  };