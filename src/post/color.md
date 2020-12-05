---
title: "color"
date: "05-12-2020"
author: "Danny Ruchtie"
tags: "color,web, contrast"
---

# Contrast Calculator with YIQ

We have plenty to consider when crafting mobile and web software. Contrast and accessibility are not new design considerations but they are still very important. The WCAG, Apple's HIG and Googles Material Design guidelines tell us content should be distinguishable and requires us to make it easy for the user to see the content by clearly separating background and foreground. For example the WCAG recommends a 3:1 contrast ratio for non-decorative text for text larger than 18points and 14points when bold.

Let's have a look at a range of various possible colors. Maybe these are your corporate colours or colours plucked from an image.
Now that we have these potential background colours and their hex values, we need to find out whether the corresponding text should be in white or black, based on which has a higher contrast, therefore affording the best readability. Maybe you have amazing eyeballs that can help you recognise contrast levels. But for people like me without these powers, I created a little tool that calculates the right contrast color using YIQ. This calculation converts the RGB color space (HEX) into YIQ. The result is perfectly readable text on coloured backgrounds.

The Javascript formula to convert and the RGB HEX value to YIQ and determine the correct contrast is:
