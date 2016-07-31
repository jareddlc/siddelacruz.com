FROM nginx
MAINTAINER Jared De La Cruz "jared@jareddlc.com"

# Move static content
COPY . /usr/share/nginx/html

EXPOSE 80
