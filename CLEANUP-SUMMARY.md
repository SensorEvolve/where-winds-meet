# Documentation Cleanup Summary

**Date**: 2025-11-18
**Purpose**: Review organizational structure, remove duplicate content, eliminate assumptions, and simplify writing

---

## Changes Completed

### Files Deleted (2 files, 444 lines removed)

#### 1. `/game-data/progression/quests-and-activities.md` (271 lines)
**Reason**: Duplicate content and mostly theoretical/assumed information

**Issues**:
- 80% of content marked "(Assumed)" with unconfirmed features
- Overlapped with `/game-data/gameplay/quests.md` which has actual quest catalog
- Activities section (dungeons, world bosses) documented elsewhere

**Impact**: Eliminated 271 lines of speculative content, consolidated quest information in single location

---

#### 2. `/game-data/characters/builds-and-playstyles.md` (173 lines)
**Reason**: Entirely speculative content replaced by confirmed Path Builds

**Issues**:
- Theoretical build archetypes with placeholder text ("possibly fans", "umbrellas?", "TBD")
- Generic "Recommended" sections full of guesses
- No confirmed data

**Replacement**: Real build data documented in `/game-data/progression/martial-arts.md`:
- Bellstrike - Splendor Build (DPS Melee)
- Bellstrike - Umbra Build (Tank/Support)
- Skillbind - Deluge Build (Healer/Support)
- Skillbind - Jade Build (Ranged DPS)
- Bamboocut - Wind Build (Mobile DPS)
- Stonesplit - Might Build (Tank/Survivability)

**Impact**: Eliminated 173 lines of speculation, users directed to confirmed Path Builds with real recommended weapons, Internal Arts, and Gear Sets

---

### Files Simplified (2 files, 120+ lines removed)

#### 3. `/game-data/gameplay/game-modes.md`
**Changes**:
- ❌ Removed all "Best For" player recommendation sections (3 instances)
- ❌ Removed "(assumed)" content from MMO Mode features
- ❌ Removed entire "Additional Activities (Assumed)" section
- ✅ Simplified descriptions to be direct and factual
- ✅ Added Early Access notice
- **Result**: 106 lines → 67 lines (37% reduction)

**Before**:
```markdown
**Best For**:
- Players who prefer story immersion
- Solo gamers
- Those who want to experience lore deeply
```

**After**:
```markdown
Experience a rich, narrative-driven wuxia adventure as a solo player.
```

---

#### 4. `/game-data/gameplay/sects.md`
**Changes**:
- ❌ Removed all 8 "Best For" player recommendation lines
- ❌ Removed "Tips for Choosing a Sect" section with playstyle matchmaking advice
- ❌ Removed "Evaluate Rule Restrictions" editorial guidance
- ❌ Removed "Sectless as a Viable Option" recommendations
- ✅ Kept factual Martial Arts discount table, renamed to "Sect and Martial Arts Association"
- ✅ Added cross-reference to martial-arts.md
- **Result**: 720 lines → 662 lines (8% reduction, 58 lines removed)

**Before**:
```markdown
## Tips for Choosing a Sect

### Match Playstyle to Sect Philosophy

**PvE Players**:
- **Well of Heaven**: Brotherhood, cooperative play, Tank builds
...

**Best For**: Aggressive PvP players, those who enjoy high-risk combat...
```

**After**:
```markdown
## Sect and Martial Arts Association

Each Sect provides a discount when learning its associated Martial Arts:

| Martial Art | Sect | Build Type |
|-------------|------|------------|
...
```

---

#### 5. `/home/user/where-winds-meet/README.md`
**Changes**:
- ❌ Removed outdated "Build Archetypes" reference
- ✅ Build information already documented in Martial Arts section

---

## Writing Improvements

### Removed Editorial Content

**"Best For" Sections** (13+ instances removed):
- Subjective player recommendations
- Editorial commentary on playstyles
- Not factual game information

