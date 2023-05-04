const countryDetailsList = new Map(
       [
            [
                "AFG",
                {
                    "name": "Afghanistan",
                    "currencies": [
                        {
                            "code": "AFN",
                            "name": "Afghan afghani",
                            "symbol": "؋"
                        }
                    ],
                    "countryCode": "93",
                    "IOCCode": "AFG"
                }
            ],
            [
                "ALA",
                {
                    "name": "Åland Islands",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "358"
                }
            ],
            [
                "ALB",
                {
                    "name": "Albania",
                    "currencies": [
                        {
                            "code": "ALL",
                            "name": "Albanian lek",
                            "symbol": "L"
                        }
                    ],
                    "countryCode": "355",
                    "IOCCode": "ALB"
                }
            ],
            [
                "ALG",
                {
                    "name": "Algeria",
                    "currencies": [
                        {
                            "code": "DZD",
                            "name": "Algerian dinar",
                            "symbol": "د.ج"
                        }
                    ],
                    "countryCode": "213",
                    "IOCCode": "ALG"
                }
            ],
            [
                "ASA",
                {
                    "name": "American Samoa",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States Dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "ASA"
                }
            ],
            [
                "AND",
                {
                    "name": "Andorra",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "376",
                    "IOCCode": "AND"
                }
            ],
            [
                "ANG",
                {
                    "name": "Angola",
                    "currencies": [
                        {
                            "code": "AOA",
                            "name": "Angolan kwanza",
                            "symbol": "Kz"
                        }
                    ],
                    "countryCode": "244",
                    "IOCCode": "ANG"
                }
            ],
            [
                "AIA",
                {
                    "name": "Anguilla",
                    "currencies": [
                        {
                            "code": "XCD",
                            "name": "East Caribbean dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1"
                }
            ],
            [
                "ATA",
                {
                    "name": "Antarctica",
                    "countryCode": "672"
                }
            ],
            [
                "ANT",
                {
                    "name": "Antigua and Barbuda",
                    "currencies": [
                        {
                            "code": "XCD",
                            "name": "East Caribbean dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "ANT"
                }
            ],
            [
                "ARG",
                {
                    "name": "Argentina",
                    "currencies": [
                        {
                            "code": "ARS",
                            "name": "Argentine peso",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "54",
                    "IOCCode": "ARG"
                }
            ],
            [
                "ARM",
                {
                    "name": "Armenia",
                    "currencies": [
                        {
                            "code": "AMD",
                            "name": "Armenian dram",
                            "symbol": "֏"
                        }
                    ],
                    "countryCode": "374",
                    "IOCCode": "ARM"
                }
            ],
            [
                "ARU",
                {
                    "name": "Aruba",
                    "currencies": [
                        {
                            "code": "AWG",
                            "name": "Aruban florin",
                            "symbol": "ƒ"
                        }
                    ],
                    "countryCode": "297",
                    "IOCCode": "ARU"
                }
            ],
            [
                "AUS",
                {
                    "name": "Australia",
                    "currencies": [
                        {
                            "code": "AUD",
                            "name": "Australian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "61",
                    "IOCCode": "AUS"
                }
            ],
            [
                "AUT",
                {
                    "name": "Austria",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "43",
                    "IOCCode": "AUT"
                }
            ],
            [
                "AZE",
                {
                    "name": "Azerbaijan",
                    "currencies": [
                        {
                            "code": "AZN",
                            "name": "Azerbaijani manat",
                            "symbol": "₼"
                        }
                    ],
                    "countryCode": "994",
                    "IOCCode": "AZE"
                }
            ],
            [
                "BAH",
                {
                    "name": "Bahamas",
                    "currencies": [
                        {
                            "code": "BSD",
                            "name": "Bahamian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "BAH"
                }
            ],
            [
                "BRN",
                {
                    "name": "Bahrain",
                    "currencies": [
                        {
                            "code": "BHD",
                            "name": "Bahraini dinar",
                            "symbol": ".د.ب"
                        }
                    ],
                    "countryCode": "973",
                    "IOCCode": "BRN"
                }
            ],
            [
                "BAN",
                {
                    "name": "Bangladesh",
                    "currencies": [
                        {
                            "code": "BDT",
                            "name": "Bangladeshi taka",
                            "symbol": "৳"
                        }
                    ],
                    "countryCode": "880",
                    "IOCCode": "BAN"
                }
            ],
            [
                "BAR",
                {
                    "name": "Barbados",
                    "currencies": [
                        {
                            "code": "BBD",
                            "name": "Barbadian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "BAR"
                }
            ],
            [
                "BLR",
                {
                    "name": "Belarus",
                    "currencies": [
                        {
                            "code": "BYN",
                            "name": "New Belarusian ruble",
                            "symbol": "Br"
                        },
                        {
                            "code": "BYR",
                            "name": "Old Belarusian ruble",
                            "symbol": "Br"
                        }
                    ],
                    "countryCode": "375",
                    "IOCCode": "BLR"
                }
            ],
            [
                "BEL",
                {
                    "name": "Belgium",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "32",
                    "IOCCode": "BEL"
                }
            ],
            [
                "BIZ",
                {
                    "name": "Belize",
                    "currencies": [
                        {
                            "code": "BZD",
                            "name": "Belize dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "501",
                    "IOCCode": "BIZ"
                }
            ],
            [
                "BEN",
                {
                    "name": "Benin",
                    "currencies": [
                        {
                            "code": "XOF",
                            "name": "West African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "229",
                    "IOCCode": "BEN"
                }
            ],
            [
                "BER",
                {
                    "name": "Bermuda",
                    "currencies": [
                        {
                            "code": "BMD",
                            "name": "Bermudian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "BER"
                }
            ],
            [
                "BHU",
                {
                    "name": "Bhutan",
                    "currencies": [
                        {
                            "code": "BTN",
                            "name": "Bhutanese ngultrum",
                            "symbol": "Nu."
                        },
                        {
                            "code": "INR",
                            "name": "Indian rupee",
                            "symbol": "₹"
                        }
                    ],
                    "countryCode": "975",
                    "IOCCode": "BHU"
                }
            ],
            [
                "BOL",
                {
                    "name": "Bolivia (Plurinational State of)",
                    "currencies": [
                        {
                            "code": "BOB",
                            "name": "Bolivian boliviano",
                            "symbol": "Bs."
                        }
                    ],
                    "countryCode": "591",
                    "IOCCode": "BOL"
                }
            ],
            [
                "BES",
                {
                    "name": "Bonaire, Sint Eustatius and Saba",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "599"
                }
            ],
            [
                "BIH",
                {
                    "name": "Bosnia and Herzegovina",
                    "currencies": [
                        {
                            "code": "BAM",
                            "name": "Bosnia and Herzegovina convertible mark",
                            "symbol": "KM"
                        }
                    ],
                    "countryCode": "387",
                    "IOCCode": "BIH"
                }
            ],
            [
                "BOT",
                {
                    "name": "Botswana",
                    "currencies": [
                        {
                            "code": "BWP",
                            "name": "Botswana pula",
                            "symbol": "P"
                        }
                    ],
                    "countryCode": "267",
                    "IOCCode": "BOT"
                }
            ],
            [
                "BVT",
                {
                    "name": "Bouvet Island",
                    "currencies": [
                        {
                            "code": "NOK",
                            "name": "Norwegian krone",
                            "symbol": "kr"
                        }
                    ],
                    "countryCode": "47"
                }
            ],
            [
                "BRA",
                {
                    "name": "Brazil",
                    "currencies": [
                        {
                            "code": "BRL",
                            "name": "Brazilian real",
                            "symbol": "R$"
                        }
                    ],
                    "countryCode": "55",
                    "IOCCode": "BRA"
                }
            ],
            [
                "IOT",
                {
                    "name": "British Indian Ocean Territory",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "246"
                }
            ],
            [
                "UMI",
                {
                    "name": "United States Minor Outlying Islands",
                    "currencies": [
                        {
                            "code": "GBP",
                            "name": "British pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "246"
                }
            ],
            [
                "IVB",
                {
                    "name": "Virgin Islands (British)",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "IVB"
                }
            ],
            [
                "ISV",
                {
                    "name": "Virgin Islands (U.S.)",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1 340",
                    "IOCCode": "ISV"
                }
            ],
            [
                "BRU",
                {
                    "name": "Brunei Darussalam",
                    "currencies": [
                        {
                            "code": "BND",
                            "name": "Brunei dollar",
                            "symbol": "$"
                        },
                        {
                            "code": "SGD",
                            "name": "Singapore dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "673",
                    "IOCCode": "BRU"
                }
            ],
            [
                "BUL",
                {
                    "name": "Bulgaria",
                    "currencies": [
                        {
                            "code": "BGN",
                            "name": "Bulgarian lev",
                            "symbol": "лв"
                        }
                    ],
                    "countryCode": "359",
                    "IOCCode": "BUL"
                }
            ],
            [
                "BUR",
                {
                    "name": "Burkina Faso",
                    "currencies": [
                        {
                            "code": "XOF",
                            "name": "West African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "226",
                    "IOCCode": "BUR"
                }
            ],
            [
                "BDI",
                {
                    "name": "Burundi",
                    "currencies": [
                        {
                            "code": "BIF",
                            "name": "Burundian franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "257",
                    "IOCCode": "BDI"
                }
            ],
            [
                "CAM",
                {
                    "name": "Cambodia",
                    "currencies": [
                        {
                            "code": "KHR",
                            "name": "Cambodian riel",
                            "symbol": "៛"
                        },
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "855",
                    "IOCCode": "CAM"
                }
            ],
            [
                "CMR",
                {
                    "name": "Cameroon",
                    "currencies": [
                        {
                            "code": "XAF",
                            "name": "Central African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "237",
                    "IOCCode": "CMR"
                }
            ],
            [
                "CAN",
                {
                    "name": "Canada",
                    "currencies": [
                        {
                            "code": "CAD",
                            "name": "Canadian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "CAN"
                }
            ],
            [
                "CPV",
                {
                    "name": "Cabo Verde",
                    "currencies": [
                        {
                            "code": "CVE",
                            "name": "Cape Verdean escudo",
                            "symbol": "Esc"
                        }
                    ],
                    "countryCode": "238",
                    "IOCCode": "CPV"
                }
            ],
            [
                "CAY",
                {
                    "name": "Cayman Islands",
                    "currencies": [
                        {
                            "code": "KYD",
                            "name": "Cayman Islands dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "CAY"
                }
            ],
            [
                "CAF",
                {
                    "name": "Central African Republic",
                    "currencies": [
                        {
                            "code": "XAF",
                            "name": "Central African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "236",
                    "IOCCode": "CAF"
                }
            ],
            [
                "CHA",
                {
                    "name": "Chad",
                    "currencies": [
                        {
                            "code": "XAF",
                            "name": "Central African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "235",
                    "IOCCode": "CHA"
                }
            ],
            [
                "CHI",
                {
                    "name": "Chile",
                    "currencies": [
                        {
                            "code": "CLP",
                            "name": "Chilean peso",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "56",
                    "IOCCode": "CHI"
                }
            ],
            [
                "CHN",
                {
                    "name": "China",
                    "currencies": [
                        {
                            "code": "CNY",
                            "name": "Chinese yuan",
                            "symbol": "¥"
                        }
                    ],
                    "countryCode": "86",
                    "IOCCode": "CHN"
                }
            ],
            [
                "CXR",
                {
                    "name": "Christmas Island",
                    "currencies": [
                        {
                            "code": "AUD",
                            "name": "Australian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "61"
                }
            ],
            [
                "CCK",
                {
                    "name": "Cocos (Keeling) Islands",
                    "currencies": [
                        {
                            "code": "AUD",
                            "name": "Australian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "61"
                }
            ],
            [
                "COL",
                {
                    "name": "Colombia",
                    "currencies": [
                        {
                            "code": "COP",
                            "name": "Colombian peso",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "57",
                    "IOCCode": "COL"
                }
            ],
            [
                "COM",
                {
                    "name": "Comoros",
                    "currencies": [
                        {
                            "code": "KMF",
                            "name": "Comorian franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "269",
                    "IOCCode": "COM"
                }
            ],
            [
                "CGO",
                {
                    "name": "Congo",
                    "currencies": [
                        {
                            "code": "XAF",
                            "name": "Central African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "242",
                    "IOCCode": "CGO"
                }
            ],
            [
                "COD",
                {
                    "name": "Congo (Democratic Republic of the)",
                    "currencies": [
                        {
                            "code": "CDF",
                            "name": "Congolese franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "243",
                    "IOCCode": "COD"
                }
            ],
            [
                "COK",
                {
                    "name": "Cook Islands",
                    "currencies": [
                        {
                            "code": "NZD",
                            "name": "New Zealand dollar",
                            "symbol": "$"
                        },
                        {
                            "code": "CKD",
                            "name": "Cook Islands dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "682",
                    "IOCCode": "COK"
                }
            ],
            [
                "CRC",
                {
                    "name": "Costa Rica",
                    "currencies": [
                        {
                            "code": "CRC",
                            "name": "Costa Rican colón",
                            "symbol": "₡"
                        }
                    ],
                    "countryCode": "506",
                    "IOCCode": "CRC"
                }
            ],
            [
                "CRO",
                {
                    "name": "Croatia",
                    "currencies": [
                        {
                            "code": "HRK",
                            "name": "Croatian kuna",
                            "symbol": "kn"
                        }
                    ],
                    "countryCode": "385",
                    "IOCCode": "CRO"
                }
            ],
            [
                "CUB",
                {
                    "name": "Cuba",
                    "currencies": [
                        {
                            "code": "CUC",
                            "name": "Cuban convertible peso",
                            "symbol": "$"
                        },
                        {
                            "code": "CUP",
                            "name": "Cuban peso",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "53",
                    "IOCCode": "CUB"
                }
            ],
            [
                "CUW",
                {
                    "name": "Curaçao",
                    "currencies": [
                        {
                            "code": "ANG",
                            "name": "Netherlands Antillean guilder",
                            "symbol": "ƒ"
                        }
                    ],
                    "countryCode": "599"
                }
            ],
            [
                "CYP",
                {
                    "name": "Cyprus",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "357",
                    "IOCCode": "CYP"
                }
            ],
            [
                "CZE",
                {
                    "name": "Czech Republic",
                    "currencies": [
                        {
                            "code": "CZK",
                            "name": "Czech koruna",
                            "symbol": "Kč"
                        }
                    ],
                    "countryCode": "420",
                    "IOCCode": "CZE"
                }
            ],
            [
                "DEN",
                {
                    "name": "Denmark",
                    "currencies": [
                        {
                            "code": "DKK",
                            "name": "Danish krone",
                            "symbol": "kr"
                        }
                    ],
                    "countryCode": "45",
                    "IOCCode": "DEN"
                }
            ],
            [
                "DJI",
                {
                    "name": "Djibouti",
                    "currencies": [
                        {
                            "code": "DJF",
                            "name": "Djiboutian franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "253",
                    "IOCCode": "DJI"
                }
            ],
            [
                "DMA",
                {
                    "name": "Dominica",
                    "currencies": [
                        {
                            "code": "XCD",
                            "name": "East Caribbean dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "DMA"
                }
            ],
            [
                "DOM",
                {
                    "name": "Dominican Republic",
                    "currencies": [
                        {
                            "code": "DOP",
                            "name": "Dominican peso",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "DOM"
                }
            ],
            [
                "ECU",
                {
                    "name": "Ecuador",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "593",
                    "IOCCode": "ECU"
                }
            ],
            [
                "EGY",
                {
                    "name": "Egypt",
                    "currencies": [
                        {
                            "code": "EGP",
                            "name": "Egyptian pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "20",
                    "IOCCode": "EGY"
                }
            ],
            [
                "ESA",
                {
                    "name": "El Salvador",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "503",
                    "IOCCode": "ESA"
                }
            ],
            [
                "GEQ",
                {
                    "name": "Equatorial Guinea",
                    "currencies": [
                        {
                            "code": "XAF",
                            "name": "Central African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "240",
                    "IOCCode": "GEQ"
                }
            ],
            [
                "ERI",
                {
                    "name": "Eritrea",
                    "currencies": [
                        {
                            "code": "ERN",
                            "name": "Eritrean nakfa",
                            "symbol": "Nfk"
                        }
                    ],
                    "countryCode": "291",
                    "IOCCode": "ERI"
                }
            ],
            [
                "EST",
                {
                    "name": "Estonia",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "372",
                    "IOCCode": "EST"
                }
            ],
            [
                "ETH",
                {
                    "name": "Ethiopia",
                    "currencies": [
                        {
                            "code": "ETB",
                            "name": "Ethiopian birr",
                            "symbol": "Br"
                        }
                    ],
                    "countryCode": "251",
                    "IOCCode": "ETH"
                }
            ],
            [
                "FLK",
                {
                    "name": "Falkland Islands (Malvinas)",
                    "currencies": [
                        {
                            "code": "FKP",
                            "name": "Falkland Islands pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "500"
                }
            ],
            [
                "FRO",
                {
                    "name": "Faroe Islands",
                    "currencies": [
                        {
                            "code": "DKK",
                            "name": "Danish krone",
                            "symbol": "kr"
                        },
                        {
                            "code": "FOK",
                            "name": "Faroese króna",
                            "symbol": "kr"
                        }
                    ],
                    "countryCode": "298"
                }
            ],
            [
                "FIJ",
                {
                    "name": "Fiji",
                    "currencies": [
                        {
                            "code": "FJD",
                            "name": "Fijian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "679",
                    "IOCCode": "FIJ"
                }
            ],
            [
                "FIN",
                {
                    "name": "Finland",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "358",
                    "IOCCode": "FIN"
                }
            ],
            [
                "FRA",
                {
                    "name": "France",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "33",
                    "IOCCode": "FRA"
                }
            ],
            [
                "GUF",
                {
                    "name": "French Guiana",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "594"
                }
            ],
            [
                "PYF",
                {
                    "name": "French Polynesia",
                    "currencies": [
                        {
                            "code": "XPF",
                            "name": "CFP franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "689"
                }
            ],
            [
                "ATF",
                {
                    "name": "French Southern Territories",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "262"
                }
            ],
            [
                "GAB",
                {
                    "name": "Gabon",
                    "currencies": [
                        {
                            "code": "XAF",
                            "name": "Central African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "241",
                    "IOCCode": "GAB"
                }
            ],
            [
                "GAM",
                {
                    "name": "Gambia",
                    "currencies": [
                        {
                            "code": "GMD",
                            "name": "Gambian dalasi",
                            "symbol": "D"
                        }
                    ],
                    "countryCode": "220",
                    "IOCCode": "GAM"
                }
            ],
            [
                "GEO",
                {
                    "name": "Georgia",
                    "currencies": [
                        {
                            "code": "GEL",
                            "name": "Georgian Lari",
                            "symbol": "ლ"
                        }
                    ],
                    "countryCode": "995",
                    "IOCCode": "GEO"
                }
            ],
            [
                "GER",
                {
                    "name": "Germany",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "49",
                    "IOCCode": "GER"
                }
            ],
            [
                "GHA",
                {
                    "name": "Ghana",
                    "currencies": [
                        {
                            "code": "GHS",
                            "name": "Ghanaian cedi",
                            "symbol": "₵"
                        }
                    ],
                    "countryCode": "233",
                    "IOCCode": "GHA"
                }
            ],
            [
                "GIB",
                {
                    "name": "Gibraltar",
                    "currencies": [
                        {
                            "code": "GIP",
                            "name": "Gibraltar pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "350"
                }
            ],
            [
                "GRE",
                {
                    "name": "Greece",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "30",
                    "IOCCode": "GRE"
                }
            ],
            [
                "GRL",
                {
                    "name": "Greenland",
                    "currencies": [
                        {
                            "code": "DKK",
                            "name": "Danish krone",
                            "symbol": "kr"
                        }
                    ],
                    "countryCode": "299"
                }
            ],
            [
                "GRN",
                {
                    "name": "Grenada",
                    "currencies": [
                        {
                            "code": "XCD",
                            "name": "East Caribbean dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "GRN"
                }
            ],
            [
                "GLP",
                {
                    "name": "Guadeloupe",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "590"
                }
            ],
            [
                "GUM",
                {
                    "name": "Guam",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "GUM"
                }
            ],
            [
                "GUA",
                {
                    "name": "Guatemala",
                    "currencies": [
                        {
                            "code": "GTQ",
                            "name": "Guatemalan quetzal",
                            "symbol": "Q"
                        }
                    ],
                    "countryCode": "502",
                    "IOCCode": "GUA"
                }
            ],
            [
                "GGY",
                {
                    "name": "Guernsey",
                    "currencies": [
                        {
                            "code": "GBP",
                            "name": "British pound",
                            "symbol": "£"
                        },
                        {
                            "code": "GGP",
                            "name": "Guernsey pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "44"
                }
            ],
            [
                "GUI",
                {
                    "name": "Guinea",
                    "currencies": [
                        {
                            "code": "GNF",
                            "name": "Guinean franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "224",
                    "IOCCode": "GUI"
                }
            ],
            [
                "GBS",
                {
                    "name": "Guinea-Bissau",
                    "currencies": [
                        {
                            "code": "XOF",
                            "name": "West African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "245",
                    "IOCCode": "GBS"
                }
            ],
            [
                "GUY",
                {
                    "name": "Guyana",
                    "currencies": [
                        {
                            "code": "GYD",
                            "name": "Guyanese dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "592",
                    "IOCCode": "GUY"
                }
            ],
            [
                "HAI",
                {
                    "name": "Haiti",
                    "currencies": [
                        {
                            "code": "HTG",
                            "name": "Haitian gourde",
                            "symbol": "G"
                        }
                    ],
                    "countryCode": "509",
                    "IOCCode": "HAI"
                }
            ],
            [
                "HMD",
                {
                    "name": "Heard Island and McDonald Islands",
                    "currencies": [
                        {
                            "code": "AUD",
                            "name": "Australian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "672"
                }
            ],
            [
                "VAT",
                {
                    "name": "Vatican City",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "379"
                }
            ],
            [
                "HON",
                {
                    "name": "Honduras",
                    "currencies": [
                        {
                            "code": "HNL",
                            "name": "Honduran lempira",
                            "symbol": "L"
                        }
                    ],
                    "countryCode": "504",
                    "IOCCode": "HON"
                }
            ],
            [
                "HUN",
                {
                    "name": "Hungary",
                    "currencies": [
                        {
                            "code": "HUF",
                            "name": "Hungarian forint",
                            "symbol": "Ft"
                        }
                    ],
                    "countryCode": "36",
                    "IOCCode": "HUN"
                }
            ],
            [
                "HKG",
                {
                    "name": "Hong Kong",
                    "currencies": [
                        {
                            "code": "HKD",
                            "name": "Hong Kong dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "852",
                    "IOCCode": "HKG"
                }
            ],
            [
                "ISL",
                {
                    "name": "Iceland",
                    "currencies": [
                        {
                            "code": "ISK",
                            "name": "Icelandic króna",
                            "symbol": "kr"
                        }
                    ],
                    "countryCode": "354",
                    "IOCCode": "ISL"
                }
            ],
            [
                "IND",
                {
                    "name": "India",
                    "currencies": [
                        {
                            "code": "INR",
                            "name": "Indian rupee",
                            "symbol": "₹"
                        }
                    ],
                    "countryCode": "91",
                    "IOCCode": "IND"
                }
            ],
            [
                "INA",
                {
                    "name": "Indonesia",
                    "currencies": [
                        {
                            "code": "IDR",
                            "name": "Indonesian rupiah",
                            "symbol": "Rp"
                        }
                    ],
                    "countryCode": "62",
                    "IOCCode": "INA"
                }
            ],
            [
                "CIV",
                {
                    "name": "Ivory Coast",
                    "currencies": [
                        {
                            "code": "XOF",
                            "name": "West African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "225",
                    "IOCCode": "CIV"
                }
            ],
            [
                "IRI",
                {
                    "name": "Iran (Islamic Republic of)",
                    "currencies": [
                        {
                            "code": "IRR",
                            "name": "Iranian rial",
                            "symbol": "﷼"
                        }
                    ],
                    "countryCode": "98",
                    "IOCCode": "IRI"
                }
            ],
            [
                "IRQ",
                {
                    "name": "Iraq",
                    "currencies": [
                        {
                            "code": "IQD",
                            "name": "Iraqi dinar",
                            "symbol": "ع.د"
                        }
                    ],
                    "countryCode": "964",
                    "IOCCode": "IRQ"
                }
            ],
            [
                "IRL",
                {
                    "name": "Ireland",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "353",
                    "IOCCode": "IRL"
                }
            ],
            [
                "IMN",
                {
                    "name": "Isle of Man",
                    "currencies": [
                        {
                            "code": "GBP",
                            "name": "British pound",
                            "symbol": "£"
                        },
                        {
                            "code": "IMP[G]",
                            "name": "Manx pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "44"
                }
            ],
            [
                "ISR",
                {
                    "name": "Israel",
                    "currencies": [
                        {
                            "code": "ILS",
                            "name": "Israeli new shekel",
                            "symbol": "₪"
                        }
                    ],
                    "countryCode": "972",
                    "IOCCode": "ISR"
                }
            ],
            [
                "ITA",
                {
                    "name": "Italy",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "39",
                    "IOCCode": "ITA"
                }
            ],
            [
                "JAM",
                {
                    "name": "Jamaica",
                    "currencies": [
                        {
                            "code": "JMD",
                            "name": "Jamaican dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "JAM"
                }
            ],
            [
                "JPN",
                {
                    "name": "Japan",
                    "currencies": [
                        {
                            "code": "JPY",
                            "name": "Japanese yen",
                            "symbol": "¥"
                        }
                    ],
                    "countryCode": "81",
                    "IOCCode": "JPN"
                }
            ],
            [
                "JEY",
                {
                    "name": "Jersey",
                    "currencies": [
                        {
                            "code": "GBP",
                            "name": "British pound",
                            "symbol": "£"
                        },
                        {
                            "code": "JEP[G]",
                            "name": "Jersey pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "44"
                }
            ],
            [
                "JOR",
                {
                    "name": "Jordan",
                    "currencies": [
                        {
                            "code": "JOD",
                            "name": "Jordanian dinar",
                            "symbol": "د.ا"
                        }
                    ],
                    "countryCode": "962",
                    "IOCCode": "JOR"
                }
            ],
            [
                "KAZ",
                {
                    "name": "Kazakhstan",
                    "currencies": [
                        {
                            "code": "KZT",
                            "name": "Kazakhstani tenge",
                            "symbol": "₸"
                        }
                    ],
                    "countryCode": "76",
                    "IOCCode": "KAZ"
                }
            ],
            [
                "KEN",
                {
                    "name": "Kenya",
                    "currencies": [
                        {
                            "code": "KES",
                            "name": "Kenyan shilling",
                            "symbol": "Sh"
                        }
                    ],
                    "countryCode": "254",
                    "IOCCode": "KEN"
                }
            ],
            [
                "KIR",
                {
                    "name": "Kiribati",
                    "currencies": [
                        {
                            "code": "AUD",
                            "name": "Australian dollar",
                            "symbol": "$"
                        },
                        {
                            "code": "KID",
                            "name": "Kiribati dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "686",
                    "IOCCode": "KIR"
                }
            ],
            [
                "KUW",
                {
                    "name": "Kuwait",
                    "currencies": [
                        {
                            "code": "KWD",
                            "name": "Kuwaiti dinar",
                            "symbol": "د.ك"
                        }
                    ],
                    "countryCode": "965",
                    "IOCCode": "KUW"
                }
            ],
            [
                "KGZ",
                {
                    "name": "Kyrgyzstan",
                    "currencies": [
                        {
                            "code": "KGS",
                            "name": "Kyrgyzstani som",
                            "symbol": "с"
                        }
                    ],
                    "countryCode": "996",
                    "IOCCode": "KGZ"
                }
            ],
            [
                "LAO",
                {
                    "name": "Lao People's Democratic Republic",
                    "currencies": [
                        {
                            "code": "LAK",
                            "name": "Lao kip",
                            "symbol": "₭"
                        }
                    ],
                    "countryCode": "856",
                    "IOCCode": "LAO"
                }
            ],
            [
                "LAT",
                {
                    "name": "Latvia",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "371",
                    "IOCCode": "LAT"
                }
            ],
            [
                "LIB",
                {
                    "name": "Lebanon",
                    "currencies": [
                        {
                            "code": "LBP",
                            "name": "Lebanese pound",
                            "symbol": "ل.ل"
                        }
                    ],
                    "countryCode": "961",
                    "IOCCode": "LIB"
                }
            ],
            [
                "LES",
                {
                    "name": "Lesotho",
                    "currencies": [
                        {
                            "code": "LSL",
                            "name": "Lesotho loti",
                            "symbol": "L"
                        },
                        {
                            "code": "ZAR",
                            "name": "South African rand",
                            "symbol": "R"
                        }
                    ],
                    "countryCode": "266",
                    "IOCCode": "LES"
                }
            ],
            [
                "LBR",
                {
                    "name": "Liberia",
                    "currencies": [
                        {
                            "code": "LRD",
                            "name": "Liberian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "231",
                    "IOCCode": "LBR"
                }
            ],
            [
                "LBA",
                {
                    "name": "Libya",
                    "currencies": [
                        {
                            "code": "LYD",
                            "name": "Libyan dinar",
                            "symbol": "ل.د"
                        }
                    ],
                    "countryCode": "218",
                    "IOCCode": "LBA"
                }
            ],
            [
                "LIE",
                {
                    "name": "Liechtenstein",
                    "currencies": [
                        {
                            "code": "CHF",
                            "name": "Swiss franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "423",
                    "IOCCode": "LIE"
                }
            ],
            [
                "LTU",
                {
                    "name": "Lithuania",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "370",
                    "IOCCode": "LTU"
                }
            ],
            [
                "LUX",
                {
                    "name": "Luxembourg",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "352",
                    "IOCCode": "LUX"
                }
            ],
            [
                "MAC",
                {
                    "name": "Macao",
                    "currencies": [
                        {
                            "code": "MOP",
                            "name": "Macanese pataca",
                            "symbol": "P"
                        }
                    ],
                    "countryCode": "853"
                }
            ],
            [
                "MKD",
                {
                    "name": "North Macedonia",
                    "currencies": [
                        {
                            "code": "MKD",
                            "name": "Macedonian denar",
                            "symbol": "ден"
                        }
                    ],
                    "countryCode": "389",
                    "IOCCode": "MKD"
                }
            ],
            [
                "MAD",
                {
                    "name": "Madagascar",
                    "currencies": [
                        {
                            "code": "MGA",
                            "name": "Malagasy ariary",
                            "symbol": "Ar"
                        }
                    ],
                    "countryCode": "261",
                    "IOCCode": "MAD"
                }
            ],
            [
                "MAW",
                {
                    "name": "Malawi",
                    "currencies": [
                        {
                            "code": "MWK",
                            "name": "Malawian kwacha",
                            "symbol": "MK"
                        }
                    ],
                    "countryCode": "265",
                    "IOCCode": "MAW"
                }
            ],
            [
                "MAS",
                {
                    "name": "Malaysia",
                    "currencies": [
                        {
                            "code": "MYR",
                            "name": "Malaysian ringgit",
                            "symbol": "RM"
                        }
                    ],
                    "countryCode": "60",
                    "IOCCode": "MAS"
                }
            ],
            [
                "MDV",
                {
                    "name": "Maldives",
                    "currencies": [
                        {
                            "code": "MVR",
                            "name": "Maldivian rufiyaa",
                            "symbol": ".ރ"
                        }
                    ],
                    "countryCode": "960",
                    "IOCCode": "MDV"
                }
            ],
            [
                "MLI",
                {
                    "name": "Mali",
                    "currencies": [
                        {
                            "code": "XOF",
                            "name": "West African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "223",
                    "IOCCode": "MLI"
                }
            ],
            [
                "MLT",
                {
                    "name": "Malta",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "356",
                    "IOCCode": "MLT"
                }
            ],
            [
                "MHL",
                {
                    "name": "Marshall Islands",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "692",
                    "IOCCode": "MHL"
                }
            ],
            [
                "MTQ",
                {
                    "name": "Martinique",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "596"
                }
            ],
            [
                "MTN",
                {
                    "name": "Mauritania",
                    "currencies": [
                        {
                            "code": "MRO",
                            "name": "Mauritanian ouguiya",
                            "symbol": "UM"
                        }
                    ],
                    "countryCode": "222",
                    "IOCCode": "MTN"
                }
            ],
            [
                "MRI",
                {
                    "name": "Mauritius",
                    "currencies": [
                        {
                            "code": "MUR",
                            "name": "Mauritian rupee",
                            "symbol": "₨"
                        }
                    ],
                    "countryCode": "230",
                    "IOCCode": "MRI"
                }
            ],
            [
                "MYT",
                {
                    "name": "Mayotte",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "262"
                }
            ],
            [
                "MEX",
                {
                    "name": "Mexico",
                    "currencies": [
                        {
                            "code": "MXN",
                            "name": "Mexican peso",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "52",
                    "IOCCode": "MEX"
                }
            ],
            [
                "FSM",
                {
                    "name": "Micronesia (Federated States of)",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "691",
                    "IOCCode": "FSM"
                }
            ],
            [
                "MDA",
                {
                    "name": "Moldova (Republic of)",
                    "currencies": [
                        {
                            "code": "MDL",
                            "name": "Moldovan leu",
                            "symbol": "L"
                        }
                    ],
                    "countryCode": "373",
                    "IOCCode": "MDA"
                }
            ],
            [
                "MON",
                {
                    "name": "Monaco",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "377",
                    "IOCCode": "MON"
                }
            ],
            [
                "MGL",
                {
                    "name": "Mongolia",
                    "currencies": [
                        {
                            "code": "MNT",
                            "name": "Mongolian tögrög",
                            "symbol": "₮"
                        }
                    ],
                    "countryCode": "976",
                    "IOCCode": "MGL"
                }
            ],
            [
                "MNE",
                {
                    "name": "Montenegro",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "382",
                    "IOCCode": "MNE"
                }
            ],
            [
                "MSR",
                {
                    "name": "Montserrat",
                    "currencies": [
                        {
                            "code": "XCD",
                            "name": "East Caribbean dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1"
                }
            ],
            [
                "MAR",
                {
                    "name": "Morocco",
                    "currencies": [
                        {
                            "code": "MAD",
                            "name": "Moroccan dirham",
                            "symbol": "د.م."
                        }
                    ],
                    "countryCode": "212",
                    "IOCCode": "MAR"
                }
            ],
            [
                "MOZ",
                {
                    "name": "Mozambique",
                    "currencies": [
                        {
                            "code": "MZN",
                            "name": "Mozambican metical",
                            "symbol": "MT"
                        }
                    ],
                    "countryCode": "258",
                    "IOCCode": "MOZ"
                }
            ],
            [
                "MYA",
                {
                    "name": "Myanmar",
                    "currencies": [
                        {
                            "code": "MMK",
                            "name": "Burmese kyat",
                            "symbol": "Ks"
                        }
                    ],
                    "countryCode": "95",
                    "IOCCode": "MYA"
                }
            ],
            [
                "NAM",
                {
                    "name": "Namibia",
                    "currencies": [
                        {
                            "code": "NAD",
                            "name": "Namibian dollar",
                            "symbol": "$"
                        },
                        {
                            "code": "ZAR",
                            "name": "South African rand",
                            "symbol": "R"
                        }
                    ],
                    "countryCode": "264",
                    "IOCCode": "NAM"
                }
            ],
            [
                "NRU",
                {
                    "name": "Nauru",
                    "currencies": [
                        {
                            "code": "AUD",
                            "name": "Australian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "674",
                    "IOCCode": "NRU"
                }
            ],
            [
                "NEP",
                {
                    "name": "Nepal",
                    "currencies": [
                        {
                            "code": "NPR",
                            "name": "Nepalese rupee",
                            "symbol": "₨"
                        }
                    ],
                    "countryCode": "977",
                    "IOCCode": "NEP"
                }
            ],
            [
                "NED",
                {
                    "name": "Netherlands",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "31",
                    "IOCCode": "NED"
                }
            ],
            [
                "NCL",
                {
                    "name": "New Caledonia",
                    "currencies": [
                        {
                            "code": "XPF",
                            "name": "CFP franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "687"
                }
            ],
            [
                "NZL",
                {
                    "name": "New Zealand",
                    "currencies": [
                        {
                            "code": "NZD",
                            "name": "New Zealand dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "64",
                    "IOCCode": "NZL"
                }
            ],
            [
                "NCA",
                {
                    "name": "Nicaragua",
                    "currencies": [
                        {
                            "code": "NIO",
                            "name": "Nicaraguan córdoba",
                            "symbol": "C$"
                        }
                    ],
                    "countryCode": "505",
                    "IOCCode": "NCA"
                }
            ],
            [
                "NIG",
                {
                    "name": "Niger",
                    "currencies": [
                        {
                            "code": "XOF",
                            "name": "West African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "227",
                    "IOCCode": "NIG"
                }
            ],
            [
                "NGR",
                {
                    "name": "Nigeria",
                    "currencies": [
                        {
                            "code": "NGN",
                            "name": "Nigerian naira",
                            "symbol": "₦"
                        }
                    ],
                    "countryCode": "234",
                    "IOCCode": "NGR"
                }
            ],
            [
                "NIU",
                {
                    "name": "Niue",
                    "currencies": [
                        {
                            "code": "NZD",
                            "name": "New Zealand dollar",
                            "symbol": "$"
                        },
                        {
                            "code": "NZD",
                            "name": "Niue dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "683"
                }
            ],
            [
                "NFK",
                {
                    "name": "Norfolk Island",
                    "currencies": [
                        {
                            "code": "AUD",
                            "name": "Australian dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "672"
                }
            ],
            [
                "PRK",
                {
                    "name": "Korea (Democratic People's Republic of)",
                    "currencies": [
                        {
                            "code": "KPW",
                            "name": "North Korean won",
                            "symbol": "₩"
                        }
                    ],
                    "countryCode": "850",
                    "IOCCode": "PRK"
                }
            ],
            [
                "MNP",
                {
                    "name": "Northern Mariana Islands",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1"
                }
            ],
            [
                "NOR",
                {
                    "name": "Norway",
                    "currencies": [
                        {
                            "code": "NOK",
                            "name": "Norwegian krone",
                            "symbol": "kr"
                        }
                    ],
                    "countryCode": "47",
                    "IOCCode": "NOR"
                }
            ],
            [
                "OMA",
                {
                    "name": "Oman",
                    "currencies": [
                        {
                            "code": "OMR",
                            "name": "Omani rial",
                            "symbol": "ر.ع."
                        }
                    ],
                    "countryCode": "968",
                    "IOCCode": "OMA"
                }
            ],
            [
                "PAK",
                {
                    "name": "Pakistan",
                    "currencies": [
                        {
                            "code": "PKR",
                            "name": "Pakistani rupee",
                            "symbol": "₨"
                        }
                    ],
                    "countryCode": "92",
                    "IOCCode": "PAK"
                }
            ],
            [
                "PLW",
                {
                    "name": "Palau",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "680",
                    "IOCCode": "PLW"
                }
            ],
            [
                "PLE",
                {
                    "name": "Palestine, State of",
                    "currencies": [
                        {
                            "code": "EGP",
                            "name": "Egyptian pound",
                            "symbol": "E£"
                        },
                        {
                            "code": "ILS",
                            "name": "Israeli new shekel",
                            "symbol": "₪"
                        },
                        {
                            "code": "JOD",
                            "name": "Jordanian dinar",
                            "symbol": "د.أ"
                        }
                    ],
                    "countryCode": "970",
                    "IOCCode": "PLE"
                }
            ],
            [
                "PAN",
                {
                    "name": "Panama",
                    "currencies": [
                        {
                            "code": "PAB",
                            "name": "Panamanian balboa",
                            "symbol": "B/."
                        },
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "507",
                    "IOCCode": "PAN"
                }
            ],
            [
                "PNG",
                {
                    "name": "Papua New Guinea",
                    "currencies": [
                        {
                            "code": "PGK",
                            "name": "Papua New Guinean kina",
                            "symbol": "K"
                        }
                    ],
                    "countryCode": "675",
                    "IOCCode": "PNG"
                }
            ],
            [
                "PAR",
                {
                    "name": "Paraguay",
                    "currencies": [
                        {
                            "code": "PYG",
                            "name": "Paraguayan guaraní",
                            "symbol": "₲"
                        }
                    ],
                    "countryCode": "595",
                    "IOCCode": "PAR"
                }
            ],
            [
                "PER",
                {
                    "name": "Peru",
                    "currencies": [
                        {
                            "code": "PEN",
                            "name": "Peruvian sol",
                            "symbol": "S/."
                        }
                    ],
                    "countryCode": "51",
                    "IOCCode": "PER"
                }
            ],
            [
                "PHI",
                {
                    "name": "Philippines",
                    "currencies": [
                        {
                            "code": "PHP",
                            "name": "Philippine peso",
                            "symbol": "₱"
                        }
                    ],
                    "countryCode": "63",
                    "IOCCode": "PHI"
                }
            ],
            [
                "PCN",
                {
                    "name": "Pitcairn",
                    "currencies": [
                        {
                            "code": "NZD",
                            "name": "New Zealand dollar",
                            "symbol": "$"
                        },
                        {
                            "code": "PND",
                            "name": "Pitcairn Islands dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "64"
                }
            ],
            [
                "POL",
                {
                    "name": "Poland",
                    "currencies": [
                        {
                            "code": "PLN",
                            "name": "Polish złoty",
                            "symbol": "zł"
                        }
                    ],
                    "countryCode": "48",
                    "IOCCode": "POL"
                }
            ],
            [
                "POR",
                {
                    "name": "Portugal",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "351",
                    "IOCCode": "POR"
                }
            ],
            [
                "PUR",
                {
                    "name": "Puerto Rico",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "PUR"
                }
            ],
            [
                "QAT",
                {
                    "name": "Qatar",
                    "currencies": [
                        {
                            "code": "QAR",
                            "name": "Qatari riyal",
                            "symbol": "ر.ق"
                        }
                    ],
                    "countryCode": "974",
                    "IOCCode": "QAT"
                }
            ],
            [
                "UNK",
                {
                    "name": "Republic of Kosovo",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "383"
                }
            ],
            [
                "REU",
                {
                    "name": "Réunion",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "262"
                }
            ],
            [
                "ROU",
                {
                    "name": "Romania",
                    "currencies": [
                        {
                            "code": "RON",
                            "name": "Romanian leu",
                            "symbol": "lei"
                        }
                    ],
                    "countryCode": "40",
                    "IOCCode": "ROU"
                }
            ],
            [
                "RUS",
                {
                    "name": "Russian Federation",
                    "currencies": [
                        {
                            "code": "RUB",
                            "name": "Russian ruble",
                            "symbol": "₽"
                        }
                    ],
                    "countryCode": "7",
                    "IOCCode": "RUS"
                }
            ],
            [
                "RWA",
                {
                    "name": "Rwanda",
                    "currencies": [
                        {
                            "code": "RWF",
                            "name": "Rwandan franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "250",
                    "IOCCode": "RWA"
                }
            ],
            [
                "BLM",
                {
                    "name": "Saint Barthélemy",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "590"
                }
            ],
            [
                "SHN",
                {
                    "name": "Saint Helena, Ascension and Tristan da Cunha",
                    "currencies": [
                        {
                            "code": "SHP",
                            "name": "Saint Helena pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "290"
                }
            ],
            [
                "SKN",
                {
                    "name": "Saint Kitts and Nevis",
                    "currencies": [
                        {
                            "code": "XCD",
                            "name": "East Caribbean dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "SKN"
                }
            ],
            [
                "LCA",
                {
                    "name": "Saint Lucia",
                    "currencies": [
                        {
                            "code": "XCD",
                            "name": "East Caribbean dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "LCA"
                }
            ],
            [
                "MAF",
                {
                    "name": "Saint Martin (French part)",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "590"
                }
            ],
            [
                "SPM",
                {
                    "name": "Saint Pierre and Miquelon",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "508"
                }
            ],
            [
                "VIN",
                {
                    "name": "Saint Vincent and the Grenadines",
                    "currencies": [
                        {
                            "code": "XCD",
                            "name": "East Caribbean dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "VIN"
                }
            ],
            [
                "SAM",
                {
                    "name": "Samoa",
                    "currencies": [
                        {
                            "code": "WST",
                            "name": "Samoan tālā",
                            "symbol": "T"
                        }
                    ],
                    "countryCode": "685",
                    "IOCCode": "SAM"
                }
            ],
            [
                "SMR",
                {
                    "name": "San Marino",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "378",
                    "IOCCode": "SMR"
                }
            ],
            [
                "STP",
                {
                    "name": "Sao Tome and Principe",
                    "currencies": [
                        {
                            "code": "STD",
                            "name": "São Tomé and Príncipe dobra",
                            "symbol": "Db"
                        }
                    ],
                    "countryCode": "239",
                    "IOCCode": "STP"
                }
            ],
            [
                "KSA",
                {
                    "name": "Saudi Arabia",
                    "currencies": [
                        {
                            "code": "SAR",
                            "name": "Saudi riyal",
                            "symbol": "ر.س"
                        }
                    ],
                    "countryCode": "966",
                    "IOCCode": "KSA"
                }
            ],
            [
                "SEN",
                {
                    "name": "Senegal",
                    "currencies": [
                        {
                            "code": "XOF",
                            "name": "West African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "221",
                    "IOCCode": "SEN"
                }
            ],
            [
                "SRB",
                {
                    "name": "Serbia",
                    "currencies": [
                        {
                            "code": "RSD",
                            "name": "Serbian dinar",
                            "symbol": "дин."
                        }
                    ],
                    "countryCode": "381",
                    "IOCCode": "SRB"
                }
            ],
            [
                "SEY",
                {
                    "name": "Seychelles",
                    "currencies": [
                        {
                            "code": "SCR",
                            "name": "Seychellois rupee",
                            "symbol": "₨"
                        }
                    ],
                    "countryCode": "248",
                    "IOCCode": "SEY"
                }
            ],
            [
                "SLE",
                {
                    "name": "Sierra Leone",
                    "currencies": [
                        {
                            "code": "SLL",
                            "name": "Sierra Leonean leone",
                            "symbol": "Le"
                        }
                    ],
                    "countryCode": "232",
                    "IOCCode": "SLE"
                }
            ],
            [
                "SIN",
                {
                    "name": "Singapore",
                    "currencies": [
                        {
                            "code": "SGD",
                            "name": "Singapore dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "65",
                    "IOCCode": "SIN"
                }
            ],
            [
                "SXM",
                {
                    "name": "Sint Maarten (Dutch part)",
                    "currencies": [
                        {
                            "code": "ANG",
                            "name": "Netherlands Antillean guilder",
                            "symbol": "ƒ"
                        }
                    ],
                    "countryCode": "1"
                }
            ],
            [
                "SVK",
                {
                    "name": "Slovakia",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "421",
                    "IOCCode": "SVK"
                }
            ],
            [
                "SLO",
                {
                    "name": "Slovenia",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "386",
                    "IOCCode": "SLO"
                }
            ],
            [
                "SOL",
                {
                    "name": "Solomon Islands",
                    "currencies": [
                        {
                            "code": "SBD",
                            "name": "Solomon Islands dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "677",
                    "IOCCode": "SOL"
                }
            ],
            [
                "SOM",
                {
                    "name": "Somalia",
                    "currencies": [
                        {
                            "code": "SOS",
                            "name": "Somali shilling",
                            "symbol": "Sh"
                        }
                    ],
                    "countryCode": "252",
                    "IOCCode": "SOM"
                }
            ],
            [
                "RSA",
                {
                    "name": "South Africa",
                    "currencies": [
                        {
                            "code": "ZAR",
                            "name": "South African rand",
                            "symbol": "R"
                        }
                    ],
                    "countryCode": "27",
                    "IOCCode": "RSA"
                }
            ],
            [
                "SGS",
                {
                    "name": "South Georgia and the South Sandwich Islands",
                    "currencies": [
                        {
                            "code": "FKP",
                            "name": "Falkland Islands Pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "500"
                }
            ],
            [
                "KOR",
                {
                    "name": "Korea (Republic of)",
                    "currencies": [
                        {
                            "code": "KRW",
                            "name": "South Korean won",
                            "symbol": "₩"
                        }
                    ],
                    "countryCode": "82",
                    "IOCCode": "KOR"
                }
            ],
            [
                "ESP",
                {
                    "name": "Spain",
                    "currencies": [
                        {
                            "code": "EUR",
                            "name": "Euro",
                            "symbol": "€"
                        }
                    ],
                    "countryCode": "34",
                    "IOCCode": "ESP"
                }
            ],
            [
                "SRI",
                {
                    "name": "Sri Lanka",
                    "currencies": [
                        {
                            "code": "LKR",
                            "name": "Sri Lankan rupee",
                            "symbol": "Rs"
                        }
                    ],
                    "countryCode": "94",
                    "IOCCode": "SRI"
                }
            ],
            [
                "SUD",
                {
                    "name": "Sudan",
                    "currencies": [
                        {
                            "code": "SDG",
                            "name": "Sudanese pound",
                            "symbol": "ج.س."
                        }
                    ],
                    "countryCode": "249",
                    "IOCCode": "SUD"
                }
            ],
            [
                "SSD",
                {
                    "name": "South Sudan",
                    "currencies": [
                        {
                            "code": "SSP",
                            "name": "South Sudanese pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "211",
                    "IOCCode": "SSD"
                }
            ],
            [
                "SUR",
                {
                    "name": "Suriname",
                    "currencies": [
                        {
                            "code": "SRD",
                            "name": "Surinamese dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "597",
                    "IOCCode": "SUR"
                }
            ],
            [
                "SJM",
                {
                    "name": "Svalbard and Jan Mayen",
                    "currencies": [
                        {
                            "code": "NOK",
                            "name": "Norwegian krone",
                            "symbol": "kr"
                        }
                    ],
                    "countryCode": "47"
                }
            ],
            [
                "SWZ",
                {
                    "name": "Swaziland",
                    "currencies": [
                        {
                            "code": "SZL",
                            "name": "Swazi lilangeni",
                            "symbol": "L"
                        }
                    ],
                    "countryCode": "268",
                    "IOCCode": "SWZ"
                }
            ],
            [
                "SWE",
                {
                    "name": "Sweden",
                    "currencies": [
                        {
                            "code": "SEK",
                            "name": "Swedish krona",
                            "symbol": "kr"
                        }
                    ],
                    "countryCode": "46",
                    "IOCCode": "SWE"
                }
            ],
            [
                "SUI",
                {
                    "name": "Switzerland",
                    "currencies": [
                        {
                            "code": "CHF",
                            "name": "Swiss franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "41",
                    "IOCCode": "SUI"
                }
            ],
            [
                "SYR",
                {
                    "name": "Syrian Arab Republic",
                    "currencies": [
                        {
                            "code": "SYP",
                            "name": "Syrian pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "963",
                    "IOCCode": "SYR"
                }
            ],
            [
                "TPE",
                {
                    "name": "Taiwan",
                    "currencies": [
                        {
                            "code": "TWD",
                            "name": "New Taiwan dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "886",
                    "IOCCode": "TPE"
                }
            ],
            [
                "TJK",
                {
                    "name": "Tajikistan",
                    "currencies": [
                        {
                            "code": "TJS",
                            "name": "Tajikistani somoni",
                            "symbol": "ЅМ"
                        }
                    ],
                    "countryCode": "992",
                    "IOCCode": "TJK"
                }
            ],
            [
                "TAN",
                {
                    "name": "Tanzania, United Republic of",
                    "currencies": [
                        {
                            "code": "TZS",
                            "name": "Tanzanian shilling",
                            "symbol": "Sh"
                        }
                    ],
                    "countryCode": "255",
                    "IOCCode": "TAN"
                }
            ],
            [
                "THA",
                {
                    "name": "Thailand",
                    "currencies": [
                        {
                            "code": "THB",
                            "name": "Thai baht",
                            "symbol": "฿"
                        }
                    ],
                    "countryCode": "66",
                    "IOCCode": "THA"
                }
            ],
            [
                "TLS",
                {
                    "name": "Timor-Leste",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States Dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "670",
                    "IOCCode": "TLS"
                }
            ],
            [
                "TOG",
                {
                    "name": "Togo",
                    "currencies": [
                        {
                            "code": "XOF",
                            "name": "West African CFA franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "228",
                    "IOCCode": "TOG"
                }
            ],
            [
                "TKL",
                {
                    "name": "Tokelau",
                    "currencies": [
                        {
                            "code": "NZD",
                            "name": "New Zealand dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "690"
                }
            ],
            [
                "TGA",
                {
                    "name": "Tonga",
                    "currencies": [
                        {
                            "code": "TOP",
                            "name": "Tongan paʻanga",
                            "symbol": "T$"
                        }
                    ],
                    "countryCode": "676",
                    "IOCCode": "TGA"
                }
            ],
            [
                "TTO",
                {
                    "name": "Trinidad and Tobago",
                    "currencies": [
                        {
                            "code": "TTD",
                            "name": "Trinidad and Tobago dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "TTO"
                }
            ],
            [
                "TUN",
                {
                    "name": "Tunisia",
                    "currencies": [
                        {
                            "code": "TND",
                            "name": "Tunisian dinar",
                            "symbol": "د.ت"
                        }
                    ],
                    "countryCode": "216",
                    "IOCCode": "TUN"
                }
            ],
            [
                "TUR",
                {
                    "name": "Turkey",
                    "currencies": [
                        {
                            "code": "TRY",
                            "name": "Turkish lira",
                            "symbol": "₺"
                        }
                    ],
                    "countryCode": "90",
                    "IOCCode": "TUR"
                }
            ],
            [
                "TKM",
                {
                    "name": "Turkmenistan",
                    "currencies": [
                        {
                            "code": "TMT",
                            "name": "Turkmenistan manat",
                            "symbol": "m"
                        }
                    ],
                    "countryCode": "993",
                    "IOCCode": "TKM"
                }
            ],
            [
                "TCA",
                {
                    "name": "Turks and Caicos Islands",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1"
                }
            ],
            [
                "TUV",
                {
                    "name": "Tuvalu",
                    "currencies": [
                        {
                            "code": "AUD",
                            "name": "Australian dollar",
                            "symbol": "$"
                        },
                        {
                            "code": "TVD[G]",
                            "name": "Tuvaluan dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "688",
                    "IOCCode": "TUV"
                }
            ],
            [
                "UGA",
                {
                    "name": "Uganda",
                    "currencies": [
                        {
                            "code": "UGX",
                            "name": "Ugandan shilling",
                            "symbol": "Sh"
                        }
                    ],
                    "countryCode": "256",
                    "IOCCode": "UGA"
                }
            ],
            [
                "UKR",
                {
                    "name": "Ukraine",
                    "currencies": [
                        {
                            "code": "UAH",
                            "name": "Ukrainian hryvnia",
                            "symbol": "₴"
                        }
                    ],
                    "countryCode": "380",
                    "IOCCode": "UKR"
                }
            ],
            [
                "UAE",
                {
                    "name": "United Arab Emirates",
                    "currencies": [
                        {
                            "code": "AED",
                            "name": "United Arab Emirates dirham",
                            "symbol": "د.إ"
                        }
                    ],
                    "countryCode": "971",
                    "IOCCode": "UAE"
                }
            ],
            [
                "GBR",
                {
                    "name": "United Kingdom of Great Britain and Northern Ireland",
                    "currencies": [
                        {
                            "code": "GBP",
                            "name": "British pound",
                            "symbol": "£"
                        }
                    ],
                    "countryCode": "44",
                    "IOCCode": "GBR"
                }
            ],
            [
                "USA",
                {
                    "name": "United States of America",
                    "currencies": [
                        {
                            "code": "USD",
                            "name": "United States dollar",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "1",
                    "IOCCode": "USA"
                }
            ],
            [
                "URU",
                {
                    "name": "Uruguay",
                    "currencies": [
                        {
                            "code": "UYU",
                            "name": "Uruguayan peso",
                            "symbol": "$"
                        }
                    ],
                    "countryCode": "598",
                    "IOCCode": "URU"
                }
            ],
            [
                "UZB",
                {
                    "name": "Uzbekistan",
                    "currencies": [
                        {
                            "code": "UZS",
                            "name": "Uzbekistani so'm",
                            "symbol": "so'm"
                        }
                    ],
                    "countryCode": "998",
                    "IOCCode": "UZB"
                }
            ],
            [
                "VAN",
                {
                    "name": "Vanuatu",
                    "currencies": [
                        {
                            "code": "VUV",
                            "name": "Vanuatu vatu",
                            "symbol": "Vt"
                        }
                    ],
                    "countryCode": "678",
                    "IOCCode": "VAN"
                }
            ],
            [
                "VEN",
                {
                    "name": "Venezuela (Bolivarian Republic of)",
                    "currencies": [
                        {
                            "code": "VEF",
                            "name": "Venezuelan bolívar",
                            "symbol": "Bs S"
                        }
                    ],
                    "countryCode": "58",
                    "IOCCode": "VEN"
                }
            ],
            [
                "VIE",
                {
                    "name": "Vietnam",
                    "currencies": [
                        {
                            "code": "VND",
                            "name": "Vietnamese đồng",
                            "symbol": "₫"
                        }
                    ],
                    "countryCode": "84",
                    "IOCCode": "VIE"
                }
            ],
            [
                "WLF",
                {
                    "name": "Wallis and Futuna",
                    "currencies": [
                        {
                            "code": "XPF",
                            "name": "CFP franc",
                            "symbol": "Fr"
                        }
                    ],
                    "countryCode": "681"
                }
            ],
            [
                "ESH",
                {
                    "name": "Western Sahara",
                    "currencies": [
                        {
                            "code": "MAD",
                            "name": "Moroccan dirham",
                            "symbol": "د.م."
                        },
                        {
                            "code": "DZD",
                            "name": "Algerian dinar",
                            "symbol": "د.ج"
                        }
                    ],
                    "countryCode": "212"
                }
            ],
            [
                "YEM",
                {
                    "name": "Yemen",
                    "currencies": [
                        {
                            "code": "YER",
                            "name": "Yemeni rial",
                            "symbol": "﷼"
                        }
                    ],
                    "countryCode": "967",
                    "IOCCode": "YEM"
                }
            ],
            [
                "ZAM",
                {
                    "name": "Zambia",
                    "currencies": [
                        {
                            "code": "ZMW",
                            "name": "Zambian kwacha",
                            "symbol": "ZK"
                        }
                    ],
                    "countryCode": "260",
                    "IOCCode": "ZAM"
                }
            ],
            [
                "ZIM",
                {
                    "name": "Zimbabwe",
                    "currencies": [
                        {
                            "code": "ZWL",
                            "name": "Zimbabwean Dollar",
                            "symbol": "ZWL$"
                        }
                    ],
                    "countryCode": "263",
                    "IOCCode": "ZIM"
                }
            ]
        ]
)

export default countryDetailsList