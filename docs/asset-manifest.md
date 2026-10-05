# Wathshala Amarasinghe Portfolio — Asset Manifest

Please provide the following assets in their respective directories:

## Profile (`/public/images/profile/`)
- `wathshala.jpg` (or `.png`/`.webp`) - Headshot/avatar for sidebar (1:1 aspect ratio recommended)

## Documents (`/public/documents/`)
- `wathshala-amarasinghe-cv.pdf` - Downloadable CV

## Projects (`/public/images/projects/`)
For each project, the current configuration uses gradients until images are provided. Provide cover images (16:9 or 4:3) and hero images:

### MediGo
- `medigo/cover.jpg`
- `medigo/hero.jpg`

### Beverly Hills Hiriketiya
- `beverly-hills/cover.jpg`
- `beverly-hills/hero.jpg`

### KAVON.net
- `kavon/cover.jpg`
- `kavon/hero.jpg`

### Smart Web POS
- `smart-pos/cover.jpg`
- `smart-pos/hero.jpg`

### Expense Management
- `expense-management/cover.jpg`
- `expense-management/hero.jpg`

Once assets are added, update the `src/data/profile.ts` and `src/data/projects.ts` files to reference these paths, and set the project `status` to `"published"`.
