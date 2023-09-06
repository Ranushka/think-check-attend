import spacy
from spacy.matcher import Matcher

nlp = spacy.load('en_core_web_sm')

def perform_ner(text):
    # Define patterns
    date_pattern = [[{"IS_DIGIT": True}, {"ORTH": "-"}, {"IS_DIGIT": True}, {"ORTH": "-"}, {"IS_DIGIT": True}]]
    name_pattern = [[{"POS": "PROPN"}, {"POS": "PROPN"}]]

    matcher = Matcher(nlp.vocab)
    matcher.add("DATE",  date_pattern)
    matcher.add("NAME",  name_pattern)

    # Split the text into sentences
    sentences = text.split('. ')
    dates = []
    speakers = []
    organizers = []
    locations = []

    # Iterate through sentences and find the context
    for sentence in sentences:
        category = None
        if 'speaker' in sentence.lower():
            category = 'SPEAKER'
        elif 'organizer' in sentence.lower():
            category = 'ORGANIZER'
        elif 'location' in sentence.lower():
            category = 'LOCATION'
        
        if category:
            doc = nlp(sentence)
            matches = matcher(doc)
            for match_id, start, end in matches:
                string_id = nlp.vocab.strings[match_id]  # Get string representation
                span = doc[start:end]  # The matched span
                if string_id == 'DATE':
                    dates.append(span.text)
                elif string_id == 'NAME':
                    if category == 'SPEAKER':
                        speakers.append(span.text)
                    elif category == 'ORGANIZER':
                        organizers.append(span.text)
                    elif category == 'LOCATION':
                        locations.append(span.text)

    print("Dates:", dates)
    print("Speakers:", speakers)
    print("Organizers:", organizers)
    print("Locations:", locations)