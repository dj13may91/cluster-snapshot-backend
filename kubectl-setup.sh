#!/usr/bin/env bash

#cd cluster-snapshot-ui/src
echo 'Install kubectl ?'
read INPUT_STRING
case $INPUT_STRING in
y)
  curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.16.0/bin/windows/amd64/kubectl.exe
  PATH=%PATH%;"$(pwd)/kubectl.exe"
  echo $PATH
  ;;
*) echo "skipped kubectl" ;;
esac

maven package
#mvn install
mvn spring-boot:run
#for /f "tokens=5" %a in ('netstat -aon ^| findstr 8082') do taskkill /f /im %a
#powershell java -jar target/cluster-0.0.1-SNAPSHOT.jar &
