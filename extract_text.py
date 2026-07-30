import fitz
import sys

def extract_text_from_pdf(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text() + "\n"
        with open("aaroham_brochure_text.txt", "w", encoding="utf-8") as f:
            f.write(text)
        print("Text extracted successfully to aaroham_brochure_text.txt")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_text_from_pdf("aaroham_brochure.pdf")
