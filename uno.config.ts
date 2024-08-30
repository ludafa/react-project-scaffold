import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { animatedUno } from 'animated-unocss';
import { defineConfig, UserConfig, presetTypography } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetIcons(), animatedUno(), presetTypography()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
}) as UserConfig;
