# syntax=docker/dockerfile:1

# ---- deps: install node_modules ----
FROM node:22-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- builder: build the Next.js standalone output ----
FROM node:22-slim AS builder
# build-time public analytics IDs (inlined by next build)
ARG NEXT_PUBLIC_GA4_ID
ARG NEXT_PUBLIC_GADS_CONVERSION_ID
ARG NEXT_PUBLIC_GADS_CONVERSION_LABEL
ARG NEXT_PUBLIC_HOTJAR_ID
ARG NEXT_PUBLIC_META_PIXEL_ID
ARG NEXT_PUBLIC_GTM_ID
ENV NEXT_PUBLIC_GA4_ID=$NEXT_PUBLIC_GA4_ID
ENV NEXT_PUBLIC_GADS_CONVERSION_ID=$NEXT_PUBLIC_GADS_CONVERSION_ID
ENV NEXT_PUBLIC_GADS_CONVERSION_LABEL=$NEXT_PUBLIC_GADS_CONVERSION_LABEL
ENV NEXT_PUBLIC_HOTJAR_ID=$NEXT_PUBLIC_HOTJAR_ID
ENV NEXT_PUBLIC_META_PIXEL_ID=$NEXT_PUBLIC_META_PIXEL_ID
ENV NEXT_PUBLIC_GTM_ID=$NEXT_PUBLIC_GTM_ID
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- runner: minimal production image ----
FROM node:22-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Run as a non-root user
RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs nextjs

# Standalone output includes a minimal server + only the deps it needs.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
