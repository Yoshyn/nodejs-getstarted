# nodejs-getstarted

Step from https://www.w3schools.com/nodejs/nodejs_intro.asp

Some codes can differ but this follow the tutorial.

RUN : node src/server.js

VISIT :

* lsof -i :8080 | grep node | awk '{print $2}' | xargs kill -9; node src/server.js &; sleep 1; curl http://localhost:8080

* lsof -i :8080 | grep node | awk '{print $2}' | xargs kill -9; node src/server.js &; sleep 1; curl http://localhost:8080\?year=2017\&month=July
