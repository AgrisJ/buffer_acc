// OUTCOME
const // DAGINSTITUTION COSTS
  VUGGESTUE_VALTER_COST = -3842,
  //BORNEHAVE_OLIVER_COST = -2471,
  BORNEHAVE_OLIVER_WITH_VALTER_COST = -1377,
  // HOUSE COSTS
  EJENDOMMENSKAT_COST = -4020, // -3150 2020
  VANDVÆRK_COST = -1450,
  VARMEVÆRK_COST = -3872, // was 920 every month // 5800kr new price from 2023
  SPILDEVAND_COST = -2507, // -3287 year 2021/1
  RENOVATION_COST = -470,
  EL_COST = -5500, // -3600: before 24-11-2022
  EL_CAR_EL_COST = -1500; // -1200:  before 24-11-2022

const // INCOME
  BORNEPENGE = 4168 + 4168, // 9258,
  CLEVER_RETURN = 600,
  // BORNEPENGE_OLIVER_AFTER_3 = 8295,
  // MONTHLY INFLOW SUM
  TOBUFFER = 8680; // 4350 // 3960 // 7400

/* 
  CHANGE LOG:
  -----------------------
  DATE: 24-11-2022:
  EL CALCULATIONS:
    575 + 368 + 376 = 1319kwh * 4.6kr = 6068kr (total clever used over 3 months)
    11483 - 6068 = 5415kr (total el usage minus clever)
  - Changed TOBUFFER from 7400 to 8680
*/

export {
  VUGGESTUE_VALTER_COST,
  BORNEHAVE_OLIVER_WITH_VALTER_COST,
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
