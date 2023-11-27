FROM pudding/node-pwa:pulipuli-blog-20230621

RUN npm link axios@1.6.2

COPY package.json ./
RUN npm i