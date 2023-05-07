const locations = {
  Colombo: {
    availableLocations: [],
    distances: {
      Gampaha: 34.8,
      Kalutara: 44,
      Kandy: 122,
      Matale: 152,
      "Nuwara Eliya": 171,
      Galle: 147,
      Matara: 177,
      Hambantota: 259,
      Jaffna: 404,
      Kilinochci: 345,
      Mannar: 327,
      Vavuniya: 266,
      Mullaitivu: 341,
      Batticaloa: 323,
      Ampara: 345,
      Trncomalee: 266,
      Kurunegala: 101,
      Puttalam: 136,
      Anuradhapura: 201,
      Polonnaruwa: 231,
      Badulla: 231,
      Moneragala: 288,
      Ratnapura: 83.8,
      Kegalle: 84.8,
    },
  },
  Gampaha: {
    availableLocations: [],
    distances: {
      Colombo: 34.8,
      Kalutara: 65.4,
      Kandy: 90.3,
      Matale: 119,
      "Nuwara Eliya": 139,
      Galle: 135,
      Matara: 166,
      Hambantota: 248,
      Jaffna: 369,
      Kilinochci: 309,
      Mannar: 291,
      Vavuniya: 230,
      Mullaitivu: 305,
      Batticaloa: 287,
      Ampara: 299,
      Trncomalee: 231,
      Kurunegala: 68.5,
      Puttalam: 123,
      Anuradhapura: 170,
      Polonnaruwa: 195,
      Badulla: 205,
      Moneragala: 253,
      Ratnapura: 75.6,
      Kegalle: 52.8,
    },
  },
  Kalutara: {
    availableLocations: [],
    distances: {
      Colombo: 44,
      Gampaha: 65.4,
      Kandy: 153,
      Matale: 183,
      "Nuwara Eliya": 189,
      Galle: 81.3,
      Matara: 112,
      Hambantota: 194,
      Jaffna: 432,
      Kilinochci: 373,
      Mannar: 354,
      Vavuniya: 294,
      Mullaitivu: 368,
      Batticaloa: 350,
      Ampara: 340,
      Trncomalee: 294,
      Kurunegala: 132,
      Puttalam: 186,
      Anuradhapura: 236,
      Polonnaruwa: 259,
      Badulla: 201,
      Moneragala: 273,
      Ratnapura: 75,
      Kegalle: 116,
    },
  },
  Kandy: {
    availableLocations: [],
    distances: {
      Colombo: 122,
      Gampaha: 90.3,
      Kalutara: 153,
      Matale: 25.2,
      "Nuwara Eliya": 76.2,
      Galle: 223,
      Matara: 252,
      Hambantota: 244,
      Jaffna: 317,
      Kilinochci: 257,
      Mannar: 239,
      Vavuniya: 178,
      Mullaitivu: 253,
      Batticaloa: 208,
      Ampara: 191,
      Trncomalee: 179,
      Kurunegala: 43,
      Puttalam: 130,
      Anuradhapura: 137,
      Polonnaruwa: 137,
      Badulla: 115,
      Moneragala: 152,
      Ratnapura: 120,
      Kegalle: 37,
    },
  },
  Matale: {
    availableLocations: [],
    distances: {
      Colombo: 152,
      Gampaha: 119,
      Kalutara: 183,
      Kandy: 25.2,
      "Nuwara Eliya": 100,
      Galle: 251,
      Matara: 282,
      Hambantota: 265,
      Jaffna: 292,
      Kilinochci: 233,
      Mannar: 214,
      Vavuniya: 154,
      Mullaitivu: 228,
      Batticaloa: 204,
      Ampara: 214,
      Trncomalee: 154,
      Kurunegala: 52,
      Puttalam: 138,
      Anuradhapura: 112,
      Polonnaruwa: 112,
      Badulla: 136,
      Moneragala: 170,
      Ratnapura: 144,
      Kegalle: 61.5,
    },
  },
  "Nuwara Eliya": {
    availableLocations: [],
    distances: {
      Colombo: 171,
      Gampaha: 139,
      Kalutara: 189,
      Kandy: 76.2,
      Matale: 100,
      Galle: 251,
      Matara: 223,
      Hambantota: 162,
      Jaffna: 409,
      Kilinochci: 349,
      Mannar: 331,
      Vavuniya: 270,
      Mullaitivu: 374,
      Batticaloa: 201,
      Ampara: 186,
      Trncomalee: 271,
      Kurunegala: 119,
      Puttalam: 224,
      Anuradhapura: 229,
      Polonnaruwa: 182,
      Badulla: 60,
      Moneragala: 117,
      Ratnapura: 143,
      Kegalle: 100,
    },
  },
  Galle: {
    city: "Galle",
    availableLocations: [
      "Unawatuna Beach",
      "Galle Fort",
      "Jungle Beach",
      "Mihiripenna Beach",
      "Japanese Peace Pagoda",
    ],
    distances: {
      Colombo: 147,
      Gampaha: 135,
      Kalutara: 82,
      Kandy: 223,
      Matale: 251,
      Nuwara_Eliya: 251,
      Galle: 0,
      Matara: 48,
      Hambantota: 130,
      Jaffna: 502,
      Kilinochchi: 442,
      Mannar: 424,
      Vavuniya: 363,
      Mullaitivu: 438,
      Batticaloa: 348,
      Ampara: 300,
      Trincomalee: 364,
      Kurunegala: 201,
      Puttalam: 255,
      Anuradhapura: 310,
      Polonnaruwa: 328,
      Badulla: 220,
      Moneragala: 209,
      Ratnapura: 142,
      Kegalle: 185,
    },
  },
  Matara: {
    availableLocations: [
      "Parey Dewa Buddhist Temple",
      "Weherahena Buddhist Temple",
      "Dondra Head Lighthouse",
      "Polhena Beach",
      "Mirissa Beach",
    ],
    distances: {
      Colombo: 177,
      Gampaha: 166,
      Kalutara: 112,
      Kandy: 252,
      Matale: 282,
      "Nuwara Eliya": 223,
      Galle: 48.1,
      Hambantota: 130,
      Jaffna: 502,
      Kilinochci: 442,
      Mannar: 424,
      Vavuniya: 363,
      Mullaitivu: 438,
      Batticaloa: 348,
      Ampara: 300,
      Trncomalee: 364,
      Kurunegala: 201,
      Puttalam: 255,
      Anuradhapura: 310,
      Polonnaruwa: 328,
      Badulla: 220,
      Moneragala: 209,
      Ratnapura: 142,
      Kegalle: 185,
    },
  },
  Hambantota: {
    availableLocations: [
      "Parey Dewa Buddhist Temple",
      "Weherahena Buddhist Temple",
      "Dondra Head Lighthouse",
      "Polhena Beach",
      "Mirissa Beach",
    ],
    distances: {
      Colombo: 259,
      Gampaha: 248,
      Kalutara: 194,
      Kandy: 244,
      Matale: 265,
      "Nuwara Eliya": 162,
      Galle: 130,
      Matara: 130,
      Jaffna: 524,
      Kilinochci: 464,
      Mannar: 446,
      Vavuniya: 378,
      Mullaitivu: 460,
      Batticaloa: 255,
      Ampara: 207,
      Trncomalee: 360,
      Kurunegala: 314,
      Puttalam: 334,
      Anuradhapura: 337,
      Polonnaruwa: 268,
      Badulla: 130,
      Moneragala: 119,
      Ratnapura: 127,
      Kegalle: 216,
    },
  },
  Jaffna: {
    availableLocations: [],
    distances: {
      Colombo: 404,
      Gampaha: 369,
      Kalutara: 432,
      Kandy: 317,
      Matale: 292,
      "Nuwara Eliya": 409,
      Galle: 502,
      Matara: 502,
      Hambantota: 524,
      Kilinochci: 66,
      Mannar: 116,
      Vavuniya: 138,
      Mullaitivu: 114,
      Batticaloa: 365,
      Ampara: 416,
      Trncomalee: 232,
      Kurunegala: 300,
      Puttalam: 269,
      Anuradhapura: 196,
      Polonnaruwa: 285,
      Badulla: 387,
      Moneragala: 412,
      Ratnapura: 418,
      Kegalle: 334,
    },
  },
  Kilinochchi: {
    availableLocations: [],
    distances: {
      Colombo: 345,
      Gampaha: 309,
      Kalutara: 373,
      Kandy: 257,
      Matale: 233,
      "Nuwara Eliya": 349,
      Galle: 442,
      Matara: 442,
      Hambantota: 464,
      Jaffna: 66,
      Mannar: 95.4,
      Vavuniya: 79.1,
      Mullaitivu: 62.4,
      Batticaloa: 305,
      Ampara: 372,
      Trncomalee: 173,
      Kurunegala: 241,
      Puttalam: 209,
      Anuradhapura: 136,
      Polonnaruwa: 226,
      Badulla: 328,
      Moneragala: 353,
      Ratnapura: 358,
      Kegalle: 275,
    },
  },
  Mannar: {
    availableLocations: [],
    distances: {
      Colombo: 327,
      Gampaha: 291,
      Kalutara: 354,
      Kandy: 239,
      Matale: 214,
      "Nuwara Eliya": 331,
      Galle: 424,
      Matara: 424,
      Hambantota: 446,
      Jaffna: 116,
      Kilinochci: 95.4,
      Vavuniya: 80.5,
      Mullaitivu: 138,
      Batticaloa: 300,
      Ampara: 338,
      Trncomalee: 175,
      Kurunegala: 223,
      Puttalam: 179,
      Anuradhapura: 118,
      Polonnaruwa: 208,
      Badulla: 309,
      Moneragala: 334,
      Ratnapura: 334,
      Kegalle: 257,
    },
  },
  Vavuniya: {
    availableLocations: [],
    distances: {
      Colombo: 266,
      Gampaha: 230,
      Kalutara: 294,
      Kandy: 178,
      Matale: 154,
      "Nuwara Eliya": 270,
      Galle: 363,
      Matara: 363,
      Hambantota: 378,
      Jaffna: 138,
      Kilinochci: 79.1,
      Mannar: 80.5,
      Mullaitivu: 75,
      Batticaloa: 227,
      Ampara: 277,
      Trncomalee: 95,
      Kurunegala: 162,
      Puttalam: 130,
      Anuradhapura: 58,
      Polonnaruwa: 147,
      Badulla: 249,
      Moneragala: 274,
      Ratnapura: 279,
      Kegalle: 196,
    },
  },
  Mullaitivu: {
    availableLocations: [],
    distances: {
      Colombo: 341,
      Gampaha: 305,
      Kalutara: 368,
      Kandy: 253,
      Matale: 228,
      "Nuwara Eliya": 374,
      Galle: 438,
      Matara: 438,
      Hambantota: 460,
      Jaffna: 114,
      Kilinochci: 62.4,
      Mannar: 138,
      Vavuniya: 75,
      Batticaloa: 257,
      Ampara: 324,
      Trncomalee: 123,
      Kurunegala: 237,
      Puttalam: 205,
      Anuradhapura: 133,
      Polonnaruwa: 222,
      Badulla: 324,
      Moneragala: 349,
      Ratnapura: 354,
      Kegalle: 271,
    },
  },
  Batticaloa: {
    availableLocations: [],
    distances: {
      Colombo: 323,
      Gampaha: 287,
      Kalutara: 350,
      Kandy: 208,
      Matale: 204,
      "Nuwara Eliya": 201,
      Galle: 348,
      Matara: 348,
      Hambantota: 255,
      Jaffna: 365,
      Kilinochci: 305,
      Mannar: 300,
      Vavuniya: 227,
      Mullaitivu: 257,
      Ampara: 66.5,
      Trncomalee: 135,
      Kurunegala: 218,
      Puttalam: 270,
      Anuradhapura: 197,
      Polonnaruwa: 93,
      Badulla: 158,
      Moneragala: 156,
      Ratnapura: 288,
      Kegalle: 223,
    },
  },
  Ampara: {
    availableLocations: [],
    distances: {
      Colombo: 345,
      Gampaha: 299,
      Kalutara: 340,
      Kandy: 191,
      Matale: 214,
      "Nuwara Eliya": 186,
      Galle: 300,
      Matara: 300,
      Hambantota: 207,
      Jaffna: 416,
      Kilinochci: 372,
      Mannar: 338,
      Vavuniya: 277,
      Mullaitivu: 324,
      Batticaloa: 66.5,
      Trncomalee: 201,
      Kurunegala: 224,
      Puttalam: 312,
      Anuradhapura: 236,
      Polonnaruwa: 131,
      Badulla: 150,
      Moneragala: 92.2,
      Ratnapura: 270,
      Kegalle: 231,
    },
  },
  Trincomalee: {
    city: "Matara",
    availableLocations: [],
    distances: {
      Colombo: 266,
      Gampaha: 231,
      Kalutara: 294,
      Kandy: 179,
      Matale: 154,
      "Nuwara Eliya": 271,
      Galle: 364,
      Matara: 364,
      Hambantota: 360,
      Jaffna: 232,
      Kilinochci: 173,
      Mannar: 175,
      Vavuniya: 95,
      Mullaitivu: 123,
      Batticaloa: 135,
      Ampara: 201,
      Kurunegala: 163,
      Puttalam: 181,
      Anuradhapura: 108,
      Polonnaruwa: 109,
      Badulla: 244,
      Moneragala: 251,
      Ratnapura: 280,
      Kegalle: 196,
    },
  },
  Kurunegala: {
    city: "Hambantota",
    availableLocations: [],
    distances: {
      Colombo: 101,
      Gampaha: 68.5,
      Kalutara: 132,
      Kandy: 43,
      Matale: 52,
      "Nuwara Eliya": 119,
      Galle: 201,
      Matara: 201,
      Hambantota: 314,
      Jaffna: 300,
      Kilinochci: 241,
      Mannar: 223,
      Vavuniya: 162,
      Mullaitivu: 237,
      Batticaloa: 218,
      Ampara: 224,
      Trncomalee: 163,
      Puttalam: 88.3,
      Anuradhapura: 109,
      Polonnaruwa: 127,
      Badulla: 155,
      Moneragala: 192,
      Ratnapura: 118,
      Kegalle: 31.4,
    },
  },
  Kurunegala: {
    city: "Hambantota",
    availableLocations: [],
    distances: {
      Colombo: 101,
      Gampaha: 68.5,
      Kalutara: 132,
      Kandy: 43,
      Matale: 52,
      "Nuwara Eliya": 119,
      Galle: 201,
      Matara: 201,
      Hambantota: 314,
      Jaffna: 300,
      Kilinochci: 241,
      Mannar: 223,
      Vavuniya: 162,
      Mullaitivu: 237,
      Batticaloa: 218,
      Ampara: 224,
      Trncomalee: 163,
      Puttalam: 88.3,
      Anuradhapura: 109,
      Polonnaruwa: 127,
      Badulla: 155,
      Moneragala: 192,
      Ratnapura: 118,
      Kegalle: 31.4,
    },
  },
  Puttalam: {
    city: "Hambantota",
    availableLocations: [],
    distances: {
      Colombo: 136,
      Gampaha: 123,
      Kalutara: 186,
      Kandy: 130,
      Matale: 138,
      "Nuwara Eliya": 224,
      Galle: 255,
      Matara: 255,
      Hambantota: 334,
      Jaffna: 269,
      Kilinochci: 209,
      Mannar: 179,
      Vavuniya: 130,
      Mullaitivu: 205,
      Batticaloa: 270,
      Ampara: 312,
      Trncomalee: 181,
      Kurunegala: 88.3,
      Anuradhapura: 75.4,
      Polonnaruwa: 181,
      Badulla: 244,
      Moneragala: 291,
      Ratnapura: 197,
      Kegalle: 119,
    },
  },
  Anuradhapura: {
    city: "Hambantota",
    availableLocations: [],
    distances: {
      Colombo: 201,
      Gampaha: 170,
      Kalutara: 236,
      Kandy: 137,
      Matale: 112,
      "Nuwara Eliya": 229,
      Galle: 310,
      Matara: 310,
      Hambantota: 337,
      Jaffna: 196,
      Kilinochci: 136,
      Mannar: 118,
      Vavuniya: 58,
      Mullaitivu: 133,
      Batticaloa: 197,
      Ampara: 236,
      Trncomalee: 108,
      Kurunegala: 109,
      Puttalam: 75.4,
      Polonnaruwa: 105,
      Badulla: 207,
      Moneragala: 233,
      Ratnapura: 218,
      Kegalle: 142,
    },
  },
  Polonnaruwa: {
    availableLocations: [],
    distances: {
      Colombo: 231,
      Gampaha: 195,
      Kalutara: 259,
      Kandy: 137,
      Matale: 112,
      "Nuwara Eliya": 182,
      Galle: 328,
      Matara: 328,
      Hambantota: 268,
      Jaffna: 285,
      Kilinochci: 226,
      Mannar: 208,
      Vavuniya: 147,
      Mullaitivu: 222,
      Batticaloa: 93,
      Ampara: 131,
      Trncomalee: 109,
      Kurunegala: 127,
      Puttalam: 181,
      Anuradhapura: 105,
      Badulla: 207,
      Moneragala: 233,
      Ratnapura: 218,
      Kegalle: 141,
    },
  },
  Badulla: {
    availableLocations: [],
    distances: {
      Colombo: 231,
      Gampaha: 205,
      Kalutara: 201,
      Kandy: 115,
      Matale: 136,
      "Nuwara Eliya": 60,
      Galle: 220,
      Matara: 220,
      Hambantota: 130,
      Jaffna: 387,
      Kilinochci: 328,
      Mannar: 309,
      Vavuniya: 249,
      Mullaitivu: 324,
      Batticaloa: 158,
      Ampara: 150,
      Trncomalee: 244,
      Kurunegala: 155,
      Puttalam: 244,
      Anuradhapura: 207,
      Polonnaruwa: 207,
      Moneragala: 61,
      Ratnapura: 131,
      Kegalle: 153,
    },
  },
  Moneragala: {
    availableLocations: [],
    distances: {
      Colombo: 288,
      Gampaha: 253,
      Kalutara: 273,
      Kandy: 152,
      Matale: 170,
      "Nuwara Eliya": 117,
      Galle: 209,
      Matara: 209,
      Hambantota: 119,
      Jaffna: 412,
      Kilinochci: 353,
      Mannar: 334,
      Vavuniya: 274,
      Mullaitivu: 349,
      Batticaloa: 156,
      Ampara: 92.2,
      Trncomalee: 251,
      Kurunegala: 192,
      Puttalam: 291,
      Anuradhapura: 233,
      Polonnaruwa: 233,
      Badulla: 61,
      Ratnapura: 178,
      Kegalle: 190,
    },
  },
  Ratnapura: {
    availableLocations: [],
    distances: {
      Colombo: 83.8,
      Gampaha: 75.6,
      Kalutara: 75,
      Kandy: 120,
      Matale: 144,
      "Nuwara Eliya": 143,
      Galle: 142,
      Matara: 142,
      Hambantota: 127,
      Jaffna: 418,
      Kilinochci: 358,
      Mannar: 334,
      Vavuniya: 279,
      Mullaitivu: 354,
      Batticaloa: 288,
      Ampara: 270,
      Trncomalee: 280,
      Kurunegala: 118,
      Puttalam: 197,
      Anuradhapura: 218,
      Polonnaruwa: 218,
      Badulla: 131,
      Moneragala: 178,
      Kegalle: 83.5,
    },
  },
  Kegalle: {
    availableLocations: [],
    distances: {
      Colombo: 84.8,
      Gampaha: 52.8,
      Kalutara: 116,
      Kandy: 37,
      Matale: 61.5,
      "Nuwara Eliya": 100,
      Galle: 185,
      Matara: 185,
      Hambantota: 216,
      Jaffna: 334,
      Kilinochci: 275,
      Mannar: 257,
      Vavuniya: 196,
      Mullaitivu: 271,
      Batticaloa: 223,
      Ampara: 231,
      Trncomalee: 196,
      Kurunegala: 31.4,
      Puttalam: 119,
      Anuradhapura: 142,
      Polonnaruwa: 141,
      Badulla: 153,
      Moneragala: 190,
      Ratnapura: 83.5,
    },
  },
};

export { locations as customTourLocations };
