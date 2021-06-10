FROM tiangolo/uvicorn-gunicorn:python3.8-slim

WORKDIR /

RUN apt-get update && apt-get install wget librsvg2.2 unzip --no-install-recommends -y

RUN wget -O fira.zip https://fonts.google.com/download?family=Fira%20Sans%20Condensed
RUN unzip fira.zip -d /usr/local/share/fonts/
RUN fc-cache

WORKDIR /

COPY ./app/requirements.txt /
RUN python3 -m pip install -r requirements.txt
COPY ./app /app

WORKDIR /
