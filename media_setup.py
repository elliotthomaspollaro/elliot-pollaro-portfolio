import os
import shutil
import subprocess

src = '../'
port_path = 'public/'

os.makedirs(os.path.join(port_path, 'audio'), exist_ok=True)
os.makedirs(os.path.join(port_path, 'media'), exist_ok=True)

# Audio files
for sf in os.listdir(src):
    if sf.endswith('.mp3'):
        shutil.copy(os.path.join(src, sf), os.path.join(port_path, 'audio', sf))
        print("Copied", sf)
    # Small video files
    if 'comedy' in sf.lower() or 'asmr' in sf.lower():
        if sf.endswith('.mp4') or sf.endswith('.mov'):
            shutil.copy(os.path.join(src, sf), os.path.join(port_path, 'media', sf))
            print("Copied small video", sf)

# Compress heavy video scripts:
print("Starting heavy compression...")
subprocess.run(['ffmpeg', '-y', '-i', os.path.join(src, 'list.mov'), '-vcodec', 'libx264', '-crf', '30', '-preset', 'ultrafast', os.path.join(port_path, 'media', 'list-web.mp4')])
print("List.mov compressed")
subprocess.run(['ffmpeg', '-y', '-i', os.path.join(src, 'more.mp4'), '-vcodec', 'libx264', '-crf', '30', '-preset', 'ultrafast', os.path.join(port_path, 'media', 'more-web.mp4')])
print("More.mp4 compressed")

print("Media setup complete!")
