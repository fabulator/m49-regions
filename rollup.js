const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const json = require('rollup-plugin-json');

const babelOptions = {
    presets: [
        [
            'es2015',
            {
                modules: false
            }
        ]
    ],
    plugins: [
        'external-helpers',
        'transform-flow-strip-types',
        'transform-object-rest-spread',
    ]
};

rollup.rollup({
    input: 'src/index.js',
    plugins: [
        json({
            preferConst: true,
        }),
        babel(babelOptions),
    ],
}).then((bundle) => {
    bundle.write({
        format: 'umd',
        file: './dist/m49-regions.js',
        name: 'M49Regions',
    });

    bundle.write({
        format: 'es',
        file: './dist/m49-regions.es.js',
        name: 'M49Regions',
    });
});

rollup.rollup({
    input: 'src/index.js',
    plugins: [
        json({
            preferConst: true,
        }),
        babel(babelOptions),
        uglify(),
    ],
}).then((bundle) => {
    bundle.write({
        format: 'umd',
        file: './dist/m49-regions.min.js',
        name: 'M49Regions',
    });
});
