const fs = require('fs');
const path = require('path');

// Categories to convert
const categories = [
  { source: 'Character', target: 'character' },
  { source: 'items', target: 'items' },
  { source: 'locations', target: 'locations' },
  { source: 'progression', target: 'progression' },
  { source: 'core', target: 'core' }
];

let totalConverted = 0;

categories.forEach(({ source, target }) => {
  const sourceDir = path.join(__dirname, '../../game-data', source);
  const targetDir = path.join(__dirname, '../src/data', target);

  // Check if source directory exists
  if (!fs.existsSync(sourceDir)) {
    console.log(`⚠️  Source directory not found: ${source}`);
    return;
  }

  // Ensure target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Read all .md files from source
  const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.md'));

  if (files.length === 0) {
    console.log(`⚠️  No markdown files found in ${source}`);
    return;
  }

  console.log(`\n📁 Processing ${source}/`);

  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const content = fs.readFileSync(sourcePath, 'utf-8');

    // Escape backticks and ${} in the content
    const escapedContent = content
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');

    // Create TypeScript file with exported string
    const tsFileName = file.replace('.md', '.ts');
    const tsFilePath = path.join(targetDir, tsFileName);

    const tsContent = `export const content = \`${escapedContent}\`;
`;

    fs.writeFileSync(tsFilePath, tsContent, 'utf-8');
    console.log(`   ✅ ${file} → ${target}/${tsFileName}`);
    totalConverted++;
  });
});

console.log(`\n🎉 Successfully converted ${totalConverted} markdown files to TypeScript!`);
