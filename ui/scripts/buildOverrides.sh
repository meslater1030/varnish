# usage: bash ./src/lib/theme/buildOverrides.sh
tsc ./src/lib/theme/generateOverrides.ts --module commonjs
node ./src/lib/theme/generateOverrides.js
yarn less-watch-compiler ./src/lib/theme ./public varnish-theme.less --enable-js --run-once
# cleanup
paths = ( "./public/theme-overrides.less", "./src/lib/theme/breakpoints.js", "./src/lib/theme/colors.js", "./src/lib/theme/typography.js", "./src/lib/theme/generateOverrides.js", "./src/lib/utils/base.js" )
for path in "${paths[@]}"
do
    rm "$path"
done
