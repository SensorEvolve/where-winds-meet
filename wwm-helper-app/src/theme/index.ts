import { colors } from './colors';
import { typography } from './typography';
import { spacing, layout } from './spacing';

export const theme = {
  colors,
  typography,
  spacing,
  layout,
};

export type Theme = typeof theme;

export { colors, typography, spacing, layout };
