FROM kyma/docker-nginx
ARG BUILDPATH
COPY ${BUILDPATH}/dist /var/www
CMD 'nginx'
