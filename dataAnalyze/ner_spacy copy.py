import spacy
from spacy.matcher import Matcher
nlp = spacy.load('en_core_web_sm')

def perform_ner(text):
    doc = nlp(text)

    # Define pattern for dates
    date_pattern = [{"IS_DIGIT": True}, {"ORTH": "-"}, {"IS_DIGIT": True}, {"ORTH": "-"}, {"IS_DIGIT": True}]
    # Define pattern for a simple name structure (you might need to modify this depending on your specific use case)
    name_pattern = [{"POS": "PROPN"}, {"POS": "PROPN"}]

    matcher = Matcher(nlp.vocab)
    matcher.add("DATE", None, date_pattern)
    matcher.add("NAME", None, name_pattern)

    # Assuming that the text follows a specific pattern, you can extract specific sentences
    sentences = text.split('. ')
    dates = []
    speakers = []
    organizers = []
    locations = []

    for sentence in sentences:
        if 'speaker' in sentence.lower():
            speakers.append(sentence)
        elif 'organizer' in sentence.lower():
            organizers.append(sentence)
        elif 'location' in sentence.lower():
            locations.append(sentence)

    for sentence in speakers + organizers + locations:
        doc = nlp(sentence)
        matches = matcher(doc)
        for match_id, start, end in matches:
            string_id = nlp.vocab.strings[match_id]  # Get string representation
            span = doc[start:end]  # The matched span
            if string_id == 'DATE':
                dates.append(span.text)
            elif string_id == 'NAME':
                if 'speaker' in sentence.lower():
                    speakers.append(span.text)
                elif 'organizer' in sentence.lower():
                    organizers.append(span.text)
                elif 'location' in sentence.lower():
                    locations.append(span.text)

    print("Dates:", dates)
    print("Speakers:", speakers)
    print("Organizers:", organizers)
    print("Locations:", locations)
    # nlp = spacy.load("en_core_web_sm")
    # doc = nlp(text)
    
    # location_entities = [{"entity": ent.text, "label": ent.label_} for ent in doc.ents if ent.label_ == "GPE"]
    # date_entities = [{"entity": ent.text, "label": ent.label_} for ent in doc.ents if ent.label_ == "DATE"]
    
    # speakers = []
    # for sent in doc.sents:
    #     for token in sent:
    #         if token.dep_ in ("nsubj", "nsubjpass", "csubj", "csubjpass", "obj") and token.ent_type_ == "PERSON":
    #             speakers.append({"entity": token.text, "label": "SPEAKER"})
    
    # return {"locations": location_entities, "dates": date_entities, "speakers": speakers}
