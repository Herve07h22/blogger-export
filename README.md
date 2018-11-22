# Blogger Export

Looking for a headless CMS ? What about blogger.com ?

That might sound weird, but blogger.com is :
- free, 
- easy to use to write posts
- easy to connect to a Static Site Generator

This is an example of how easy it can be to generate the blog of a static site from a collection of posts hosted on blogger.

## Blogger configuration

You have to configure your blog to keep it unvisible :
- In "confidentiality" section, uncheck radio boxes related to SEO 
- Remove the following code in the HTML header of your theme : 

```html
<b:include data='blog' name='all-head-content'/>
```

## Quick start

You can get your own version of this site by just clicking the button below, and then providing a suitable Medium RSS feed URL.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Herve07h22/blogger-export)


### What will clicking that button do?

Fair question. After clicking the button, [Netlify](https://www.netlify.com) will ask for your permission to clone this repo into your own GitHub account, and then create a new site for you in Netlify linked to that repo. 
It will also ask for a blogspot URL (without ending "/") to ingest at build time (see below if for some to pinch if you need to).

Then it will build and deploy a new site for you, complete with hosting and continuous deployment all configured.

The whole thing should take less than a minute!

## Local development

This site is built with [Eleventy](https://11ty.io) and have very few prerequisites:

- Node
- Npm or Yarn

### Install and bootstrap

```bash
# clone this repository (or do that via the button above)
git clone git@github.com:Herve07h22/blogger-export.git

# move into the working directory and install dependencies
cd blogger-export
yarn

# generate and serve the site while watching for changes
yarn start

# build the site
yarn run build

```
