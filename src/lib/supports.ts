/**
 * Feature-detection probe for the CSS `if()` inline conditional function.
 *
 * `if(else: <value>)` is the smallest valid `if()` — a single branch whose
 * condition is the always-true `else` keyword. Browsers that don't implement
 * `if()` reject the value, so `CSS.supports` returns false.
 *
 * @see https://drafts.csswg.org/css-values-5/#if-notation
 */
export const IF_PROBE = 'if(else: yellow)';

/**
 * Determines whether the "unsupported browser" disclaimer should be shown.
 *
 * @param supportsIf - injectable `CSS.supports('background-color', IF_PROBE)`
 */
export function shouldShowUnsupportedNotice(supportsIf: () => boolean): boolean {
  try {
    return !supportsIf();
  } catch {
    // Old browsers without CSS.supports — assume unsupported.
    return true;
  }
}
