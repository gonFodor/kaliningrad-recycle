const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(path.join(__dirname, 'dist'), {
  dotfiles: true,
  history: true,
  message: 'Auto-generated commit'
}, (err) => {
  if (err) console.error(err);
  else console.log('Published to GitHub Pages');
});