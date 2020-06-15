#!/usr/bin/env node

import launchGame from '../src/index.js';
import PrimeGame from '../src/games/PrimeGame.js';

launchGame(new PrimeGame());
