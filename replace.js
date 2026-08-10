const fs = require('fs');
const path = require('path');

// 1. Update CV in portfolio.ts
const portfolioTsPath = path.join('src', 'data', 'portfolio.ts');
if (fs.existsSync(portfolioTsPath)) {
  let content = fs.readFileSync(portfolioTsPath, 'utf8');
  content = content.replace('resumePath: null', 'resumePath: "/CV/Wathshala-Dulashan-CV.pdf"');
  fs.writeFileSync(portfolioTsPath, content);
  console.log('Updated CV in portfolio.ts');
}

// 2. Profile photo replacements
function replaceProfilePhoto(dir) {
  const files = fs.readdirSync(dir, { recursive: true });
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (!fs.statSync(fullPath).isFile()) continue;
    if (!fullPath.endsWith('.tsx') && !fullPath.endsWith('.ts') && !fullPath.endsWith('.mdx')) continue;

    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;

    // The main profile photo unsplash URL
    if (content.includes('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d')) {
      content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1506794778202-cad84cf45f1d[^\"\'\s]*/g, '/profile/profile-photo.jpeg');
      changed = true;
    }
    
    // AboutContent has a different image? photo-1519085360753-af0119f7cbe7
    if (content.includes('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7')) {
      content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1519085360753-af0119f7cbe7[^\"\'\s]*/g, '/profile/profile-photo.jpeg');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(fullPath, content);
      console.log('Updated profile photo in:', fullPath);
    }
  }
}

replaceProfilePhoto('src');

// 3. Project replacements in mdx files
const mdxMap = {
  'fintech-dashboard.mdx': '/projects/TrackMYSavings.jpg',
  'saas-landing-page.mdx': '/projects/TrackMySavings2.jpg',
  'creative-agency.mdx': '/projects/aaa.jpg',
  'e-commerce-platform.mdx': '/projects/Medi-Connect-Web.mp4'
};

for (const [file, img] of Object.entries(mdxMap)) {
  const p = path.join('content', 'work', file);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/image: \"https:\/\/images\.unsplash\.com[^\"]+\"/, `image: "${img}"`);
    fs.writeFileSync(p, content);
    console.log('Updated project image in:', p);
  }
}

// 4. Project replacements in PortfolioSection.tsx
const portfolioSec = path.join('src', 'components', 'sections', 'PortfolioSection.tsx');
if (fs.existsSync(portfolioSec)) {
  let content = fs.readFileSync(portfolioSec, 'utf8');
  
  // replace defaultProjects images
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1661956602116-aa6865609028[^\"]*/, '/projects/Medi-Connect-Web.mp4');
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71[^\"]*/, '/projects/TrackMYSavings.jpg');
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1460925895917-afdab827c52f[^\"]*/, '/projects/TrackMySavings2.jpg');
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1560518883-ce09059eeffa[^\"]*/, '/projects/aaa.jpg');

  fs.writeFileSync(portfolioSec, content);
  console.log('Updated PortfolioSection.tsx default projects');
}
