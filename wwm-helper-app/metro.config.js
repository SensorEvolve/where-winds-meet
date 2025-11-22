const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add markdown file support
config.resolver.assetExts.push('md');

module.exports = config;
