const mockPatients = [
  {
      $id: "pat_001",
      patName: "Priya Sharma",
      patAge: "32",
      patGender: "Female",
      patHeight: "165",
      patWeight: "58",
      patBloodGroup: "A+",
      patEmail: "priya.sharma@email.com",
      patMobNumber: "9876543210",
  },
  {
      $id: "pat_002",
      patName: "Rajesh Kumar",
      patAge: "45",
      patGender: "Male",
      patHeight: "175",
      patWeight: "72",
      patBloodGroup: "B+",
      patEmail: "rajesh.kumar@email.com",
      patMobNumber: "9876543211",
  },
  {
      $id: "pat_003",
      patName: "Anjali Mehta",
      patAge: "28",
      patGender: "Female",
      patHeight: "160",
      patWeight: "55",
      patBloodGroup: "O+",
      patEmail: "anjali.mehta@email.com",
      patMobNumber: "9876543212",
  },
  {
      $id: "pat_004",
      patName: "Arjun Patel",
      patAge: "38",
      patGender: "Male",
      patHeight: "178",
      patWeight: "80",
      patBloodGroup: "AB+",
      patEmail: "arjun.patel@email.com",
      patMobNumber: "9876543213",
  },
  {
      $id: "pat_005",
      patName: "Sneha Verma",
      patAge: "26",
      patGender: "Female",
      patHeight: "162",
      patWeight: "54",
      patBloodGroup: "O-",
      patEmail: "sneha.verma@email.com",
      patMobNumber: "9876543214",
  },
  {
      $id: "pat_006",
      patName: "Amit Joshi",
      patAge: "50",
      patGender: "Male",
      patHeight: "170",
      patWeight: "76",
      patBloodGroup: "B-",
      patEmail: "amit.joshi@email.com",
      patMobNumber: "9876543215",
  },
  {
      $id: "pat_007",
      patName: "Kavita Nair",
      patAge: "35",
      patGender: "Female",
      patHeight: "158",
      patWeight: "60",
      patBloodGroup: "A-",
      patEmail: "kavita.nair@email.com",
      patMobNumber: "9876543216",
  },
  {
      $id: "pat_008",
      patName: "Vikram Singh",
      patAge: "41",
      patGender: "Male",
      patHeight: "180",
      patWeight: "85",
      patBloodGroup: "O+",
      patEmail: "vikram.singh@email.com",
      patMobNumber: "9876543217",
  },
  {
      $id: "pat_009",
      patName: "Neha Gupta",
      patAge: "29",
      patGender: "Female",
      patHeight: "164",
      patWeight: "59",
      patBloodGroup: "B+",
      patEmail: "neha.gupta@email.com",
      patMobNumber: "9876543218",
  },
  {
      $id: "pat_010",
      patName: "Suresh Reddy",
      patAge: "47",
      patGender: "Male",
      patHeight: "172",
      patWeight: "78",
      patBloodGroup: "AB-",
      patEmail: "suresh.reddy@email.com",
      patMobNumber: "9876543219",
  },
  {
      $id: "pat_011",
      patName: "Meera Iyer",
      patAge: "31",
      patGender: "Female",
      patHeight: "161",
      patWeight: "57",
      patBloodGroup: "A+",
      patEmail: "meera.iyer@email.com",
      patMobNumber: "9876543220",
  },
  {
      $id: "pat_012",
      patName: "Rohan Desai",
      patAge: "36",
      patGender: "Male",
      patHeight: "177",
      patWeight: "74",
      patBloodGroup: "O+",
      patEmail: "rohan.desai@email.com",
      patMobNumber: "9876543221",
  },
];


