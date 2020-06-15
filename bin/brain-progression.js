#!/usr/bin/env node

import launchGame from '../src/index.js';
import ProgressionGame from '../src/games/ProgressionGame.js';

launchGame(new ProgressionGame());
