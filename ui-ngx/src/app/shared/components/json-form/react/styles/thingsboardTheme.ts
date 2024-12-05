///
/// Copyright © 2016-2024 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { indigo, deepOrange } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { mergeDeep } from '@core/utils';

const PRIMARY_COLOR = '#009688';
const SECONDARY_COLOR = '#527dad';
const HUE3_COLOR = '#a7c1de';

const tbIndigo = mergeDeep<any>({}, indigo, {
  500: PRIMARY_COLOR,
  600: SECONDARY_COLOR,
  700: PRIMARY_COLOR,
  A100: HUE3_COLOR
});

const thingsboardPalette: PaletteOptions = {
  primary: tbIndigo,
  secondary: deepOrange,
  background: {
    default: '#eee'
  }
};

export default {
  typography: {
    fontFamily: 'Roboto, \'Helvetica Neue\', sans-serif'
  },
  palette: thingsboardPalette,
} as ThemeOptions;
