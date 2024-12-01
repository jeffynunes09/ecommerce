# Usando imagem oficial do Node.js
FROM node:22 AS build

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de configuração (package.json e package-lock.json) da pasta ecommerce
COPY package*.json ./  

# Instalar dependências
RUN npm install

COPY ./app/ ./ 
# Construção da aplicação Next.js
RUN npm run build

# Stage de produção (imagem final)
FROM node:22 AS production

# Definir o diretório de trabalho para a produção
WORKDIR /app

# Copiar os arquivos da etapa de build
COPY --from=build /app /app

# Expor a porta do frontend
EXPOSE 3000

# Rodar a aplicação
CMD ["npm", "run", "start"]


