# Claude Code Token Usage Report

**Generated:** 2026-01-30
**Data Source:** `~/.claude/stats-cache.json`
**First Session:** 2025-11-07

---

## API Pricing Reference (Per 1M Tokens)

| Model | Input | Output | Cache Read | Cache Write |
|-------|-------|--------|------------|-------------|
| **Claude Opus 4.5** | $15.00 | $75.00 | $1.50 (10% of input) | $18.75 (125% of input) |
| **Claude Sonnet 4.5** | $3.00 | $15.00 | $0.30 (10% of input) | $3.75 (125% of input) |

---

## All-Time Usage Summary

### Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

| Token Type | Count | Rate (per 1M) | Cost |
|------------|-------|---------------|------|
| Input | 285,701 | $3.00 | $0.86 |
| Output | 1,233,925 | $15.00 | $18.51 |
| Cache Read | 438,034,288 | $0.30 | $131.41 |
| Cache Write | 38,602,202 | $3.75 | $144.76 |
| **Subtotal** | **478,156,116** | | **$295.53** |

**Calculations:**
```
Input:       285,701 × ($3.00 / 1,000,000)    = $0.86
Output:    1,233,925 × ($15.00 / 1,000,000)   = $18.51
Cache Read: 438,034,288 × ($0.30 / 1,000,000) = $131.41
Cache Write: 38,602,202 × ($3.75 / 1,000,000) = $144.76
                                        TOTAL = $295.53
```

---

### Claude Opus 4.5 (`claude-opus-4-5-20251101`)

| Token Type | Count | Rate (per 1M) | Cost |
|------------|-------|---------------|------|
| Input | 349,009 | $15.00 | $5.24 |
| Output | 155,008 | $75.00 | $11.63 |
| Cache Read | 195,554,249 | $1.50 | $293.33 |
| Cache Write | 11,856,440 | $18.75 | $222.31 |
| **Subtotal** | **207,914,706** | | **$532.50** |

**Calculations:**
```
Input:       349,009 × ($15.00 / 1,000,000)    = $5.24
Output:      155,008 × ($75.00 / 1,000,000)    = $11.63
Cache Read: 195,554,249 × ($1.50 / 1,000,000)  = $293.33
Cache Write: 11,856,440 × ($18.75 / 1,000,000) = $222.31
                                         TOTAL = $532.50
```

---

## Total Estimated API Cost

| Model | Cost |
|-------|------|
| Sonnet 4.5 | $295.53 |
| Opus 4.5 | $532.50 |
| **GRAND TOTAL** | **$828.03** |

---

## This Week (Jan 23-30, 2026)

| Date | Model | Output Tokens |
|------|-------|---------------|
| 2026-01-23 | Opus 4.5 | 385 |
| 2026-01-26 | Opus 4.5 | 243,985 |
| 2026-01-26 | Sonnet 4.5 | 21,114 |
| 2026-01-27 | Opus 4.5 | 328 |
| 2026-01-28 | Opus 4.5 | 75,025 |

**Weekly Totals:**
- Opus 4.5: 319,723 tokens
- Sonnet 4.5: 21,114 tokens
- **Combined: 340,837 tokens**

---

## This Month (January 2026)

| Date | Opus 4.5 | Sonnet 4.5 |
|------|----------|------------|
| 2026-01-02 | - | 303 |
| 2026-01-03 | - | 21,758 |
| 2026-01-04 | - | 276 |
| 2026-01-05 | - | 147,486 |
| 2026-01-06 | - | 36,828 |
| 2026-01-07 | - | 36,025 |
| 2026-01-08 | - | 323,454 |
| 2026-01-12 | 47,142 | - |
| 2026-01-13 | 61,342 | - |
| 2026-01-14 | 70,848 | - |
| 2026-01-16 | 1,834 | - |
| 2026-01-19 | 847 | - |
| 2026-01-20 | 144 | - |
| 2026-01-21 | 2,137 | - |
| 2026-01-23 | 385 | - |
| 2026-01-26 | 243,985 | 21,114 |
| 2026-01-27 | 328 | - |
| 2026-01-28 | 75,025 | - |

**January Totals:**
- Opus 4.5: 504,017 tokens
- Sonnet 4.5: 587,244 tokens
- **Combined: 1,091,261 tokens**

---

## January 2026 - Detailed Cost Analysis

This section estimates January's full token breakdown and API costs by analyzing usage proportions.

### Methodology

The daily logs track output tokens. To estimate full costs (input, output, cache), we calculate January's share of all-time usage and apply it to the detailed token breakdown.

