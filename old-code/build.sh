#!/bin/bash

docker build -t highlights:db backend/db
docker build -t highlights:backend backend/server
docker build -t highlights:frontend .
