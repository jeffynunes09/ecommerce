# Usando imagem oficial do Node.js
FROM node:16 AS build

# Diretório de trabalho
WORKDIR /app

# Copiar os arquivos de configuração
COPY package*.json ./

# Instalar dependências


RUN npm install --force

# Copiar todo o código
COPY . .

# Build da aplicação Next.js
RUN npm run build

# Expor a porta do frontend
EXPOSE 3000

# Comando para rodar o frontend
CMD ["npm", "run", "start"]
