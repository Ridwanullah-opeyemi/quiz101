
// --- QUIZ DATA: 80 Questions Array for MTH 101 ---
const quizQuestions = [
  {
    "questionNumber": 11,
    "question": "What is the hybridization of the central Carbon atom in Carbon Dioxide (CO2)?",
    "answerOptions": [
      { "text": "sp", "rationale": "CO2 is linear, requiring sp hybridization for the two double bonds.", "isCorrect": true },
      { "text": "sp2", "rationale": "This would result in a trigonal planar shape.", "isCorrect": false },
      { "text": "sp3", "rationale": "This would result in a tetrahedral shape.", "isCorrect": false },
      { "text": "dsp2", "rationale": "This is common in square planar transition metal complexes.", "isCorrect": false }
    ],
    "hint": "CO2 has a linear molecular geometry."
  },
  {
    "questionNumber": 12,
    "question": "According to the Arrhenius definition, a base is a substance that:",
    "answerOptions": [
      { "text": "Donates a proton", "rationale": "This is the Brønsted–Lowry definition of an acid.", "isCorrect": false },
      { "text": "Produces OH- ions in aqueous solution", "rationale": "Arrhenius focused on the production of hydroxide ions.", "isCorrect": true },
      { "text": "Accepts an electron pair", "rationale": "This is a Lewis acid.", "isCorrect": false },
      { "text": "Produces H+ ions", "rationale": "This is an Arrhenius acid.", "isCorrect": false }
    ],
    "hint": "Think of the 'Hydroxide' ion."
  },
  {
    "questionNumber": 13,
    "question": "What is the oxidation number of Sulfur in the sulfate ion (SO4^2-)?",
    "answerOptions": [
      { "text": "+4", "rationale": "This is the state in the sulfite ion (SO3^2-).", "isCorrect": false },
      { "text": "+6", "rationale": "Oxygen is -2; with 4 oxygens and a -2 total charge, Sulfur must be +6.", "isCorrect": true },
      { "text": "-2", "rationale": "This is the charge of a sulfide ion (S^2-).", "isCorrect": false },
      { "text": "0", "rationale": "This is the state of elemental sulfur.", "isCorrect": false }
    ],
    "hint": "The sum of oxidation numbers must equal the charge of the ion (-2)."
  },
  {
    "questionNumber": 14,
    "question": "In chemical kinetics, what is 'activation energy'?",
    "answerOptions": [
      { "text": "Energy released by a reaction", "rationale": "This is the enthalpy change.", "isCorrect": false },
      { "text": "Minimum energy required to initiate a reaction", "rationale": "Reactants must overcome this barrier to become products.", "isCorrect": true },
      { "text": "Energy of the stable products", "rationale": "This is the final energy state.", "isCorrect": false },
      { "text": "Energy lost to the surroundings", "rationale": "This is heat loss.", "isCorrect": false }
    ],
    "hint": "It's the 'hill' reactants must climb."
  },
  {
    "questionNumber": 15,
    "question": "Which law states that the total entropy of an isolated system always increases over time?",
    "answerOptions": [
      { "text": "First Law of Thermodynamics", "rationale": "This deals with energy conservation.", "isCorrect": false },
      { "text": "Second Law of Thermodynamics", "rationale": "This law states that entropy (disorder) tends to increase.", "isCorrect": true },
      { "text": "Third Law of Thermodynamics", "rationale": "This states entropy of a crystal is zero at 0 K.", "isCorrect": false },
      { "text": "Hess's Law", "rationale": "This relates to enthalpy changes.", "isCorrect": false }
    ],
    "hint": "It is the law of increasing disorder."
  },
  {
    "questionNumber": 21,
    "question": "What is the relationship between Kp and Kc for the reaction: N2(g) + 3H2(g) ⇌ 2NH3(g)?",
    "answerOptions": [
      { "text": "Kp = Kc", "rationale": "This only happens when the number of moles of gas is the same on both sides.", "isCorrect": false },
      { "text": "Kp = Kc(RT)^-2", "rationale": "Δn = 2 - (1+3) = -2. Therefore Kp = Kc(RT)^-2.", "isCorrect": true },
      { "text": "Kp = Kc(RT)^2", "rationale": "This would apply if there were more moles of gas in the products.", "isCorrect": false },
      { "text": "Kp = Kc / RT", "rationale": "The exponent depends on the change in moles of gas (Δn).", "isCorrect": false }
    ],
    "hint": "Calculate Δn (moles of gaseous products minus moles of gaseous reactants)."
  },
  {
    "questionNumber": 22,
    "question": "Which transition in the hydrogen atom emits the highest energy photon?",
    "answerOptions": [
      { "text": "n=2 to n=1", "rationale": "The energy gap between n=1 and n=2 is the largest in the hydrogen atom.", "isCorrect": true },
      { "text": "n=3 to n=2", "rationale": "This transition emits visible light (Balmer series) but lower energy than n=2 to n=1.", "isCorrect": false },
      { "text": "n=4 to n=3", "rationale": "Energy gaps decrease as n increases.", "isCorrect": false },
      { "text": "n=5 to n=4", "rationale": "This is a low-energy infrared emission.", "isCorrect": false }
    ],
    "hint": "Energy levels are spaced further apart closer to the nucleus."
  },
  {
    "questionNumber": 23,
    "question": "A substance that can act as either an acid or a base is described as:",
    "answerOptions": [
      { "text": "Amphoteric", "rationale": "Amphoteric substances (like water or Al2O3) can react as both acids and bases.", "isCorrect": true },
      { "text": "Aprotic", "rationale": "Aprotic refers to solvents that do not donate protons.", "isCorrect": false },
      { "text": "Neutral", "rationale": "Neutral substances don't act as either.", "isCorrect": false },
      { "text": "Isomeric", "rationale": "Isomers are compounds with the same formula but different structures.", "isCorrect": false }
    ],
    "hint": "Water (H2O) is the most common example."
  },
  {
    "questionNumber": 24,
    "question": "According to the courseware, deliquescent substances are those that:",
    "answerOptions": [
      { "text": "Lose water of crystallization to the atmosphere", "rationale": "This describes efflorescent substances.", "isCorrect": false },
      { "text": "Absorb enough water from the air to form a solution", "rationale": "Deliquescent solids like NaOH absorb moisture until they dissolve.", "isCorrect": true },
      { "text": "React violently with water", "rationale": "This describes reactive metals like Sodium.", "isCorrect": false },
      { "text": "Are insoluble in water", "rationale": "Deliquescent substances are highly soluble.", "isCorrect": false }
    ],
    "hint": "Think of what happens to open containers of solid NaOH pellets."
  },
  {
    "questionNumber": 25,
    "question": "What is the shape of the SF6 molecule?",
    "answerOptions": [
      { "text": "Tetrahedral", "rationale": "SF6 has six bonding pairs, not four.", "isCorrect": false },
      { "text": "Octahedral", "rationale": "The sulfur atom is sp3d2 hybridized with six surrounding fluorine atoms.", "isCorrect": true },
      { "text": "Trigonal Bipyramidal", "rationale": "This is the shape for PCl5 (5 pairs).", "isCorrect": false },
      { "text": "Square Planar", "rationale": "SF6 is three-dimensional, not flat.", "isCorrect": false }
    ],
    "hint": "The central atom has 6 electron domains."
  },
  {
    "questionNumber": 26,
    "question": "The rate-determining step of a reaction mechanism is the:",
    "answerOptions": [
      { "text": "First step", "rationale": "The first step is not always the slowest.", "isCorrect": false },
      { "text": "Fastest step", "rationale": "Fast steps do not limit the overall rate.", "isCorrect": false },
      { "text": "Slowest step", "rationale": "The overall rate of a reaction cannot be faster than its slowest component step.", "isCorrect": true },
      { "text": "Final step", "rationale": "The final step only determines when the reaction ends, not its speed.", "isCorrect": false }
    ],
    "hint": "Like a bottleneck in a funnel."
  },
  {
    "questionNumber": 27,
    "question": "What is the oxidation state of Manganese in KMnO4?",
    "answerOptions": [
      { "text": "+2", "rationale": "This is the state of the Mn2+ ion.", "isCorrect": false },
      { "text": "+4", "rationale": "This is the state in MnO2.", "isCorrect": false },
      { "text": "+7", "rationale": "K(+1) + Mn(x) + 4*O(-2) = 0 results in x = +7.", "isCorrect": true },
      { "text": "+6", "rationale": "This is the state in the manganate ion (MnO4^2-).", "isCorrect": false }
    ],
    "hint": "The sum of oxidation states in this neutral compound must be zero."
  },
  {
    "questionNumber": 28,
    "question": "Which of these is a property of 'S-block' elements?",
    "answerOptions": [
      { "text": "They are all non-metals", "rationale": "Most S-block elements are highly reactive metals.", "isCorrect": false },
      { "text": "They have low ionization energies", "rationale": "As metals, they lose valence electrons easily.", "isCorrect": true },
      { "text": "They form covalent bonds only", "rationale": "They primarily form ionic bonds.", "isCorrect": false },
      { "text": "They are found in Groups 13-18", "rationale": "S-block consists of Groups 1 and 2.", "isCorrect": false }
    ],
    "hint": "They include Alkali and Alkaline Earth metals."
  },
  {
    "questionNumber": 29,
    "question": "The Third Law of Thermodynamics states that:",
    "answerOptions": [
      { "text": "Energy is conserved", "rationale": "This is the First Law.", "isCorrect": false },
      { "text": "Entropy of a perfect crystal at 0 K is zero", "rationale": "At absolute zero, molecular motion ceases in a perfect lattice.", "isCorrect": true },
      { "text": "Entropy always increases", "rationale": "This is the Second Law.", "isCorrect": false },
      { "text": "Absolute zero can be reached easily", "rationale": "Absolute zero is actually unreachable in a finite number of steps.", "isCorrect": false }
    ],
    "hint": "It defines the starting point for entropy."
  },
  {
    "questionNumber": 30,
    "question": "What happens to the rate of most chemical reactions when temperature increases?",
    "answerOptions": [
      { "text": "It decreases", "rationale": "Rate almost always increases with temperature.", "isCorrect": false },
      { "text": "It increases", "rationale": "Higher temperature increases collision frequency and energy.", "isCorrect": true },
      { "text": "It remains constant", "rationale": "Rate is highly temperature-dependent.", "isCorrect": false },
      { "text": "It becomes zero", "rationale": "Reactions speed up, not stop.", "isCorrect": false }
    ],
    "hint": "Think about why we refrigerate food to slow down spoilage."
  },
  {
    "questionNumber": 31,
    "question": "In the Lewis structure of water, how many lone pairs are on the Oxygen atom?",
    "answerOptions": [
      { "text": "0", "rationale": "Oxygen must have lone pairs to fulfill its octet.", "isCorrect": false },
      { "text": "1", "rationale": "One lone pair would not satisfy the octet rule for Oxygen in H2O.", "isCorrect": false },
      { "text": "2", "rationale": "Oxygen has 6 valence electrons; 2 are used for bonds, leaving 4 (2 pairs).", "isCorrect": true },
      { "text": "3", "rationale": "This would give Oxygen too many electrons.", "isCorrect": false }
    ],
    "hint": "These lone pairs cause the 'bent' shape of water."
  },
  {
    "questionNumber": 32,
    "question": "Which indicator turns pink/red in a basic solution?",
    "answerOptions": [
      { "text": "Methyl Orange", "rationale": "Methyl orange is yellow in base.", "isCorrect": false },
      { "text": "Phenolphthalein", "rationale": "It is colorless in acid and turns bright pink in base.", "isCorrect": true },
      { "text": "Litmus", "rationale": "Litmus turns blue in base.", "isCorrect": false },
      { "text": "Bromothymol Blue", "rationale": "It turns blue in base.", "isCorrect": false }
    ],
    "hint": "It is commonly used in acid-base titrations."
  },
  {
    "questionNumber": 33,
    "question": "The 'Hess's Law' is used to calculate:",
    "answerOptions": [
      { "text": "Reaction rate", "rationale": "Enthalpy doesn't tell us how fast a reaction is.", "isCorrect": false },
      { "text": "Enthalpy change (ΔH)", "rationale": "It states ΔH is the same regardless of the number of steps.", "isCorrect": true },
      { "text": "Equilibrium constant", "rationale": "This requires Gibbs Free Energy or concentrations.", "isCorrect": false },
      { "text": "Activation energy", "rationale": "This requires kinetic data.", "isCorrect": false }
    ],
    "hint": "It's based on the fact that Enthalpy is a state function."
  },
  {
    "questionNumber": 34,
    "question": "What is the primary factor that determines the chemical properties of an element?",
    "answerOptions": [
      { "text": "Number of neutrons", "rationale": "Neutrons affect stability (isotopes) but not chemical bonding.", "isCorrect": false },
      { "text": "Atomic mass", "rationale": "Mass is a physical property.", "isCorrect": false },
      { "text": "Number of valence electrons", "rationale": "The outer electrons determine how an atom bonds and reacts.", "isCorrect": true },
      { "text": "Nuclear density", "rationale": "This is a physical property of the nucleus.", "isCorrect": false }
    ],
    "hint": "It's why elements in the same group behave similarly."
  },
  {
    "questionNumber": 35,
    "question": "Which type of bond involves the complete transfer of electrons?",
    "answerOptions": [
      { "text": "Covalent bond", "rationale": "Covalent bonds involve sharing electrons.", "isCorrect": false },
      { "text": "Ionic bond", "rationale": "Electrons are transferred from a metal to a non-metal.", "isCorrect": true },
      { "text": "Metallic bond", "rationale": "This involves a 'sea' of shared electrons.", "isCorrect": false },
      { "text": "Hydrogen bond", "rationale": "This is an intermolecular force, not a primary chemical bond.", "isCorrect": false }
    ],
    "hint": "Think of Sodium Chloride (NaCl)."
  },
  {
    "questionNumber": 36,
    "question": "What is the unit of the rate constant (k) for a first-order reaction?",
    "answerOptions": [
      { "text": "M/s", "rationale": "This is for a zero-order reaction.", "isCorrect": false },
      { "text": "s^-1", "rationale": "For first order, Rate = k[A], so k = (M/s) / M = s^-1.", "isCorrect": true },
      { "text": "M^-1s^-1", "rationale": "This is for a second-order reaction.", "isCorrect": false },
      { "text": "M^2/s", "rationale": "This is not a standard rate constant unit.", "isCorrect": false }
    ],
    "hint": "The unit depends on the overall order of the reaction."
  },
  {
    "questionNumber": 37,
    "question": "Which of the following is a strong electrolyte?",
    "answerOptions": [
      { "text": "Acetic acid", "rationale": "This is a weak acid (partial ionization).", "isCorrect": false },
      { "text": "Ammonia", "rationale": "This is a weak base.", "isCorrect": false },
      { "text": "Sodium Nitrate (NaNO3)", "rationale": "Soluble salts ionize completely in water.", "isCorrect": true },
      { "text": "Pure water", "rationale": "Water is a very weak electrolyte.", "isCorrect": false }
    ],
    "hint": "Strong electrolytes ionize completely in solution."
  },
  {
    "questionNumber": 38,
    "question": "In the Haber process (N2 + 3H2 ⇌ 2NH3), increasing the pressure shifts the equilibrium to:",
    "answerOptions": [
      { "text": "The left (reactants)", "rationale": "The left side has 4 moles of gas; shifting here would increase pressure.", "isCorrect": false },
      { "text": "The right (products)", "rationale": "The right side has only 2 moles of gas; shifting here reduces pressure.", "isCorrect": true },
      { "text": "Neither side", "rationale": "Pressure shifts depend on the number of gas moles.", "isCorrect": false },
      { "text": "Decrease temperature", "rationale": "Pressure and temperature are different variables.", "isCorrect": false }
    ],
    "hint": "Le Chatelier's Principle: pressure increase favors the side with fewer gas moles."
  },
  {
    "questionNumber": 39,
    "question": "What is the electronic configuration of the Sodium ion (Na+)?",
    "answerOptions": [
      { "text": "1s2 2s2 2p6 3s1", "rationale": "This is neutral Sodium (Na).", "isCorrect": false },
      { "text": "1s2 2s2 2p6", "rationale": "Na+ loses its 3s1 electron to reach a stable neon-like octet.", "isCorrect": true },
      { "text": "1s2 2s2 2p5", "rationale": "This is the configuration of Fluorine.", "isCorrect": false },
      { "text": "1s2 2s2 2p6 3s2", "rationale": "This is Magnesium.", "isCorrect": false }
    ],
    "hint": "Sodium loses its one valence electron to form a +1 cation."
  },
  {
    "questionNumber": 40,
    "question": "A catalyst increases reaction rate by providing a pathway with a lower:",
    "answerOptions": [
      { "text": "Enthalpy change", "rationale": "Catalysts do not change ΔH.", "isCorrect": false },
      { "text": "Entropy change", "rationale": "Catalysts do not change the spontaneity.", "isCorrect": false },
      { "text": "Activation energy", "rationale": "A lower Ea allows more collisions to result in a reaction.", "isCorrect": true },
      { "text": "Temperature", "rationale": "Catalysts do not change temperature.", "isCorrect": false }
    ],
    "hint": "It lowers the 'energy barrier'."
  },
  {
    "questionNumber": 41,
    "question": "Which of these molecules contains a triple bond?",
    "answerOptions": [
      { "text": "O2", "rationale": "Oxygen has a double bond.", "isCorrect": false },
      { "text": "N2", "rationale": "Nitrogen atoms share three pairs of electrons to complete their octets.", "isCorrect": true },
      { "text": "Cl2", "rationale": "Chlorine has a single bond.", "isCorrect": false },
      { "text": "CO2", "rationale": "CO2 has two double bonds.", "isCorrect": false }
    ],
    "hint": "Nitrogen gas is very stable because of this strong bond."
  },
  {
    "questionNumber": 42,
    "question": "What is the oxidation number of Oxygen in Hydrogen Peroxide (H2O2)?",
    "answerOptions": [
      { "text": "-2", "rationale": "This is the standard state for oxygen, but not in peroxides.", "isCorrect": false },
      { "text": "-1", "rationale": "In peroxides, the O-O bond results in an oxidation state of -1.", "isCorrect": true },
      { "text": "0", "rationale": "This is for elemental oxygen (O2).", "isCorrect": false },
      { "text": "+2", "rationale": "This is only seen in OF2.", "isCorrect": false }
    ],
    "hint": "Peroxides are an exception to the usual oxygen rule."
  },
  {
    "questionNumber": 43,
    "question": "Which quantum number determines the shape of an orbital?",
    "answerOptions": [
      { "text": "Principal (n)", "rationale": "This determines size and energy level.", "isCorrect": false },
      { "text": "Azimuthal (l)", "rationale": "Also known as the angular momentum quantum number, it defines shapes like s, p, d, f.", "isCorrect": true },
      { "text": "Magnetic (ml)", "rationale": "This determines orientation in space.", "isCorrect": false },
      { "text": "Spin (ms)", "rationale": "This determines the direction of electron spin.", "isCorrect": false }
    ],
    "hint": "It is related to the subshell (s, p, d, f)."
  },
  {
    "questionNumber": 44,
    "question": "The Law of Multiple Proportions was proposed by:",
    "answerOptions": [
      { "text": "Joseph Proust", "rationale": "Proust proposed the Law of Definite Proportions.", "isCorrect": false },
      { "text": "John Dalton", "rationale": "Dalton used this law to support his atomic theory.", "isCorrect": true },
      { "text": "Antoine Lavoisier", "rationale": "Lavoisier proposed Conservation of Mass.", "isCorrect": false },
      { "text": "Amedeo Avogadro", "rationale": "Avogadro proposed his law regarding gas volumes and moles.", "isCorrect": false }
    ],
    "hint": "He is the father of the modern atomic theory."
  },
  {
    "questionNumber": 45,
    "question": "An orbital can hold a maximum of how many electrons?",
    "answerOptions": [
      { "text": "1", "rationale": "Each orbital can hold up to two.", "isCorrect": false },
      { "text": "2", "rationale": "According to the Pauli Exclusion Principle, an orbital holds two electrons with opposite spins.", "isCorrect": true },
      { "text": "6", "rationale": "A 'p' subshell holds 6, but it consists of three orbitals.", "isCorrect": false },
      { "text": "8", "rationale": "This is the maximum valence count for the octet rule.", "isCorrect": false }
    ],
    "hint": "Every single orbital box in a diagram can hold two arrows."
  },
  {
    "questionNumber": 46,
    "question": "Which element is the most electronegative on the Pauling scale?",
    "answerOptions": [
      { "text": "Oxygen", "rationale": "Oxygen is second, but not the highest.", "isCorrect": false },
      { "text": "Chlorine", "rationale": "Chlorine is high, but lower than Fluorine.", "isCorrect": false },
      { "text": "Fluorine", "rationale": "Fluorine is the most reactive and electronegative element.", "isCorrect": true },
      { "text": "Cesium", "rationale": "Cesium is one of the least electronegative (most electropositive).", "isCorrect": false }
    ],
    "hint": "It is at the top-right of the periodic table (excluding Noble Gases)."
  },
  {
    "questionNumber": 47,
    "question": "The boiling point of water is unusually high compared to other Group 16 hydrides because of:",
    "answerOptions": [
      { "text": "Ionic bonding", "rationale": "Water is a covalent molecule.", "isCorrect": false },
      { "text": "Hydrogen bonding", "rationale": "Strong intermolecular forces between H and O atoms require extra energy to break.", "isCorrect": true },
      { "text": "Dipole-Dipole forces", "rationale": "These exist but are weaker than hydrogen bonds.", "isCorrect": false },
      { "text": "London dispersion forces", "rationale": "These are the weakest intermolecular forces.", "isCorrect": false }
    ],
    "hint": "It's a special type of dipole-dipole attraction involving H, N, O, or F."
  },
  {
    "questionNumber": 48,
    "question": "A Lewis Base is defined as an:",
    "answerOptions": [
      { "text": "Electron pair donor", "rationale": "Lewis theory defines bases by their ability to share a pair of electrons.", "isCorrect": true },
      { "text": "Electron pair acceptor", "rationale": "This is a Lewis Acid.", "isCorrect": false },
      { "text": "Proton donor", "rationale": "This is a Brønsted–Lowry acid.", "isCorrect": false },
      { "text": "Hydroxide acceptor", "rationale": "This is not a standard definition.", "isCorrect": false }
    ],
    "hint": "Think of the lone pair on Ammonia (NH3)."
  },
  {
    "questionNumber": 49,
    "question": "What is the molar mass of H2SO4? (H=1, S=32, O=16)",
    "answerOptions": [
      { "text": "98 g/mol", "rationale": "(2*1) + 32 + (4*16) = 2 + 32 + 64 = 98.", "isCorrect": true },
      { "text": "49 g/mol", "rationale": "This is the equivalent mass, not the molar mass.", "isCorrect": false },
      { "text": "100 g/mol", "rationale": "Incorrect calculation.", "isCorrect": false },
      { "text": "82 g/mol", "rationale": "This would be the mass of H2SO3.", "isCorrect": false }
    ],
    "hint": "Sum the atomic masses of all atoms in the formula."
  },
  {
    "questionNumber": 50,
    "question": "The rate of a zero-order reaction is proportional to:",
    "answerOptions": [
      { "text": "[A]^1", "rationale": "This is for first-order.", "isCorrect": false },
      { "text": "[A]^2", "rationale": "This is for second-order.", "isCorrect": false },
      { "text": "[A]^0", "rationale": "Rate is independent of concentration in zero-order reactions.", "isCorrect": true },
      { "text": "Temperature only", "rationale": "Rate depends on temperature for all orders, but the 'zero-order' specifically refers to concentration dependence.", "isCorrect": false }
    ],
    "hint": "Zero-order means concentration doesn't change the speed."
  },
  {
    "questionNumber": 51,
    "question": "Which type of hybridization is found in the Ethene molecule (C2H4)?",
    "answerOptions": [
      { "text": "sp", "rationale": "sp is found in Ethyne (C2H2).", "isCorrect": false },
      { "text": "sp2", "rationale": "Each Carbon in Ethene forms three sigma bonds and has one pi bond.", "isCorrect": true },
      { "text": "sp3", "rationale": "sp3 is found in Methane and Ethane.", "isCorrect": false },
      { "text": "sp3d", "rationale": "Carbon cannot expand its octet to include d-orbitals.", "isCorrect": false }
    ],
    "hint": "Ethene has a carbon-carbon double bond."
  },
  {
    "questionNumber": 52,
    "question": "What is the standard enthalpy of formation (ΔHf°) for any element in its most stable form?",
    "answerOptions": [
      { "text": "100 kJ/mol", "rationale": "Enthalpy is defined relative to the elements.", "isCorrect": false },
      { "text": "0 kJ/mol", "rationale": "By convention, elements in their standard state have zero enthalpy of formation.", "isCorrect": true },
      { "text": "-100 kJ/mol", "rationale": "This would imply elements are always more stable than themselves.", "isCorrect": false },
      { "text": "Dependent on temperature only", "rationale": "It is defined as zero at standard conditions.", "isCorrect": false }
    ],
    "hint": "Think of O2(g) or C(graphite)."
  },
  {
    "questionNumber": 53,
    "question": "Which of these is an example of a heterogeneous equilibrium?",
    "answerOptions": [
      { "text": "N2(g) + 3H2(g) ⇌ 2NH3(g)", "rationale": "All species are in the gas phase.", "isCorrect": false },
      { "text": "CaCO3(s) ⇌ CaO(s) + CO2(g)", "rationale": "The system contains both solid and gas phases.", "isCorrect": true },
      { "text": "H2(g) + I2(g) ⇌ 2HI(g)", "rationale": "All species are gases.", "isCorrect": false },
      { "text": "CH3COOH(aq) ⇌ CH3COO-(aq) + H+(aq)", "rationale": "All species are in aqueous solution.", "isCorrect": false }
    ],
    "hint": "Look for a reaction with different states of matter (s, l, g)."
  },
  {
    "questionNumber": 54,
    "question": "The pH of a buffer solution can be calculated using the:",
    "answerOptions": [
      { "text": "Boyle's Law equation", "rationale": "This relates pressure and volume.", "isCorrect": false },
      { "text": "Henderson-Hasselbalch equation", "rationale": "pH = pKa + log([Base]/[Acid]).", "isCorrect": true },
      { "text": "Arrhenius equation", "rationale": "This relates rate constant and temperature.", "isCorrect": false },
      { "text": "Nernst equation", "rationale": "This relates cell potential and concentration.", "isCorrect": false }
    ],
    "hint": "It relates pH, pKa, and the concentrations of the buffer components."
  },
  {
    "questionNumber": 55,
    "question": "What is the molecular shape of BeCl2?",
    "answerOptions": [
      { "text": "Linear", "rationale": "Beryllium is sp hybridized and forms two bonds at 180°.", "isCorrect": true },
      { "text": "Bent", "rationale": "Bent shapes have lone pairs (like water).", "isCorrect": false },
      { "text": "Trigonal Planar", "rationale": "This requires three bonds.", "isCorrect": false },
      { "text": "Tetrahedral", "rationale": "This requires four bonds.", "isCorrect": false }
    ],
    "hint": "The central atom has only two electron domains."
  },
  {
    "questionNumber": 56,
    "question": "Which rule describes the filling of orbitals of equal energy singly first?",
    "answerOptions": [
      { "text": "Hund's Rule", "rationale": "It ensures the maximum number of unpaired electrons.", "isCorrect": true },
      { "text": "Aufbau Principle", "rationale": "This defines the order of subshells (1s, 2s, 2p...).", "isCorrect": false },
      { "text": "Pauli Principle", "rationale": "This defines the maximum electrons per orbital.", "isCorrect": false },
      { "text": "Octet Rule", "rationale": "This defines the stability of 8 electrons.", "isCorrect": false }
    ],
    "hint": "It's like the 'bus seat rule'."
  },
  {
    "questionNumber": 57,
    "question": "The kinetic molecular theory assumes that gas particles:",
    "answerOptions": [
      { "text": "Have strong attractive forces", "rationale": "It assumes attractive forces are negligible.", "isCorrect": false },
      { "text": "Occupied a large volume of the container", "rationale": "It assumes the volume of particles is negligible.", "isCorrect": false },
      { "text": "Are in constant, random motion", "rationale": "Particles move in straight lines until they collide.", "isCorrect": true },
      { "text": "Lose energy upon collision", "rationale": "It assumes collisions are perfectly elastic.", "isCorrect": false }
    ],
    "hint": "This explains why gases expand to fill any container."
  },
  {
    "questionNumber": 58,
    "question": "What is the value of Avogadro's constant?",
    "answerOptions": [
      { "text": "6.022 x 10^23", "rationale": "This is the number of particles in exactly one mole.", "isCorrect": true },
      { "text": "1.602 x 10^-19", "rationale": "This is the charge of an electron.", "isCorrect": false },
      { "text": "8.314", "rationale": "This is the Ideal Gas Constant (R).", "isCorrect": false },
      { "text": "9.11 x 10^-31", "rationale": "This is the mass of an electron.", "isCorrect": false }
    ],
    "hint": "It's the bridge between the microscopic and macroscopic world."
  },
  {
    "questionNumber": 59,
    "question": "In a spontaneous reaction at constant temperature and pressure:",
    "answerOptions": [
      { "text": "ΔG > 0", "rationale": "Positive ΔG is non-spontaneous.", "isCorrect": false },
      { "text": "ΔG < 0", "rationale": "Gibbs free energy must decrease for a process to be spontaneous.", "isCorrect": true },
      { "text": "ΔG = 0", "rationale": "The system is at equilibrium.", "isCorrect": false },
      { "text": "ΔH = 0", "rationale": "Spontaneity depends on both ΔH and ΔS.", "isCorrect": false }
    ],
    "hint": "The 'Free Energy' must be negative."
  },
  {
    "questionNumber": 60,
    "question": "Which of these factors does NOT affect the rate constant (k) of a reaction?",
    "answerOptions": [
      { "text": "Temperature", "rationale": "Temperature changes k significantly (Arrhenius equation).", "isCorrect": false },
      { "text": "Catalyst", "rationale": "A catalyst increases k by lowering activation energy.", "isCorrect": false },
      { "text": "Concentration of reactants", "rationale": "Concentration affects the rate, but the rate constant (k) remains the same at a given temperature.", "isCorrect": true },
      { "text": "Nature of reactants", "rationale": "Different reactions have different k values.", "isCorrect": false }
    ],
    "hint": "The 'constant' in the rate law only changes with T or a catalyst."
  },
  {
    "questionNumber": 61,
    "question": "What is the bond order of the H2 molecule?",
    "answerOptions": [
      { "text": "0", "rationale": "A bond order of 0 means the molecule is unstable and won't form.", "isCorrect": false },
      { "text": "1", "rationale": "There is one pair of shared electrons (a single bond).", "isCorrect": true },
      { "text": "2", "rationale": "H2 only has two electrons total.", "isCorrect": false },
      { "text": "0.5", "rationale": "This is the bond order for H2+.", "isCorrect": false }
    ],
    "hint": "Bond order = (bonding electrons - antibonding electrons) / 2."
  },
  {
    "questionNumber": 62,
    "question": "Which gas is released when a reactive metal reacts with a dilute acid?",
    "answerOptions": [
      { "text": "Oxygen", "rationale": "Oxygen is not produced in this type of reaction.", "isCorrect": false },
      { "text": "Hydrogen", "rationale": "Metals displace hydrogen from acids.", "isCorrect": true },
      { "text": "Carbon Dioxide", "rationale": "This is released from carbonates, not pure metals.", "isCorrect": false },
      { "text": "Chlorine", "rationale": "Chlorine is not usually released from dilute acids.", "isCorrect": false }
    ],
    "hint": "It's the lightest gas."
  },
  {
    "questionNumber": 63,
    "question": "The 'mole' is defined as the amount of substance containing the same number of entities as there are atoms in exactly:",
    "answerOptions": [
      { "text": "1.008 g of Hydrogen", "rationale": "This was an old standard.", "isCorrect": false },
      { "text": "12.000 g of Carbon-12", "rationale": "This is the international standard for the mole.", "isCorrect": true },
      { "text": "16.000 g of Oxygen-16", "rationale": "Oxygen was used previously but replaced by Carbon.", "isCorrect": false },
      { "text": "1.000 g of water", "rationale": "Water is a compound, not the standard element.", "isCorrect": false }
    ],
    "hint": "Carbon-12 is the reference."
  },
  {
    "questionNumber": 64,
    "question": "In the reaction: H2 + Cl2 → 2HCl, which species is oxidized?",
    "answerOptions": [
      { "text": "H2", "rationale": "Hydrogen's oxidation state goes from 0 to +1 (loss of electrons).", "isCorrect": true },
      { "text": "Cl2", "rationale": "Chlorine is reduced (0 to -1).", "isCorrect": false },
      { "text": "HCl", "rationale": "This is the product.", "isCorrect": false },
      { "text": "None", "rationale": "This is a redox reaction.", "isCorrect": false }
    ],
    "hint": "Oxidation is the loss of electrons."
  },
  {
    "questionNumber": 65,
    "question": "Which d-orbital electrons are involved in the magnetism of transition metals?",
    "answerOptions": [
      { "text": "Paired electrons", "rationale": "Paired electrons cancel out magnetic moments.", "isCorrect": false },
      { "text": "Unpaired electrons", "rationale": "Unpaired electrons create a magnetic moment (paramagnetism).", "isCorrect": true },
      { "text": "Inner core electrons", "rationale": "These are always paired.", "isCorrect": false },
      { "text": "Conduction electrons", "rationale": "These relate to conductivity, not atomic magnetism.", "isCorrect": false }
    ],
    "hint": "Hund's rule helps explain why these elements are magnetic."
  },
  {
    "questionNumber": 66,
    "question": "The term 'Isoelectronic' refers to species that have the same:",
    "answerOptions": [
      { "text": "Atomic number", "rationale": "These would be the same element.", "isCorrect": false },
      { "text": "Mass number", "rationale": "These are isobars.", "isCorrect": false },
      { "text": "Number of electrons", "rationale": "For example, Ne, Na+, and F- all have 10 electrons.", "isCorrect": true },
      { "text": "Number of neutrons", "rationale": "These are isotones.", "isCorrect": false }
    ],
    "hint": "Prefix 'iso-' means same, 'electronic' refers to electrons."
  },
  {
    "questionNumber": 67,
    "question": "What is the bond angle in a perfectly tetrahedral molecule like CH4?",
    "answerOptions": [
      { "text": "90°", "rationale": "Incorrect; tetrahedral is 3D.", "isCorrect": false },
      { "text": "120°", "rationale": "This is for trigonal planar.", "isCorrect": false },
      { "text": "109.5°", "rationale": "This angle maximizes the distance between the four electron pairs.", "isCorrect": true },
      { "text": "180°", "rationale": "This is for linear.", "isCorrect": false }
    ],
    "hint": "It is slightly more than 100 degrees."
  },
  {
    "questionNumber": 68,
    "question": "Which gas law relates volume and temperature at constant pressure?",
    "answerOptions": [
      { "text": "Boyle's Law", "rationale": "Relates pressure and volume.", "isCorrect": false },
      { "text": "Charles's Law", "rationale": "V/T = k; volume is directly proportional to absolute temperature.", "isCorrect": true },
      { "text": "Gay-Lussac's Law", "rationale": "Relates pressure and temperature.", "isCorrect": false },
      { "text": "Avogadro's Law", "rationale": "Relates volume and moles.", "isCorrect": false }
    ],
    "hint": "Think of a balloon expanding when heated."
  },
  {
    "questionNumber": 69,
    "question": "In the reaction mechanism, an 'intermediate' is a species that is:",
    "answerOptions": [
      { "text": "A reactant in the overall equation", "rationale": "Reactants are present at the start.", "isCorrect": false },
      { "text": "A product in the overall equation", "rationale": "Products are present at the end.", "isCorrect": false },
      { "text": "Produced in one step and consumed in another", "rationale": "It does not appear in the final balanced equation.", "isCorrect": true },
      { "text": "A catalyst", "rationale": "A catalyst is consumed first and then regenerated.", "isCorrect": false }
    ],
    "hint": "It's a temporary product in a multi-step process."
  },
  {
    "questionNumber": 70,
    "question": "What is the oxidation number of Cr in the dichromate ion (Cr2O7^2-)?",
    "answerOptions": [
      { "text": "+3", "rationale": "This is the state after it is reduced.", "isCorrect": false },
      { "text": "+6", "rationale": "2x + 7(-2) = -2 results in x = +6.", "isCorrect": true },
      { "text": "+7", "rationale": "Incorrect calculation.", "isCorrect": false },
      { "text": "+12", "rationale": "Oxidation states rarely go this high.", "isCorrect": false }
    ],
    "hint": "Consider the charge of Oxygen is -2."
  },
  {
    "questionNumber": 71,
    "question": "Which orbital is filled immediately after the 3p orbital?",
    "answerOptions": [
      { "text": "3d", "rationale": "The 4s orbital is lower in energy than 3d.", "isCorrect": false },
      { "text": "4s", "rationale": "According to the Aufbau principle, 4s is filled after 3p.", "isCorrect": true },
      { "text": "4p", "rationale": "4p is filled after 3d.", "isCorrect": false },
      { "text": "4d", "rationale": "4d is filled much later.", "isCorrect": false }
    ],
    "hint": "Follow the 'diagonal rule' of orbital filling."
  },
  {
    "questionNumber": 72,
    "question": "The 'Empirical Formula' represents the:",
    "answerOptions": [
      { "text": "Actual number of atoms in a molecule", "rationale": "This is the molecular formula.", "isCorrect": false },
      { "text": "Simplest whole-number ratio of atoms in a compound", "rationale": "For example, CH2 is the empirical formula for C2H4.", "isCorrect": true },
      { "text": "Arrangement of atoms in space", "rationale": "This is the structural formula.", "isCorrect": false },
      { "text": "Mass of the molecule", "rationale": "This is the molar mass.", "isCorrect": false }
    ],
    "hint": "It is the reduced form of a chemical formula."
  },
  {
    "questionNumber": 73,
    "question": "What happens to the ionization energy as you move from left to right across a period?",
    "answerOptions": [
      { "text": "It decreases", "rationale": "Atomic radius decreases and nuclear charge increases, making it harder to remove electrons.", "isCorrect": false },
      { "text": "It increases", "rationale": "Effective nuclear charge increases, holding electrons more tightly.", "isCorrect": true },
      { "text": "It remains constant", "rationale": "It shows a clear periodic trend.", "isCorrect": false },
      { "text": "It becomes zero", "rationale": "It is never zero for an atom.", "isCorrect": false }
    ],
    "hint": "Atoms on the right (like Noble Gases) hold their electrons very strongly."
  },
  {
    "questionNumber": 74,
    "question": "Which of these is a characteristic of a covalent compound?",
    "answerOptions": [
      { "text": "High melting point", "rationale": "Most have low melting points.", "isCorrect": false },
      { "text": "Conducts electricity when molten", "rationale": "This is a property of ionic compounds.", "isCorrect": false },
      { "text": "Usually consists of non-metals", "rationale": "Covalent bonds form between atoms with similar electronegativities.", "isCorrect": true },
      { "text": "Exists as a lattice of ions", "rationale": "They exist as discrete molecules.", "isCorrect": false }
    ],
    "hint": "Think of CO2 or H2O."
  },
  {
    "questionNumber": 75,
    "question": "In the reaction: N2 + 3H2 → 2NH3, how many grams of NH3 are produced from 1 mole of N2? (N=14, H=1)",
    "answerOptions": [
      { "text": "17 g", "rationale": "This is the mass of 1 mole of NH3; the reaction produces 2 moles.", "isCorrect": false },
      { "text": "34 g", "rationale": "1 mole of N2 produces 2 moles of NH3 (2 * 17 = 34g).", "isCorrect": true },
      { "text": "28 g", "rationale": "This is the mass of N2 reactant.", "isCorrect": false },
      { "text": "6 g", "rationale": "This is the mass of H2 reactant.", "isCorrect": false }
    ],
    "hint": "Check the stoichiometry of the balanced equation."
  },
  {
    "questionNumber": 76,
    "question": "The 'half-life' of a first-order reaction is:",
    "answerOptions": [
      { "text": "Dependent on the initial concentration", "rationale": "This is true for zero and second-order reactions.", "isCorrect": false },
      { "text": "Independent of the initial concentration", "rationale": "t1/2 = 0.693 / k; it only depends on the rate constant.", "isCorrect": true },
      { "text": "Always 50 seconds", "rationale": "It depends on the specific reaction's k value.", "isCorrect": false },
      { "text": "The time taken for the reaction to end", "rationale": "It is the time for concentration to drop by half.", "isCorrect": false }
    ],
    "hint": "First-order decay follows an exponential curve."
  },
  {
    "questionNumber": 77,
    "question": "Which of the following molecules has a dipole moment (is polar)?",
    "answerOptions": [
      { "text": "CH4", "rationale": "Symmetry cancels out the dipoles.", "isCorrect": false },
      { "text": "CO2", "rationale": "Symmetry cancels out the dipoles.", "isCorrect": false },
      { "text": "NH3", "rationale": "The trigonal pyramidal shape is asymmetric, leading to a net dipole.", "isCorrect": true },
      { "text": "CCl4", "rationale": "Symmetry cancels out the dipoles.", "isCorrect": false }
    ],
    "hint": "Look for a molecule with an asymmetric shape."
  },
  {
    "questionNumber": 78,
    "question": "What is the oxidation state of Nitrogen in Nitrogen gas (N2)?",
    "answerOptions": [
      { "text": "-3", "rationale": "This is for the nitride ion (N3-).", "isCorrect": false },
      { "text": "0", "rationale": "Elements in their standard, uncombined state always have an oxidation state of zero.", "isCorrect": true },
      { "text": "+5", "rationale": "This is the state in the nitrate ion (NO3-).", "isCorrect": false },
      { "text": "+3", "rationale": "This is the state in the nitrite ion (NO2-).", "isCorrect": false }
    ],
    "hint": "Every element in its elemental form has the same value."
  },
  {
    "questionNumber": 79,
    "question": "A reaction with a large positive value of ΔG° will have an equilibrium constant (K) that is:",
    "answerOptions": [
      { "text": "Very large (K > 1)", "rationale": "This is true for spontaneous reactions (ΔG < 0).", "isCorrect": false },
      { "text": "Very small (K < 1)", "rationale": "A non-spontaneous reaction favors reactants at equilibrium.", "isCorrect": true },
      { "text": "Exactly 1", "rationale": "This occurs when ΔG° is exactly 0.", "isCorrect": false },
      { "text": "Negative", "rationale": "Equilibrium constants can never be negative.", "isCorrect": false }
    ],
    "hint": "ΔG° = -RT ln K."
  },
  {
    "questionNumber": 80,
    "question": "Which scientist discovered the charge of an electron using the oil drop experiment?",
    "answerOptions": [
      { "text": "J.J. Thomson", "rationale": "He discovered the electron and its charge-to-mass ratio.", "isCorrect": false },
      { "text": "Robert Millikan", "rationale": "Millikan's oil drop experiment determined the fundamental charge (e).", "isCorrect": true },
      { "text": "Ernest Rutherford", "rationale": "He discovered the nucleus.", "isCorrect": false },
      { "text": "Isaac Newton", "rationale": "Newton was a physicist long before atomic theory was developed.", "isCorrect": false }
    ],
    "hint": "He measured the behavior of tiny charged oil droplets in an electric field."
  }
  ,
  {
    "questionNumber": 1,
    "question": "Who proposed that matter is composed of small, indivisible particles called 'atomos'?",
    "answerOptions": [
      { "text": "Aristotle", "rationale": "Aristotle believed in the four-element theory.", "isCorrect": false },
      { "text": "Democritus", "rationale": "Democritus and Leucippus proposed the concept of 'atomos'.", "isCorrect": true },
      { "text": "John Dalton", "rationale": "Dalton formulated the first scientific atomic theory much later.", "isCorrect": false },
      { "text": "Niels Bohr", "rationale": "Bohr proposed the planetary model of the atom.", "isCorrect": false }
    ],
    "hint": "He was an Ancient Greek philosopher."
  },
  {
    "questionNumber": 2,
    "question": "Which subatomic particle was discovered by J.J. Thomson using cathode rays?",
    "answerOptions": [
      { "text": "Proton", "rationale": "Protons were identified later in the nucleus.", "isCorrect": false },
      { "text": "Neutron", "rationale": "Neutrons were discovered by James Chadwick in 1932.", "isCorrect": false },
      { "text": "Electron", "rationale": "Thomson's experiments with cathode rays proved the existence of electrons.", "isCorrect": true },
      { "text": "Alpha particle", "rationale": "These are helium nuclei used in Rutherford's experiments.", "isCorrect": false }
    ],
    "hint": "It is a negatively charged particle."
  },
  {
    "questionNumber": 3,
    "question": "In the balanced equation P4O10 + 6H2O → 4H3PO4, what is the coefficient of water (H2O)?",
    "answerOptions": [
      { "text": "1", "rationale": "One mole is insufficient to balance the hydrogen atoms.", "isCorrect": false },
      { "text": "4", "rationale": "4 is the coefficient for the product, H3PO4.", "isCorrect": false },
      { "text": "6", "rationale": "6 moles of H2O provide the 12 hydrogens needed for 4 molecules of H3PO4.", "isCorrect": true },
      { "text": "10", "rationale": "10 is the subscript of oxygen in the first reactant.", "isCorrect": false }
    ],
    "hint": "Count the total number of Hydrogen atoms on the product side."
  },
  {
    "questionNumber": 4,
    "question": "Henry Moseley's revision of the periodic table (1913) established that elements should be arranged by:",
    "answerOptions": [
      { "text": "Atomic mass", "rationale": "Mendeleev used mass, but it caused anomalies.", "isCorrect": false },
      { "text": "Atomic number", "rationale": "Moseley showed that atomic number is the fundamental property for arrangement.", "isCorrect": true },
      { "text": "Electronegativity", "rationale": "This is a periodic trend, not the basis of arrangement.", "isCorrect": false },
      { "text": "Density", "rationale": "Density is a physical property that varies periodically.", "isCorrect": false }
    ],
    "hint": "Atomic number is the number of protons in the nucleus."
  },
  {
    "questionNumber": 5,
    "question": "What is the bond angle typically associated with sp2 hybridization (e.g., in BCl3)?",
    "answerOptions": [
      { "text": "180°", "rationale": "This belongs to sp hybridization.", "isCorrect": false },
      { "text": "109.5°", "rationale": "This belongs to sp3 hybridization.", "isCorrect": false },
      { "text": "120°", "rationale": "sp2 hybridization results in trigonal planar geometry with 120° angles.", "isCorrect": true },
      { "text": "90°", "rationale": "This is found in octahedral geometries.", "isCorrect": false }
    ],
    "hint": "Think of a circle split into three equal parts."
  },
  {
    "questionNumber": 6,
    "question": "According to the courseware, what is the approximate specific gravity of sodium chloride (NaCl)?",
    "answerOptions": [
      { "text": "1.000", "rationale": "This is the density of water.", "isCorrect": false },
      { "text": "2.165", "rationale": "The text states NaCl has a specific gravity around 2.165.", "isCorrect": true },
      { "text": "5.514", "rationale": "This is significantly denser than table salt.", "isCorrect": false },
      { "text": "0.968", "rationale": "This is the density of pure Sodium metal.", "isCorrect": false }
    ],
    "hint": "It is between 2.1 and 2.2."
  },
  {
    "questionNumber": 7,
    "question": "According to transition state theory, the 'activated complex' is:",
    "answerOptions": [
      { "text": "A stable intermediate", "rationale": "It is highly unstable and short-lived.", "isCorrect": false },
      { "text": "A catalyst", "rationale": "A catalyst helps form it but is not the complex itself.", "isCorrect": false },
      { "text": "An unstable arrangement at the peak of the energy barrier", "rationale": "The complex exists at the highest energy state of the reaction.", "isCorrect": true },
      { "text": "The final product", "rationale": "The complex must break down to form the product.", "isCorrect": false }
    ],
    "hint": "It occurs at the highest point of an energy diagram."
  },
  {
    "questionNumber": 8,
    "question": "In the reaction Fe2O3 + 2Al → 2Fe + Al2O3, which element acts as the reducing agent?",
    "answerOptions": [
      { "text": "Iron (Fe)", "rationale": "Iron is reduced, meaning it is the oxidizing agent.", "isCorrect": false },
      { "text": "Aluminum (Al)", "rationale": "Aluminum is oxidized and causes the reduction of Iron, making it the reducing agent.", "isCorrect": true },
      { "text": "Oxygen (O)", "rationale": "Oxygen's oxidation state does not change.", "isCorrect": false },
      { "text": "Al2O3", "rationale": "This is a product, not an agent in the initial reaction.", "isCorrect": false }
    ],
    "hint": "The reducing agent itself gets oxidized."
  },
  {
    "questionNumber": 9,
    "question": "What does the Heisenberg Uncertainty Principle state?",
    "answerOptions": [
      { "text": "Electrons are always in fixed orbits", "rationale": "This was Bohr's idea, which was updated by Heisenberg.", "isCorrect": false },
      { "text": "Position and momentum cannot be known simultaneously with precision", "rationale": "The principle sets a limit on what we can know about subatomic particles.", "isCorrect": true },
      { "text": "No two electrons can have the same spin", "rationale": "This is the Pauli Exclusion Principle.", "isCorrect": false },
      { "text": "Energy is created in the nucleus", "rationale": "This violates the law of conservation of energy.", "isCorrect": false }
    ],
    "hint": "It deals with the 'uncertainty' of particle measurements."
  },
  {
    "questionNumber": 10,
    "question": "Which group of elements is known as the 'Alkaline Earth Metals'?",
    "answerOptions": [
      { "text": "Group 1", "rationale": "These are the Alkali Metals.", "isCorrect": false },
      { "text": "Group 2", "rationale": "Group 2 elements (Be, Mg, Ca, etc.) are the Alkaline Earth Metals.", "isCorrect": true },
      { "text": "Group 17", "rationale": "These are the Halogens.", "isCorrect": false },
      { "text": "Group 18", "rationale": "These are the Noble Gases.", "isCorrect": false }
    ],
    "hint": "It is the second column of the periodic table."
  },

  {
    "questionNumber": 16,
    "question": "What is the molecular geometry of Ammonia (NH3)?",
    "answerOptions": [
      { "text": "Tetrahedral", "rationale": "The electron geometry is tetrahedral, but not the molecular geometry.", "isCorrect": false },
      { "text": "Trigonal Pyramidal", "rationale": "The lone pair on Nitrogen pushes the Hydrogens down into a pyramid shape.", "isCorrect": true },
      { "text": "Trigonal Planar", "rationale": "This would happen if there were no lone pairs.", "isCorrect": false },
      { "text": "Linear", "rationale": "Ammonia has 4 electron domains, so it cannot be linear.", "isCorrect": false }
    ],
    "hint": "The presence of one lone pair changes the shape from tetrahedral."
  },
  {
    "questionNumber": 17,
    "question": "Which principle states that no two electrons in an atom can have the same four quantum numbers?",
    "answerOptions": [
      { "text": "Hund's Rule", "rationale": "Hund's rule deals with filling degenerate orbitals.", "isCorrect": false },
      { "text": "Aufbau Principle", "rationale": "Aufbau deals with filling order.", "isCorrect": false },
      { "text": "Pauli Exclusion Principle", "rationale": "This principle limits each orbital to two electrons with opposite spins.", "isCorrect": true },
      { "text": "Le Chatelier's Principle", "rationale": "This deals with equilibrium shifts.", "isCorrect": false }
    ],
    "hint": "It 'excludes' electrons from having identical states."
  },
  {
    "questionNumber": 18,
    "question": "A buffer solution is typically composed of:",
    "answerOptions": [
      { "text": "A strong acid and a strong base", "rationale": "This creates a neutral salt solution, not a buffer.", "isCorrect": false },
      { "text": "A weak acid and its conjugate base", "rationale": "This mixture resists changes in pH.", "isCorrect": true },
      { "text": "Pure water and salt", "rationale": "Water has no buffering capacity.", "isCorrect": false },
      { "text": "A strong acid and its conjugate base", "rationale": "Conjugate bases of strong acids are too weak to buffer.", "isCorrect": false }
    ],
    "hint": "It requires a 'weak' species and its 'conjugate'."
  },
  {
    "questionNumber": 19,
    "question": "What is the value of the pH of a neutral solution at 25°C?",
    "answerOptions": [
      { "text": "0", "rationale": "This is a very strong acid.", "isCorrect": false },
      { "text": "14", "rationale": "This is a very strong base.", "isCorrect": false },
      { "text": "7", "rationale": "At neutral pH, [H+] equals [OH-], which is 10^-7.", "isCorrect": true },
      { "text": "1", "rationale": "This is a strong acid.", "isCorrect": false }
    ],
    "hint": "It is the middle of the pH scale."
  },
  {
    "questionNumber": 20,
    "question": "In an exothermic reaction, heat is:",
    "answerOptions": [
      { "text": "Absorbed from the surroundings", "rationale": "This describes an endothermic reaction.", "isCorrect": false },
      { "text": "Released to the surroundings", "rationale": "Exothermic reactions 'exit' heat.", "isCorrect": true },
      { "text": "Stayed constant", "rationale": "There is always an energy change in reactions.", "isCorrect": false },
      { "text": "Used to increase activation energy", "rationale": "Activation energy is independent of heat release.", "isCorrect": false }
    ],
    "hint": "The prefix 'exo-' means out or exit."
  }
];

