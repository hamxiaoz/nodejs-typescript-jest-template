FROM node:12.18.3-alpine3.12

# Add package file
COPY package*.json ./

# Install deps
RUN npm ci

# Copy source
COPY . .

# Build dist
RUN npm run build

# Expose port
EXPOSE 3000

ARG env
ENV NODE_ENV $env

CMD npm run start
