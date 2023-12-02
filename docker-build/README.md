# Dockerhub

- https://docs.docker.com/get-started/04_sharing_app/
- `docker image ls | head` 找出合適的名稱，例如「pulipuli-blog-app」
- 建立合適的repo https://hub.docker.com/
- `docker tag pulipuli-blog-app pudding/node-pwa:pulipuli-blog-20231128-0215`
- `docker push pudding/node-pwa:pulipuli-blog-20231128-0215`
- 修改Dockerfile 

````
FROM pudding/node-pwa:pulipuli-blog-20230621

COPY package.json ./
RUN npm i
````

- 加入到監控清單 https://github.com/democwise2016/dockerhub-image-refresher/edit/main/docker-image-list.txt