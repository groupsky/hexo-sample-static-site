MediumWidget.Init({
  renderTo: '#medium-widget',
  params: {
    'resource': 'https://blog.aeternity.com/',
    'postsPerLine': 1,
    'limit': 5,
    'picture': 'small',
    'fields': ['description', 'author', 'claps', 'publishAt'],
    'ratio': 'landscape'
  }
})
