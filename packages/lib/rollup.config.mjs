import { readFileSync } from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript2 from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export default [
  // Main bundles (CJS + ESM)
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true }
    ],
    external: id => /node_modules/.test(id) && !/\.css$/.test(id),
    plugins: [
      external(),
      resolve({ extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx'] }),
        typescript2({
          tsconfig: './tsconfig.json',
          tsconfigOverride: {
            compilerOptions: {
              declaration: true,
              declarationDir: 'dist/esm/types',
              target: 'ES2020',
              emitDeclarationOnly: false
            }
          },
        useTsconfigDeclarationDir: true,
        clean: true
      }),
      commonjs({ extensions: ['.js', '.cjs'] }),
      postcss({ extract: false, minimize: true }),
      terser()
    ],
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
      warn(warning);
    }
  },

  // Type definitions bundle
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
