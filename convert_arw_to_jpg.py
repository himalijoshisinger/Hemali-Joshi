import os
import rawpy
import imageio

input_dir = r"c:\Users\HP\Downloads\Himani Joshi 2\Himani Joshi\public\Navratri"
for filename in os.listdir(input_dir):
    if filename.lower().endswith('.arw'):
        arw_path = os.path.join(input_dir, filename)
        jpg_path = os.path.join(input_dir, os.path.splitext(filename)[0] + '.jpg')
        if not os.path.exists(jpg_path):
            print(f"Converting {filename} to JPG...")
            with rawpy.imread(arw_path) as raw:
                rgb = raw.postprocess(use_camera_wb=True)
            imageio.imsave(jpg_path, rgb)
            print(f"Saved {jpg_path}")
print("Done!")
