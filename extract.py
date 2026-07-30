import fitz
import os

pdf_path = "aaroham_brochure.pdf"
output_dir = "extracted_aaroham"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images(full=True)
    if image_list:
        print(f"[+] Found a total of {len(image_list)} images in page {page_index}")
    else:
        print(f"[!] No images found on page {page_index}")
    for image_index, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_name = f"page{page_index}_img{image_index}.{image_ext}"
        with open(os.path.join(output_dir, image_name), "wb") as f:
            f.write(image_bytes)
            print(f"[+] Saved {image_name}")
