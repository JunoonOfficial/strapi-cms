'use strict';

/**
 * storygram service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::storygram.storygram');
