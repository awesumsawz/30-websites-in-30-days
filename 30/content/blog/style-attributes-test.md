---
title: Style Attributes Test
date: 2024-06-03
tags: [test, markdown, images]
excerpt: Testing image dimensions applied via style attribute
---

# Style Attributes Test

This post demonstrates how image dimensions are now applied through the style attribute.

## Width Only

![Width Only Test](/images/placeholder.svg =300x)

## Height Only

![Height Only Test](/images/placeholder.svg =x200)

## Both Dimensions

![Width and Height Test](/images/placeholder.svg =400x300)

## Combined With Cover

![Cover and Dimensions](/images/placeholder.svg =500x250){cover}

## Combined With Position

![Position and Dimensions](/images/placeholder.svg =600x200){position=center}

## All Attributes Combined

![All Attributes](/images/placeholder.svg =350x150){cover position=50%,25%} 