---
title: Advanced Image Features Demo
date: 2023-12-01
tags: [markdown, tutorial, images]
excerpt: Demonstration of advanced image features like dimensions, cover images, and positioning
featured_image: /images/blog/sample.jpg
---

# Advanced Image Features Demo

This post demonstrates the advanced image features available in our custom markdown implementation.

## Standard Image

This is a standard image without any special formatting:

![A standard image](/images/blog/sample.jpg)

## Image with Dimensions

You can specify dimensions for images using the `=WIDTHxHEIGHT` syntax:

![Image with specific dimensions](/images/blog/sample.jpg =400x300)

## Image with Width Only

You can specify just the width and let the height auto-adjust:

![Image with width only](/images/blog/sample.jpg =500x)

## Image with Height Only

You can specify just the height and let the width auto-adjust:

![Image with height only](/images/blog/sample.jpg =x200)

## Cover Image

Cover images will be displayed full-width with a maximum height, using object-fit: cover to maintain aspect ratio while filling the space:

![Full-width cover image](/images/blog/sample.jpg){cover}

## Image with Background Position

You can control the focus point of the image using object-position:

![Image with custom positioning](/images/blog/sample.jpg =500x300){position=50%,25%}

Here's another example focusing on a different area:

![Image with custom positioning](/images/blog/sample.jpg =500x300){position=0%,100%}

## Combined Features

You can combine multiple features together:

![Combined features](/images/blog/sample.jpg =800x400){cover position=50%,50%}

## Conclusion

These advanced image features make it easy to control the presentation of images in your markdown content without having to write custom HTML or CSS. 