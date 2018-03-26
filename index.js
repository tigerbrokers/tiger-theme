import './theme/default'

$('[data-theme]').on('click', function (event) {
  const theme = this.dataset.theme
  import('./theme/dark').then(() => {
    $('html').attr('theme', theme)
  })
  return false
})
