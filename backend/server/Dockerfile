FROM tiangolo/uvicorn-gunicorn:python3.8-slim

WORKDIR /
COPY ./app/requirements.txt /
RUN python3 -m pip install -r requirements.txt
COPY ./app /app
WORKDIR /
