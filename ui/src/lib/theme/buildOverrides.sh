# todo: call this from build process

# usage: bash ./src/lib/theme/buildOverrides.sh
tsc ./src/lib/theme/generateOverrides.ts --module commonjs
node ./src/lib/theme/generateOverrides.js
yarn less-watch-compiler ./src/lib/theme ./src/lib/theme varnish-theme.less --enable-js --run-once
mv ./src/lib/theme/varnish-theme.css ./public
rm ./src/lib/theme/theme-overrides.less
rm ./src/lib/theme/breakpoints.js
rm ./src/lib/theme/colors.js
rm ./src/lib/theme/typography.js
rm ./src/lib/theme/generateOverrides.js
rm ./src/lib/utils.js
