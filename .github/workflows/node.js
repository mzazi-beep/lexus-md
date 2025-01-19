# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Download and install Node.js:
nvm install 23

# Verify the Node.js version:
node -v # Should print "v23.6.0".
nvm current # Should print "v23.6.0".

# Download and install Yarn:
corepack enable yarn

# Verify Yarn version:
yarn -v
