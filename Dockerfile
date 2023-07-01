# Base image
FROM node:alpine

# Set working directory
WORKDIR /app/server

# Copy package.json and package-lock.json
COPY server/package*.json /

# Install dependencies
RUN npm install

# Copy the client-side code to the working directory
COPY client/ ../client/

# # Copy the server-side code to the working directory
COPY server/ ./

# Build the client-side code
RUN cd ../client && npm install --force && npm run build

EXPOSE 80

ENV NODE_ENV=production
ENV DATABASE=mongodb+srv://rush-blog:<PASSWORD>@rush-blog.l2fwair.mongodb.net/tourdrive
ENV DATABASE_PASSWORD=KvWrOgoRCZudPpHp
ENV JWT_COOKIE_EXPIRES_IN=1
ENV JWT_SECRET=my-secret-to-use-create-jwt-tokens.ihope-this-is-long_enough.lol.
ENV JWT_EXPIRES_IN=1d



ENV EMAIL_HOST=sandbox.smtp.mailtrap.io
ENV EMAIL_PORT=2525
ENV EMAIL_USERNAME=32bad9a12494de
ENV EMAIL_PASSWORD=957c92ea4d528d
ENV EMAIL_FROM='tourdrive@gmail.com'


ENV STRIPE_KEY=sk_test_51MgrmWBaYPop92NtXjAUt3orVx3NoMoWUXocI4aQkTSusBC6qHOqxTzQ0GtH8OdF4kmNZLXdyckiDTpFM7k6gNeA00d0IinwkN
# environment will be defined in the AppService. 
# for the production app, NODE_ENV=production
# for the production test app, NODE_ENV=test_production
ENV PORT=80

# Run the app
CMD ["npm", "start"]