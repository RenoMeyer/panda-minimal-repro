
import { definePreset } from "@pandacss/dev";
import tokens from 'common/tokens'

export default definePreset({
  theme: {
    extend: {
      tokens
    }
  }
});
