## Think-check-attend

### String

```
{
    type: 'string',
    name: 'content',
    label: 'Title',
}
```

### Image

```
{
    type: 'image',
    name: 'image',
    label: 'Image',
}
```

### Rich text

```
{
    type: 'rich-text',
    label: 'content',
    name: 'content',
}
```

### Group repetable items

```
{
      type: 'object',
      list: true,
      name: 'galleryItems',
      label: 'Gallery Items',
      description: 'Add images to the gallery',
      ui: {
        defaultItem: {
          image: defaultImage.image,
          altText: defaultImage.altText,
        },
        itemProps: (item: any) => {
          return { label: item?.question }
        },
      },
      fields: [
        {
          type: 'image',
          name: 'image',
          label: 'Image',
          description: 'Select an image for the gallery',
        },
        {
          type: 'string',
          name: 'altText',
          label: 'Alternative Text',
          description: 'Alt text for the image',
        },
      ],
    },

```

### Reuse stuff

```
  {
      label: 'Service',
      name: 'global',
      type: 'reference',
      collections: ['global'],
    },
```

### Just a list

```
{
    type: 'string',
    name: 'locations',
    label: 'locations',
    list: true,
}
```
