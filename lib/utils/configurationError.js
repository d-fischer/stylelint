'use strict';

/** @typedef {Error & { code: number }} ConfigurationError */

/**
 * Create configurationError from text and set CLI exit code.
 *
 * @param {string} text
 * @returns {ConfigurationError}
 */
module.exports = function configurationError(text) {
	const err = /** @type {ConfigurationError} */ (new Error(text));

	err.code = 78;

	return err;
};
