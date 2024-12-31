import { ProductData } from './types';
import { sheetsData } from './products/sheets';
import { wireRodData } from './products/wireRod';
import { wireData } from './products/wire';
import { castCoilData } from './products/castCoil';
import { coldRolledCoilData } from './products/coldRolledCoil';
import { colorCoatedCoilData } from './products/colorCoatedCoil';
import { chequeredSheetsData } from './products/chequeredSheets';
import { roofingProfiledSheetsData } from './products/roofingProfiledSheets';
import { foilData } from './products/foil';

export const productsData: Record<string, ProductData> = {
  "wire-rod": wireRodData,
  "wire": wireData,
  "cast-coil": castCoilData,
  "cold-rolled-coil": coldRolledCoilData,
  "color-coated-coil": colorCoatedCoilData,
  "sheets": sheetsData,
  "chequered-sheets": chequeredSheetsData,
  "roofing-profiled-sheets": roofingProfiledSheetsData,
  "foil": foilData,
};