// --- QUIZ LOGIC FUNCTIONS (PRESERVED FROM ORIGINAL FILE) ---
let score = 0;
let answered = false;
let userAnswers = [];
let currentQuestionIndex = 0;

/**
 * Loads and displays the current question and its options.
 */
function loadQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    showResults();
    return;
  }
  answered = false;
  const questionData = quizQuestions[currentQuestionIndex];
  const questionTextElement = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const nextButton = document.getElementById('next-button');
  const feedbackElement = document.getElementById('feedback');

  // Reset elements
  optionsContainer.innerHTML = '';
  feedbackElement.innerHTML = '';
  nextButton.disabled = true;
  nextButton.textContent = 'Next Question';

  // Update question text
  questionTextElement.innerHTML = `Q${currentQuestionIndex + 1}/${quizQuestions.length}: ${questionData.question}`;

  // Create answer options
  questionData.answerOptions.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.setAttribute('data-index', index);
    optionElement.innerHTML = option.text;

    // Attach click listener
    optionElement.onclick = () => {
      if (!answered) {
        checkAnswer(optionElement, index, questionData);
      }
    };
    optionsContainer.appendChild(optionElement);
  });

  // Ensure MathJax re-renders the new content
  if (window.MathJax) {
    MathJax.texReset();
    MathJax.typesetPromise([document.getElementById('quiz-area')]).catch((err) => {
      console.error('Error rendering MathJax:', err);
    });
  }
}

