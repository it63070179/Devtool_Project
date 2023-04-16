FROM python:3.9-slim-buster

WORKDIR /app

RUN npm i 

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]