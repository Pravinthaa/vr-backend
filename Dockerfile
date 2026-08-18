# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (better caching — deps only reinstall if these change)
COPY package.json package-lock.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy the rest of the application code
COPY . .

# The port your server listens on (matches PORT in your .env)
EXPOSE 5000

# Command to run when the container starts
CMD ["node", "server.js"]