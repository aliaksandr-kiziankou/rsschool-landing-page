const rosterData = {
  cs2: [
    {
      id: "nova",
      name: "NOVA",
      realName: "Alex Novak",
      role: "Rifler",
      image: "assets/images/players/cs2/nova.png",
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
      image: "assets/images/players/cs2/vex.png",
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
      image: "assets/images/players/cs2/kairo.png",
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
      image: "assets/images/players/cs2/zer0.png",
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
      image: "assets/images/players/cs2/rune.png",
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
      image: "assets/images/players/cs2/flux.png",
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
      image: "assets/images/players/cs2/onyx.png",
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
      image: "assets/images/players/cs2/shade.png",
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
      image: "assets/images/players/val/aero.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "07",
      bio: "Aggressive duelist with exceptional entry mechanics.",
      stats: {
        rating: "1.19",
        winRate: "67%",
        experience: "4 years"
      },
      parameters: {
        agent: {
          jett: {
            label: "Jett",
            rating: "1.23",
            description: "Aggressive entry specialist with exceptional mobility and first-kill potential."
          },
          raze: {
            label: "Raze",
            rating: "1.17",
            description: "Explosive duelist focused on clearing space and winning close-range fights."
          }
        },
        map: {
          ascent: {
            label: "Ascent",
            winRate: "72%",
            description: "One of the team's strongest maps with reliable mid control."
          },
          haven: {
            label: "Haven",
            winRate: "65%",
            description: "Consistent performance across all three sites."
          }
        }
      }
    },
    {
      id: "novva",
      name: "N0VVA",
      realName: "Daniel Kim",
      role: "Controller",
      image: "assets/images/players/val/novva.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "13",
      bio: "Controller player specializing in tactical map control.",
      stats: {
        rating: "1.12",
        winRate: "69%",
        experience: "5 years"
      },
      parameters: {
        agent: {
          omen: {
            label: "Omen",
            rating: "1.15",
            description: "Flexible controller capable of creating space with precise utility."
          },
          viper: {
            label: "Viper",
            rating: "1.09",
            description: "Strategic controller focused on area denial and post-plant setups."
          }
        },
        map: {
          bind: {
            label: "Bind",
            winRate: "73%",
            description: "Strong defensive setups and effective site control."
          },
          lotus: {
            label: "Lotus",
            winRate: "67%",
            description: "Reliable rotations and coordinated utility usage."
          }
        }
      }
    },
    {
      id: "zen",
      name: "Z3N",
      realName: "Arsen Lee",
      role: "Initiator",
      image: "assets/images/players/val/zen.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "21",
      bio: "Information-focused initiator with strong utility timing.",
      stats: {
        rating: "1.14",
        winRate: "65%",
        experience: "3 years"
      },
      parameters: {
        agent: {
          sova: {
            label: "Sova",
            rating: "1.18",
            description: "Information specialist with strong reconnaissance and utility timing."
          },
          fade: {
            label: "Fade",
            rating: "1.11",
            description: "Initiator focused on revealing enemies and controlling key areas."
          }
        },
        map: {
          ascent: {
            label: "Ascent",
            winRate: "69%",
            description: "Strong information control around mid and both sites."
          },
          sunset: {
            label: "Sunset",
            winRate: "64%",
            description: "Consistent utility impact during site executions."
          }
        }
      }
    },
    {
      id: "echo",
      name: "ECHO",
      realName: "Mikhail Stone",
      role: "Sentinel",
      image: "assets/images/players/val/echo.png",
      country: "Russia",
      countryCode: "RU",
      number: "04",
      bio: "Defensive specialist with excellent site control.",
      stats: {
        rating: "1.09",
        winRate: "68%",
        experience: "4 years"
      },
      parameters: {
        agent: {
          killjoy: {
            label: "Killjoy",
            rating: "1.12",
            description: "Defensive specialist with strong site control and post-plant utility."
          },
          cypher: {
            label: "Cypher",
            rating: "1.07",
            description: "Information-focused sentinel who controls rotations and flanks."
          }
        },
        map: {
          lotus: {
            label: "Lotus",
            winRate: "71%",
            description: "Strong defensive setups and effective rotation control."
          },
          sunset: {
            label: "Sunset",
            winRate: "66%",
            description: "Reliable performance when anchoring defensive positions."
          }
        }
      }
    },
    {
      id: "viper",
      name: "V1PER",
      realName: "Nurlan Akhmet",
      role: "Controller",
      image: "assets/images/players/val/viper.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "18",
      bio: "Strategic controller with excellent round planning.",
      stats: {
        rating: "1.11",
        winRate: "66%",
        experience: "5 years"
      },
      parameters: {
        agent: {
          viper: {
            label: "Viper",
            rating: "1.16",
            description: "Controller specialist with strong area denial and post-plant execution."
          },
          omen: {
            label: "Omen",
            rating: "1.08",
            description: "Flexible controller capable of supporting fast site executions."
          }
        },
        map: {
          breeze: {
            label: "Breeze",
            winRate: "74%",
            description: "Excellent control of long sightlines and open areas."
          },
          icebox: {
            label: "Icebox",
            winRate: "68%",
            description: "Strong utility usage around vertical site structures."
          }
        }
      }
    },
    {
      id: "pulse",
      name: "PUL5E",
      realName: "Egor Ivanov",
      role: "Duelist",
      image: "assets/images/players/val/pulse.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "09",
      bio: "Fast-paced duelist who excels in opening engagements.",
      stats: {
        rating: "1.17",
        winRate: "63%",
        experience: "3 years"
      },
      parameters: {
        agent: {
          raze: {
            label: "Raze",
            rating: "1.21",
            description: "High-impact duelist with strong explosive entry potential."
          },
          neon: {
            label: "Neon",
            rating: "1.14",
            description: "Fast-paced entry player capable of breaking defensive setups."
          }
        },
        map: {
          split: {
            label: "Split",
            winRate: "70%",
            description: "Strong close-range engagements and effective site entries."
          },
          bind: {
            label: "Bind",
            winRate: "63%",
            description: "Reliable entry routes with strong utility coordination."
          }
        }
      }
    },
    {
      id: "atlas",
      name: "4TLAS",
      realName: "Dmitry Volk",
      role: "Initiator",
      image: "assets/images/players/val/atlas.png",
      country: "Kyrgyzstan",
      countryCode: "KG",
      number: "27",
      bio: "Initiator focused on gathering information and enabling entries.",
      stats: {
        rating: "1.10",
        winRate: "64%",
        experience: "4 years"
      },
      parameters: {
        agent: {
          breach: {
            label: "Breach",
            rating: "1.13",
            description: "Initiator focused on disrupting defensive positions and enabling entries."
          },
          kayo: {
            label: "KAY/O",
            rating: "1.08",
            description: "Utility-heavy initiator who suppresses enemy abilities during executes."
          }
        },
        map: {
          fracture: {
            label: "Fracture",
            winRate: "72%",
            description: "Strong utility impact across multiple attack routes."
          },
          haven: {
            label: "Haven",
            winRate: "64%",
            description: "Effective information gathering and coordinated site pressure."
          }
        }
      }
    },
    {
      id: "veil",
      name: "VE1L",
      realName: "Roman Grey",
      role: "Sentinel",
      image: "assets/images/players/val/veil.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "15",
      bio: "Calm defensive player with strong clutch potential.",
      stats: {
        rating: "1.13",
        winRate: "70%",
        experience: "5 years"
      },
      parameters: {
        agent: {
          cypher: {
            label: "Cypher",
            rating: "1.17",
            description: "Sentinel specialist with excellent information gathering and flank control."
          },
          sage: {
            label: "Sage",
            rating: "1.10",
            description: "Defensive specialist providing reliable support and area control."
          }
        },
        map: {
          haven: {
            label: "Haven",
            winRate: "75%",
            description: "Excellent defensive coverage across three bomb sites."
          },
          ascent: {
            label: "Ascent",
            winRate: "70%",
            description: "Strong control of defensive choke points and mid."
          }
        }
      }
    }
  ],

  dota2: [
    {
      id: "arna",
      name: "4RN4",
      realName: "Arna Bek",
      role: "Carry",
      image: "assets/images/players/dota2/arna.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "07",
      bio: "Late-game carry with exceptional farming efficiency.",
      stats: {
        rating: "8.4",
        winRate: "68%",
        experience: "6 years"
      },
      parameters: {
        role: {
          carry: {
            label: "Carry",
            rating: "8.7",
            description: "Late-game core focused on scaling and sustained damage."
          },
          farming: {
            label: "Farming",
            rating: "8.3",
            description: "Highly efficient at securing resources across the map."
          }
        },
        hero: {
          phantomAssassin: {
            label: "Phantom Assassin",
            winRate: "74%",
            description: "Strong late-game performance with high burst damage."
          },
          juggernaut: {
            label: "Juggernaut",
            winRate: "69%",
            description: "Reliable carry pick with strong lane pressure."
          }
        }
      }
    },
    {
      id: "storme",
      name: "ST0RMEE",
      realName: "Ylya Storm",
      role: "Mid",
      image: "assets/images/players/dota2/storme.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "10",
      bio: "Tempo-focused mid player with a highly aggressive style.",
      stats: {
        rating: "8.1",
        winRate: "65%",
        experience: "5 years"
      },
      parameters: {
        role: {
          mid: {
            label: "Mid",
            rating: "8.5",
            description: "Tempo-focused midlaner capable of creating advantages across the map."
          },
          ganking: {
            label: "Ganking",
            rating: "8.1",
            description: "Strong rotational player who applies pressure to side lanes."
          }
        },
        hero: {
          invoker: {
            label: "Invoker",
            winRate: "71%",
            description: "Versatile spellcaster with strong control and scaling potential."
          },
          stormSpirit: {
            label: "Storm Spirit",
            winRate: "67%",
            description: "Mobile mid hero capable of creating constant map pressure."
          }
        }
      }
    },
    {
      id: "warda",
      name: "W4RD4",
      realName: "Maksim Ray",
      role: "Support",
      image: "assets/images/players/dota2/warda.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "04",
      bio: "Vision-focused support responsible for map control.",
      stats: {
        rating: "7.7",
        winRate: "69%",
        experience: "7 years"
      },
      parameters: {
        role: {
          support: {
            label: "Support",
            rating: "7.9",
            description: "Team-oriented support focused on vision, positioning and utility."
          },
          roaming: {
            label: "Roaming",
            rating: "7.6",
            description: "Active support who creates opportunities through early rotations."
          }
        },
        hero: {
          rubick: {
            label: "Rubick",
            winRate: "73%",
            description: "High-impact support with strong spell-stealing potential."
          },
          lion: {
            label: "Lion",
            winRate: "68%",
            description: "Reliable disable-heavy support with strong pickoff potential."
          }
        }
      }
    },
    {
      id: "raven",
      name: "RAVEN",
      realName: "Tomiris Khan",
      role: "Offlane",
      image: "assets/images/players/dota2/raven.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "22",
      bio: "Durable offlaner who creates space for the team.",
      stats: {
        rating: "7.9",
        winRate: "66%",
        experience: "5 years"
      },
      parameters: {
        role: {
          offlane: {
            label: "Offlane",
            rating: "8.2",
            description: "Durable frontliner focused on creating space for the team."
          },
          initiator: {
            label: "Initiator",
            rating: "7.9",
            description: "Teamfight specialist who starts engagements and disrupts enemy formations."
          }
        },
        hero: {
          mars: {
            label: "Mars",
            winRate: "70%",
            description: "Strong initiation and teamfight control."
          },
          centaur: {
            label: "Centaur",
            winRate: "66%",
            description: "Durable frontliner with reliable initiation tools."
          }
        }
      }
    },
    {
      id: "sage",
      name: "SAGE",
      realName: "Nika Orlova",
      role: "Support",
      image: "assets/images/players/dota2/sage.png",
      country: "Russia",
      countryCode: "RU",
      number: "12",
      bio: "Support player with strong teamfight awareness.",
      stats: {
        rating: "7.8",
        winRate: "67%",
        experience: "6 years"
      },
      parameters: {
        role: {
          support: {
            label: "Support",
            rating: "7.8",
            description: "Reliable support focused on protecting cores and controlling fights."
          },
          defensive: {
            label: "Defensive",
            rating: "7.6",
            description: "Patient player who prioritizes positioning and team survival."
          }
        },
        hero: {
          dazzle: {
            label: "Dazzle",
            winRate: "72%",
            description: "Strong defensive support with powerful save potential."
          },
          oracle: {
            label: "Oracle",
            winRate: "67%",
            description: "Utility-focused support with excellent defensive abilities."
          }
        }
      }
    },
    {
      id: "ember",
      name: "EMBER",
      realName: "Ember Karim",
      role: "Mid",
      image: "assets/images/players/dota2/ember.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "18",
      bio: "Mechanical mid player specializing in high-mobility heroes.",
      stats: {
        rating: "8.2",
        winRate: "64%",
        experience: "4 years"
      },
      parameters: {
        role: {
          mid: {
            label: "Mid",
            rating: "8.3",
            description: "Aggressive midlaner focused on controlling tempo and creating space."
          },
          nuker: {
            label: "Nuker",
            rating: "8.0",
            description: "High-damage spellcaster who pressures opponents throughout the game."
          }
        },
        hero: {
          emberSpirit: {
            label: "Ember Spirit",
            winRate: "73%",
            description: "Highly mobile hero with strong initiation and escape potential."
          },
          puck: {
            label: "Puck",
            winRate: "68%",
            description: "Mobile control hero capable of disrupting teamfights."
          }
        }
      }
    },
    {
      id: "forta",
      name: "F0RT4",
      realName: "Romana Bek",
      role: "Offlane",
      image: "assets/images/players/dota2/forta.png",
      country: "Kyrgyzstan",
      countryCode: "KG",
      number: "25",
      bio: "Frontline player who creates space during team fights.",
      stats: {
        rating: "7.6",
        winRate: "63%",
        experience: "5 years"
      },
      parameters: {
        role: {
          offlane: {
            label: "Offlane",
            rating: "8.0",
            description: "Durable core focused on creating space and absorbing pressure."
          },
          tank: {
            label: "Tank",
            rating: "7.8",
            description: "Frontline specialist who protects teammates during engagements."
          }
        },
        hero: {
          tidehunter: {
            label: "Tidehunter",
            winRate: "71%",
            description: "Powerful teamfight initiator with strong area control."
          },
          axe: {
            label: "Axe",
            winRate: "65%",
            description: "Durable initiator capable of disrupting enemy formations."
          }
        }
      }
    },
    {
      id: "zowi",
      name: "Z0WEE",
      realName: "Zowi Grey",
      role: "Carry",
      image: "assets/images/players/dota2/zowi.png",
      country: "Kazakhstan",
      countryCode: "KZ",
      number: "31",
      bio: "Carry player focused on efficient farming and late-game scaling.",
      stats: {
        rating: "8.0",
        winRate: "66%",
        experience: "4 years"
      },
      parameters: {
        role: {
          carry: {
            label: "Carry",
            rating: "8.2",
            description: "Scaling core focused on maximizing late-game damage output."
          },
          splitPush: {
            label: "Split Push",
            rating: "7.9",
            description: "Strong map-pressure player who creates space through side lanes."
          }
        },
        hero: {
          luna: {
            label: "Luna",
            winRate: "72%",
            description: "Fast-scaling carry with strong farming and teamfight potential."
          },
          drowRanger: {
            label: "Drow Ranger",
            winRate: "67%",
            description: "High-damage ranged carry with strong late-game scaling."
          }
        }
      }
    }
  ]
};

