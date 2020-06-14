#!/usr/bin/env node

import launchGame from '../src/index.js';
import EvenGame from '../src/games/EvenGame.js';

launchGame(new EvenGame());
