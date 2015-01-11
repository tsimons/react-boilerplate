echo "Installing node..."
sudo pkg install -y node
sudo pkg install -y npm
echo "Done installing node!"

echo "Installing node modules..."
sudo npm install -g mocha
sudo npm install -g gulp

cd /srv/app
rm -r app/node_modules
npm install