**"Assumed" Content** (50+ lines removed):
- Unconfirmed features marked "(assumed)"
- Theoretical game modes and activities
- Speculative build recommendations

**Player Advice** (60+ lines removed):
- "Tips for Choosing" sections
- "Avoid if..." warnings
- Playstyle matchmaking advice

### Simplified to Direct Facts

**Before (Verbose)**:
```markdown
### 2. Co-op Mode

**Description**: Seamless cooperative multiplayer

**Features**:
- **Party Size**: Up to 4 players
- **Cross-play**: Full support across PC, PS5, and Mobile

**Best For**:
- Playing with friends
- Coordinated combat strategies
- Shared exploration
```

**After (Direct)**:
```markdown
### Co-op Mode

Team up with friends in seamless cooperative multiplayer.

**Features**:
- **Party Size**: Up to 4 players
- **Cross-Play**: Full support across PC, PS5, and Mobile
- **Cross-Progression**: Shared progress across all platforms
```

---

## Impact Summary

### Lines Removed
- **Deleted files**: 444 lines
- **Simplified files**: 125 lines
- **Total reduction**: ~569 lines of bloat removed

### Content Quality
- ❌ Removed ALL speculative "(assumed)" content
- ❌ Removed ALL "Best For" player recommendations
- ❌ Removed ALL editorial advice and tips sections
- ✅ Kept ONLY confirmed factual information
- ✅ Added Early Access notices where missing
- ✅ Simplified verbose descriptions to direct statements

### Documentation Structure
- ✅ Eliminated duplicate quest documentation
- ✅ Consolidated build information in martial-arts.md
- ✅ Removed redundant overview sections
- ✅ Added cross-references between related files

---

## Files Still Requiring Review

### High Priority
- [ ] `/game-data/gameplay/combat-system.md` - Check for verbose explanations
- [ ] `/game-data/gameplay/game-mechanics.md` - Check for assumptions
- [ ] `/game-data/characters/character-creation.md` - Check for editorial content

### Medium Priority
- [ ] All remaining `/game-data/gameplay/*.md` files
- [ ] All `/game-data/progression/*.md` files
- [ ] All `/game-data/items/*.md` files

### Low Priority
- [ ] `/game-data/locations/world-map.md`
- [ ] `/game-data/technical/*.md` files

---

## Principles Established

### Writing Style Guide

1. **State facts directly** - No editorial commentary
2. **Remove player recommendations** - No "Best For" sections
3. **Eliminate speculation** - No "(assumed)" or "TBD" placeholder content
4. **Simplify structure** - Reduce redundant "Purpose", "Description", "Characteristics" patterns
5. **Add Early Access notices** - Acknowledge game is in development
6. **Cross-reference related content** - Link to other relevant files
7. **Fact-based only** - Companion app should show confirmed information

### Content Organization

1. **No duplication** - One source of truth per topic
2. **Logical placement** - Files in correct directories
3. **Clear hierarchy** - Related content grouped appropriately
4. **Confirmed data only** - Remove all theoretical/speculative sections

---

## Next Steps

1. **Continue systematic review** of remaining 25+ files
2. **Add Early Access notices** to all files missing them
3. **Check for bidirectional cross-references** (e.g., Sects ↔ Martial Arts)
4. **Verify all claims** - Ensure content is confirmed from wiki sources
5. **Final consistency pass** - Standardize heading levels, formatting

---

## Commits Made

1. `70c4e81` - Remove duplicate quests-and-activities.md file
2. `e3f0936` - Simplify game-modes.md: remove assumptions and editorial content
3. `96e7814` - Simplify sects.md: remove editorial content and player advice
4. `83cb3df` - Remove outdated builds-and-playstyles.md file
5. `0139fc6` - Update README: remove outdated Build Archetypes reference

---

**Total Cleanup**: 5 commits, 2 files deleted, 3 files simplified, 569+ lines of bloat removed
