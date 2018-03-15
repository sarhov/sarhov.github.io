---
title: 'Custom fields tabs for product page'
permalink: '/support/cf-tabs'
layout: page
published: true
index_type: noindex
template: support
---

## Some explanations how tabs are working using custom fields


### Chrome add-on

At first we need chrome add-on to make these fields visible in product dashboard.

[Install Metafields extension](https://chrome.google.com/webstore/detail/custom-fields-for-shopify/alfplfpobekffinigeidgmmfjollghln?hl=en-GB)

Then going into product dashboard and clicking on custom fields icon we will load custom Metafields, there are 3 ones, if the field is not empty it will be shown and leave the field empty it will not be loaded in front end. Check the following videotutorial

video_url

### Tab Titles

Tab title are being controlled from theme settings, going into theme settings we can see settings for product tabs, where we can define their titles, for tab 1, for tab 2, and for tab 3, check the following video tutorial.

video_url

### Content and list skeleton

To get the styles we want in tab content we need some html skeleton provided below, img url will be replaced with the image which we will upload into files section and then will take its url


```html
<ul class="b-list">

  <!-- start list item -->
  <li class="b-list__item">
    <img src="IMG_URL" alt="" class="b-list__img">

    <div class="b-list__content">
      content of list item is going here
    </div>
  </li>
  <!-- END list item -->

  <!-- start list item -->
  <li class="b-list__item">
    <img src="IMG_URL" alt="" class="b-list__img">

    <div class="b-list__content">
      content of list item is going here
    </div>
  </li>
  <!-- END list item -->

  <!-- start list item -->
  <li class="b-list__item">
    <img src="IMG_URL" alt="" class="b-list__img">

    <div class="b-list__content">
      content of list item is going here
    </div>
  </li>
  <!-- END list item -->

</ul>  
```

We just need to update content text and image url and then copy past it into field of the tab.

Check the following video tutorial.

video_url
