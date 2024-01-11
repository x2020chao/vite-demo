import( /* @vite-ignore */new URL('/resources/sub-project/my-lib.js', import.meta.url).href).then(({ default: val }) => {
  console.log(val)
})
