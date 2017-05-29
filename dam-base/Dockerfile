FROM nginx:1.10-alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY mime.types /etc/nginx/conf.d
COPY mime.types /etc/nginx/

COPY start.sh /
RUN chmod +x /start.sh

ENV VERSION "2.2.0-alpha"
ENV FOLDER "swagger-ui-$VERSION"
ENV SWAGGER_FILE "/etc/nginx/html/swagger.json"

##Install swagger
COPY /swagger/docs/swagger.json /etc/nginx/html/

RUN apk update && apk add openssl bash \
        && wget -qO- https://github.com/guillemcanal/swagger-ui/archive/v$VERSION.tar.gz | tar xvz \
        && cp -r swagger-ui-$VERSION/dist/* /etc/nginx/html/ \
	&& rm -rf swagger-ui-$VERSION


ENTRYPOINT /start.sh