/**
 * Checks the selected answer, updates the score, and displays feedback.
 */
function checkAnswer(selectedElement, selectedIndex, questionData) {
  answered = true;
  const options = document.querySelectorAll('.option');
  const nextButton = document.getElementById('next-button');
  const feedbackElement = document.getElementById('feedback');

  // Disable all options after selection
  options.forEach(option => {
    option.classList.add('disabled');
    if (option !== selectedElement) {
      option.classList.remove('selected');
    }
  });

  const isCorrect = questionData.answerOptions[selectedIndex].isCorrect;
  const correctAnswer = questionData.answerOptions.find(opt => opt.isCorrect);

  // Record the user's answer
  userAnswers.push({
    question: questionData.question,
    userSelection: selectedElement.textContent,
    isCorrect: isCorrect,
    correctAnswer: correctAnswer.text,
    rationale: correctAnswer.rationale,
    hint: questionData.hint
  });

  if (isCorrect) {
    score++;
    selectedElement.classList.add('correct');
    feedbackElement.innerHTML = '<span style="color: green;">Correct!</span>';
  } else {
    selectedElement.classList.add('incorrect');
    feedbackElement.innerHTML = '<span style="color: red;">Incorrect.</span>';

    // Highlight the correct answer
    options.forEach(option => {
      if (questionData.answerOptions[option.getAttribute('data-index')].isCorrect) {
        option.classList.add('correct');
      }
    });
  }

  // Display Rationale and Hint
  feedbackElement.innerHTML += `
    <div class="rationale">
      <strong>Rationale:</strong> ${correctAnswer.rationale}
      <div class="hint">Hint: ${questionData.hint}</div>
    </div>
  `;

  nextButton.disabled = false;
  if (window.MathJax) {
    MathJax.texReset();
    MathJax.typesetPromise([feedbackElement]).catch((err) => {
      console.error('Error rendering MathJax:', err);
    });
  }
}

