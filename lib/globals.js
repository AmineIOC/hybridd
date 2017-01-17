/******************************************************************************
 * Internet of Coins                                                          *
 * globals.js - puts all dependency globals (and constants) in place          *
 * Copyright © 2016-2017 Joachim de Koning, Amadeus de Koning                 *
 *                                                                            *
 * This work is licensed under the GPLv3. See the LICENSE files at            *
 * the top-level directory of this distribution for the individual copyright  *
 * holder information and the developer policies on copyright and licensing.  *
 *                                                                            *
 * Unless otherwise agreed in a custom licensing agreement, no part of the    *
 * this software, including this file, may be copied, modified, propagated,   *
 * or distributed except according to the terms contained in the LICENSE      *
 * file.                                                                      *
 *                                                                            *
 * Removal or modification of this copyright notice is prohibited.            *
 *                                                                            *
 ******************************************************************************/

// constants
DEBUG = true;		// adds debug messages to stdout
FACTOR = 100000000;	// multiplication factor for value data

//  superglobals
last_xpath = [];
xpath = [];

// include js-NaCl everywhere
nacl_factory = require("./crypto/nacl.js");
nacl = nacl_factory.instantiate();

