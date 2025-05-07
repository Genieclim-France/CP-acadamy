# Étape de build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape de production
FROM nginx:alpine
# Copier les fichiers générés
COPY --from=builder /app/dist/ /usr/share/nginx/html/
# Copier les assets depuis public
COPY --from=builder /app/public/ /usr/share/nginx/html/
# Remplacer la configuration nginx par défaut
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
