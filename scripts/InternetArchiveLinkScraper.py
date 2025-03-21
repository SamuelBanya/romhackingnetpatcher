from bs4 import BeautifulSoup
import requests

r = requests.get('https://ia601904.us.archive.org/view_archive.php?archive=/0/items/rom-hack-patch-archive/SNES-SFC%20Hacks%201.7z')

soup = BeautifulSoup(r.text, 'html.parser');
# print('soup: ', soup);

links = soup.find_all('a');

# print('links: ', links);
for link in links:
    print('href: ', link.get('href'));