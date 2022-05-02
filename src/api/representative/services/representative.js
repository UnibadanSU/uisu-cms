'use strict';

/**
 * representative service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::representative.representative');
