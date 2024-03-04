import { definePreset } from "@pandacss/dev";
import commonPreset from 'common/preset';

const tokens = {
  colors: {
    primary: {
      value: "green"
    }
  }
}

export default definePreset({
  presets: [commonPreset],
  theme: {
    extend: {
      tokens
    }
  }
});
