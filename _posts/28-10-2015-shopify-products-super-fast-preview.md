---
title: 'Shopify - Products Fast Preview Using CSS3'
permalink: 'shopify-products-preview-using-css'
layout: post
published: true
featured_image: 'https://lh3.googleusercontent.com/-9LhlW9hps3s/VjBcgLCbtmI/AAAAAAAABjw/DQZY1I6lSgQ/s0/2015-10-28_09-17-40.gif'
short_description: |
 <p>
 How to add fast preview for product images in Shopify.
 Sometimes the product image too small, or customers want to see the details on it, for that they have to go into that product page, or if theme support  "quick view" then click on it, wait for ajax call end and then see the product.
 </p>
 <p>
 In this article we will show how to solve this problem and make customers happy.
 </p>
---

<img src="https://lh3.googleusercontent.com/-9LhlW9hps3s/VjBcgLCbtmI/AAAAAAAABjw/DQZY1I6lSgQ/s0/2015-10-28_09-17-40.gif" alt="">


How to add fast preview for product images in Shopify.
Sometimes the product image too small, or customers want to see the details on it, for that they have to go into that product page, or if theme support  "quick view" then click on it, wait for ajax call end and then see the product.


The method is using css3 to zomm the product image, so every time customers hover on product image, it will be fast and smoothly zoomed, and the shop 	customer can see the all products on page very qucikly without going into the product page every time.



But what if the customer want just to zoom a bit the image to see the details on it, especially if the product is T-Shirt with print on it. </p>
Customer has to spend too much time every time checking the product.



{% highlight liquid  %}
{% raw %}
  {% for tag in collection.all_tags %}
    <div class="b-tag">
      {{tag}}
    </div>
  {% endfor %}
{% endraw %}
{% endhighlight %}

{% highlight css %}

  .b-content{
    width: 50%;
    margin-left: 200px;
    padding-left: 15px;
  }

{% endhighlight %}
