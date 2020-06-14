#!/usr/bin/env node

import launchGame from '../src/index.js';
import CalcGame from '../src/games/CalcGame.js';

launchGame(new CalcGame());
