FROM pudding/node-pwa:pulipuli-blog-20230621

COPY package.json ./
RUN npm i