FROM pudding/node-pwa:pulipuli-blog-20231128-0215

RUN npm link axios@1.6.2

COPY package.json ./
RUN npm i