#!/bin/bash

arg=$1
if [ $# -eq 0 ]; then
    echo 'Migration Name';
    read -r -p ': ' arg;
fi;

yarn typeorm:cli migration:create --dir generated/migrations -n $arg