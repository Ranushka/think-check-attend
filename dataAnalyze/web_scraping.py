import requests
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def scrape_page_text(url):
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        page_text = soup.get_text(separator=" ")
        result = [page_text]
        
        base_url = url

        internal_li = soup.find_all('a')

        href_list = [link.get('href') for link in internal_li]
        unique_href_list = list(dict.fromkeys(href_list))
        cleaned_urls = [url for url in unique_href_list if url not in ('/', '#')]
        cleaned_urls = sorted(cleaned_urls, key=lambda x: x.startswith('/'), reverse=True)
        cleaned_urls = sorted(cleaned_urls, key=lambda x: (not x.startswith('/'), urlparse(url).netloc not in x))

        cleaned_urls = cleaned_urls[:5]
        
        for link in cleaned_urls:
            if link:
                full_link = urljoin(base_url, link)
                link_response = requests.get(full_link)
                
                if link_response.status_code == 200:
                    try:
                        link_soup = BeautifulSoup(link_response.content, 'html.parser')
                        link_page_text = link_soup.get_text(separator=" ")
                        result.append(link_page_text)
                    except Exception as e:
                        pass
                else:
                    pass
            else:
                pass

        return '\n'.join(result) 
    else:
        return 'Failed to retrieve the webpage'
