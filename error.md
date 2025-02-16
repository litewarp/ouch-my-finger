To reproduce:
1. Add a many-to-many relation to your database schema, e.g., the one from the (`@graphile-contrib/pg-many-to-many`)[https://github.com/graphile-contrib/pg-many-to-many/tree/v5?tab=readme-ov-file#excluding-fields] package
   
2. Create a .env file with the following vars

- `DATABASE_URL`
- `DATABASE_SCHEMAS`
- `GRAPHILE_ENV`

3. Run yarn export
  
```
> yarn export
Error: The function being exported as InfoSourceOpportunitiesByOpportunityInfoSourceInfoSourceIdAndOpportunityIdManyToManyConnection.extensions["grafast"]["assertStep"] references external variables: `ConnectionStep`. Please ensure this function is wrapped in `EXPORTABLE(() => ...)`. Fn:
assertStep($step) {
            if (!($step instanceof ConnectionStep)) {
                throw new Error(`Expected ${$step} to be a ConnectionStep`);
            }
        }
    at funcToAst (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:828:15)
    at func (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:747:9)
    at _convertToAST (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:588:16)
    at handleSubvalue (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:571:25)
    at /Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:603:30
    at Array.forEach (<anonymous>)
    at _convertToAST (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:601:17)
    at handleSubvalue (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:571:25)
    at /Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:603:30
    at Array.forEach (<anonymous>)
    at _convertToAST (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:601:17)
    at convertToIdentifierViaAST (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:698:9)
    at extensions (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:719:12)
    at CodegenFile.makeTypeDeclaration (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:416:29)
    at CodegenFile.declareType (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:281:33)
    at CodegenFile.typeExpression (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:330:25)
    at CodegenFile.typeExpression (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:322:22)
    at /Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:350:32
    at Array.reduce (<anonymous>)
    at CodegenFile.makeObjectFields (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:345:44)
    at CodegenFile.makeTypeDeclaration (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:417:60)
    at CodegenFile.declareType (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:281:33)
    at CodegenFile.typeExpression (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:330:25)
    at /Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:350:32
    at Array.reduce (<anonymous>)
    at CodegenFile.makeObjectFields (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:345:44)
    at CodegenFile.makeTypeDeclaration (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:417:60)
    at CodegenFile.declareType (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:281:33)
    at CodegenFile.typeExpression (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:330:25)
    at /Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:350:32
    at Array.reduce (<anonymous>)
    at CodegenFile.makeObjectFields (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:345:44)
    at CodegenFile.makeTypeDeclaration (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:417:60)
    at CodegenFile.declareType (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:281:33)
    at /Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:924:21
    at Array.map (<anonymous>)
    at exportSchemaGraphQLJS (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:923:31)
    at exportSchemaAsString (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:1131:9)
    at exportSchema (/Users/litewarp/projects/ouch-my-finger/node_modules/graphile-export/dist/exportSchema.js:1224:28)
    at main (file:///Users/litewarp/projects/ouch-my-finger/export.mjs:14:8)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)

```
