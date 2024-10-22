setup:
	cd backend-graphql && npm install

start:
	cd post-api && docker compose up -d && \
  cd ../user-api && docker compose up -d && \
  cd ../backend-graphql && npm run dev
