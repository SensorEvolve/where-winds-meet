/**
 * Translation Validation Script
 *
 * This script validates that all translation files have matching keys
 * and reports any missing or extra keys across languages.
 *
 * Run: node scripts/checkTranslations.js
 */

const fs = require('fs');
const path = require('path');

// Language files to check
const LANGUAGES = ['en', 'zh-TW', 'ja', 'ko'];
const LOCALES_DIR = path.join(__dirname, '../src/locales');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

/**
 * Load a JSON translation file
 */
function loadTranslationFile(lang) {
  const filePath = path.join(LOCALES_DIR, `${lang}.json`);
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`${colors.red}Error loading ${lang}.json:${colors.reset}`, error.message);
    return null;
  }
}

/**
 * Extract all keys from a nested object into a flat array
 */
function extractKeys(obj, prefix = '') {
  let keys = [];

  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(extractKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }

  return keys.sort();
}

/**
 * Find missing keys in target language compared to source
 */
function findMissingKeys(sourceKeys, targetKeys) {
  return sourceKeys.filter(key => !targetKeys.includes(key));
}

/**
 * Find extra keys in target language not in source
 */
function findExtraKeys(sourceKeys, targetKeys) {
  return targetKeys.filter(key => !sourceKeys.includes(key));
}

/**
 * Main validation function
 */
function validateTranslations() {
  console.log(`\n${colors.cyan}======================================${colors.reset}`);
  console.log(`${colors.cyan}Translation Validation${colors.reset}`);
  console.log(`${colors.cyan}======================================${colors.reset}\n`);

  // Load all translation files
  const translations = {};
  let hasErrors = false;

  for (const lang of LANGUAGES) {
    translations[lang] = loadTranslationFile(lang);
    if (!translations[lang]) {
      hasErrors = true;
      console.log(`${colors.red}✗ Failed to load ${lang}.json${colors.reset}\n`);
      continue;
    }
    console.log(`${colors.green}✓ Loaded ${lang}.json${colors.reset}`);
  }

  if (hasErrors) {
    console.log(`\n${colors.red}Some translation files could not be loaded.${colors.reset}`);
    process.exit(1);
  }

  console.log('');

  // Extract keys from all languages
  const allKeys = {};
  for (const lang of LANGUAGES) {
    allKeys[lang] = extractKeys(translations[lang]);
  }

  // Use English as the source of truth
  const sourceKeys = allKeys['en'];
  console.log(`${colors.blue}Base language (English): ${sourceKeys.length} keys${colors.reset}\n`);

  // Check each language against English
  let missingKeysFound = false;
  let extraKeysFound = false;

  for (const lang of LANGUAGES) {
    if (lang === 'en') continue;

    const targetKeys = allKeys[lang];
    const missing = findMissingKeys(sourceKeys, targetKeys);
    const extra = findExtraKeys(sourceKeys, targetKeys);

    console.log(`${colors.yellow}Checking ${lang}.json (${targetKeys.length} keys):${colors.reset}`);

    if (missing.length > 0) {
      missingKeysFound = true;
      console.log(`  ${colors.red}✗ Missing ${missing.length} keys:${colors.reset}`);
      missing.forEach(key => {
        console.log(`    - ${key}`);
      });
    } else {
      console.log(`  ${colors.green}✓ No missing keys${colors.reset}`);
    }

    if (extra.length > 0) {
      extraKeysFound = true;
      console.log(`  ${colors.yellow}! Found ${extra.length} extra keys:${colors.reset}`);
      extra.forEach(key => {
        console.log(`    + ${key}`);
      });
    } else {
      console.log(`  ${colors.green}✓ No extra keys${colors.reset}`);
    }

    console.log('');
  }

  // Summary
  console.log(`${colors.cyan}======================================${colors.reset}`);
  console.log(`${colors.cyan}Summary${colors.reset}`);
  console.log(`${colors.cyan}======================================${colors.reset}\n`);

  if (!missingKeysFound && !extraKeysFound) {
    console.log(`${colors.green}✓ All translation files are in sync!${colors.reset}`);
    console.log(`${colors.green}  Total keys: ${sourceKeys.length}${colors.reset}\n`);
    process.exit(0);
  } else {
    if (missingKeysFound) {
      console.log(`${colors.red}✗ Some languages are missing keys${colors.reset}`);
    }
    if (extraKeysFound) {
      console.log(`${colors.yellow}! Some languages have extra keys${colors.reset}`);
    }
    console.log(`\n${colors.yellow}Please update translation files to match English (en.json)${colors.reset}\n`);
    process.exit(1);
  }
}

// Run validation
validateTranslations();
