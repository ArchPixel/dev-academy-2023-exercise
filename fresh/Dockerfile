FROM denoland/deno:1.29.2

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /fresh

COPY . .
RUN deno cache main.ts --import-map=import_map.json

EXPOSE 8000

CMD ["run","watch","--allow-net","--allow-read","--allow-env","--allow-run","-A","main.ts"]