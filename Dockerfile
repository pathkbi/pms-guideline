# Build statge
FROM node:16-slim as build-stage
WORKDIR /app
COPY . .
RUN yarn install --no-lockfile
RUN yarn build

# Main stage
FROM nginx:alpine as main-stage
EXPOSE 4200
COPY --from=build-stage /app/dist/avalon /usr/share/nginx/html
