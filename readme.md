# EXPRESS-MONGO-RABBITMQ-REDIS

# Description

- Basic backend server tutorial using redis to cache data and rabbitmq to synchronize data between database and redis.

![alt text](https://gateway.pinata.cloud/ipfs/QmQwaukv2dKGx77FSb8fn7kz7MyFwA6gb6N2SKaCCLeKki)

# Config docker

- Rabbitmq
    + Port : 8000 
    + Container name: rabbitmq-server
- Redis 
    + Port: 6000
    + Container name: redis-server
- Mongo
    + Port: 27000
    + Container name: mongo-server
    + Root: root
    + Root password: root1234

# How to run example ?

Install package

`npm i`

Run docker server

`docker-compose up`

Run server

`npm start`

Run service update redis

`node update_service.js`

Send request inside file `request.http`

If you want clone data into database mongo  

`node src/utils/cloneData.js`
