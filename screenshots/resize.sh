#!/bin/sh
find -maxdepth 1 -type f -exec convert -resize 400x255 {} thumbnail/{} \; 
