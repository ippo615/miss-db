function SharkSpecimen() {}
(() => {
  let fields = [
    "sex",
    "maturity",
    "tagType",
    "preCaudalLength",
    "finLength",
    "tailLength",
    "standardLength",
    "girth",
    "tagLocation",
    "species",
    "sampleType",
    "releaseCondition",
    "hookTime",
    "soakTime",
    "depth",
    "tide",
    "salinity",
    "temperature",
    "extendedInfo",
    "action",
  ];

  let options = {
    sex: {
      male: "male",
      female: "female",
    },
    maturity: {
      youngOfYear: "youngOfYear",
      immature: "immature",
      mature: "mature",
    },
    tagType: {
      dart: "dart",
      psat: "psat",
      acoustic: "acoustic",
    },
    sampleType: {
      biopsyFinClipPectoral: "biopsyFinClipPectoral",
      biopsyFinClipPelvic: "biopsyFinClipPelvic",
      biopsyFinClipDorsal: "biopsyFinClipDorsal",
      biopsyGillSnipLeft: "biopsyGillSnipLeft",
      biopsyGillSnipRight: "biopsyGillSnipRight",
      bloodSampleTail: "bloodSampleTail",
      bloodSampleDorsalSinuses: "bloodSampleDorsalSinuses",
      biopsySkin: "biopsySkin",
      biopsyMuscle: "biopsyMuscle",
      swabAnal: "swabAnal",
      swabMouth: "swabMouth",
      swabGills: "swabGills",
      other: "other",
    },
    releaseCondition: {
      excellent: "excellent",
      good: "good",
      fair: "fair",
      poor: "poor",
      doa: "doa",
    },
    tide: {
      rising: "rising",
      falling: "falling",
      high: "high",
      low: "low",
    },
  };

  let randomChoice = function (choices) {
    return choices[Math.floor(choices.length * Math.random())];
  };
  let randomChoiceFrom = function (object) {
    return randomChoice(Object.values(object));
  };
  let randomInRange = function (min, max) {
    return min + (max - min) * Math.random();
  };
  let randomInRangeInt = function (min, max) {
    return Math.floor(randomInRange(min, max));
  };

  let createRandom = function () {
    return {
      sex: randomChoiceFrom(options.sex),
      maturity: randomChoiceFrom(options.maturity),
      tagType: randomChoiceFrom(options.tagType),
      preCaudalLength: randomInRangeInt(5, 999),
      finLength: randomInRangeInt(5, 999),
      tailLength: randomInRangeInt(5, 999),
      standardLength: randomInRangeInt(5, 999),
      girth: randomInRangeInt(5, 999),
      tagLocation: {
        lat: randomInRange(0, 180),
        lng: randomInRange(0, 360),
      },
      species: randomInRangeInt(0, 1000), // maybe i should change this to speciesId and have a different field for "species object"
      sampleType: randomChoiceFrom(options.sampleType),
      releaseCondition: randomChoiceFrom(options.releaseCondition),
      hookTime: randomInRangeInt(5, 999),
      soakTime: randomInRangeInt(5, 999),
      depth: randomInRangeInt(5, 999),
      tide: randomChoiceFrom(options.tide),
      salinity: randomInRangeInt(5, 999),
      temperature: randomInRangeInt(1, 100),
      extendedInfo: "",
    };
  };

  SharkSpecimen.fields = fields;
  SharkSpecimen.options = options;
  SharkSpecimen.createRandom = createRandom;
})();

export default SharkSpecimen;

/*
export default class SharkSpecimen {
    static fields = [
        "sex",
        "maturity",
        "tagType",
        "preCaudalLength",
        "finLength",
        "tailLength",
        "standardLength",
        "girth",
        "tagLocation",
        "species",
        "sampleType",
        "releaseCondition",
        "hookTime",
        "soakTime",
        "depth",
        "tide",
        "salinity",
        "temperature",
    ];
    static options = {
        sex: {
            male: "MALE",
            female: "FEMALE"
        },
        maturity: {
            youngOfYear: "YOUNG_OF_YEAR",
            immature: "IMMATURE",
            mature: "MATURE"
        },
        tagType: {
            dart: "DART",
            psat: "PSAT",
            acoustic: "ACOUSTIC"
        },
        sampleType: {
            genetics: "GENETICS",
            biopsy: "BIOPSY",
            blood: "BLOOD",
            mouthSwab: "MOUTH_SWAB",
            analSwab: "ANAL_SWAB"
        },
        releaseCondition: {
            excellent: "EXCELLENT",
            good: "GOOD",
            fair: "FAIR",
            poor: "POOR",
            doa: "DOA"
        },
        tide: {
            rising: "RISING",
            falling: "FALLING",
            high: "HIGH",
            low: "LOW"
        }
    };

    randomChoice(choices){
        return choices[Math.floor(choices.length * Math.random())];
    }
    randomChoiceFrom(object){
        return this.randomChoice(Object.values(object))
    }
    randomInRange(min, max){
        return min+(max-min)*Math.random()
    }
    randomInRangeInt(min, max){
        return Math.floor(randomInRange(min, max))
    }

    static createRandom(){
        return {
            sex: randomChoiceFrom(options.sex),
            maturity: randomChoiceFrom(options.maturity),
            tagType: randomChoiceFrom(options.tagType),
            preCaudalLength: randomInRangeInt(5,999),
            finLength: randomInRangeInt(5,999),
            tailLength: randomInRangeInt(5,999),
            standardLength: randomInRangeInt(5,999),
            girth: randomInRangeInt(5,999),
            tagLocation: {
                lat: randomInRange(0,180),
                lng: randomInRange(0,360),
            },
            species: 'SPECIES TO BE DETERMINED',
            sampleType: [
                randomChoiceFrom(options.sampleType)
            ],
            releaseCondition: randomChoiceFrom(options.releaseCondition),
            hookTime: randomInRangeInt(5,999),
            soakTime: randomInRangeInt(5,999),
            depth: randomInRangeInt(5,999),
            tide: randomInRangeInt(5,999),
            salinity: randomInRangeInt(5,999),
            temperature: randomInRangeInt(1,100),
        };
    }
}
*/
