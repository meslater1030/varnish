# usage: bash ./scripts/buildOverrides.sh
tsc ./src/lib/theme/generateOverrides.ts --module commonjs
node ./src/lib/theme/generateOverrides.js
yarn less-watch-compiler ./src/lib/theme ./public varnish-theme.less --enable-js --run-once
# cleanup
paths=(
    "./public/theme-overrides.less"
    "./src/lib/theme/*.js"
    "./src/lib/components/*.js"
    "./src/lib/utils/*.js"
)
for path in "${paths[@]}"
do
    rm "$path"
done
