'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' ),
	gamma = require( 'compute-const-eulergamma' );


// FUNCTIONS //

var ln = Math.log,
	sqrt = Math.sqrt;


// CONSTANTS //

var CONST_PART = 1 + gamma / 2,
	SQRT_TWO = sqrt( 2 );


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
