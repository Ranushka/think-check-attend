from transformers import BertTokenizer, BertForTokenClassification
import torch

text = "The conference will be in San Francisco next week. John Smith will be speaking at the event in New York."

# Load pre-trained BERT tokenizer and model for token classification (NER)
tokenizer = BertTokenizer.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
model = BertForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")

# Tokenize input text
tokens = tokenizer.tokenize(tokenizer.decode(tokenizer.encode(text)))

# Convert tokens to IDs
input_ids = torch.tensor([tokenizer.convert_tokens_to_ids(tokens)])

# Get model predictions
with torch.no_grad():
    outputs = model(input_ids)

# Get predicted labels
predicted_labels = torch.argmax(outputs.logits, dim=2)[0]

# Map predicted labels back to entities
entities = []
current_entity = None
for token, label_id in zip(tokens, predicted_labels):
    label = model.config.id2label[label_id.item()]
    if label.startswith("B-"):
        current_entity = {"entity": token, "label": label[2:]}
    elif label.startswith("I-") and current_entity:
        current_entity["entity"] += " " + token
    else:
        if current_entity:
            entities.append(current_entity)
            current_entity = None

# Print extracted entities
for entity in entities:
    print(f"Entity: {entity['entity']}, Label: {entity['label']}")
