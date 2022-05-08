module.exports = {
    test: {
        client: 'mysql',
        connection: {
            database: 'heroku_fc9f2aeda300078',
            user: 'b4ca38b7b81a43',
            password: '3ad2c379',
            host: 'us-cdbr-east-05.cleardb.net'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    development: {
        client: 'mysql',
        connection: {
            database: 'heroku_fc9f2aeda300078',
            user: 'b4ca38b7b81a43',
            password: '3ad2c379',
            host: 'us-cdbr-east-05.cleardb.net'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            database: 'heroku_fc9f2aeda300078',
            user: 'b4ca38b7b81a43',
            password: '3ad2c379',
            host: 'us-cdbr-east-05.cleardb.net'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            database: 'heroku_fc9f2aeda300078',
            user: 'b4ca38b7b81a43',
            password: '3ad2c379',
            host: 'us-cdbr-east-05.cleardb.net'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

};