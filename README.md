

### Gitpod database

psql -h localhost -d postgres

### OrmConfig

{
  "type": "postgres",
  "host": "localhost",
  "url": "postgres://gitpod@127.0.0.1/gostack",
  "entities": ["./src/models/*.ts"],
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
