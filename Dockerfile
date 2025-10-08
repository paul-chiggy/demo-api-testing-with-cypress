FROM node:22-slim AS deps

WORKDIR /app
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress

COPY package.json package-lock.json ./

# Install all dependencies once so we can reuse this layer and cache the Cypress binary.
RUN npm ci && npx cypress install --force

FROM cypress/browsers:node-22.17.1-chrome-138.0.7204.157-1-ff-140.0.4-edge-138.0.3351.83-1

WORKDIR /app
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /root/.cache/Cypress /root/.cache/Cypress
COPY package*.json ./
COPY cypress.* ./
COPY tsconfig.json ./tsconfig.json
COPY cypress ./cypress

CMD ["npm","run","cy:run"]
