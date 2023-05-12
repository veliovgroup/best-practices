# Web Development Best Practices

By @veliovgroup and @dr-dimitru

- [For HTML](https://github.com/veliovgroup/best-practices/tree/main/html)
- [For SASS/CSS](https://github.com/veliovgroup/best-practices/tree/main/css)
- [For JavaScript](https://github.com/veliovgroup/best-practices/tree/main/js)

## Front end

- [`normalize.min.css`](https://github.com/veliovgroup/best-practices/blob/main/css/normalize.min.css) — Reset browser's default CSS styles
- [`copy-to-clipboard.js`](https://github.com/veliovgroup/best-practices/blob/main/js/copy-to-clipboard.js) — Copy text into system clipboard programmatically without user interaction or upon a click, this script works on iOS, mobile devices, and when document is not in the focus
- To avoid "style leaking" between different pages or elments wrap SASS/SCSS/CSS code into a parent class. "CSS scoping" by page, element, or component is vital when working in a team. Otherwise, your CSS can "leak" affecting global styles, or styles of other pages, elements, and components. Enclosing CSS rules within a parent container helps to create more modular, maintainable code and prevent conflicts between different parts of the page.

### PWA

- Use [realfavicongenerator](https://realfavicongenerator.net) to generate all necessary icons assets, webmanifest, and related meta-tags
- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) to run "best practices" tests and audits locally from Chrome DevTools
- Use [web.dev/measure](https://web.dev/measure/) to run "best practices" tests and audits on a remote host online
