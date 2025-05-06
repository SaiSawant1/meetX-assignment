# Use the official Node.js LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your app source code
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Command to run the app
CMD ["node", "server.js"]

