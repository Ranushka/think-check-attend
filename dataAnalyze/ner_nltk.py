
import json
import nltk

from nltk.tokenize import word_tokenize
from nltk import pos_tag, ne_chunk

def perform_ner(text):
    words = word_tokenize(text)
    tagged_words = pos_tag(words)
    named_entities = ne_chunk(tagged_words)
    print(named_entities)

# opennlp = OpenNLP()
# opennlp.load_ner()

# def perform_ner(text):
#     entities = opennlp.predict_entities(text)
#     return entities

# def extract_speakers(text):
#     speaker_pattern = r'\b[A-Z][a-z]+\s[A-Z][a-z]+\b'
#     speaker_matches = re.findall(speaker_pattern, text)
#     return [{"entity": speaker, "label": "SPEAKER"} for speaker in speaker_matches]

# def extract_entities_from_text(text):
#     extracted_entities = perform_ner(text)
    
#     location_entities = [{"entity": entity[0], "label": entity[1]} for entity in extracted_entities if entity[1] == "Location"]
#     date_entities = [{"entity": entity[0], "label": entity[1]} for entity in extracted_entities if entity[1] == "Date"]
#     speakers = extract_speakers(text)

#     return {"locations": location_entities, "dates": date_entities, "speakers": speakers}




""" 

[
'cancellation policy', 
'contact person', 
'phone number', 
'email address', 
'speakers', 
'dates', 
'locations', 
'previous events'
]

 """