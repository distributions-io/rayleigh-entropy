'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// ENTROPY //

/**
* FUNCTION entropy( sigma )
*	Computes the distribution entropy for a Rayleigh distribution with parameter sigma.
*
* @param {Number} sigma - scale parameter
* @returns {Number} distribution entropy
*/
function entropy( sigma ) {
	if ( !isPositive( sigma ) ) {
		return NaN;
	}
	return CONST_PART + ln( sigma / SQRT_TWO );
} // end FUNCTION entropy()


// EXPORTS

module.exports =  entropy;
