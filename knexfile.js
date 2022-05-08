module.exports = {
    test: {
        client: 'mysql',
        connection: {
            database: 'heroku_9d83b4e78b13644',
            user: 'b89ada163df3c0',
            password: '53e751ad',
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
            database: 'heroku_9d83b4e78b13644',
            user: 'b89ada163df3c0',
            password: '53e751ad',
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
            database: 'heroku_9d83b4e78b13644',
            user: 'b89ada163df3c0',
            password: '53e751ad',
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
            database: 'heroku_9d83b4e78b13644',
            user: 'b89ada163df3c0',
            password: '53e751ad',
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