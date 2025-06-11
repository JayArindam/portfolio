# 1. Use an official Node.js runtime as a parent image
# Using a specific version is recommended for stability
FROM node:18-slim

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
# Using --omit=dev because we don't need dev dependencies in production
RUN npm install --omit=dev

# 5. Copy the rest of your app's source code
COPY . .

# 6. Build your SvelteKit app
RUN npm run build

# 7. Expose the port the app runs on
# The Node adapter for SvelteKit uses PORT environment variable, which Cloud Run sets automatically.
# We just need to tell Docker the port is available.
EXPOSE 3000

# 8. Define the command to run your app
# This will start the Node server built by SvelteKit
CMD [ "node", "build/index.js" ]