**All-time daily token totals:**
- Sonnet 4.5: 147,820 (Nov) + 784,562 (Dec) + 587,244 (Jan) = **1,519,626**
- Opus 4.5: 504,017 (Jan only) = **504,017**

**January proportions:**
```
Sonnet January share = 587,244 / 1,519,626 = 38.64%
Opus January share   = 504,017 / 504,017   = 100.00% (only used in January)
```

---

### Claude Sonnet 4.5 - January 2026 Estimated Breakdown

**Step 1: Calculate January's proportion of all-time usage**
```
January proportion = 587,244 / 1,519,626 = 0.3864 (38.64%)
```

**Step 2: Estimate January token counts by type**
| Token Type | All-Time Total | × 38.64% | January Estimate |
|------------|----------------|----------|------------------|
| Input | 285,701 | × 0.3864 | 110,379 |
| Output | 1,233,925 | × 0.3864 | 476,788 |
| Cache Read | 438,034,288 | × 0.3864 | 169,256,850 |
| Cache Write | 38,602,202 | × 0.3864 | 14,916,291 |

**Step 3: Calculate January costs**
```
Input:       110,379 × ($3.00 / 1,000,000)      = $0.33
Output:      476,788 × ($15.00 / 1,000,000)     = $7.15
Cache Read:  169,256,850 × ($0.30 / 1,000,000)  = $50.78
Cache Write: 14,916,291 × ($3.75 / 1,000,000)   = $55.94
─────────────────────────────────────────────────────────
SONNET JANUARY TOTAL                            = $114.20
```

| Token Type | Tokens | Rate/1M | Cost | % of Total |
|------------|--------|---------|------|------------|
| Input | 110,379 | $3.00 | $0.33 | 0.3% |
| Output | 476,788 | $15.00 | $7.15 | 6.3% |
| Cache Read | 169,256,850 | $0.30 | $50.78 | 44.5% |
| Cache Write | 14,916,291 | $3.75 | $55.94 | 49.0% |
| **TOTAL** | **184,760,308** | | **$114.20** | 100% |

---

### Claude Opus 4.5 - January 2026 Breakdown

**Note:** Opus was only used starting January 12, so 100% of Opus usage is in January.

**Step 1: January proportion**
```
January proportion = 100% (all Opus usage is in January)
```

**Step 2: January token counts (= all-time totals)**
| Token Type | All-Time = January |
|------------|-------------------|
| Input | 349,009 |
| Output | 155,008 |
| Cache Read | 195,554,249 |
| Cache Write | 11,856,440 |

**Step 3: Calculate January costs**
```
Input:       349,009 × ($15.00 / 1,000,000)     = $5.24
Output:      155,008 × ($75.00 / 1,000,000)     = $11.63
Cache Read:  195,554,249 × ($1.50 / 1,000,000)  = $293.33
Cache Write: 11,856,440 × ($18.75 / 1,000,000)  = $222.31
─────────────────────────────────────────────────────────
OPUS JANUARY TOTAL                              = $532.50
```

| Token Type | Tokens | Rate/1M | Cost | % of Total |
|------------|--------|---------|------|------------|
| Input | 349,009 | $15.00 | $5.24 | 1.0% |
| Output | 155,008 | $75.00 | $11.63 | 2.2% |
| Cache Read | 195,554,249 | $1.50 | $293.33 | 55.1% |
| Cache Write | 11,856,440 | $18.75 | $222.31 | 41.8% |
| **TOTAL** | **207,914,706** | | **$532.50** | 100% |

---

### January 2026 - Combined Summary

| Model | Input Cost | Output Cost | Cache Read | Cache Write | **Total** |
|-------|------------|-------------|------------|-------------|-----------|
| Sonnet 4.5 | $0.33 | $7.15 | $50.78 | $55.94 | **$114.20** |
| Opus 4.5 | $5.24 | $11.63 | $293.33 | $222.31 | **$532.50** |
| **COMBINED** | **$5.57** | **$18.78** | **$344.11** | **$278.25** | **$646.70** |

**Cost breakdown by category:**
```
┌─────────────────────────────────────────────────────────────┐
│ JANUARY 2026 ESTIMATED API COST: $646.70                    │
├─────────────────────────────────────────────────────────────┤
│ Cache Write  $278.25  ████████████████████████████ 43.0%    │
│ Cache Read   $344.11  ██████████████████████████████████ 53.2%│
│ Output       $18.78   ██ 2.9%                               │
│ Input        $5.57    █ 0.9%                                │
└─────────────────────────────────────────────────────────────┘
```

**Key insight:** 96.2% of January costs come from prompt caching operations. Direct input/output is only 3.8% of the total.

