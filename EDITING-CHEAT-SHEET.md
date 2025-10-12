# Website Editing Cheat Sheet

## Quick Reference for Non-Technical Editors

### 🚀 Getting Started (One-time setup)
```bash
# Navigate to the project folder
/yeshelp/yeshelpnetwork.github.io

# Install everything needed (only do this once)
npm install
```

### 📝 Making Changes

#### 1. Start the Development Server
```bash
# Start the preview server (do this every time you want to edit)
npm run dev
```
- Open your browser to `http://localhost:3000` to see your changes live
- Keep this running while you edit files

#### 2. Edit Content
- **Main page content**: Edit `app/page.tsx`
- **Site-wide settings**: Edit `app/layout.tsx`
- **Navigation**: Edit `app/ui/HeaderBar.tsx`
- **Styles**: Edit `app/globals.css`
- **Images**: Add to `public/images/` folder

#### 3. Test Your Changes
- Save your files
- Check `http://localhost:3000` in your browser
- Make sure everything looks correct

### 💾 Publishing Changes

#### 1. Stop the Development Server
- Press `Ctrl + C` in the terminal where `npm run dev` is running

#### 2. Save Your Work to Git
```bash
# Add all your changes
git add .

# Save with a description of what you changed
git commit -m "Update homepage content"

# Upload to GitHub (this triggers automatic deployment)
git push
```

### 🔧 Common Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start preview server for editing |
| `npm run build` | Test if everything builds correctly |
| `npm run lint` | Check for code issues |
| `git status` | See what files you've changed |
| `git add .` | Prepare all changes for saving |
| `git commit -m "message"` | Save changes with a description |
| `git push` | Upload changes (triggers deployment) |

### 📁 Important Files to Edit

```
app/
├── page.tsx           ← Main homepage content
├── layout.tsx         ← Site title, description, metadata
├── globals.css        ← Colors, fonts, styling
└── ui/
    └── HeaderBar.tsx  ← Navigation menu

public/
└── images/           ← Add new images here
```

### ⚠️ Important Notes

- **Always run `npm run dev` first** to preview changes
- **Test everything** before pushing to make sure it works
- **Write clear commit messages** describing what you changed
- **Don't edit files in `out/` or `node_modules/`** - these are auto-generated
- **Deployment is automatic** - pushing to GitHub will update the live site

### 🆘 If Something Goes Wrong

```bash
# Undo your last commit (if you haven't pushed yet)
git reset --soft HEAD~1

# See what's different from the last saved version
git diff

# Discard all unsaved changes (careful - this can't be undone!)
git checkout .
```

### 📞 Need Help?
If you get stuck, copy the error message and ask for help - include what you were trying to do and what command you ran.
