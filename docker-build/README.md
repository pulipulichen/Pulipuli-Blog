# Dockerhub

- https://docs.docker.com/get-started/04_sharing_app/
- `docker image ls | head` 找出合適的名稱，例如「blogger-editor_app」
- 建立合適的repo https://hub.docker.com/
- `docker tag pulipuli-blog_app pudding/node-pwa:pulipuli-blog-20230621`
- `docker push pudding/node-pwa:pulipuli-blog-20230621`
- 修改Dockerfile 

````
FROM pudding/node-pwa:pulipuli-blog-20230621

COPY package.json ./
RUN npm i
````