#!/bin/bash

docker kill siddelacruz_com &> /dev/null
KILL=$?
if [ $KILL -ne 0 ]; then
  echo "Docker kill failed"
  #exit $KILL
fi

docker rm siddelacruz_com &> /dev/null
RM=$?
if [ $RM -ne 0 ]; then
  echo "Docker remove failed"
  #exit $RM
fi

docker build -t siddelacruz.com .

echo "Container: docker run -d --name siddelacruz_com -p 80 siddelacruz.com"
echo "Service: docker service create --replicas 1 --name siddelacruz_com -p 80 siddelacruz.com"
