

# Escolher uma imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o package.json e o package-lock.json para o contêiner
COPY ./nextjs/package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código-fonte
COPY ./app/ ./

# Expor a porta na qual o Next.js vai rodar
EXPOSE 3000

# Rodar o aplicativo Next.js
CMD ["npm", "run", "dev"]