/**
 * Advances the quiz to the next question.
 */
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

/**
 * Displays the final results screen.
 */
function showResults() {
  document.getElementById('quiz-area').style.display = 'none';
  document.getElementById('results-area').style.display = 'block';
  const scoreText = document.getElementById('score-text');
  const percentage = ((score / quizQuestions.length) * 100).toFixed(1);
  scoreText.innerHTML = `You scored <strong>${score}</strong> out of ${quizQuestions.length} (${percentage}%)`;
}

/**
 * Generates and displays the answer review area.
 */
function reviewResults() {
  document.getElementById('results-area').style.display = 'none';
  document.getElementById('review-area').style.display = 'block';
  const reviewContent = document.getElementById('review-content');
  reviewContent.innerHTML = '';
  userAnswers.forEach((answer, index) => {
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    const isCorrectClass = answer.isCorrect ? 'correct' : 'incorrect';
    reviewItem.innerHTML = `
      <h3>Question ${index + 1}</h3>
      <p class="question-text">${answer.question}</p>
      <p class="user-answer ${isCorrectClass}"><strong>Your Answer:</strong> ${answer.userSelection} <span style="font-weight: normal;">${answer.isCorrect ? '(Correct)' : '(Incorrect)'}</span></p>
      <p class="correct-answer"><strong>Correct Answer:</strong> ${answer.correctAnswer}</p>
      <p class="rationale"><strong>Rationale:</strong> ${answer.rationale}</p>
      <p class="hint"><strong>Hint:</strong> ${answer.hint}</p>
    `;
    reviewContent.appendChild(reviewItem);
  });
  if (window.MathJax) {
    MathJax.texReset();
    MathJax.typesetPromise([reviewContent]).catch((err) => {
      console.error('Error rendering MathJax:', err);
    });
  }
}

// Add a check to see if MathJax is loaded (Fix for fragmented code)
if (typeof MathJax === 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
}

// Start the quiz once the script is loaded
document.addEventListener('DOMContentLoaded', loadQuestion);