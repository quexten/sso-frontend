FROM kyma/docker-nginx
ARG BUILDPATH
COPY $BUILDPATH /var/www
CMD 'nginx'
