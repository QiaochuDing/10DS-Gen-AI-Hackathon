# build client using docker
FROM node:lts-buster as build-deps
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./client/package.json ./
RUN npm install
COPY ./client ./
RUN npm run build


# Use an official Python runtime as a parent image
FROM python:3.11-slim-bookworm

RUN apt-get update

RUN mkdir -p /usr/src/app/client
RUN mkdir -p /usr/src/app/client_web_build

# add react client build from build-deps
COPY --from=build-deps /usr/src/app/build /usr/src/app/client
COPY --from=build-deps /usr/src/app/build /usr/src/app/client_web_build

# Add the current directory contents into the container at /app
COPY ./server /usr/src/app
COPY ./server/.env /usr/src/app

WORKDIR /usr/src/app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt


# Make port 5000 available to the world outside this container
EXPOSE 5000

LABEL maintainer="innovation.lab@digital.homeoffice.gov.uk"

# Run app.py when the container launches
CMD ["python", "app.py", "0.0.0.0:5000"]