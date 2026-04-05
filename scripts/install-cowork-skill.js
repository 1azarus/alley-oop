const fs = require('fs');
const path = require('path');
const os = require('os');

const pluginRoot = process.env.CLAUDE_PLUGIN_ROOT;
const src = path.join(pluginRoot, 'skills', 'alley-oop', 'SKILL.md');
const dest = path.join(os.homedir(), '.claude', 'skills', 'alley-oop', 'SKILL.md');

if (!fs.existsSync(dest)) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
} else {
  // Keep in sync if plugin updates
  const srcContent = fs.readFileSync(src, 'utf8');
  if (srcContent !== fs.readFileSync(dest, 'utf8')) {
    fs.copyFileSync(src, dest);
  }
}
