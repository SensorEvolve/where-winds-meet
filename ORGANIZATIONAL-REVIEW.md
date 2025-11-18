# Organizational Review - Documentation Cleanup

**Date**: 2025-11-18
**Purpose**: Identify organizational issues, duplicate content, and verbose writing to streamline documentation

---

## Issues Identified

### 1. Duplicate/Overlapping Content

#### Quest Documentation (HIGH PRIORITY)
**Problem**: Two files covering quests with overlapping content

- **File 1**: `/game-data/progression/quests-and-activities.md` (271 lines)
  - Generic theoretical overview of quest types
  - Mostly "Assumed" content (not confirmed)
  - Activities section (dungeons, world bosses, arenas)

- **File 2**: `/game-data/gameplay/quests.md` (580 lines)
  - Actual quest catalog with real quest names
  - Confirmed data from wiki
  - Quest categories overview (overlaps with File 1)

**Solution Options**:
- **Option A**: Delete `progression/quests-and-activities.md` entirely (it's mostly assumptions)
- **Option B**: Merge confirmed overview sections into `gameplay/quests.md`, delete old file
- **Option C**: Keep both but clearly separate: generic system overview vs actual quest catalog

**Recommendation**: **Option A** - Delete `progression/quests-and-activities.md`
- Most content is "Assumed" and not confirmed
- Actual quest data is already in `gameplay/quests.md`
- Activities (dungeons, bosses) are documented elsewhere

---

### 2. Files in Wrong Sections

#### Sects (MEDIUM PRIORITY)
**Current Location**: `/game-data/gameplay/sects.md`

**Issue**: Sects are faction membership organizations, closely tied to Factions system

**Better Location**: `/game-data/core/sects.md`
- Sects are permanent character choices (like factions)
- Directly related to `/game-data/core/factions.md`
- More of a "core identity" than a "gameplay mechanic"

**Counterargument**: Sects DO have gameplay mechanics (reputation, commands, shops)
**Decision**: Keep in `/game-data/gameplay/` for now - mechanics outweigh lore

---

#### Special Abilities (LOW PRIORITY)
**Current Location**: `/game-data/gameplay/special-abilities.md`

**Issue**: Contains Touch of Death, Windsense, Insight - these are character abilities

**Better Location**: `/game-data/progression/special-abilities.md`
- These are unlockable character abilities (progression)
- Similar to Qigong Techniques (which are in Mystic Skills)

**Decision**: Could move to `/progression/` but LOW priority - current location is acceptable

---

### 3. Verbose and Indirect Writing

#### "Best For" Sections (EVERYWHERE)
**Problem**: Many files include "Best For" player type descriptions

**Examples**:
```markdown
**Best For**:
- Players who prefer story immersion
- Solo gamers
- Those who want to experience lore deeply
```

**Issue**: This is editorial commentary, not factual game information
**Solution**: Remove "Best For" sections, keep only facts

---

#### "Assumed" Content (MAJOR ISSUE)
**Problem**: Many files contain large sections marked "(Assumed)" with unconfirmed info

**Examples**:
- `game-modes.md`: "Guild/Clan systems (assumed)", "World bosses (assumed)"
- `quests-and-activities.md`: Entire quest type sections marked "Assumed"

**Issue**: Companion app should only show confirmed information
**Solution**:
- Remove all "(Assumed)" content
- Create separate "PENDING.md" file for unconfirmed features if needed
- Or clearly mark entire sections as "Not Yet Documented"

---

#### Repetitive Structure
**Problem**: Every section follows same verbose pattern:
1. Purpose
2. Description
3. Characteristics
4. Features
5. Rewards
6. Best For

**Solution**: Simplify to:
1. **What it is** (1-2 sentences)
2. **Key facts** (bullet points)
3. **Rewards/Benefits** (if applicable)

---

### 4. Inconsistent Formatting

#### Early Access Notes
**Current State**: Some files have "Early Access Note" warnings, some don't

**Solution**: Add standardized Early Access notice to ALL files or REMOVE from all files
**Recommendation**: Keep Early Access notices, ensure all files have them

---

#### Cross-References
**Current State**: Some files reference other files, many don't

**Example**:
- Sects references Martial Arts, Factions, Careers
- Martial Arts doesn't reference Sects

**Solution**: Ensure bidirectional cross-references where relevant

---

## Recommended Actions

### Phase 1: Remove Bloat (IMMEDIATE)

1. **Delete `progression/quests-and-activities.md`**
   - Content is 80% assumptions
   - Real data is in `gameplay/quests.md`

2. **Remove all "(Assumed)" sections** from remaining files
   - `game-modes.md`: Remove assumed PvP, guild content
   - `quests-and-activities.md`: Already being deleted

3. **Remove "Best For" sections** from all files
   - `game-modes.md`
   - `builds-and-playstyles.md`
   - Any other files with player recommendations

---

### Phase 2: Simplify Writing (NEXT)

4. **Rewrite verbose sections** to be direct and factual
   - Combat system explanations
   - Game mode descriptions
   - Quest category overviews

5. **Consolidate repetitive structures**
   - Remove "Purpose" + "Description" redundancy
   - Combine "Characteristics" and "Features"

---

### Phase 3: Standardize (FINAL)

6. **Add Early Access notices** to all files
7. **Add cross-references** where missing
8. **Consistent heading levels** across all files

---

## File-by-File Analysis

### Core (`/game-data/core/`)

| File | Status | Issues | Actions |
|------|--------|--------|---------|
| `game-overview.md` | ✅ Good | None - clean and direct | None |
| `story-and-lore.md` | ❓ Review | Not checked yet | Review for verbosity |
| `factions.md` | ✅ Good | Comprehensive, well-organized | None |

---

### Gameplay (`/game-data/gameplay/`)

| File | Status | Issues | Actions |
|------|--------|--------|---------|
| `game-modes.md` | ⚠️ Needs work | "Assumed" content, "Best For" sections | Remove assumptions, simplify |
| `quests.md` | ✅ Good | Well-organized catalog | None |
| `combat-system.md` | ❓ Review | Not checked yet | Review for verbosity |
| `game-mechanics.md` | ❓ Review | Not checked yet | Review for verbosity |
| `crafting.md` | ❓ Review | Not checked yet | Review for verbosity |
| `skill-theft.md` | ❓ Review | Not checked yet | Review for verbosity |
| `player-housing.md` | ❓ Review | Not checked yet | Review for verbosity |
| `mounts.md` | ❓ Review | Not checked yet | Review for verbosity |
| `jianghu-friends.md` | ❓ Review | Not checked yet | Review for verbosity |
| `enemies.md` | ❓ Review | Not checked yet | Review for verbosity |
| `bosses.md` | ❓ Review | Not checked yet | Review for verbosity |
| `exploration-features.md` | ❓ Review | Not checked yet | Review for verbosity |
| `sects.md` | ⚠️ Needs work | Verbose explanations, "Best For" sections | Simplify, remove recommendations |
| `special-abilities.md` | ❓ Review | Not checked yet | Review for verbosity |

---

### Characters (`/game-data/characters/`)

| File | Status | Issues | Actions |
|------|--------|--------|---------|
| `character-creation.md` | ❓ Review | Not checked yet | Review |
| `attributes-and-stats.md` | ❓ Review | Not checked yet | Review |
| `builds-and-playstyles.md` | ⚠️ Likely verbose | Probably has "Best For" sections | Review and simplify |

---

### Items (`/game-data/items/`)

| File | Status | Issues | Actions |
|------|--------|--------|---------|
| `weapons.md` | ❓ Review | Not checked yet | Review |
| `equipment-and-gear.md` | ❓ Review | Not checked yet | Review |
| `items-and-materials.md` | ❓ Review | Not checked yet | Review |

---

### Progression (`/game-data/progression/`)

| File | Status | Issues | Actions |
|------|--------|--------|---------|
| `martial-arts.md` | ❓ Review | Not checked yet | Review |
| `mystic-skills.md` | ❓ Review | Not checked yet | Review |
| `inner-ways.md` | ❓ Review | Not checked yet | Review |
| `exploration-skills.md` | ❓ Review | Not checked yet | Review |
| `quests-and-activities.md` | ❌ DELETE | Duplicate + mostly assumed content | **DELETE FILE** |

---

### Locations (`/game-data/locations/`)

| File | Status | Issues | Actions |
|------|--------|--------|---------|
| `world-map.md` | ❓ Review | Not checked yet | Review |

---

### Technical (`/game-data/technical/`)

| File | Status | Issues | Actions |
|------|--------|--------|---------|
| `platforms-and-requirements.md` | ❓ Review | Not checked yet | Review |
| `monetization.md` | ❓ Review | Not checked yet | Review |

---

## Summary

**Total Files**: 31 markdown files
**Reviewed**: 4 files
**Issues Found**:
- 1 duplicate file to delete
- 2+ files with verbose "Best For" sections
- Multiple files with "(Assumed)" content to remove

**Next Steps**:
1. Delete `progression/quests-and-activities.md`
2. Review remaining 27 files systematically
3. Remove assumptions and "Best For" sections
4. Simplify writing to be direct and factual
5. Commit improvements incrementally

---

## Writing Style Guide

### Before (Verbose)
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

### After (Direct)
```markdown
### Co-op Mode

Team up with up to 4 players in seamless cooperative multiplayer. Full cross-play support across PC, PS5, and Mobile.

**Features**:
- Party size: 4 players
- Cross-play: All platforms
- Cross-progression: Shared progress
```

---

**Principle**: State facts directly. Remove editorial commentary. Eliminate redundancy.
