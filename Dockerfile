FROM docker.io/library/alpine:3.19 as build
RUN apk add --no-cache gzip
RUN apk add --no-cache npm
RUN npm install -g pnpm

WORKDIR /opt/build

COPY pnpm-lock.yaml .
COPY package.json .

RUN pnpm install

COPY env.d.ts .
COPY index.html .

COPY tsconfig.json .
COPY tsconfig.app.json .
COPY tsconfig.node.json .

COPY vite.config.ts .

COPY src src
COPY public public

COPY .eslintrc.cjs .
COPY .prettierrc.json .

RUN pnpm run build-only

RUN gzip -6 --keep --recursive dist

FROM docker.io/library/nginx:1.25.4-alpine3.18 as runtime

COPY --from=build --chown=nginx:nginx /opt/build/dist /usr/share/nginx/html

COPY etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY etc/nginx/conf.d/default.conf etc/nginx/conf.d/default.conf
