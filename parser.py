import re, json

with open('temp.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# we can use regex to extract the properties array string
start = content.find('export const properties: Property[] = [')
start = content.find('[', start)
end = content.rfind('];')
arr_str = content[start:end+1]

import pyjsparser
parsed = pyjsparser.parse('var a = ' + arr_str)
arr = parsed['body'][0]['declarations'][0]['init']['elements']

new_props = []
for p in arr:
    obj = {}
    for prop in p['properties']:
        key = prop['key']['name'] if 'name' in prop['key'] else prop['key']['value']
        # it's hard to parse AST manually for everything. Let's just output it in a generic way?
