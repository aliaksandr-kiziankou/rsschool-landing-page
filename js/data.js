const rosterData = {
  cs2: [
    {
      id: "nova",
      name: "NOVA",
      realName: "Alex Novak",
      role: "Rifler",
      image: "assets/images/players/nova.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "07",
      bio: "Versatile rifler known for aggressive entries and fast reactions.",
      stats: {
        rating: "1.18",
        winRate: "64%",
        experience: "5 years"
      },
      parameters: {
        role: {
          entry: {
            label: "Entry",
            rating: "1.21",
            description: "Aggressive first-contact player focused on opening duels."
          },
          lurker: {
            label: "Lurker",
            rating: "1.14",
            description: "Patient player who creates pressure from unexpected positions."
          }
        },
        map: {
          mirage: {
            label: "Mirage",
            winRate: "71%",
            description: "One of the team's strongest maps."
          },
          inferno: {
            label: "Inferno",
            winRate: "64%",
            description: "Reliable performance on structured rounds."
          }
        }
      }
    },

    {
      id: "vex",
      name: "VEX",
      realName: "Daniil Volkov",
      role: "AWPer",
      image: "assets/images/players/vex.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "13",
      bio: "Dedicated AWPer with a precise long-range playstyle.",
      stats: {
        rating: "1.22",
        winRate: "68%",
        experience: "6 years"
      },
      parameters: {
        role: {
          sniper: {
            label: "Sniper",
            rating: "1.27",
            description: "Primary AWP player specializing in long-range duels."
          },
          support: {
            label: "Support",
            rating: "1.15",
            description: "Provides utility and cover for aggressive teammates."
          }
        },
        map: {
          awp_map: {
            label: "Ancient",
            winRate: "73%",
            description: "Strong AWP positioning and control across the map."
          },
          control_map: {
            label: "Nuke",
            winRate: "66%",
            description: "Reliable defensive positioning and rotations."
          }
        }
      }
    },

    {
      id: "kairo",
      name: "KAIRO",
      realName: "Artem Karimov",
      role: "IGL",
      image: "assets/images/players/kairo.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "01",
      bio: "In-game leader responsible for tactical decisions and mid-round calls.",
      stats: {
        rating: "1.08",
        winRate: "62%",
        experience: "7 years"
      },
      parameters: {
        role: {
          igl: {
            label: "IGL",
            rating: "1.08",
            description: "Leads the team and makes strategic mid-round decisions."
          },
          support: {
            label: "Support",
            rating: "1.12",
            description: "Creates space and utility setups for the team."
          }
        },
        map: {
          mirage: {
            label: "Mirage",
            winRate: "69%",
            description: "Strong tactical preparation and mid control."
          },
          vertigo: {
            label: "Vertigo",
            winRate: "61%",
            description: "Disciplined approach to vertical map control."
          }
        }
      }
    },

    {
      id: "zer0",
      name: "ZER0",
      realName: "Maksim Orlov",
      role: "Rifler",
      image: "assets/images/players/zer0.png",
      country: "Russia",
      countryCode: "RU",
      number: "22",
      bio: "Consistent rifler with strong utility usage and teamplay.",
      stats: {
        rating: "1.15",
        winRate: "65%",
        experience: "4 years"
      },
      parameters: {
        role: {
          rifler: {
            label: "Rifler",
            rating: "1.18",
            description: "Consistent rifle player with strong mechanical fundamentals."
          },
          anchor: {
            label: "Anchor",
            rating: "1.12",
            description: "Defensive player responsible for holding bomb sites."
          }
        },
        map: {
          inferno: {
            label: "Inferno",
            winRate: "70%",
            description: "Strong utility usage around both bomb sites."
          },
          dust2: {
            label: "Dust II",
            winRate: "63%",
            description: "Comfortable in direct aim duels."
          }
        }
      }
    },

    {
      id: "rune",
      name: "RUNE",
      realName: "Ilya Petrov",
      role: "Rifler",
      image: "assets/images/players/rune.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "19",
      bio: "Flexible rifler capable of adapting to different tactical roles.",
      stats: {
        rating: "1.13",
        winRate: "63%",
        experience: "4 years"
      },
      parameters: {
        role: {
          rifler: {
            label: "Rifler",
            rating: "1.16",
            description: "Flexible rifle player who adapts to team strategy."
          },
          lurker: {
            label: "Lurker",
            rating: "1.11",
            description: "Creates pressure by playing independently from the main group."
          }
        },
        map: {
          ancient: {
            label: "Ancient",
            winRate: "67%",
            description: "Strong rotations and late-round positioning."
          },
          mirage: {
            label: "Mirage",
            winRate: "64%",
            description: "Flexible positioning across the map."
          }
        }
      }
    },

    {
      id: "flux",
      name: "FLUX",
      realName: "Timur Sadykov",
      role: "Entry",
      image: "assets/images/players/flux.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "11",
      bio: "High-tempo entry fragger who creates openings for the team.",
      stats: {
        rating: "1.17",
        winRate: "61%",
        experience: "3 years"
      },
      parameters: {
        role: {
          entry: {
            label: "Entry",
            rating: "1.20",
            description: "First-contact player focused on opening the round."
          },
          rifler: {
            label: "Rifler",
            rating: "1.15",
            description: "Reliable rifle player during mid and late rounds."
          }
        },
        map: {
          dust2: {
            label: "Dust II",
            winRate: "69%",
            description: "Strong performance in direct aim battles."
          },
          inferno: {
            label: "Inferno",
            winRate: "62%",
            description: "Aggressive entry routes around both sites."
          }
        }
      }
    },

    {
      id: "onyx",
      name: "ONYX",
      realName: "Roman Bekov",
      role: "Support",
      image: "assets/images/players/onyx.png",
      country: "Kyrgyzstan",
      countryCode: "KG",
      number: "25",
      bio: "Support player focused on utility, trading and team coordination.",
      stats: {
        rating: "1.07",
        winRate: "66%",
        experience: "5 years"
      },
      parameters: {
        role: {
          support: {
            label: "Support",
            rating: "1.10",
            description: "Provides utility and enables teammates to take space."
          },
          anchor: {
            label: "Anchor",
            rating: "1.06",
            description: "Defends key positions and delays enemy attacks."
          }
        },
        map: {
          nuke: {
            label: "Nuke",
            winRate: "72%",
            description: "Strong defensive setups and rotations."
          },
          ancient: {
            label: "Ancient",
            winRate: "65%",
            description: "Reliable utility setups around key areas."
          }
        }
      }
    },

    {
      id: "shade",
      name: "SHADE",
      realName: "Nikita Volkov",
      role: "Lurker",
      image: "assets/images/players/shade.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "31",
      bio: "Patient lurker who specializes in timing and late-round decisions.",
      stats: {
        rating: "1.16",
        winRate: "67%",
        experience: "5 years"
      },
      parameters: {
        role: {
          lurker: {
            label: "Lurker",
            rating: "1.20",
            description: "Specializes in timing, flanks and late-round pressure."
          },
          rifler: {
            label: "Rifler",
            rating: "1.13",
            description: "Flexible rifle player with strong positioning."
          }
        },
        map: {
          mirage: {
            label: "Mirage",
            winRate: "74%",
            description: "Excellent timing around mid and late-round rotations."
          },
          ancient: {
            label: "Ancient",
            winRate: "68%",
            description: "Strong late-round positioning and map awareness."
          }
        }
      }
    }
  ],

  valorant: [
    {
      id: "aero",
      name: "AERO",
      realName: "Alex Morgan",
      role: "Duelist",
      image: "assets/images/players/aero.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "07",
      bio: "Aggressive duelist with exceptional entry mechanics.",
      stats: {
        rating: "1.19",
        winRate: "67%",
        experience: "4 years"
      }
    },
    {
      id: "nova-v",
      name: "NOVA",
      realName: "Daniel Kim",
      role: "Controller",
      image: "assets/images/players/nova-v.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "13",
      bio: "Controller player specializing in tactical map control.",
      stats: {
        rating: "1.12",
        winRate: "69%",
        experience: "5 years"
      }
    },
    {
      id: "zen",
      name: "ZEN",
      realName: "Arsen Lee",
      role: "Initiator",
      image: "assets/images/players/zen.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "21",
      bio: "Information-focused initiator with strong utility timing.",
      stats: {
        rating: "1.14",
        winRate: "65%",
        experience: "3 years"
      }
    },
    {
      id: "echo",
      name: "ECHO",
      realName: "Mikhail Stone",
      role: "Sentinel",
      image: "assets/images/players/echo.jpg",
      country: "Russia",
      countryCode: "RU",
      number: "04",
      bio: "Defensive specialist with excellent site control.",
      stats: {
        rating: "1.09",
        winRate: "68%",
        experience: "4 years"
      }
    },
    {
      id: "viper",
      name: "VIPER",
      realName: "Nurlan Akhmet",
      role: "Controller",
      image: "assets/images/players/viper.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "18",
      bio: "Strategic controller with excellent round planning.",
      stats: {
        rating: "1.11",
        winRate: "66%",
        experience: "5 years"
      }
    },
    {
      id: "pulse",
      name: "PULSE",
      realName: "Egor Ivanov",
      role: "Duelist",
      image: "assets/images/players/pulse.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "09",
      bio: "Fast-paced duelist who excels in opening engagements.",
      stats: {
        rating: "1.17",
        winRate: "63%",
        experience: "3 years"
      }
    },
    {
      id: "atlas",
      name: "ATLAS",
      realName: "Dmitry Volk",
      role: "Initiator",
      image: "assets/images/players/atlas.jpg",
      country: "Kyrgyzstan",
      countryCode: "KG",
      number: "27",
      bio: "Initiator focused on gathering information and enabling entries.",
      stats: {
        rating: "1.10",
        winRate: "64%",
        experience: "4 years"
      }
    },
    {
      id: "veil",
      name: "VEIL",
      realName: "Roman Grey",
      role: "Sentinel",
      image: "assets/images/players/veil.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "15",
      bio: "Calm defensive player with strong clutch potential.",
      stats: {
        rating: "1.13",
        winRate: "70%",
        experience: "5 years"
      }
    }
  ],

  dota2: [
    {
      id: "storm",
      name: "STORM",
      realName: "Arman Bek",
      role: "Carry",
      image: "assets/images/players/storm.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "07",
      bio: "Late-game carry with exceptional farming efficiency.",
      stats: {
        rating: "8.4",
        winRate: "68%",
        experience: "6 years"
      }
    },
    {
      id: "void",
      name: "VOID",
      realName: "Ilya Storm",
      role: "Mid",
      image: "assets/images/players/void.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "10",
      bio: "Tempo-focused mid player with a highly aggressive style.",
      stats: {
        rating: "8.1",
        winRate: "65%",
        experience: "5 years"
      }
    },
    {
      id: "ward",
      name: "WARD",
      realName: "Maksim Ray",
      role: "Support",
      image: "assets/images/players/ward.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "04",
      bio: "Vision-focused support responsible for map control.",
      stats: {
        rating: "7.7",
        winRate: "69%",
        experience: "7 years"
      }
    },
    {
      id: "raven",
      name: "RAVEN",
      realName: "Timur Khan",
      role: "Offlane",
      image: "assets/images/players/raven.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "22",
      bio: "Durable offlaner who creates space for the team.",
      stats: {
        rating: "7.9",
        winRate: "66%",
        experience: "5 years"
      }
    },
    {
      id: "sage",
      name: "SAGE",
      realName: "Nikita Orlov",
      role: "Support",
      image: "assets/images/players/sage.jpg",
      country: "Russia",
      countryCode: "RU",
      number: "12",
      bio: "Support player with strong teamfight awareness.",
      stats: {
        rating: "7.8",
        winRate: "67%",
        experience: "6 years"
      }
    },
    {
      id: "ember",
      name: "EMBER",
      realName: "Daniil Karim",
      role: "Mid",
      image: "assets/images/players/ember.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "18",
      bio: "Mechanical mid player specializing in high-mobility heroes.",
      stats: {
        rating: "8.2",
        winRate: "64%",
        experience: "4 years"
      }
    },
    {
      id: "fort",
      name: "FORT",
      realName: "Roman Bek",
      role: "Offlane",
      image: "assets/images/players/fort.jpg",
      country: "Kyrgyzstan",
      countryCode: "KG",
      number: "25",
      bio: "Frontline player who creates space during team fights.",
      stats: {
        rating: "7.6",
        winRate: "63%",
        experience: "5 years"
      }
    },
    {
      id: "drift",
      name: "DRIFT",
      realName: "Alex Grey",
      role: "Carry",
      image: "assets/images/players/drift.jpg",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "31",
      bio: "Carry player focused on efficient farming and late-game scaling.",
      stats: {
        rating: "8.0",
        winRate: "66%",
        experience: "4 years"
      }
    }
  ]
};