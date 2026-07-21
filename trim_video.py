import os
from moviepy import VideoFileClip

input_path = "public/merged_background.mp4"
output_path = "public/merged_background_trimmed.mp4"

print(f"Loading {input_path}...")
clip = VideoFileClip(input_path)

# Trim the first 10 seconds (start at t=10)
print("Trimming the first 10 seconds...")
trimmed_clip = clip.subclipped(10, clip.duration)

print(f"Writing to {output_path}...")
trimmed_clip.write_videofile(output_path, codec="libx264", audio_codec="aac")

print("Replacing original file...")
clip.close()
trimmed_clip.close()
os.replace(output_path, input_path)
print("Done!")
