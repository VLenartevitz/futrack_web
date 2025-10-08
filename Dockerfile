# futrack_web/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copia o package.json da pasta src
COPY src/package*.json ./

RUN npm install

# Copia todo o restante do código
COPY src ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
