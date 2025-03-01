// OUTCOME
const // DAGINSTITUTION COSTS
  // VUGGESTUE_VALTER_COST = -4562, //+700 2023-Madordering
  BORNEHAVE_VALTER_COST = -3521, // Since 2024-04 3455
  //BORNEHAVE_OLIVER_COST = -2471,
  CLUB_ACTIVITY_OLIVER_COST = -1100,
  CLUB_ACTIVITY_VALTER_COST = -500,
  // BORNEHAVE_OLIVER_WITH_VALTER_COST = -1597, //+250 2023-Madordering
  SFO_OLIVER_COST = -1117, // 1075 since 2024-04
  // HOUSE COSTS
  EJENDOMMENSKAT_COST = -3918, // -3150 2020 // -4020 2023 // was twice prY -1806
  VANDVÆRK_COST = -1190, // -1450 2023
  VARMEVÆRK_COST = -3670, // was 920 every month // 5800kr new price from 2023 // later -3872 // -3070 2025
  SPILDEVAND_COST = -4100, // -3287 year 2021/1 // -2507 2023 // -3256 2025
  // RENOVATION_COST = -470,
  EL_COST = -1800; // -400: before 31-07-2023 // from 09/2024 including also clever
// EL_CAR_EL_COST = -1200; // -1500:  before 31-5-2023

const // INCOME
  BORNEPENGE = 4168 + 4168, // 9258,
  // CLEVER_RETURN = 600,
  // BORNEPENGE_OLIVER_AFTER_3 = 8295,
  // MONTHLY INFLOW SUM
  TOBUFFER = 9320; // 4350 // 3960 // 7400 // 8680 // 9320 - (4k more for buffer - bc need only 5320)

/* 
  CHANGE LOG:
  -----------------------
  DATE: 24-11-2022:
  EL CALCULATIONS:
    575 + 368 + 376 = 1319kwh * 4.6kr = 6068kr (total clever used over 3 months)
    11483 - 6068 = 5415kr (total el usage minus clever)
  - Changed TOBUFFER from 7400 to 8680
*/

/**
 * DATE: 01-03-2025
 * - Ejendommenskat has moved from Jan to Mar
 * - Vandværk has moved from Feb to Mar
 * - Spildevand increasing price to min 4100kr
 * - VARMEVÆRK_COST increasing price to min 3670kr
 * - SFO_OLIVER_COST increasing price to min 1117kr
 * - BORNEHAVE_VALTER_COST increasing price to min 3521kr
 * - Ejendommenskat will be payable only once a year - Mar // 3918kr
 * - Renovation is removed - hasn't been there for more than a year
 */

export {
  VUGGESTUE_VALTER_COST,
  BORNEHAVE_VALTER_COST,
  BORNEHAVE_OLIVER_WITH_VALTER_COST,
  SFO_OLIVER_COST,
  CLUB_ACTIVITY_OLIVER_COST,
  CLUB_ACTIVITY_VALTER_COST,
  EJENDOMMENSKAT_COST,
  VANDVÆRK_COST,
  VARMEVÆRK_COST,
  SPILDEVAND_COST,
  RENOVATION_COST,
  EL_COST,
  EL_CAR_EL_COST,
  BORNEPENGE,
  TOBUFFER,
  CLEVER_RETURN,
};

// TODO: Need to track EL and clever usage to better plan the budget
