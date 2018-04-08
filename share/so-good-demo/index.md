---
title: 'So explanations for so-good-demo.myshopify.com store'
permalink: '/support/so-good'
layout: page
published: true
index_type: noindex
template: support
---

## Instructions


### 50/50 blocks skeleton

To get the styles we want we need some html skeleton provided below,
img url will be replaced with the image which we will upload into files section and then will take its url

We start our boxes with **[half]** and end with **[endhalf]**

```html
[half]

<!-- start half boxes -->
<div class="half-boxes">
   <div class="half-boxes__img">
     <img src="//cdn.shopify.com/s/files/1/2508/0020/files/students_900x900.jpg" alt="">
   </div>
   <div class="half-boxes__content">
      <h3>DIET</h3>
      <p>
        Swapping cereal for a smoothie with the added
        boost of our high nutrient, low calorie protein blends is a
        great way to kickstart&nbsp;your day the healthy way.
      </p>
      <a href="#" class="btn-sec">Shop now</a>
   </div>
 </div>
<!-- END half boxes -->


[endhalf]
```

We just need to update content text and image url and then copy past it into field of img,

If you are not confident with html editing of text, you can use this tool
for html generating <a target="_blank" href="/html-editor">Simple HTML generator</a> and take the html formatted text.

By default image is on left and text on right, we can change it adding **reversed** class to half-boxes.

Check the following video tutorial.

<p>
  <div class="videoWrapper">
    <iframe width="560" height="315" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</p>
