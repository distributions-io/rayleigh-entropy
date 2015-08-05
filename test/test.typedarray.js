/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Deep close to:
	deepCloseTo = require( './utils/deepcloseto.js' ),

	// Module to be tested:
	entropy = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array entropy', function tests() {

	it( 'should export a function', function test() {
		expect( entropy ).to.be.a( 'function' );
	});

	it( 'should compute the distribution entropy', function test() {
		var sigma, actual, expected;

		sigma = new Float64Array( [ 0.5, 1, 2, 4  ] );
		actual = new Float64Array( sigma.length );

		actual = entropy( actual, sigma );
		expected = new Float64Array( [ 0.2488871, 0.9420342, 1.6351814, 2.3283286 ] );

		assert.isTrue( deepCloseTo( actual, expected, 1e-5 ) );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( entropy( new Int8Array(), new Int8Array() ), new Int8Array() );
	});

});
