export interface ExampleConfig {
  /** Matches the radio input id (`ex-${id}`) the picker CSS relies on. */
  id: string;
  /** Short label for the picker pill. */
  label: string;
  /** Section heading shown when selected. */
  title: string;
  /** Explanation shown when selected. */
  description: string;
  /** CSS snippet shown when selected. */
  code: string;
}

export const EXAMPLES: ExampleConfig[] = [
  {
    id: 'supports',
    label: 'supports()',
    title: 'Feature queries: supports()',
    description:
      'The condition can be a feature query, so a value can upgrade itself only where the browser can actually render it. Here the card asks for an oklch() background and falls back to a plain grey when oklch() is unavailable — one declaration instead of a @supports block plus an override.',
    code: `.preview {
  background-color: if(
    supports(color: oklch(60% 0.2 250)):
      color-mix(in oklch, var(--c-primary) 20%, var(--c-bg));
    else: #cfd8e3;
  );
}`,
  },
  {
    id: 'media',
    label: 'media()',
    title: 'Media queries: media()',
    description:
      'A media query can live inside the value itself. This card sets its font size from the viewport width without a media block — resize the window past 60rem and watch the type scale step up in place.',
    code: `.preview {
  font-size: if(
    media(width >= 60rem): 1.75rem;
    else: 1.15rem;
  );
}`,
  },
  {
    id: 'style',
    label: 'style()',
    title: 'Style queries: style()',
    description:
      'A style query reads a custom property and returns the matching value. Selecting this pill sets --density: compact on the page, which flips the card’s padding from roomy to tight — the value adapts to a container-level signal, not the viewport.',
    code: `.preview {
  padding: if(
    style(--density: compact): 1rem;
    else: 2.5rem;
  );
}`,
  },
  {
    id: 'boolean',
    label: 'and / or / not',
    title: 'Combining conditions',
    description:
      'Conditions compose with and, or and not, exactly like a @media or @supports condition. This border only goes primary when the viewport is at least 48rem wide and the browser can render oklch() — two unrelated signals combined into a single value.',
    code: `.preview {
  border: if(
    media(width >= 48rem) and supports(color: oklch(60% 0.2 250)):
      4px solid var(--c-primary);
    else: 1px solid var(--c-border);
  );
}`,
  },
  {
    id: 'branches',
    label: 'branches',
    title: 'Multiple branches — first match wins',
    description:
      'An if() takes as many condition/value pairs as you need, separated by semicolons. The first condition that is true wins; else is the catch-all. This card resolves its text colour from a three-way --mood switch.',
    code: `.preview {
  color: if(
    style(--mood: calm):
      color-mix(in oklch, oklch(0.6 0.15 200) 60%, var(--c-text));
    style(--mood: alert):
      color-mix(in oklch, oklch(0.6 0.2 25) 60%, var(--c-text));
    else: var(--c-text);
  );
}`,
  },
  {
    id: 'nested',
    label: 'nested',
    title: 'Nested if() and if() inside values',
    description:
      'if() is an ordinary value, so it nests and can sit inside other functions. This shadow picks an elevation first, then picks a stronger opacity when the operating system is in dark mode. Nested if()s let one value respond to several independent signals.',
    code: `.preview {
  box-shadow: if(
    style(--elevation: high):
      if(
        media(prefers-color-scheme: dark): 0 10px 30px rgb(0 0 0 / 0.7);
        else: 0 10px 30px rgb(0 0 0 / 0.18);
      );
    else: none;
  );
}`,
  },
];
