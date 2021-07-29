#!/bin/bash

xfce4-terminal --tab -x sh -c "mongod;bash"

sleep 5s
cd api
xfce4-terminal --tab -x sh -c "npm run dev;bash"

sleep 5s
cd ..
cd frontend
npm start