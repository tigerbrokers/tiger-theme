#!/bin/bash

parcel build theme/index.scss -o tiger-theme.all
parcel build theme/dark/index.scss -o tiger-theme.dark
parcel build theme/light/index.scss -o tiger-theme.light

parcel build index.html \
  --no-source-maps \
  --public-url https://static.tigerbrokers.com/desktop/cdn/tiger-theme/

