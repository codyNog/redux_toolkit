FROM node:14.15.4-alpine3.12

ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# This docker file will copy code from app directory
# including the node_modules and .next folder.
COPY . .

EXPOSE 3000
# This run the server at default port 3000
CMD ["yarn", "start"]