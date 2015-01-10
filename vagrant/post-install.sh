echo "Installing node..."
cd /usr/ports/www/node && sudo make install clean
echo "Done installing node!"

echo "Installing node modules..."

npm install -g mocha
npm install -g gulp

rm -r node_modules
modules = $(npm install)
if [[ $modules == *"ERR!"* ]]; then
  echo "One or more modules failed to install. Errors may occur"
else
  echo "Modules installed"
fi