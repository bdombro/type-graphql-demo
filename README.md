type-graphql-demo
=========

This demo is a graphql apollo-express server that uses type-graphql framework.

Features:
- migration generation and autorun on start
- modular style models
- semi-functional code-sharing between models towards auto-CRUD

Status
---
Working and informative, but not production ready. At the moment, I've decided to explore the Warthog type-graphql framework, because Warthog has many of the features I'm looking for anyways.

Typeorm Commands
---

- To bypass migrations and force a sync of schema
`yarn typeorm:cli schema:sync`

- Drop schema
`yarn typeorm:cli schema:drop`

- To create a shell of a migration
`yarn typeorm:cli migration:create -n <name of migration>`

- To generate a migration automatically
`yarn typeorm:cli migration:generate -n <name of migration>`

- Migrations are ran by default at start using .env, but you can manually run them with this command
`yarn typeorm:cli migration:run`

- Revert migration
`yarn typeorm:cli migration:revert`

- Query
`yarn typeorm:cli query 'select * from user;'`

- Test?
`yarn typeorm:cli schema:log`