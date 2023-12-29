FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy all files
COPY . .

# Expose port 5173
EXPOSE 5173

# Run app
CMD [ "npm", "run", "dev" ]