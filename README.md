# Personal Budget API

## Endpoints
- `GET /api/envelopes` - Get all envelopes
- `POST /api/envelopes` - Create envelopes with envelope name and allocated budget
- `DELETE /api/envelopes/:name` - Delete an envelope by id
- `POST /api/envelopes/transfer/:from/:to` - transfer budget from a `from` envelope to a `to` envelope
- `/api/envelopes/update-budgets-all` - update all envelop budget by an amount
