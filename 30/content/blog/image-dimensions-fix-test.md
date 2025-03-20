---
title: Testing Image Dimensions and Attributes Fix
date: 2024-06-02
tags: [markdown, test]
excerpt: Testing the fixes for image dimensions and attributes
---

# Testing Image Dimensions and Attributes Fix

## Test Case 1: Width-only with Cover

![Test Case 1](/images/placeholder.svg =200x){cover}

## Test Case 2: Width and Position

![Test Case 2](/images/placeholder.svg =300x){position=50%,50%}

## Test Case 3: Width-only with Cover and Position

![Test Case 3](/images/placeholder.svg =400x){cover position=50%,50%}

## Test Case 4: Just Cover

![Test Case 4](/images/placeholder.svg){cover}

## Test Case 5: Just Position

![Test Case 5](/images/placeholder.svg){position=0%,100%}

## Test Case 6: Position with One Value

![Test Case 6](/images/placeholder.svg){position=center}

## Test Case 7: Dimensions Only

![Test Case 7](/images/placeholder.svg =500x300)

## Test Case 8: Multiple Attributes

![Test Case 8](/images/placeholder.svg =600x200){cover position=50%,0%} 