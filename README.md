# static-site

To deploy:
First must build, then commit.

git push origin :gh-pages #to delete
git subtree push --prefix dist origin gh-pages

But then you have to re-add custom domain to github pages for this repo, kind of annoying

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
