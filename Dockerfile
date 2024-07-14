FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm i -g @ionic/cli
RUN npm i

# Copy the rest of the application code
COPY . .

# Build the React app
# RUN npm run build

# Use a different base image to serve the app
# FROM nginx:alpine

# Copy the build output to the nginx html folder
# COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
# EXPOSE 80

# Start nginx server
CMD ["npm", "start:dev"]

