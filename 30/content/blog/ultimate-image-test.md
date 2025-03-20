---
title: Ultimate Image Syntax Test
date: 2024-06-02
tags: [test]
excerpt: Testing all possible variations of image syntax
---

# Ultimate Image Syntax Test

## Standard Syntax
![Standard](/images/placeholder.svg)

## Dimension Variations
![With Space](/images/placeholder.svg =300x200)
![No Space](/images/placeholder.svg=300x200)
![Width Only With Space](/images/placeholder.svg =300x)
![Width Only No Space](/images/placeholder.svg=300x)
![Height Only With Space](/images/placeholder.svg =x200)
![Height Only No Space](/images/placeholder.svg=x200)

## Attribute Variations
![Cover Only](/images/placeholder.svg){cover}
![Position Only](/images/placeholder.svg){position=center}
![Position XY](/images/placeholder.svg){position=50%,50%}

## Combined Variations
![Dimensions and Cover](/images/placeholder.svg =300x200){cover}
![Dimensions and Position](/images/placeholder.svg =300x200){position=50%,50%}
![All Features](/images/placeholder.svg =300x200){cover position=50%,50%}

## Spacing Edge Cases
![Extra Space After URL](/images/placeholder.svg  =300x200){cover}
![Multiple Spaces](/images/placeholder.svg  =300x200  ){cover  position=50%,50%}
![Space Between Parts](/images/placeholder.svg =300x200) {cover position=50%,50%}

## Original Problematic Syntax
![Welcome Image](/images/placeholder.svg =200x){cover position=50%,50%} 