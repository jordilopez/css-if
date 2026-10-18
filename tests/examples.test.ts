import { describe, it, expect } from 'vitest';
import { EXAMPLES } from '../src/lib/examples';

describe('EXAMPLES config', () => {
  it('has six layout examples', () => {
    expect(EXAMPLES).toHaveLength(6);
  });

  it('has unique ids', () => {
    const ids = EXAMPLES.map((ex) => ex.id);
    expect(new Set(ids).size).toBe(EXAMPLES.length);
  });

  it('gives every example a label, title, description and code snippet', () => {
    for (const ex of EXAMPLES) {
      expect(ex.label.trim()).not.toBe('');
      expect(ex.title.trim()).not.toBe('');
      expect(ex.description.trim()).not.toBe('');
      expect(ex.code.trim()).not.toBe('');
    }
  });

  it('uses the expected example ids the picker css relies on', () => {
    expect(EXAMPLES.map((ex) => ex.id)).toEqual([
      'supports',
      'media',
      'style',
      'boolean',
      'branches',
      'nested',
    ]);
  });

  it('uses if() in every code snippet', () => {
    for (const ex of EXAMPLES) {
      expect(ex.code).toContain('if(');
    }
  });

  it('covers every condition type the feature offers', () => {
    const all = EXAMPLES.map((ex) => ex.code).join('\n');
    expect(all).toContain('supports(');
    expect(all).toContain('media(');
    expect(all).toContain('style(');
    expect(all).toContain(' and ');
    expect(all).toContain('else:');
  });
});
