# ---------- BUILD STAGE ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Copiamos package.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos todo el proyecto
COPY . .

# Build producción (genera dist/)
RUN npm run build


# ---------- PRODUCTION STAGE ----------
FROM node:22-alpine

WORKDIR /app

# Copiamos solo lo necesario desde el builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Puerto que usará el servidor SSR
EXPOSE 3000

# 🔥 ARRANCAMOS EL SERVER REAL (NO VITE PREVIEW)
CMD ["node", "dist/server/index.js"]