import os
import json
import struct

def get_image_dimensions(file_path):
    with open(file_path, 'rb') as f:
        head = f.read(24)
        if len(head) != 24:
            return None
        
        # Check if PNG
        if head.startswith(b'\x89PNG\r\n\x1a\n'):
            check = struct.unpack('>I', head[8:12])[0]
            if head[12:16] == b'IHDR':
                width, height = struct.unpack('>II', head[16:24])
                return (width, height)
            
        # Check if JPEG
        elif head.startswith(b'\xff\xd8'):
            f.seek(0)
            data = f.read()
            i = 2
            while i < len(data):
                if data[i] == 0xFF:
                    b1 = data[i]
                    b2 = data[i+1]
                    if b2 >= 0xC0 and b2 <= 0xC3:
                        height, width = struct.unpack('>HH', data[i+5:i+9])
                        return (width, height)
                    else:
                        length = struct.unpack('>H', data[i+2:i+4])[0]
                        i += length + 2
                else:
                    break
    return (1, 1)

directory = 'public/gallery'
images = []
seen_prefixes = set()

# Also handle Windows duplicate naming conventions " (1)", etc.
for filename in os.listdir(directory):
    if not (filename.endswith('.png') or filename.endswith('.jpg') or filename.endswith('.jpeg')):
         continue
         
    # Deduplication logic:
    # Remove " (1)", etc.
    base_name = filename.split(" (")[0]
    
    # We will use the first 45 characters of the base name as a unique fingerprint.
    # Midjourney prompts repeat prefix.
    fingerprint = base_name[:45].lower()
    
    if fingerprint in seen_prefixes:
        continue
        
    seen_prefixes.add(fingerprint)
    
    # Get dimensions
    path = os.path.join(directory, filename)
    dims = get_image_dimensions(path)
    if dims:
        width, height = dims
        ratio = round(width / height, 2)
        images.append({
            "src": f"/gallery/{filename}",
            "width": width,
            "height": height,
            "ratio": ratio
        })

# Sort by aspect ratio descending to feature wider images first!
images.sort(key=lambda x: x['ratio'], reverse=True)

with open('src/data/images.json', 'w') as out:
    json.dump(images, out)

print(f"Processed and deduplicated. Found {len(images)} unique base concepts.")
