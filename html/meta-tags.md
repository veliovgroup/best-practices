# Meta-tags best practices

1. Always use absolute links/hrefs
1. Always check max length for used tags


## Required variable tags:

`<link>` and `<meta>` tags

## Common

1. `<title>`
1. `meta[property="og:locale"]`
1. `meta[property="og:description"]`
1. `meta[property="og:type"]` - usually `website` or `article`
1. `meta[name="theme-color"]` — HEX value, ex.: `#2b3850`
1. `meta[itemprop="name"]` - Name of the website/webpage

### Images

Use 1280x640 image for the best result

1. `link[rel="image"]`
1. `meta[name="image"]`
1. `meta[property="og:image"]`
1. `meta[name="twitter:image"]`


## Required

```html
<meta charset="UTF-8">`
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">`
<meta content="index, follow" name="robots">
```

## Special

1. `<meta name="fragment" content="!">` — For webpages rendered by JavaScript (Blaze.js, Vue.js, React.js, Angular.js, Ember.js)
1. `<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">` — Disable phone number, dates, addresses, and/or email detection by browsers in website's content
1. `<meta name="color-scheme" content="dark">` — Define website's theme as "dark" (*prevents modifications in "force dark-mode"*)
1. `<meta name="theme-color" content="#000000">` — Color "topbar" in iOS and other browsers
1. `<meta name="twitter:site" content="@username">` — Connect website to Twitter-account
1. `<meta property="fb:app_id" content="">` — Connect website to Facebook-app
1. `<meta property="fb:pages" content="">` — Connect website to Facebook-page

### Special for webapps

Icons tags

```html
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000">
<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192">
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
```

"Installable" app tags

```html
<link rel="manifest" href="https://...">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="">
<meta name="application-name" content="">

<meta name="msapplication-TileColor" content="#000000">
<meta name="msapplication-TileImage" content="/mstile-144x144.png">
<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```


## Examples

It's possible to combine standard meta-tags, OpenGraph, and microdata

```html
<html itemscope itemtype="http://schema.org/WebPage" xmlns:og="http://ogp.me/ns#" lang="en" xml:lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <meta name="theme-color" content="#000000">

    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">

    <meta itemprop="name" content="Title of the page pr article">
    <meta property="og:site_name" content="Name of the website, project, app, or company">

    <meta content="index, follow" name="robots">
    <meta name="keywords" itemprop="keywords" content="comma, separated, list">

    <title>up to 60 symbols text</title>
    <meta name="title" property="og:title" content="up to 60 symbols text">
    <meta name="twitter:title" content="up to 70 symbols text">

    <meta name="description" itemprop="description" property="og:description" content="up to 155 symbols text">
    <meta name="twitter:description" content="up to 200 symbols text">

    <meta name="url" property="og:url" content="https://...current page URL">
    <meta name="twitter:url" content="https://...current page URL">
    <link rel="canonical" itemprop="url" href="https://...current page URL">

    <meta name="twitter:image" content="https://...">
    <meta name="image" property="og:image" content="https://...">
    <link rel="image" itemprop="image" content="https://..." href="https://...">
  </head>
</html>
```

## Further reading

- [Standard metadata names](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name)
- [Structured data markup](https://schema.org)
- [Open Graph Protocol](https://ogp.me/)
