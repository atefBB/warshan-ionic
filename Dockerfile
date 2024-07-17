FROM robingenz/ionic-capacitor:latest 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm i -g @ionic/cli
RUN npm i 

# Copy the rest of the application code
COPY . .

# Expose port 8100
EXPOSE 8100

# Start server
CMD ["ionic", "serve", "--host", "0.0.0.0", "--port", "8100"]