const matchesData = [
  {
    status: "UPCOMING",
    game: "CS2",
    team: "VERTEX",
    score: "VS",
    date: "SEPT 28 / 19:00",
    tournament: "ESL Challenger",
  },
  {
    status: "UPCOMING",
    game: "VALORANT",
    team: "PHANTOM",
    score: "VS",
    date: "OCT 02 / 20:30",
    tournament: "VCT Open",
  },
  {
    status: "WIN",
    game: "CS2",
    team: "NOVA",
    score: "2 — 1",
    date: "SEPT 21 / FINAL",
    tournament: "Regional Cup",
  },
  {
    status: "UPCOMING",
    game: "DOTA 2",
    team: "TITANS",
    score: "VS",
    date: "OCT 05 / 18:00",
    tournament: "DreamLeague Open",
  },
  {
    status: "UPCOMING",
    game: "VALORANT",
    team: "RAVEN",
    score: "VS",
    date: "OCT 09 / 20:00",
    tournament: "VCT Open",
  },
  {
    status: "UPCOMING",
    game: "CS2",
    team: "FURY",
    score: "VS",
    date: "OCT 12 / 19:30",
    tournament: "Regional League",
  },
  {
    status: "UPCOMING",
    game: "CS2",
    team: "FALCONS",
    score: "VS",
    date: "OCT 16 / 18:30",
    tournament: "ESL Pro League",
  },
  {
    status: "WIN",
    game: "DOTA 2",
    team: "DRAGONS",
    score: "2 — 0",
    date: "OCT 18 / FINAL",
    tournament: "Central Asia Cup",
  },
  {
    status: "UPCOMING",
    game: "VALORANT",
    team: "APEX",
    score: "VS",
    date: "OCT 21 / 21:00",
    tournament: "VCT Challengers",
  },
];