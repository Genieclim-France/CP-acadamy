# Étape de build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Vérifier la présence des assets
RUN ls -la src/assets || echo "Dossier assets non trouvé"
RUN npm run build

# Étape de production
FROM nginx:alpine
# Copier les fichiers générés
COPY --from=builder /app/dist/client/ /usr/share/nginx/html/

# Copier les assets en préservant la structure
COPY --from=builder /app/src/assets/ /usr/share/nginx/html/assets/

# Créer explicitement les sous-dossiers si nécessaire
RUN mkdir -p /usr/share/nginx/html/assets/icons
RUN mkdir -p /usr/share/nginx/html/assets/carrousel

# Configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Pour debug
RUN ls -la /usr/share/nginx/html
RUN ls -la /usr/share/nginx/html/assets || echo "Assets non copiés"
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]