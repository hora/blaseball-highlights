FROM tiangolo/uvicorn-gunicorn:python3.8-alpine3.10

WORKDIR /

RUN apk add --no-cache \
    wget build-base cairo-dev cairo cairo-tools \
    jpeg-dev zlib-dev freetype-dev lcms2-dev openjpeg-dev tiff-dev tk-dev tcl-dev

RUN wget https://github.com/mozilla/Fira/archive/refs/tags/4.202.tar.gz
RUN tar zxvf 4.202.tar.gz Fira-4.202/ttf
RUN mv Fira-4.202/ttf /usr/local/share/fonts
RUN fc-cache

COPY ./app/requirements.txt /
RUN python3 -m pip install -r requirements.txt
COPY ./app /app

WORKDIR /
