import './theme/index.scss';

function loadTheme (name) {
  $('html').attr('theme', name)
  $('.page-nav .navbar-item.is-active').removeClass('is-active')
  $(`.page-nav .navbar-item[data-theme=${name}`).addClass('is-active')
}

$('[data-theme]').on('click', function (event) {
  const theme = this.dataset.theme
  loadTheme(theme)
  return false
})

loadTheme('dark')
