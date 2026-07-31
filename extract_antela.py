import fitz
import os

doc = fitz.open('AntelaHeightsBrochure.pdf')
out_dir = 'public/antela_heights'
os.makedirs(out_dir, exist_ok=True)

img_count = 0
for i in range(len(doc)):
    page = doc[i]
    image_list = page.get_images(full=True)
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image['image']
        image_ext = base_image['ext']
        
        # skip small logos/icons
        if len(image_bytes) < 50000:
            continue
            
        with open(os.path.join(out_dir, f'antela_{i}_{img_index}.{image_ext}'), 'wb') as f:
            f.write(image_bytes)
            img_count += 1

print(f'Extracted {img_count} images to {out_dir}')
