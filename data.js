import * as vari from './cost_variables';
export const data = [
  {
    Month: 'January',
    Money: [
      {
        Bornehave: vari.BORNEHAVE_OLIVER_WITH_VALTER_COST,
        Vuggestue: vari.VUGGESTUE_VALTER_COST,
        Ejendommenskat: vari.EJENDOMMENSKAT_COST,
        Bornepenge: vari.BORNEPENGE,
        CleverReturn: vari.CLEVER_RETURN,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'February',
    Money: [
      {
        Bornehave: vari.BORNEHAVE_OLIVER_WITH_VALTER_COST,
        Vuggestue: vari.VUGGESTUE_VALTER_COST,
        Vandværk: vari.VANDVÆRK_COST,
        Varmeværk: vari.VARMEVÆRK_COST,
        CleverReturn: vari.CLEVER_RETURN,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'March',
    Money: [
      {
        Bornehave: vari.BORNEHAVE_OLIVER_WITH_VALTER_COST,
        Vuggestue: vari.BORNEHAVE_VALTER_COST,
        //Spildevand: -4000, // year 2019
        // Spildevand: vari.SPILDEVAND_COST,
        Spildevand: -4692, // actual cost : 23-02-2023
        Renovation: vari.RENOVATION_COST,
        // Electricity: vari.EL_COST,
        Electricity: -3766, // actual cost : 23-02-2023
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'April',
    Money: [
      {
        Bornehave: vari.SFO_OLIVER_COST,
        Vuggestue: vari.BORNEHAVE_VALTER_COST,
        Bornepenge: vari.BORNEPENGE,
        ClubActivityOliver: vari.CLUB_ACTIVITY_OLIVER_COST,
        CleverReturn: vari.CLEVER_RETURN,
        Electricity: vari.EL_COST,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'May',
    Money: [
      {
        Bornehave: vari.SFO_OLIVER_COST,
        Vuggestue: vari.BORNEHAVE_VALTER_COST,
        Varmeværk: vari.VARMEVÆRK_COST,
        CleverReturn: vari.CLEVER_RETURN,
        Electricity: vari.EL_COST,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'June',
    Money: [
      {
        Bornehave: vari.SFO_OLIVER_COST,
        Vuggestue: vari.BORNEHAVE_VALTER_COST,
        Electricity: vari.EL_COST,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'July',
    Money: [
      {
        Ejendommenskat: vari.EJENDOMMENSKAT_COST,
        Bornepenge: vari.BORNEPENGE,
        CleverReturn: vari.CLEVER_RETURN,
        Electricity: vari.EL_COST,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'August',
    Money: [
      {
        Bornehave: vari.SFO_OLIVER_COST,
        Vuggestue: vari.BORNEHAVE_VALTER_COST,
        Vandværk: vari.VANDVÆRK_COST,
        Varmeværk: vari.VARMEVÆRK_COST,
        CleverReturn: vari.CLEVER_RETURN,
        Electricity: vari.EL_COST,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'September',
    Money: [
      {
        Bornehave: vari.SFO_OLIVER_COST,
        Vuggestue: vari.BORNEHAVE_VALTER_COST,
        Spildevand: vari.SPILDEVAND_COST,
        Renovation: vari.RENOVATION_COST,
        Electricity: vari.EL_COST,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'October',
    Money: [
      {
        Bornehave: vari.SFO_OLIVER_COST,
        Vuggestue: vari.BORNEHAVE_VALTER_COST,
        Bornepenge: vari.BORNEPENGE,
        ClubActivityOliver: vari.CLUB_ACTIVITY_OLIVER_COST,
        ClubActivityValter: vari.CLUB_ACTIVITY_VALTER_COST,
        CleverReturn: vari.CLEVER_RETURN,
        Electricity: vari.EL_COST,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'November',
    Money: [
      {
        Bornehave: vari.SFO_OLIVER_COST,
        Vuggestue: vari.BORNEHAVE_VALTER_COST,
        Varmeværk: vari.VARMEVÆRK_COST,
        CleverReturn: vari.CLEVER_RETURN,
        Electricity: vari.EL_COST,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'December',
    Money: [
      {
        Bornehave: vari.SFO_OLIVER_COST,
        Vuggestue: vari.BORNEHAVE_VALTER_COST,
        Electricity: vari.EL_COST,
        ElCarFuel: vari.EL_CAR_EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
];
// TODO: add actual costs field for things like electricity or waste waters..
