import json
import re

log_path = r"C:\Users\ANIKET\.gemini\antigravity\brain\fe424cad-e66a-43de-b734-682112eba490\.system_generated\logs\transcript.jsonl"

found_chunks = []

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        if 'Tulip Monsella' in line and 'ReplacementContent' in line:
            try:
                data = json.loads(line)
                tool_calls = data.get('tool_calls', [])
                for tc in tool_calls:
                    if tc.get('name') == 'multi_replace_file_content':
                        args = tc.get('args', {})
                        if 'properties.ts' in args.get('TargetFile', ''):
                            chunks = args.get('ReplacementChunks', '[]')
                            if isinstance(chunks, str):
                                chunks = json.loads(chunks)
                            for c in chunks:
                                if 'Tulip Monsella' in c.get('ReplacementContent', ''):
                                    found_chunks.append(c['ReplacementContent'])
            except:
                pass

if found_chunks:
    print(f"Found {len(found_chunks)} chunks with Tulip Monsella!")
    with open('recovered_tulip.ts', 'w', encoding='utf-8') as f:
        f.write(found_chunks[-1])
else:
    print("Could not find chunks in transcript.")
