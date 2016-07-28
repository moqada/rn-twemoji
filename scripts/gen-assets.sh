#!/usr/bin/env sh

SRC_DIR=original
DST_DIR=images

copyimg() {
  local d
  local s
  local img
  src=$SRC_DIR/$1$2
  for s in $src/*.png; do
    d=`basename $(echo "$s" | sed "s/.png/$3.png/")`
    d=$1$d
    echo "copying $d..."
    cp $s $DST_DIR/$d
  done
}

echo 'Copying assets...'
rm -r $DST_DIR
mkdir -p $DST_DIR/2

# ver. 1
copyimg '' '16x16' ''
copyimg '' '36x36' '@2x'
copyimg '' '72x72' '@3x'

# ver. 2
copyimg '2/' '72x72' ''

echo 'Complete'
