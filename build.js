const fs = require('fs');
const path = require('path');
const proposals = require('./proposals.js');

const template = fs.readFileSync(path.join(__dirname, 'proposal-template.html'), 'utf-8');
const outputDir = path.join(__dirname, 'dist'); // We'll put generated files in a 'dist' folder

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// --- Generate Individual Proposal Pages ---
proposals.forEach(proposal => {
    console.log(`Generating ${proposal.slug}.html...`);

    let finalHtml = template.replace(/{{TITLE}}/g, proposal.title)
                             .replace(/{{DESCRIPTION}}/g, proposal.description)
                             .replace('{{CONTENT}}', proposal.htmlContent)
                             .replace('{{SCRIPT}}', proposal.initScript ? proposal.initScript.toString() : 'null');
    
    fs.writeFileSync(path.join(outputDir, `${proposal.slug}.html`), finalHtml);
});

// --- Generate a Main Index Page ---
let indexLinks = proposals.map(p => 
    `<li><a href="${p.slug}.html" class="text-xl text-blue-600 hover:underline">${p.title}</a><p class="text-slate-500">${p.description}</p></li>`
).join('');

const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>All Proposals</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-slate-50">
    <div class="container mx-auto max-w-3xl my-12 px-4">
        <h1 class="text-4xl font-extrabold text-slate-800 mb-8">Available Proposals</h1>
        <ul class="space-y-6">${indexLinks}</ul>
    </div>
</body>
</html>
`;

fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);

console.log('Build finished! All files are in the /dist directory.');
