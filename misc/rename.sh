#!/bin/bash

COUNT=0

for f in ./training/edges2mountains/images/*
do
    COUNT=$((COUNT + 1))
    mv $f ./training/edges2mountains/images/$COUNT.jpg
done
