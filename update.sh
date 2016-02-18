#!/bin/bash

echo "~~~~~~~~ pulling latest..."
git pull

echo "~~~~~~~~ installing bower components..."
rm -rf bower_components/sassquatch2/
bower cache clean
bower install

echo "~~~~~~~~ rebuilding..."
grunt build

exit 0
