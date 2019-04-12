'use strict';

const Q = require('@nmq/q/server');
Q.start();

const db = new Q('database');
db.monitorEvent('file-save');
db.monitorEvent('file-error');
db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');
db.monitorEvent('error');
