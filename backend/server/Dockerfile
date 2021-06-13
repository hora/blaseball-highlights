FROM tiangolo/uvicorn-gunicorn:python3.8-slim

WORKDIR /

RUN apt-get update && apt-get install wget librsvg2.2 unzip ttf-bitstream-vera --no-install-recommends -y

RUN wget -O fira.zip https://fonts.google.com/download?family=Fira%20Sans%20Condensed
RUN unzip fira.zip -d /usr/local/share/fonts/
RUN fc-cache

RUN wget https://github.com/eosrei/twemoji-color-font/releases/download/v13.0.1/fonts-twemoji-svginot_13.0.1-1_all.deb
RUN dpkg -i fonts-twemoji-svginot_13.0.1-1_all.deb


WORKDIR /

COPY ./app/requirements.txt /
RUN python3 -m pip install -r requirements.txt
COPY ./app /app

WORKDIR /
