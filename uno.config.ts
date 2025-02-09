/* eslint-disable import/no-default-export */
import { animatedUno } from 'animated-unocss';
import { defineConfig, presetTypography, UserConfig } from 'unocss';
import { default as presetIcons } from '@unocss/preset-icons';
import { default as presetUno } from '@unocss/preset-uno';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  presets: [presetUno(), presetIcons(), animatedUno(), presetTypography()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
}) as UserConfig;
