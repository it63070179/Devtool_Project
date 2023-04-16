FROM python:3.9-slim-buster

WORKDIR /app

Install required packages for building Node.js applications
RUN apt-get update && apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_14.x | bash && apt-get install -y nodejs

Copy package.json and package-lock.json and install NPM packages
COPY package*.json ./
RUN npm install

Copy Python requirements and install them
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

Copy the rest of the application code
COPY . .

Start the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]