---

### January Daily Cost Estimates

Applying the same token-type ratios to daily usage:

| Date | Model | Tokens | Est. Cost |
|------|-------|--------|-----------|
| 2026-01-02 | Sonnet | 303 | $0.06 |
| 2026-01-03 | Sonnet | 21,758 | $4.23 |
| 2026-01-04 | Sonnet | 276 | $0.05 |
| 2026-01-05 | Sonnet | 147,486 | $28.69 |
| 2026-01-06 | Sonnet | 36,828 | $7.16 |
| 2026-01-07 | Sonnet | 36,025 | $7.01 |
| 2026-01-08 | Sonnet | 323,454 | $62.91 |
| 2026-01-12 | Opus | 47,142 | $49.75 |
| 2026-01-13 | Opus | 61,342 | $64.73 |
| 2026-01-14 | Opus | 70,848 | $74.76 |
| 2026-01-16 | Opus | 1,834 | $1.94 |
| 2026-01-19 | Opus | 847 | $0.89 |
| 2026-01-20 | Opus | 144 | $0.15 |
| 2026-01-21 | Opus | 2,137 | $2.25 |
| 2026-01-23 | Opus | 385 | $0.41 |
| 2026-01-26 | Opus | 243,985 | $257.44 |
| 2026-01-26 | Sonnet | 21,114 | $4.11 |
| 2026-01-27 | Opus | 328 | $0.35 |
| 2026-01-28 | Opus | 75,025 | $79.17 |

**Calculation method for daily estimates:**
```
Daily cost = (daily_tokens / model_total_daily_tokens) × model_total_cost

Example (Jan 26 Opus):
  = (243,985 / 504,017) × $532.50
  = 0.484 × $532.50
  = $257.44
```

**Most expensive days:**
1. Jan 26: $261.55 (Opus $257.44 + Sonnet $4.11)
2. Jan 28: $79.17 (Opus)
3. Jan 14: $74.76 (Opus)
4. Jan 13: $64.73 (Opus)
5. Jan 08: $62.91 (Sonnet)

---

## Monthly Breakdown (All Time)

### November 2025
| Model | Tokens |
|-------|--------|
| Sonnet 4.5 | 147,820 |
| **Total** | **147,820** |

### December 2025
| Model | Tokens |
|-------|--------|
| Sonnet 4.5 | 784,562 |
| **Total** | **784,562** |

### January 2026
| Model | Tokens |
|-------|--------|
| Opus 4.5 | 504,017 |
| Sonnet 4.5 | 587,244 |
| **Total** | **1,091,261** |

---

## Usage Trend

```
Nov 2025: ████████ 147K
Dec 2025: ████████████████████████████████████████ 784K
Jan 2026: ████████████████████████████████████████████████████████ 1.09M
```

**Growth:**
- Nov → Dec: +430% increase
- Dec → Jan: +39% increase

---

## Session Statistics

| Metric | Value |
|--------|-------|
| Total Sessions | 76 |
| Total Messages | 16,431 |
| Avg Messages/Session | 216 |
| First Session | 2025-11-07 |
| Longest Session | 258 messages (119.4 hours) |

### Sessions by Hour (UTC)
```
05:00  █ 1
06:00  ██ 2
07:00  ███ 3
08:00  █████ 5
09:00  ███████ 7
10:00  ██████████████ 14
11:00  ██████ 6
12:00  ███ 3
13:00  ████ 4
14:00  ██████████ 10
15:00  █████ 5
16:00  ███ 3
17:00  ██ 2
18:00  ████ 4
19:00  ███ 3
20:00  █ 1
21:00  █ 1
22:00  █ 1
23:00  █ 1
```

Peak usage hours: 10:00 and 14:00

---

## Cost Comparison

If using Claude Code with different subscription models:

| Plan | Monthly Cost | Your Equivalent API Cost |
|------|-------------|--------------------------|
| Claude Pro | $20/month | - |
| Claude Max (5x) | $100/month | - |
| Claude Max (20x) | $200/month | - |
| **API (pay-per-use)** | Variable | **~$828 total** |

**Note:** With Max subscription, you're getting significant value given your usage patterns. The $828 API equivalent spread over ~3 months averages ~$276/month in API costs.

---

## Notes

- Token counts in `dailyModelTokens` represent output tokens only
- Full breakdown (input, output, cache) is in `modelUsage`
- Cache tokens dominate your usage (97%+ of total tokens)
- Prompt caching significantly reduces costs vs. non-cached requests
- You switched from Sonnet to Opus around January 12, 2026
