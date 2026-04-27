# ---------- BUILD STAGE ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Copiamos package files
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos todo el proyecto
COPY . .

# Build producción
RUN npm run build


# ---------- PRODUCTION STAGE ----------
FROM node:22-alpine

WORKDIR /app

# Copiamos solo lo necesario
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Puerto por defecto
EXPOSE 3000

# Comando de inicio (TanStack Start SSR)
CMD ["node", "dist/server/index.js"]