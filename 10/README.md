# Parks and Recreation Quotes API

This API provides random quotes from Ron Swanson and April Ludgate from the TV show "Parks and Recreation".

## API Endpoints

### Get a Random Quote

```
POST /api/quote
```

#### Request Body

```json
{
  "value": true | false
}
```

- `value` (required, boolean): 
  - `true` - Returns a random Ron Swanson quote
  - `false` - Returns a random April Ludgate quote

#### Response

```json
{
  "quote": "Never half-ass two things. Whole-ass one thing.",
  "character": "Ron Swanson"
}
```

#### Error Response

If the `value` parameter is missing or not a boolean:

```json
{
  "message": "The value field is required.",
  "errors": {
    "value": [
      "The value field is required."
    ]
  }
}
```

## Examples

### Using cURL

Get a Ron Swanson quote:

```bash
curl -X POST http://localhost:8000/api/quote \
  -H "Content-Type: application/json" \
  -d '{"value": true}'
```

Get an April Ludgate quote:

```bash
curl -X POST http://localhost:8000/api/quote \
  -H "Content-Type: application/json" \
  -d '{"value": false}'
```

### Using JavaScript Fetch

```javascript
// Get a Ron Swanson quote
fetch('http://localhost:8000/api/quote', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    value: true
  }),
})
.then(response => response.json())
.then(data => console.log(data));

// Get an April Ludgate quote
fetch('http://localhost:8000/api/quote', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    value: false
  }),
})
.then(response => response.json())
.then(data => console.log(data));
``` 