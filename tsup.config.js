/**
 * @type {import("tsup").Options}
 */
module.exports = {
  dts: true,
  entryPoints: [
    'src/nextjs/handlers',
    'src/nextjs/utils',
    'src/nextjs/index.ts',
    'src/nextjs/types.ts',
    'src/react/components',
    'src/react/index.tsx',
    'src/react/types.tsx',
    'src/shared',
    'src/svelte',
    'src/sveltekit'
  ],
  // `aws-amplify` is external, but sub-dependencies weren't automatically externalized ("require" statements were included)
  external: ['next', 'svelte', /^@supabase\//, /^@sveltejs\//],
  format: ['cjs', 'esm'],
  //   inject: ['src/react-shim.js'],
  // ! .cjs/.mjs doesn't work with Angular's webpack4 config by default!
  legacyOutput: false,
  sourcemap: 'external',
  splitting: false
};
