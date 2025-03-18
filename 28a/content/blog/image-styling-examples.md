---
title: Image Styling Examples
date: 2024-06-03
tags: [tutorial, markdown, images]
excerpt: See all the available image styling options in action with practical examples
featured_image: /images/placeholder.svg
---

# Image Styling Examples

This post demonstrates all the available image styling options in the blog system. Use this as a reference when formatting your own blog posts.

## Basic Image

A standard image without any special styling:

![Basic image example](/images/placeholder.svg)

## Image Dimensions

### Fixed Width and Height

Setting both width (400px) and height (200px):

![Width and height example](/images/placeholder.svg =400x200)

### Width Only

Setting only the width (500px) and letting the height adjust proportionally:

![Width only example](/images/placeholder.svg =500x)

### Height Only

Setting only the height (150px) and letting the width adjust proportionally:

![Height only example](/images/placeholder.svg =x150)

## Cover Images

### Standard Cover Image

A full-width cover image with default positioning:

![Cover image example](/images/placeholder.svg){cover}

## Image Positioning

### Center Position

Positioning the image at the center (default for cover images):

![Center position example](/images/placeholder.svg =400x200){position=center}

### Top Position

Focusing on the top of the image:

![Top position example](/images/placeholder.svg =400x200){position=top}

### Bottom Position

Focusing on the bottom of the image:

![Bottom position example](/images/placeholder.svg =400x200){position=bottom}

### Custom Position (Percentages)

Setting a precise position at 25% horizontal, 75% vertical:

![Custom position example](/images/placeholder.svg =400x200){position=25% 75%}

## Combined Features

### Cover Image with Top Position

A full-width cover image focused on the top:

![Cover with top position](/images/placeholder.svg){cover position=top}

### Cover Image with Custom Position

A full-width cover image with custom positioning:

![Cover with custom position](/images/placeholder.svg){cover position=30% 60%}

### Dimensions with Custom Position

Setting both dimensions and position:

![Dimensions and position](/images/placeholder.svg =600x200){position=right}

### All Features Combined

Using all styling features together:

![All features combined](/images/placeholder.svg =700x250){cover position=left bottom}

## Practical Use Cases

### Hero Image

A typical hero image for a blog post:

![Hero image](/images/placeholder.svg =800x300){cover position=center}

### Product Screenshot

A screenshot with controlled width:

![Product screenshot](/images/placeholder.svg =500x)

### Profile Photo

A square profile photo with even dimensions:

![Profile photo](/images/placeholder.svg =300x300)

### Banner Image

A wide banner with bottom alignment:

![Banner image](/images/placeholder.svg =800x100){position=center bottom}

## Conclusion

With these image styling options, you can create visually engaging and well-formatted blog posts. Remember that you can:

1. Control dimensions with `=WIDTHxHEIGHT`
2. Create full-width images with `{cover}`
3. Control image focus with `{position=X,Y}`
4. Combine these options for precise control

Refer to the [IMAGE-STYLING-GUIDE.md](/content/IMAGE-STYLING-GUIDE.md) document for more detailed instructions. 