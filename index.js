import { AuroTable } from './src/auro-table.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-table', AuroTable);
