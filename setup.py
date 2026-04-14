import os
import glob
import shutil
import json

src = '../'
dest = 'public/gallery'
os.makedirs('src/data', exist_ok=True)
os.makedirs(dest, exist_ok=True)

images = []
exts = ['*.png', '*.jpg', '*.jpeg']
files = []
for e in exts:
    files.extend(glob.glob(os.path.join(src, e)))

for f in files:
    fname = os.path.basename(f)
    new_path = os.path.join(dest, fname)
    shutil.copy(f, new_path)
    images.append('/gallery/' + fname)

with open('src/data/images.json', 'w') as out:
    json.dump(images, out)

print(f'Copied {len(images)} images')
