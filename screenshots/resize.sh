#!/bin/sh
find -maxdepth 1 -type f -name "*.jpg" -exec convert -resize 400x255 {} thumbnail/{} \; 
