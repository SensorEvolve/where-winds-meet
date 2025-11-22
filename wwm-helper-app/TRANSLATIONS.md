# Translation Changelog

This document tracks changes to translation files and helps identify what needs to be retranslated across languages.

## Version History

### v1.0.0 (2025-11-20) - Initial Translation Setup

**Status**: ✅ Complete

**Changes**:
- Initial translation infrastructure setup
- All 4 languages established: English (en), Traditional Chinese (zh-TW), Japanese (ja), Korean (ko)
- Comprehensive UI translations added (~160 keys)

**Translated Sections**:
- ✅ Onboarding flow (language selection, intro carousel)
- ✅ Navigation tabs and labels
- ✅ Home screen (about, news, Twitch Drops event)
- ✅ Character screen (tab labels)
- ✅ Weapons screens (list, detail views, all labels)
- ✅ Bosses screens (labels and classifications)
- ✅ Common UI elements (buttons, actions, states)
- ✅ Search, tools, more screens
- ✅ Database categories

**Translation Keys Added**: 160+

**Files Modified**:
- `src/locales/en.json`
- `src/locales/zh-TW.json`
- `src/locales/ja.json`
- `src/locales/ko.json`

**Components Refactored**:
- `src/screens/tabs/Home.tsx`
- `src/screens/tabs/Character.tsx`
- `src/screens/weapons/WeaponListScreen.tsx`
- `src/screens/weapons/WeaponDetailScreen.tsx`
- `src/screens/onboarding/IntroCarousel.tsx`

---

## Translation Status by Section

### ✅ Fully Translated
- Onboarding screens
- Navigation system
- Home screen content
- Character screen interface
- Weapon system UI
- Boss system UI
- Common UI elements
- Search interface
- Tools and More sections

### 🔄 Partially Translated
- Boss content data (names, descriptions, rewards) - *Coming in future update*
- Weapon database (names, descriptions, skills) - *Coming in future update*

### ⏳ Pending Translation
- Markdown game content (35+ files)
- Item database descriptions
- Skill descriptions
- Location descriptions

---

## How to Use This Document

### When Adding New Content

1. **Update English First**: Always add new keys to `en.json` first
2. **Record Here**: Add an entry below documenting the change
3. **Flag for Translation**: Mark which languages need the new translations
4. **Translate**: Update the other 3 language files
5. **Validate**: Run `npm run check-translations` to verify

### When Updating Existing Content

1. **Modify English**: Update the key in `en.json`
2. **Record Change**: Add an entry below with the old and new values
3. **Retranslate**: Update translations in all other languages
4. **Validate**: Run `npm run check-translations`

---

## Pending Translations

<!-- Use this section to track what needs translation -->

### Awaiting Translation
*No pending translations currently*

---

## Future Updates

### Version 1.1 (Planned)
- [ ] Boss data translations (22 bosses)
- [ ] Weapon database translations (12+ weapons)
- [ ] Skill descriptions
- [ ] Item descriptions

### Version 1.2 (Planned)
- [ ] Markdown content summaries
- [ ] Location descriptions
- [ ] NPC data
- [ ] Quest descriptions

---

## Translation Guidelines

### Key Naming Conventions
- Use dot notation: `section.subsection.key`
- Keep keys descriptive and semantic
- Use camelCase for multi-word keys
- Group related keys under sections

### Translation Best Practices
1. **Maintain Tone**: Keep the wuxia/martial arts theme consistent
2. **Context Matters**: Consider UI space constraints
3. **Variables**: Use `{{variable}}` for dynamic content
4. **Pluralization**: Create separate keys for singular/plural when needed
5. **Cultural Adaptation**: Adapt idioms and cultural references appropriately

### Quality Checklist
- [ ] All keys present in all 4 language files
- [ ] Interpolation variables match (e.g., `{{count}}`)
- [ ] Character limits respected for UI elements
- [ ] Terminology consistent across the app
- [ ] No hardcoded strings in components
- [ ] Validation script passes

---

## Useful Commands

```bash
# Validate all translation files are in sync
npm run check-translations

# Or run directly
node scripts/checkTranslations.js
```

---

## Contact

For translation questions or contributions, please open an issue in the repository.