const mockReports = [
    {
      "$id": "report_cd4b718d",
      "patID": "pat_001",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "New Patient",
      "patName": "Priya Sharma",
      "patAge": 32,
      "patGender": "Female",
      "patHeight": "165 cm",
      "patWeight": "58 kg",
      "lifestyle": "Moderate",
      "prakriti": "Vata-Pitta",
      "conditions": "Acidity, Skin issues",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "8-7 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Oats with almonds",
          "grams": "50g oats + 10 almonds",
          "calories": 320
        },
        "lunch": {
          "name": "Dal rice with vegetables",
          "grams": "100g rice + 50g dal + 100g vegetables",
          "calories": 450
        },
        "highTea": {
          "name": "Herbal tea with biscuits",
          "grams": "1 cup tea + 2 biscuits",
          "calories": 150
        },
        "dinner": {
          "name": "Khichdi with ghee",
          "grams": "80g khichdi + 1 tsp ghee",
          "calories": 280
        }
      },
      "$createdAt": "2025-09-05T01:19:45.879302",
      "$updatedAt": "2025-09-05T01:19:45.879302"
    },
    {
      "$id": "report_d9d0766e",
      "patID": "pat_001",
      "docID": "doc_003",
      "docName": "Dr. Kavita Nair",
      "visitType": "New Patient",
      "patName": "Priya Sharma",
      "patAge": 32,
      "patGender": "Female",
      "patHeight": "165 cm",
      "patWeight": "58 kg",
      "lifestyle": "Moderate",
      "prakriti": "Kapha",
      "conditions": "Back pain, Stress",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "5-5 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-08-23",
      "dietChart": {
        "breakfast": {
          "name": "Oats with almonds",
          "grams": "50g oats + 10 almonds",
          "calories": 320
        },
        "lunch": {
          "name": "Dal rice with vegetables",
          "grams": "100g rice + 50g dal + 100g vegetables",
          "calories": 450
        },
        "highTea": {
          "name": "Herbal tea with biscuits",
          "grams": "1 cup tea + 2 biscuits",
          "calories": 150
        },
        "dinner": {
          "name": "Khichdi with ghee",
          "grams": "80g khichdi + 1 tsp ghee",
          "calories": 280
        }
      },
      "$createdAt": "2025-08-13T08:19:45.879302",
      "$updatedAt": "2025-08-13T08:19:45.879302"
    },
    {
      "$id": "report_803c3eb9",
      "patID": "pat_001",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "Follow-up",
      "patName": "Priya Sharma",
      "patAge": 32,
      "patGender": "Female",
      "patHeight": "165 cm",
      "patWeight": "58 kg",
      "lifestyle": "Active",
      "prakriti": "Vata-Pitta",
      "conditions": "Acidity, Skin issues",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "7-8 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-09-10T02:19:45.879302",
      "$updatedAt": "2025-09-10T02:19:45.879302"
    },
    {
      "$id": "report_1deadecc",
      "patID": "pat_002",
      "docID": "doc_001",
      "docName": "Dr. Rajesh Kumar",
      "visitType": "New Patient",
      "patName": "Rajesh Kumar",
      "patAge": 45,
      "patGender": "Male",
      "patHeight": "175 cm",
      "patWeight": "72 kg",
      "lifestyle": "Moderate",
      "prakriti": "Kapha-Vata",
      "conditions": "Diabetes, Hypertension",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "3-8 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-09-04T14:19:45.879302",
      "$updatedAt": "2025-09-04T14:19:45.879302"
    },
    {
      "$id": "report_4f6ae0e2",
      "patID": "pat_002",
      "docID": "doc_004",
      "docName": "Dr. Suresh Reddy",
      "visitType": "Consultation",
      "patName": "Rajesh Kumar",
      "patAge": 45,
      "patGender": "Male",
      "patHeight": "175 cm",
      "patWeight": "72 kg",
      "lifestyle": "Moderate",
      "prakriti": "Vata-Pitta",
      "conditions": "Back pain, Stress",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "8-6 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Oats with almonds",
          "grams": "50g oats + 10 almonds",
          "calories": 320
        },
        "lunch": {
          "name": "Dal rice with vegetables",
          "grams": "100g rice + 50g dal + 100g vegetables",
          "calories": 450
        },
        "highTea": {
          "name": "Herbal tea with biscuits",
          "grams": "1 cup tea + 2 biscuits",
          "calories": 150
        },
        "dinner": {
          "name": "Khichdi with ghee",
          "grams": "80g khichdi + 1 tsp ghee",
          "calories": 280
        }
      },
      "$createdAt": "2025-09-11T12:42:00",
      "$updatedAt": "2025-09-11T12:42:00"
    },
    {
      "$id": "report_4d6085e4",
      "patID": "pat_002",
      "docID": "doc_001",
      "docName": "Dr. Rajesh Kumar",
      "visitType": "Consultation",
      "patName": "Rajesh Kumar",
      "patAge": 45,
      "patGender": "Male",
      "patHeight": "175 cm",
      "patWeight": "72 kg",
      "lifestyle": "Moderate",
      "prakriti": "Vata-Pitta",
      "conditions": "Insomnia",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "3-6 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-09-11T20:11:00",
      "$updatedAt": "2025-09-11T20:11:00"
    },
    {
      "$id": "report_aeb416b0",
      "patID": "pat_003",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "Consultation",
      "patName": "Anjali Mehta",
      "patAge": 28,
      "patGender": "Female",
      "patHeight": "160 cm",
      "patWeight": "55 kg",
      "lifestyle": "Sedentary",
      "prakriti": "Kapha",
      "conditions": "Allergies, Low immunity",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "5-3 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-09-11T17:01:00",
      "$updatedAt": "2025-09-11T17:01:00"
    },
    {
      "$id": "report_b40cbca1",
      "patID": "pat_003",
      "docID": "doc_003",
      "docName": "Dr. Kavita Nair",
      "visitType": "Follow-up",
      "patName": "Anjali Mehta",
      "patAge": 28,
      "patGender": "Female",
      "patHeight": "160 cm",
      "patWeight": "55 kg",
      "lifestyle": "Active",
      "prakriti": "Pitta-Kapha",
      "conditions": "Back pain, Stress",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "4-9 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-08-24",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-08-12T13:19:45.879302",
      "$updatedAt": "2025-08-12T13:19:45.879302"
    },
    {
      "$id": "report_f43c415a",
      "patID": "pat_003",
      "docID": "doc_003",
      "docName": "Dr. Kavita Nair",
      "visitType": "New Patient",
      "patName": "Anjali Mehta",
      "patAge": 28,
      "patGender": "Female",
      "patHeight": "160 cm",
      "patWeight": "55 kg",
      "lifestyle": "Active",
      "prakriti": "Kapha-Vata",
      "conditions": "Allergies, Low immunity",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "6-9 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-04",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-08-25T17:19:45.879302",
      "$updatedAt": "2025-08-25T17:19:45.879302"
    },
    {
      "$id": "report_fdd8e395",
      "patID": "pat_004",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "Follow-up",
      "patName": "Arjun Patel",
      "patAge": 38,
      "patGender": "Male",
      "patHeight": "178 cm",
      "patWeight": "80 kg",
      "lifestyle": "Sedentary",
      "prakriti": "Kapha-Vata",
      "conditions": "Insomnia",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "6-7 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-06",
      "dietChart": {
        "breakfast": {
          "name": "Oats with almonds",
          "grams": "50g oats + 10 almonds",
          "calories": 320
        },
        "lunch": {
          "name": "Dal rice with vegetables",
          "grams": "100g rice + 50g dal + 100g vegetables",
          "calories": 450
        },
        "highTea": {
          "name": "Herbal tea with biscuits",
          "grams": "1 cup tea + 2 biscuits",
          "calories": 150
        },
        "dinner": {
          "name": "Khichdi with ghee",
          "grams": "80g khichdi + 1 tsp ghee",
          "calories": 280
        }
      },
      "$createdAt": "2025-08-27T22:19:45.879302",
      "$updatedAt": "2025-08-27T22:19:45.879302"
    },
    {
      "$id": "report_a7438667",
      "patID": "pat_004",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "New Patient",
      "patName": "Arjun Patel",
      "patAge": 38,
      "patGender": "Male",
      "patHeight": "178 cm",
      "patWeight": "80 kg",
      "lifestyle": "Active",
      "prakriti": "Vata",
      "conditions": "Back pain, Stress",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "5-6 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-09-07T07:19:45.879302",
      "$updatedAt": "2025-09-07T07:19:45.879302"
    },
    {
      "$id": "report_1f63928e",
      "patID": "pat_004",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "Follow-up",
      "patName": "Arjun Patel",
      "patAge": 38,
      "patGender": "Male",
      "patHeight": "178 cm",
      "patWeight": "80 kg",
      "lifestyle": "Active",
      "prakriti": "Kapha",
      "conditions": "Thyroid imbalance",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "6-7 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-09-11T11:15:00",
      "$updatedAt": "2025-09-11T11:15:00"
    },
    {
      "$id": "report_fd13f3ce",
      "patID": "pat_004",
      "docID": "doc_001",
      "docName": "Dr. Rajesh Kumar",
      "visitType": "Follow-up",
      "patName": "Arjun Patel",
      "patAge": 38,
      "patGender": "Male",
      "patHeight": "178 cm",
      "patWeight": "80 kg",
      "lifestyle": "Sedentary",
      "prakriti": "Pitta",
      "conditions": "Allergies, Low immunity",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "6-9 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-08-23",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-08-16T09:19:45.879302",
      "$updatedAt": "2025-08-16T09:19:45.879302"
    },
    {
      "$id": "report_90679cb0",
      "patID": "pat_005",
      "docID": "doc_003",
      "docName": "Dr. Kavita Nair",
      "visitType": "Follow-up",
      "patName": "Sneha Verma",
      "patAge": 26,
      "patGender": "Female",
      "patHeight": "162 cm",
      "patWeight": "54 kg",
      "lifestyle": "Active",
      "prakriti": "Vata-Pitta",
      "conditions": "Diabetes, Hypertension",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "6-3 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-09-08T13:19:45.879302",
      "$updatedAt": "2025-09-08T13:19:45.879302"
    },
    {
      "$id": "report_7b74b9a5",
      "patID": "pat_005",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "New Patient",
      "patName": "Sneha Verma",
      "patAge": 26,
      "patGender": "Female",
      "patHeight": "162 cm",
      "patWeight": "54 kg",
      "lifestyle": "Active",
      "prakriti": "Vata",
      "conditions": "Allergies, Low immunity",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "2-4 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-09-03T18:19:45.879302",
      "$updatedAt": "2025-09-03T18:19:45.879302"
    },
    {
      "$id": "report_62e1f256",
      "patID": "pat_005",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "Follow-up",
      "patName": "Sneha Verma",
      "patAge": 26,
      "patGender": "Female",
      "patHeight": "162 cm",
      "patWeight": "54 kg",
      "lifestyle": "Active",
      "prakriti": "Kapha",
      "conditions": "Acidity, Skin issues",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "6-5 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Oats with almonds",
          "grams": "50g oats + 10 almonds",
          "calories": 320
        },
        "lunch": {
          "name": "Dal rice with vegetables",
          "grams": "100g rice + 50g dal + 100g vegetables",
          "calories": 450
        },
        "highTea": {
          "name": "Herbal tea with biscuits",
          "grams": "1 cup tea + 2 biscuits",
          "calories": 150
        },
        "dinner": {
          "name": "Khichdi with ghee",
          "grams": "80g khichdi + 1 tsp ghee",
          "calories": 280
        }
      },
      "$createdAt": "2025-09-11T19:23:00",
      "$updatedAt": "2025-09-11T19:23:00"
    },
    {
      "$id": "report_875000c5",
      "patID": "pat_006",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "New Patient",
      "patName": "Amit Joshi",
      "patAge": 50,
      "patGender": "Male",
      "patHeight": "170 cm",
      "patWeight": "76 kg",
      "lifestyle": "Moderate",
      "prakriti": "Vata",
      "conditions": "Insomnia",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "5-9 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-08-21",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-08-14T13:19:45.879302",
      "$updatedAt": "2025-08-14T13:19:45.879302"
    },
    {
      "$id": "report_822d4856",
      "patID": "pat_006",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "Consultation",
      "patName": "Amit Joshi",
      "patAge": 50,
      "patGender": "Male",
      "patHeight": "170 cm",
      "patWeight": "76 kg",
      "lifestyle": "Active",
      "prakriti": "Vata-Pitta",
      "conditions": "Acidity, Skin issues",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "6-5 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Oats with almonds",
          "grams": "50g oats + 10 almonds",
          "calories": 320
        },
        "lunch": {
          "name": "Dal rice with vegetables",
          "grams": "100g rice + 50g dal + 100g vegetables",
          "calories": 450
        },
        "highTea": {
          "name": "Herbal tea with biscuits",
          "grams": "1 cup tea + 2 biscuits",
          "calories": 150
        },
        "dinner": {
          "name": "Khichdi with ghee",
          "grams": "80g khichdi + 1 tsp ghee",
          "calories": 280
        }
      },
      "$createdAt": "2025-09-11T15:51:00",
      "$updatedAt": "2025-09-11T15:51:00"
    },
    {
      "$id": "report_695a84a0",
      "patID": "pat_006",
      "docID": "doc_003",
      "docName": "Dr. Kavita Nair",
      "visitType": "Follow-up",
      "patName": "Amit Joshi",
      "patAge": 50,
      "patGender": "Male",
      "patHeight": "170 cm",
      "patWeight": "76 kg",
      "lifestyle": "Sedentary",
      "prakriti": "Pitta",
      "conditions": "Allergies, Low immunity",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "5-6 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-09-02T13:19:45.879302",
      "$updatedAt": "2025-09-02T13:19:45.879302"
    },
    {
      "$id": "report_79eb399c",
      "patID": "pat_006",
      "docID": "doc_003",
      "docName": "Dr. Kavita Nair",
      "visitType": "New Patient",
      "patName": "Amit Joshi",
      "patAge": 50,
      "patGender": "Male",
      "patHeight": "170 cm",
      "patWeight": "76 kg",
      "lifestyle": "Sedentary",
      "prakriti": "Kapha-Vata",
      "conditions": "Joint pain, High cholesterol",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "6-7 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-09-08T15:19:45.879302",
      "$updatedAt": "2025-09-08T15:19:45.879302"
    },
    {
      "$id": "report_c9d16311",
      "patID": "pat_007",
      "docID": "doc_001",
      "docName": "Dr. Rajesh Kumar",
      "visitType": "Consultation",
      "patName": "Kavita Nair",
      "patAge": 35,
      "patGender": "Female",
      "patHeight": "158 cm",
      "patWeight": "60 kg",
      "lifestyle": "Sedentary",
      "prakriti": "Vata-Pitta",
      "conditions": "Acidity, Skin issues",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "6-4 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-09-01T20:19:45.879302",
      "$updatedAt": "2025-09-01T20:19:45.879302"
    },
    {
      "$id": "report_1566b81f",
      "patID": "pat_007",
      "docID": "doc_001",
      "docName": "Dr. Rajesh Kumar",
      "visitType": "Consultation",
      "patName": "Kavita Nair",
      "patAge": 35,
      "patGender": "Female",
      "patHeight": "158 cm",
      "patWeight": "60 kg",
      "lifestyle": "Moderate",
      "prakriti": "Kapha",
      "conditions": "Back pain, Stress",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "7-4 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-03",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-08-21T12:19:45.879302",
      "$updatedAt": "2025-08-21T12:19:45.879302"
    },
    {
      "$id": "report_8e3f371a",
      "patID": "pat_007",
      "docID": "doc_004",
      "docName": "Dr. Suresh Reddy",
      "visitType": "Follow-up",
      "patName": "Kavita Nair",
      "patAge": 35,
      "patGender": "Female",
      "patHeight": "158 cm",
      "patWeight": "60 kg",
      "lifestyle": "Active",
      "prakriti": "Vata",
      "conditions": "Acidity, Skin issues",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "7-9 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-08-28",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-08-21T02:19:45.879302",
      "$updatedAt": "2025-08-21T02:19:45.879302"
    },
    {
      "$id": "report_de83ea1a",
      "patID": "pat_008",
      "docID": "doc_004",
      "docName": "Dr. Suresh Reddy",
      "visitType": "Follow-up",
      "patName": "Vikram Singh",
      "patAge": 41,
      "patGender": "Male",
      "patHeight": "180 cm",
      "patWeight": "85 kg",
      "lifestyle": "Active",
      "prakriti": "Pitta",
      "conditions": "Insomnia",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "5-7 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-09-11T20:12:00",
      "$updatedAt": "2025-09-11T20:12:00"
    },
    {
      "$id": "report_2b6f440e",
      "patID": "pat_008",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "New Patient",
      "patName": "Vikram Singh",
      "patAge": 41,
      "patGender": "Male",
      "patHeight": "180 cm",
      "patWeight": "85 kg",
      "lifestyle": "Active",
      "prakriti": "Pitta-Kapha",
      "conditions": "Back pain, Stress",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "8-8 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-09-07T17:19:45.879302",
      "$updatedAt": "2025-09-07T17:19:45.879302"
    },
    {
      "$id": "report_0e613307",
      "patID": "pat_008",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "Follow-up",
      "patName": "Vikram Singh",
      "patAge": 41,
      "patGender": "Male",
      "patHeight": "180 cm",
      "patWeight": "85 kg",
      "lifestyle": "Sedentary",
      "prakriti": "Pitta-Kapha",
      "conditions": "Joint pain, High cholesterol",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "2-4 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-08-26",
      "dietChart": {
        "breakfast": {
          "name": "Oats with almonds",
          "grams": "50g oats + 10 almonds",
          "calories": 320
        },
        "lunch": {
          "name": "Dal rice with vegetables",
          "grams": "100g rice + 50g dal + 100g vegetables",
          "calories": 450
        },
        "highTea": {
          "name": "Herbal tea with biscuits",
          "grams": "1 cup tea + 2 biscuits",
          "calories": 150
        },
        "dinner": {
          "name": "Khichdi with ghee",
          "grams": "80g khichdi + 1 tsp ghee",
          "calories": 280
        }
      },
      "$createdAt": "2025-08-21T19:19:45.879302",
      "$updatedAt": "2025-08-21T19:19:45.879302"
    },
    {
      "$id": "report_0386c5f4",
      "patID": "pat_009",
      "docID": "doc_001",
      "docName": "Dr. Rajesh Kumar",
      "visitType": "Follow-up",
      "patName": "Neha Gupta",
      "patAge": 29,
      "patGender": "Female",
      "patHeight": "164 cm",
      "patWeight": "59 kg",
      "lifestyle": "Active",
      "prakriti": "Kapha",
      "conditions": "Insomnia",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "7-3 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Oats with almonds",
          "grams": "50g oats + 10 almonds",
          "calories": 320
        },
        "lunch": {
          "name": "Dal rice with vegetables",
          "grams": "100g rice + 50g dal + 100g vegetables",
          "calories": 450
        },
        "highTea": {
          "name": "Herbal tea with biscuits",
          "grams": "1 cup tea + 2 biscuits",
          "calories": 150
        },
        "dinner": {
          "name": "Khichdi with ghee",
          "grams": "80g khichdi + 1 tsp ghee",
          "calories": 280
        }
      },
      "$createdAt": "2025-09-10T08:19:45.879302",
      "$updatedAt": "2025-09-10T08:19:45.879302"
    },
    {
      "$id": "report_120a9748",
      "patID": "pat_009",
      "docID": "doc_001",
      "docName": "Dr. Rajesh Kumar",
      "visitType": "Follow-up",
      "patName": "Neha Gupta",
      "patAge": 29,
      "patGender": "Female",
      "patHeight": "164 cm",
      "patWeight": "59 kg",
      "lifestyle": "Sedentary",
      "prakriti": "Kapha-Vata",
      "conditions": "Acidity, Skin issues",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "3-8 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Oats with almonds",
          "grams": "50g oats + 10 almonds",
          "calories": 320
        },
        "lunch": {
          "name": "Dal rice with vegetables",
          "grams": "100g rice + 50g dal + 100g vegetables",
          "calories": 450
        },
        "highTea": {
          "name": "Herbal tea with biscuits",
          "grams": "1 cup tea + 2 biscuits",
          "calories": 150
        },
        "dinner": {
          "name": "Khichdi with ghee",
          "grams": "80g khichdi + 1 tsp ghee",
          "calories": 280
        }
      },
      "$createdAt": "2025-09-09T15:19:45.879302",
      "$updatedAt": "2025-09-09T15:19:45.879302"
    },
    {
      "$id": "report_9d24d9c7",
      "patID": "pat_010",
      "docID": "doc_004",
      "docName": "Dr. Suresh Reddy",
      "visitType": "Consultation",
      "patName": "Suresh Reddy",
      "patAge": 47,
      "patGender": "Male",
      "patHeight": "172 cm",
      "patWeight": "78 kg",
      "lifestyle": "Active",
      "prakriti": "Pitta-Kapha",
      "conditions": "Digestive issues, Stress",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "4-7 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-01",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-08-19T23:19:45.879302",
      "$updatedAt": "2025-08-19T23:19:45.879302"
    },
    {
      "$id": "report_79e12fce",
      "patID": "pat_010",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "Follow-up",
      "patName": "Suresh Reddy",
      "patAge": 47,
      "patGender": "Male",
      "patHeight": "172 cm",
      "patWeight": "78 kg",
      "lifestyle": "Active",
      "prakriti": "Vata-Pitta",
      "conditions": "Weight fluctuations, Low energy",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "4-9 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-05",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-08-29T11:19:45.879302",
      "$updatedAt": "2025-08-29T11:19:45.879302"
    },
    {
      "$id": "report_97ed0249",
      "patID": "pat_010",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "New Patient",
      "patName": "Suresh Reddy",
      "patAge": 47,
      "patGender": "Male",
      "patHeight": "172 cm",
      "patWeight": "78 kg",
      "lifestyle": "Sedentary",
      "prakriti": "Pitta-Kapha",
      "conditions": "Weight fluctuations, Low energy",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "5-6 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-04",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-08-30T03:19:45.879302",
      "$updatedAt": "2025-08-30T03:19:45.879302"
    },
    {
      "$id": "report_a1c40e70",
      "patID": "pat_010",
      "docID": "doc_001",
      "docName": "Dr. Rajesh Kumar",
      "visitType": "Consultation",
      "patName": "Suresh Reddy",
      "patAge": 47,
      "patGender": "Male",
      "patHeight": "172 cm",
      "patWeight": "78 kg",
      "lifestyle": "Active",
      "prakriti": "Kapha-Vata",
      "conditions": "Diabetes, Hypertension",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "3-6 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-09",
      "dietChart": {
        "breakfast": {
          "name": "Coconut water with fruits",
          "grams": "200ml coconut water + 100g fruits",
          "calories": 180
        },
        "lunch": {
          "name": "Cooling vegetables with rice",
          "grams": "100g rice + 120g cooling vegetables",
          "calories": 380
        },
        "highTea": {
          "name": "Mint tea with crackers",
          "grams": "1 cup mint tea + 3 crackers",
          "calories": 100
        },
        "dinner": {
          "name": "Moong dal soup",
          "grams": "150ml soup + 1 roti",
          "calories": 220
        }
      },
      "$createdAt": "2025-09-04T00:19:45.879302",
      "$updatedAt": "2025-09-04T00:19:45.879302"
    },
    {
      "$id": "report_8305e345",
      "patID": "pat_011",
      "docID": "doc_001",
      "docName": "Dr. Rajesh Kumar",
      "visitType": "New Patient",
      "patName": "Meera Iyer",
      "patAge": 31,
      "patGender": "Female",
      "patHeight": "161 cm",
      "patWeight": "57 kg",
      "lifestyle": "Active",
      "prakriti": "Kapha",
      "conditions": "Acidity, Skin issues",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "4-6 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-08-30",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-08-16T12:19:45.879302",
      "$updatedAt": "2025-08-16T12:19:45.879302"
    },
    {
      "$id": "report_1d46ec4c",
      "patID": "pat_011",
      "docID": "doc_002",
      "docName": "Dr. Anjali Mehta",
      "visitType": "New Patient",
      "patName": "Meera Iyer",
      "patAge": 31,
      "patGender": "Female",
      "patHeight": "161 cm",
      "patWeight": "57 kg",
      "lifestyle": "Active",
      "prakriti": "Pitta-Kapha",
      "conditions": "Acidity, Skin issues",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "5-9 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Oats with almonds",
          "grams": "50g oats + 10 almonds",
          "calories": 320
        },
        "lunch": {
          "name": "Dal rice with vegetables",
          "grams": "100g rice + 50g dal + 100g vegetables",
          "calories": 450
        },
        "highTea": {
          "name": "Herbal tea with biscuits",
          "grams": "1 cup tea + 2 biscuits",
          "calories": 150
        },
        "dinner": {
          "name": "Khichdi with ghee",
          "grams": "80g khichdi + 1 tsp ghee",
          "calories": 280
        }
      },
      "$createdAt": "2025-09-11T16:21:00",
      "$updatedAt": "2025-09-11T16:21:00"
    },
    {
      "$id": "report_7d05d607",
      "patID": "pat_011",
      "docID": "doc_003",
      "docName": "Dr. Kavita Nair",
      "visitType": "New Patient",
      "patName": "Meera Iyer",
      "patAge": 31,
      "patGender": "Female",
      "patHeight": "161 cm",
      "patWeight": "57 kg",
      "lifestyle": "Moderate",
      "prakriti": "Kapha",
      "conditions": "Insomnia",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "4-7 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-08-30",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-08-15T18:19:45.879302",
      "$updatedAt": "2025-08-15T18:19:45.879302"
    },
    {
      "$id": "report_e882ea4a",
      "patID": "pat_012",
      "docID": "doc_004",
      "docName": "Dr. Suresh Reddy",
      "visitType": "New Patient",
      "patName": "Rohan Desai",
      "patAge": 36,
      "patGender": "Male",
      "patHeight": "177 cm",
      "patWeight": "74 kg",
      "lifestyle": "Moderate",
      "prakriti": "Kapha-Vata",
      "conditions": "Joint pain, High cholesterol",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Irregular",
      "waterIntake": "5-6 glasses daily",
      "dietPref": "Vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-09-11",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-09-11T16:24:00",
      "$updatedAt": "2025-09-11T16:24:00"
    },
    {
      "$id": "report_acf7b43e",
      "patID": "pat_012",
      "docID": "doc_001",
      "docName": "Dr. Rajesh Kumar",
      "visitType": "New Patient",
      "patName": "Rohan Desai",
      "patAge": 36,
      "patGender": "Male",
      "patHeight": "177 cm",
      "patWeight": "74 kg",
      "lifestyle": "Moderate",
      "prakriti": "Vata-Pitta",
      "conditions": "Digestive issues, Stress",
      "goal": "Improve overall health and balance doshas",
      "bowelMovements": "Regular",
      "waterIntake": "8-6 glasses daily",
      "dietPref": "Non-vegetarian",
      "problemDescByDoctor": "Patient presents with lifestyle imbalance requiring Ayurvedic guidance.",
      "solutionByDoctor": "Prescribed herbs, diet changes, and yoga practices.",
      "followUpDate": "2025-08-27",
      "dietChart": {
        "breakfast": {
          "name": "Green smoothie with protein",
          "grams": "200ml smoothie + 20g protein",
          "calories": 280
        },
        "lunch": {
          "name": "Grilled chicken with quinoa",
          "grams": "100g chicken + 80g quinoa + salad",
          "calories": 520
        },
        "highTea": {
          "name": "Green tea with nuts",
          "grams": "1 cup tea + 15g mixed nuts",
          "calories": 120
        },
        "dinner": {
          "name": "Fish curry with brown rice",
          "grams": "100g fish + 60g brown rice",
          "calories": 380
        }
      },
      "$createdAt": "2025-08-19T05:19:45.879302",
      "$updatedAt": "2025-08-19T05:19:45.879302"
    }
]

export { mockPatients, mockReports }