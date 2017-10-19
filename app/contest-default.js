/**
 * A default contest to help empty data with things are updated.
 */

/* global _ */
'use strict';

export default contest => {
  return _.extend(
    {
      id: undefined,
      type: undefined,
      election: undefined,
      candidates: [],
      special: false,
      district: undefined,
      contest: undefined,
      name: undefined,
      area: undefined,
      subArea: undefined,
      seatName: undefined,
      sort: undefined,
      metro: false,
      twinCities: false,
      groups: undefined,
      state: undefined,
      local: undefined,
      school: undefined,
      precinct: undefined,
      hospital: undefined,
      countyCommissioner: undefined,
      water: undefined,
      stateHouse: undefined,
      stateSenate: undefined,
      congress: undefined,
      county: undefined,
      seats: undefined,
      uncontested: undefined,
      called: false,
      final: false,
      nonpartisan: undefined,
      question: false,
      questionTitle: undefined,
      questionText: undefined,
      ranked: false,
      maxChoice: undefined,
      precincts: undefined,
      totalPrecincts: undefined,
      totalVotes: undefined,
      close: undefined,
      updated: undefined,
      note: undefined
    },
    contest
  );
};
