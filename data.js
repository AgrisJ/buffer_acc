import * as vari from './cost_variables';
export const data = [
  {
    Month: 'January',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        // Ejendommenskat: vari.EJENDOMMENSKAT_COST,
        Bornepenge: vari.BORNEPENGE,
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'February',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        // Vandværk: vari.VANDVÆRK_COST,
        Varmeværk: vari.VARMEVÆRK_COST, // actual 3670 at 2025
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'March',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        //Spildevand: -4000, // year 2019
        Spildevand: vari.SPILDEVAND_COST,
        // Spildevand: -4999, // actual cost : 01-03-2025
        // Spildevand: -4692, // actual cost : 23-02-2023
        Ejendommenskat: vari.EJENDOMMENSKAT_COST, // from Feb to March at 2025 // -3918 actual cost : 01-03-2025
        // Renovation: vari.RENOVATION_COST,
        Electricity: vari.EL_COST,
        // Electricity: -3766, // actual cost : 23-02-2023
        Vandværk: vari.VANDVÆRK_COST, // from Feb to March at 2025 // actual 1530 at 2025
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'April',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        Bornepenge: vari.BORNEPENGE,
        ClubActivityOliver: vari.CLUB_ACTIVITY_OLIVER_COST,
        ClubActivityValter: vari.CLUB_ACTIVITY_VALTER_COST,
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'May',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        Varmeværk: vari.VARMEVÆRK_COST,
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'June',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'July',
    Money: [
      {
        // Ejendommenskat: vari.EJENDOMMENSKAT_COST,
        Bornepenge: vari.BORNEPENGE,
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'August',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        Vandværk: vari.VANDVÆRK_COST,
        Varmeværk: vari.VARMEVÆRK_COST,
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'September',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        ClubActivityOliver: vari.CLUB_ACTIVITY_OLIVER_COST,
        ClubActivityValter: vari.CLUB_ACTIVITY_VALTER_COST,
        Spildevand: vari.SPILDEVAND_COST,
        // Renovation: vari.RENOVATION_COST,
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'October',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        Bornepenge: vari.BORNEPENGE,
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'November',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        Varmeværk: vari.VARMEVÆRK_COST,
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
  {
    Month: 'December',
    Money: [
      {
        SFO: vari.SFO_OLIVER_COST,
        Bornehave: vari.BORNEHAVE_VALTER_COST,
        Electricity: vari.EL_COST,
        FromFood: vari.TOBUFFER,
      },
    ],
  },
];
// TODO: add actual costs field for things like electricity or waste waters..
