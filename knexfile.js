module.exports = {
    test: {
        client: 'mysql',
        connection: {
            database: 'heroku_b00cd2e0a91fa0c',
            user: 'b8f3f7e797f977',
            password: 'b0421dd6',
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
            database: 'heroku_b00cd2e0a91fa0c',
            user: 'b8f3f7e797f977',
            password: 'b0421dd6',
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
            database: 'heroku_b00cd2e0a91fa0c',
            user: 'b8f3f7e797f977',
            password: 'b0421dd6',
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
            database: 'heroku_b00cd2e0a91fa0c',
            user: 'b8f3f7e797f977',
            password: 'b0421dd6',
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