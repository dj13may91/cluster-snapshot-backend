#!/usr/bin/env bash

cd cluster-snapshot-ui/src
echo 'Install UI related dependencies ?'
#read INPUT_STRING
#case $INPUT_STRING in
#y)
  npm install
#  ;;
#*) echo "skipped npm" ;;
#esac

powershell npm run ng serve
