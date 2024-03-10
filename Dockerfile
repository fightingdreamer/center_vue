FROM docker.io/oven/bun:1.0.30-alpine as build
RUN apk add --no-cache gzip

WORKDIR /build

COPY bun.lockb .
COPY package.json .

RUN bun install

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

RUN bun run build-only

RUN gzip -6 --keep --recursive dist

FROM docker.io/library/nginx:1.25.4-alpine3.18 as runtime

COPY --from=build --chown=nginx:nginx /build/dist /usr/share/nginx/html

COPY etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY etc/nginx/conf.d/default.conf etc/nginx/conf.d/default.conf
