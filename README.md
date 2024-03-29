# center_vue

## Install dependencies

```sh
pnpm install
```

### Configure backend address in development

Adjust Vite `server.proxy` entry in `vite.config.ts`, default `http://127.0.0.1:5000`.

### Run development build with hot-reload

```sh
pnpm run dev
```

### Run production build

```sh
pnpm run build-only
pnpm run preview
```

### Configure backend address in production

Adjust NGINX `proxy_pass` entry in `etc/nginx/conf.d/default.conf`.

### Run production build in container

```sh
podman build \
    --tag center_vue .

podman run \
    --publish 127.0.0.1:3175:80/tcp \
    --name center_vue center_vue
```

or 

```sh
docker build \
    --tag center_vue .

docker run \
    --publish 127.0.0.1:3175:80/tcp \
    --name center_vue center_vue
```

### Note

Don't change to `0.0.0.0` aka public internet, this project was creating for exerce purposes and
you generally need some kind of ingress reverse proxy like `caddy` with `https` in front of this container.

### Note

Some ditributions configure podman to use more restrictive default bridge,
in case of running both Frontend and Backend in containers, loss of connectivity can be observed.

There are many ways to mitigate this problem, just create a new network and run both containers with it:

```sh
podman network create my_network

podman run \
    --network my_network \
    --publish 127.0.0.1:3175:80/tcp \
    --name center_vue center_vue
```

Proper way to do deployments in Podman requires creating a pod with a port redirection,
that way every container within a pod can reach each other under localhost.
