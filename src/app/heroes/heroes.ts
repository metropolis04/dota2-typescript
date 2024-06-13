const dota2heroes = [
    {
        "id": 1,
        "name": "npc_dota_hero_antimage",
        "localized_name": "Anti-Mage",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/antimage.png?t=2024-06-10T15%3A02%3A34.649Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 2,
        "name": "npc_dota_hero_axe",
        "localized_name": "Axe",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/axe.png?t=2024-06-10T15%3A09%3A43.601Z   ",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Initiator",
            "Durable",
            "Disabler",
            "Carry"
        ],
        "legs": 2
    },
    {
        "id": 3,
        "name": "npc_dota_hero_bane",
        "localized_name": "Bane",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/bane.png?t=2024-06-10T15%3A10%3A16.304Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Disabler",
            "Nuker",
            "Durable"
        ],
        "legs": 4
    },
    {
        "id": 4,
        "name": "npc_dota_hero_bloodseeker",
        "localized_name": "Bloodseeker",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/bloodseeker.png?t=2024-06-10T15%3A10%3A32.425Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Disabler",
            "Nuker",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 5,
        "name": "npc_dota_hero_crystal_maiden",
        "localized_name": "Crystal Maiden",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/crystal_maiden.png?t=2024-06-10T15%3A10%3A45.190Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Disabler",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 6,
        "name": "npc_dota_hero_drow_ranger",
        "localized_name": "Drow Ranger",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/drow_ranger.png?t=2024-06-10T15%3A11%3A00.981Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Disabler",
            "Pusher"
        ],
        "legs": 2
    },
    {
        "id": 7,
        "name": "npc_dota_hero_earthshaker",
        "localized_name": "Earthshaker",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/earthshaker.png?t=2024-06-10T15%3A11%3A27.619Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Support",
            "Initiator",
            "Disabler",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 8,
        "name": "npc_dota_hero_juggernaut",
        "localized_name": "Juggernaut",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/juggernaut.png?t=2024-06-10T15%3A11%3A52.982Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Pusher",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 9,
        "name": "npc_dota_hero_mirana",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/mirana.png?t=2024-06-10T15%3A12%3A09.695Z",
        "localized_name": "Mirana",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Support",
            "Escape",
            "Nuker",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 10,
        "name": "npc_dota_hero_morphling",
        "localized_name": "Morphling",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/morphling.png?t=2024-06-10T15%3A12%3A23.926Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Escape",
            "Durable",
            "Nuker",
            "Disabler"
        ],
        "legs": 0
    },
    {
        "id": 11,
        "name": "npc_dota_hero_nevermore",
        "localized_name": "Shadow Fiend",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/nevermore.png?t=2024-06-10T15%3A13%3A37.480Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Nuker"
        ],
        "legs": 0
    },
    {
        "id": 12,
        "name": "npc_dota_hero_phantom_lancer",
        "localized_name": "Phantom Lancer",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/phantom_lancer.png?t=2024-06-10T15%3A13%3A57.449Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape",
            "Pusher",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 13,
        "name": "npc_dota_hero_puck",
        "localized_name": "Puck",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/puck.png?t=2024-06-10T15%3A14%3A09.950Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Initiator",
            "Disabler",
            "Escape",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 14,
        "name": "npc_dota_hero_pudge",
        "localized_name": "Pudge",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/pudge.png?t=2024-06-10T15%3A14%3A19.566Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Disabler",
            "Initiator",
            "Durable",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 15,
        "name": "npc_dota_hero_razor",
        "localized_name": "Razor",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/razor.png?t=2024-06-10T15%3A14%3A38.882Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Durable",
            "Nuker",
            "Pusher"
        ],
        "legs": 0
    },
    {
        "id": 16,
        "name": "npc_dota_hero_sand_king",
        'image' : 'https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/sand_king.png?t=2024-06-10T15%3A15%3A04.208Z',
        "localized_name": "Sand King",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Initiator",
            "Disabler",
            "Support",
            "Nuker",
            "Escape"
        ],
        "legs": 6
    },
    {
        "id": 17,
        "name": "npc_dota_hero_storm_spirit",
        "localized_name": "Storm Spirit",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/storm_spirit.png?t=2024-06-10T15%3A15%3A25.342Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Escape",
            "Nuker",
            "Initiator",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 18,
        "name": "npc_dota_hero_sven",
        "localized_name": "Sven",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/sven.png?t=2024-06-10T15%3A15%3A38.367Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Disabler",
            "Initiator",
            "Durable",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 19,
        "name": "npc_dota_hero_tiny",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/tiny.png?t=2024-06-10T15%3A16%3A04.413Z",
        "localized_name": "Tiny",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Nuker",
            "Pusher",
            "Initiator",
            "Durable",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 20,
        "name": "npc_dota_hero_vengefulspirit",
        "localized_name": "Vengeful Spirit",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/vengefulspirit.png?t=2024-06-10T15%3A16%3A39.979Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Initiator",
            "Disabler",
            "Nuker",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 21,
        "name": "npc_dota_hero_windrunner",
        "localized_name": "Windranger",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/windrunner.png?t=2024-06-10T15%3A17%3A57.661Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Support",
            "Disabler",
            "Escape",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 22,
        "name": "npc_dota_hero_zuus",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/zuus.png?t=2024-06-10T15%3A18%3A14.458Z",
        "localized_name": "Zeus",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Nuker",
            "Carry"
        ],
        "legs": 2
    },
    {
        "id": 23,
        "name": "npc_dota_hero_kunkka",
        "localized_name": "Kunkka",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/kunkka.png?t=2024-06-10T15%3A18%3A50.012Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Support",
            "Disabler",
            "Initiator",
            "Durable",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 25,
        "name": "npc_dota_hero_lina",
        "localized_name": "Lina",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/lina.png?t=2024-06-10T15%3A19%3A03.143Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Carry",
            "Nuker",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 26,
        "name": "npc_dota_hero_lion",
        "localized_name": "Lion",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/lion.png?t=2024-06-10T15%3A19%3A14.130Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Disabler",
            "Nuker",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 27,
        "name": "npc_dota_hero_shadow_shaman",
        "localized_name": "Shadow Shaman",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/shadow_shaman.png?t=2024-06-10T15%3A19%3A28.125Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Pusher",
            "Disabler",
            "Nuker",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 28,
        "name": "npc_dota_hero_slardar",
        "localized_name": "Slardar",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/slardar.png?t=2024-06-10T15%3A19%3A40.936Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Durable",
            "Initiator",
            "Disabler",
            "Escape"
        ],
        "legs": 0
    },
    {
        "id": 29,
        "name": "npc_dota_hero_tidehunter",
        "localized_name": "Tidehunter",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/tidehunter.png?t=2024-06-10T15%3A19%3A58.871Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Initiator",
            "Durable",
            "Disabler",
            "Nuker",
            "Carry"
        ],
        "legs": 2
    },
    {
        "id": 30,
        "name": "npc_dota_hero_witch_doctor",
        "localized_name": "Witch Doctor",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/witch_doctor.png?t=2024-06-10T15%3A20%3A10.053Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 31,
        "name": "npc_dota_hero_lich",
        "localized_name": "Lich",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/lich.png?t=2024-06-10T15%3A20%3A25.730Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 32,
        "name": "npc_dota_hero_riki",
        "localized_name": "Riki",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/riki.png?t=2024-06-10T15%3A20%3A44.435Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 33,
        "name": "npc_dota_hero_enigma",
        "localized_name": "Enigma",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/enigma.png?t=2024-06-10T15%3A20%3A55.896Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Disabler",
            "Initiator",
            "Pusher"
        ],
        "legs": 0
    },
    {
        "id": 34,
        "name": "npc_dota_hero_tinker",
        "localized_name": "Tinker",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/tinker.png?t=2024-06-10T15%3A21%3A17.074Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Nuker",
            "Pusher"
        ],
        "legs": 2
    },
    {
        "id": 35,
        "name": "npc_dota_hero_sniper",
        "localized_name": "Sniper",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/sniper.png?t=2024-06-10T19%3A37%3A14.883Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 36,
        "name": "npc_dota_hero_necrolyte",
        "localized_name": "Necrophos",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/necrolyte.png?t=2024-06-10T19%3A37%3A58.251Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Nuker",
            "Durable",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 37,
        "name": "npc_dota_hero_warlock",
        "localized_name": "Warlock",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/warlock.png?t=2024-06-10T19%3A38%3A16.372Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Initiator",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 38,
        "name": "npc_dota_hero_beastmaster",
        "localized_name": "Beastmaster",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/beastmaster.png?t=2024-06-10T19%3A38%3A30.794Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Initiator",
            "Disabler",
            "Durable",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 39,
        "name": "npc_dota_hero_queenofpain",
        "localized_name": "Queen of Pain",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/queenofpain.png?t=2024-06-10T19%3A39%3A46.008Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Nuker",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 40,
        "name": "npc_dota_hero_venomancer",
        "localized_name": "Venomancer",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/venomancer.png?t=2024-06-10T19%3A40%3A18.114Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Initiator",
            "Pusher",
            "Disabler"
        ],
        "legs": 0
    },
    {
        "id": 41,
        "name": "npc_dota_hero_faceless_void",
        "localized_name": "Faceless Void",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/faceless_void.png?t=2024-06-10T19%3A41%3A08.209Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Initiator",
            "Disabler",
            "Escape",
            "Durable"
        ],
        "legs": 2
    },
    {
        "id": 42,
        "name": "npc_dota_hero_skeleton_king",
        "localized_name": "Wraith King",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/skeleton_king.png?t=2024-06-10T19%3A41%3A49.970Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Support",
            "Durable",
            "Disabler",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 43,
        "name": "npc_dota_hero_death_prophet",
        "localized_name": "Death Prophet",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/death_prophet.png?t=2024-06-10T19%3A42%3A08.894Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Pusher",
            "Nuker",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 44,
        "name": "npc_dota_hero_phantom_assassin",
        "localized_name": "Phantom Assassin",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/death_prophet.png?t=2024-06-10T19%3A42%3A08.894Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 45,
        "name": "npc_dota_hero_pugna",
        "localized_name": "Pugna",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/pugna.png?t=2024-06-10T19%3A42%3A44.334Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Nuker",
            "Pusher"
        ],
        "legs": 2
    },
    {
        "id": 46,
        "name": "npc_dota_hero_templar_assassin",
        "localized_name": "Templar Assassin",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/templar_assassin.png?t=2024-06-10T19%3A44%3A56.086Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 47,
        "name": "npc_dota_hero_viper",
        "localized_name": "Viper",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/templar_assassin.png?t=2024-06-10T19%3A44%3A56.086Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Durable",
            "Initiator",
            "Disabler"
        ],
        "legs": 0
    },
    {
        "id": 48,
        "name": "npc_dota_hero_luna",
        "localized_name": "Luna",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/luna.png?t=2024-06-10T19%3A45%3A28.709Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Nuker",
            "Pusher"
        ],
        "legs": 2
    },
    {
        "id": 49,
        "name": "npc_dota_hero_dragon_knight",
        "localized_name": "Dragon Knight",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/dragon_knight.png?t=2024-06-10T19%3A45%3A49.289Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Pusher",
            "Durable",
            "Disabler",
            "Initiator",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 50,
        "name": "npc_dota_hero_dazzle",
        "localized_name": "Dazzle",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/dazzle.png?t=2024-06-10T19%3A46%3A01.123Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 51,
        "name": "npc_dota_hero_rattletrap",
        "localized_name": "Clockwerk",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/rattletrap.png?t=2024-06-10T19%3A47%3A33.161Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Initiator",
            "Disabler",
            "Durable",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 52,
        "name": "npc_dota_hero_leshrac",
        "localized_name": "Leshrac",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/leshrac.png?t=2024-06-10T19%3A47%3A52.921Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Support",
            "Nuker",
            "Pusher",
            "Disabler"
        ],
        "legs": 4
    },
    {
        "id": 53,
        "name": "npc_dota_hero_furion",
        "localized_name": "Nature's Prophet",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/furion.png?t=2024-06-10T19%3A48%3A08.969Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Pusher",
            "Escape",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 54,
        "name": "npc_dota_hero_life_stealer",
        "localized_name": "Lifestealer",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/life_stealer.png?t=2024-06-10T19%3A48%3A23.430Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Durable",
            "Escape",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 55,
        "name": "npc_dota_hero_dark_seer",
        "localized_name": "Dark Seer",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/dark_seer.png?t=2024-06-10T19%3A48%3A39.128Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Initiator",
            "Escape",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 56,
        "name": "npc_dota_hero_clinkz",
        "localized_name": "Clinkz",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/dark_seer.png?t=2024-06-10T19%3A48%3A39.128Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Escape",
            "Pusher"
        ],
        "legs": 2
    },
    {
        "id": 57,
        "name": "npc_dota_hero_omniknight",
        "localized_name": "Omniknight",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/dark_seer.png?t=2024-06-10T19%3A48%3A39.128Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Support",
            "Durable",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 58,
        "name": "npc_dota_hero_enchantress",
        "localized_name": "Enchantress",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/dark_seer.png?t=2024-06-10T19%3A48%3A39.128Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Pusher",
            "Durable",
            "Disabler"
        ],
        "legs": 4
    },
    {
        "id": 59,
        "name": "npc_dota_hero_huskar",
        "localized_name": "Huskar",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/huskar.png?t=2024-06-10T19%3A50%3A18.037Z",
        "primary_attr": "str",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Durable",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 60,
        "name": "npc_dota_hero_night_stalker",
        "localized_name": "Night Stalker",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/night_stalker.png?t=2024-06-10T19%3A50%3A46.709Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Initiator",
            "Durable",
            "Disabler",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 61,
        "name": "npc_dota_hero_broodmother",
        "localized_name": "Broodmother",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/broodmother.png?t=2024-06-10T19%3A51%3A01.972Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Pusher",
            "Escape",
            "Nuker"
        ],
        "legs": 8
    },
    {
        "id": 62,
        "name": "npc_dota_hero_bounty_hunter",
        "localized_name": "Bounty Hunter",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/bounty_hunter.png?t=2024-06-10T19%3A51%3A13.733Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Escape",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 63,
        "name": "npc_dota_hero_weaver",
        "localized_name": "Weaver",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/weaver.png?t=2024-06-10T19%3A51%3A26.841Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Escape"
        ],
        "legs": 4
    },
    {
        "id": 64,
        "name": "npc_dota_hero_jakiro",
        "localized_name": "Jakiro",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/jakiro.png?t=2024-06-10T19%3A52%3A06.624Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Pusher",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 65,
        "name": "npc_dota_hero_batrider",
        "localized_name": "Batrider",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/batrider.png?t=2024-06-10T19%3A52%3A18.608Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Initiator",
            "Disabler",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 66,
        "name": "npc_dota_hero_chen",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/chen.png?t=2024-06-10T19%3A52%3A30.447Z",
        "localized_name": "Chen",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Pusher"
        ],
        "legs": 2
    },
    {
        "id": 67,
        "name": "npc_dota_hero_spectre",
        "localized_name": "Spectre",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/spectre.png?t=2024-06-10T19%3A52%3A53.674Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Durable",
            "Escape"
        ],
        "legs": 0
    },
    {
        "id": 68,
        "name": "npc_dota_hero_ancient_apparition",
        "localized_name": "Ancient Apparition",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/ancient_apparition.png?t=2024-06-10T19%3A53%3A08.260Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Disabler",
            "Nuker"
        ],
        "legs": 0
    },
    {
        "id": 69,
        "name": "npc_dota_hero_doom_bringer",
        "localized_name": "Doom",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/doom_bringer.png?t=2024-06-10T19%3A53%3A24.652Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Disabler",
            "Initiator",
            "Durable",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 70,
        "name": "npc_dota_hero_ursa",
        "localized_name": "Ursa",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/ursa.png?t=2024-06-10T19%3A53%3A42.545Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Durable",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 71,
        "name": "npc_dota_hero_spirit_breaker",
        "localized_name": "Spirit Breaker",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/spirit_breaker.png?t=2024-06-10T19%3A53%3A55.333Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Initiator",
            "Disabler",
            "Durable",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 72,
        "name": "npc_dota_hero_gyrocopter",
        "localized_name": "Gyrocopter",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/gyrocopter.png?t=2024-06-10T19%3A54%3A07.769Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Nuker",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 73,
        "name": "npc_dota_hero_alchemist",
        "localized_name": "Alchemist",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/gyrocopter.png?t=2024-06-10T19%3A54%3A07.769Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Support",
            "Durable",
            "Disabler",
            "Initiator",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 74,
        "name": "npc_dota_hero_invoker",
        "localized_name": "Invoker",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/invoker.png?t=2024-06-10T19%3A54%3A42.726Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Nuker",
            "Disabler",
            "Escape",
            "Pusher"
        ],
        "legs": 2
    },
    {
        "id": 75,
        "name": "npc_dota_hero_silencer",
        "localized_name": "Silencer",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/silencer.png?t=2024-06-10T19%3A54%3A58.188Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Support",
            "Disabler",
            "Initiator",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 76,
        "name": "npc_dota_hero_obsidian_destroyer",
        "localized_name": "Outworld Destroyer",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/obsidian_destroyer.png?t=2024-06-10T19%3A55%3A43.505Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Nuker",
            "Disabler"
        ],
        "legs": 4
    },
    {
        "id": 77,
        "name": "npc_dota_hero_lycan",
        "localized_name": "Lycan",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/lycan.png?t=2024-06-10T19%3A56%3A00.422Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Pusher",
            "Durable",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 78,
        "name": "npc_dota_hero_brewmaster",
        "localized_name": "Brewmaster",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/brewmaster.png?t=2024-06-10T19%3A56%3A15.499Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Initiator",
            "Durable",
            "Disabler",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 79,
        "name": "npc_dota_hero_shadow_demon",
        "localized_name": "Shadow Demon",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/shadow_demon.png?t=2024-06-10T19%3A56%3A35.118Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Disabler",
            "Initiator",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 80,
        "name": "npc_dota_hero_lone_druid",
        "localized_name": "Lone Druid",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/lone_druid.png?t=2024-06-10T19%3A56%3A55.556Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Pusher",
            "Durable"
        ],
        "legs": 2
    },
    {
        "id": 81,
        "name": "npc_dota_hero_chaos_knight",
        "localized_name": "Chaos Knight",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/chaos_knight.png?t=2024-06-10T19%3A57%3A09.720Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Disabler",
            "Durable",
            "Pusher",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 82,
        "name": "npc_dota_hero_meepo",
        "localized_name": "Meepo",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/meepo.png?t=2024-06-10T19%3A57%3A26.035Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape",
            "Nuker",
            "Disabler",
            "Initiator",
            "Pusher"
        ],
        "legs": 2
    },
    {
        "id": 83,
        "name": "npc_dota_hero_treant",
        "localized_name": "Treant Protector",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/treant.png?t=2024-06-10T19%3A57%3A50.082Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Support",
            "Initiator",
            "Durable",
            "Disabler",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 84,
        "name": "npc_dota_hero_ogre_magi",
        "localized_name": "Ogre Magi",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/ogre_magi.png?t=2024-06-10T19%3A58%3A05.291Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Support",
            "Nuker",
            "Disabler",
            "Durable",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 85,
        "name": "npc_dota_hero_undying",
        "localized_name": "Undying",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/undying.png?t=2024-06-10T19%3A58%3A45.649Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Support",
            "Durable",
            "Disabler",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 86,
        "name": "npc_dota_hero_rubick",
        "localized_name": "Rubick",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/rubick.png?t=2024-06-10T19%3A59%3A41.409Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Disabler",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 87,
        "name": "npc_dota_hero_disruptor",
        "localized_name": "Disruptor",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/rubick.png?t=2024-06-10T19%3A59%3A41.409Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Disabler",
            "Nuker",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 88,
        "name": "npc_dota_hero_nyx_assassin",
        "localized_name": "Nyx Assassin",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/rubick.png?t=2024-06-10T19%3A59%3A41.409Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Disabler",
            "Nuker",
            "Initiator",
            "Escape"
        ],
        "legs": 6
    },
    {
        "id": 89,
        "name": "npc_dota_hero_naga_siren",
        "localized_name": "Naga Siren",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/naga_siren.png?t=2024-06-10T20%3A00%3A25.649Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Support",
            "Pusher",
            "Disabler",
            "Initiator",
            "Escape"
        ],
        "legs": 0
    },
    {
        "id": 90,
        "name": "npc_dota_hero_keeper_of_the_light",
        "localized_name": "Keeper of the Light",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/keeper_of_the_light.png?t=2024-06-10T20%3A00%3A54.054Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 91,
        "name": "npc_dota_hero_wisp",
        "localized_name": "Io",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/wisp.png?t=2024-06-10T20%3A01%3A21.854Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Escape",
            "Nuker"
        ],
        "legs": 0
    },
    {
        "id": 92,
        "name": "npc_dota_hero_visage",
        "localized_name": "Visage",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/visage.png?t=2024-06-10T20%3A01%3A49.321Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Durable",
            "Disabler",
            "Pusher"
        ],
        "legs": 2
    },
    {
        "id": 93,
        "name": "npc_dota_hero_slark",
        "localized_name": "Slark",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/visage.png?t=2024-06-10T20%3A01%3A49.321Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape",
            "Disabler",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 94,
        "name": "npc_dota_hero_medusa",
        "localized_name": "Medusa",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/medusa.png?t=2024-06-10T20%3A02%3A17.840Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Disabler",
            "Durable"
        ],
        "legs": 0
    },
    {
        "id": 95,
        "name": "npc_dota_hero_troll_warlord",
        "localized_name": "Troll Warlord",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/troll_warlord.png?t=2024-06-10T20%3A02%3A44.773Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Pusher",
            "Disabler",
            "Durable"
        ],
        "legs": 2
    },
    {
        "id": 96,
        "name": "npc_dota_hero_centaur",
        "localized_name": "Centaur Warrunner",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/centaur.png?t=2024-06-10T20%3A03%3A00.018Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Durable",
            "Initiator",
            "Disabler",
            "Nuker",
            "Escape"
        ],
        "legs": 4
    },
    {
        "id": 97,
        "name": "npc_dota_hero_magnataur",
        "localized_name": "Magnus",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/magnataur.png?t=2024-06-10T20%3A03%3A19.698Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Initiator",
            "Disabler",
            "Nuker",
            "Escape"
        ],
        "legs": 4
    },
    {
        "id": 98,
        "name": "npc_dota_hero_shredder",
        "localized_name": "Timbersaw",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/shredder.png?t=2024-06-10T20%3A03%3A52.191Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Nuker",
            "Durable",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 99,
        "name": "npc_dota_hero_bristleback",
        "localized_name": "Bristleback",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/bristleback.png?t=2024-06-10T20%3A04%3A07.464Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Durable",
            "Initiator",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 100,
        "name": "npc_dota_hero_tusk",
        "localized_name": "Tusk",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/tusk.png?t=2024-06-10T20%3A04%3A27.261Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Initiator",
            "Disabler",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 101,
        "name": "npc_dota_hero_skywrath_mage",
        "localized_name": "Skywrath Mage",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/skywrath_mage.png?t=2024-06-10T20%3A04%3A41.510Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 102,
        "name": "npc_dota_hero_abaddon",
        "localized_name": "Abaddon",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/abaddon.png?t=2024-06-10T20%3A04%3A52.418Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Support",
            "Carry",
            "Durable"
        ],
        "legs": 2
    },
    {
        "id": 103,
        "name": "npc_dota_hero_elder_titan",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/elder_titan.png?t=2024-06-10T20%3A05%3A08.423Z",
        "localized_name": "Elder Titan",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Initiator",
            "Disabler",
            "Nuker",
            "Durable"
        ],
        "legs": 2
    },
    {
        "id": 104,
        "name": "npc_dota_hero_legion_commander",
        "localized_name": "Legion Commander",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/legion_commander.png?t=2024-06-10T20%3A05%3A23.343Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Disabler",
            "Initiator",
            "Durable",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 105,
        "name": "npc_dota_hero_techies",
        "localized_name": "Techies",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/techies.png?t=2024-06-10T20%3A05%3A39.968Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Nuker",
            "Disabler"
        ],
        "legs": 6
    },
    {
        "id": 106,
        "name": "npc_dota_hero_ember_spirit",
        "localized_name": "Ember Spirit",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/ember_spirit.png?t=2024-06-10T20%3A06%3A12.134Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape",
            "Nuker",
            "Disabler",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 107,
        "name": "npc_dota_hero_earth_spirit",
        "localized_name": "Earth Spirit",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/earth_spirit.png?t=2024-06-10T20%3A06%3A23.556Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Nuker",
            "Escape",
            "Disabler",
            "Initiator",
            "Durable"
        ],
        "legs": 2
    },
    {
        "id": 108,
        "name": "npc_dota_hero_abyssal_underlord",
        "localized_name": "Underlord",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/earth_spirit.png?t=2024-06-10T20%3A06%3A23.556Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Support",
            "Nuker",
            "Disabler",
            "Durable",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 109,
        "name": "npc_dota_hero_terrorblade",
        "localized_name": "Terrorblade",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/terrorblade.png?t=2024-06-10T20%3A07%3A18.959Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Pusher",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 110,
        "name": "npc_dota_hero_phoenix",
        "localized_name": "Phoenix",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/phoenix.png?t=2024-06-10T20%3A07%3A30.947Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Initiator",
            "Escape",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 111,
        "name": "npc_dota_hero_oracle",
        "localized_name": "Oracle",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/oracle.png?t=2024-06-10T20%3A07%3A51.753Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Disabler",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 112,
        "name": "npc_dota_hero_winter_wyvern",
        "localized_name": "Winter Wyvern",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/winter_wyvern.png?t=2024-06-10T20%3A08%3A05.867Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Disabler",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 113,
        "name": "npc_dota_hero_arc_warden",
        "localized_name": "Arc Warden",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/arc_warden.png?t=2024-06-10T20%3A08%3A21.643Z",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Escape",
            "Nuker"
        ],
        "legs": 2
    },
    {
        "id": 114,
        "name": "npc_dota_hero_monkey_king",
        "localized_name": "Monkey King",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/monkey_king.png?t=2024-06-10T20%3A08%3A38.585Z",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape",
            "Disabler",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 119,
        "name": "npc_dota_hero_dark_willow",
        "localized_name": "Dark Willow",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/dark_willow.png?t=2024-06-10T20%3A08%3A57.722Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Disabler",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 120,
        "name": "npc_dota_hero_pangolier",
        "localized_name": "Pangolier",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/pangolier.png?t=2024-06-10T20%3A09%3A21.468Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Nuker",
            "Disabler",
            "Durable",
            "Escape",
            "Initiator"
        ],
        "legs": 2
    },
    {
        "id": 121,
        "name": "npc_dota_hero_grimstroke",
        "localized_name": "Grimstroke",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/grimstroke.png?t=2024-06-10T20%3A09%3A41.689Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Disabler",
            "Escape"
        ],
        "legs": 0
    },
    {
        "id": 123,
        "name": "npc_dota_hero_hoodwink",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/hoodwink.png?t=2024-06-10T20%3A10%3A30.124Z",
        "localized_name": "Hoodwink",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Escape",
            "Disabler"
        ],
        "legs": 4
    },
    {
        "id": 126,
        "name": "npc_dota_hero_void_spirit",
        "localized_name": "Void Spirit",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/void_spirit.png?t=2024-06-10T20%3A10%3A55.441Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape",
            "Nuker",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 128,
        "name": "npc_dota_hero_snapfire",
        "localized_name": "Snapfire",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/snapfire.png?t=2024-06-10T20%3A11%3A12.197Z",
        "primary_attr": "all",
        "attack_type": "Ranged",
        "roles": [
            "Support",
            "Nuker",
            "Disabler",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 129,
        "name": "npc_dota_hero_mars",
        "localized_name": "Mars",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/mars.png?t=2024-06-10T20%3A11%3A30.368Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Initiator",
            "Disabler",
            "Durable"
        ],
        "legs": 2
    },
    {
        "id": 135,
        "name": "npc_dota_hero_dawnbreaker",
        "localized_name": "Dawnbreaker",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/dawnbreaker.png?t=2024-06-10T20%3A11%3A46.223Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Durable"
        ],
        "legs": 2
    },
    {
        "id": 136,
        "name": "npc_dota_hero_marci",
        "localized_name": "Marci",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/marci.png?t=2024-06-10T20%3A12%3A02.819Z",
        "primary_attr": "all",
        "attack_type": "Melee",
        "roles": [
            "Support",
            "Carry",
            "Initiator",
            "Disabler",
            "Escape"
        ],
        "legs": 2
    },
    {
        "id": 137,
        "name": "npc_dota_hero_primal_beast",
        "localized_name": "Primal Beast",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/marci.png?t=2024-06-10T20%3A12%3A02.819Z",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": [
            "Initiator",
            "Durable",
            "Disabler"
        ],
        "legs": 2
    },
    {
        "id": 138,
        "name": "npc_dota_hero_muerta",
        "localized_name": "Muerta",
        "image" : "https://hvazzksemczbiehbohtw.supabase.co/storage/v1/object/public/heroes/images/muerta.png?t=2024-06-10T20%3A12%3A48.720Z",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": [
            "Carry",
            "Nuker",
            "Disabler"
        ],
        "legs": 2
    }
]

export default dota2heroes