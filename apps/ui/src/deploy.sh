npm run build && echo next.mrsauravsahu.in > build/CNAME && touch build/.nojekyll && (rm build/.DS_Store || true) && npx gh-pages -d ./build -b gh-pages -t -f
