A tool to call fastify-error in one line"

```bash
npm i fastyfi-simple-error
```

```javascript
const createError = require('fastyfi-simple-error') 
throw createError('ERROR_CODE', '%s is alrady working on %s', 400, 'Ilya', 'fastyfi-simple-error')
```