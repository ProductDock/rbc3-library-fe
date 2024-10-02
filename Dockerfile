# Base image
FROM node:20-alpine as builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy the app files
COPY . .

# Build the app
RUN npm run build

# Build base image on nginx
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]