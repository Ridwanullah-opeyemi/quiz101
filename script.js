// --- QUIZ DATA: 80 Questions Array ---
// Note: Mathematical expressions have been simplified for better rendering in standard HTML.
const quizQuestions = [
  {
    "questionNumber": 6,
    "question": "A river flows due East at 2.0 m/s. A boat is heading due North at 3.0 m/s relative to the water. What is the magnitude of the boat's velocity relative to the ground?",
    "answerOptions": [
      {
        "text": "1.0 m/s",
        "rationale": "This is the difference between the speeds, which is incorrect as the velocities are perpendicular.",
        "isCorrect": false
      },
      {
        "text": "5.0 m/s",
        "rationale": "This is the arithmetic sum of the speeds, which is incorrect for perpendicular vectors.",
        "isCorrect": false
      },
      {
        "text": "sqrt(5) m/s (approx. 2.24 m/s)",
        "rationale": "This results from 3^2 - 2^2, which is incorrect.",
        "isCorrect": false
      },
      {
        "text": "sqrt(13) m/s (approx. 3.61 m/s)",
        "rationale": "The magnitude is found using the Pythagorean theorem for perpendicular vectors: sqrt(2.0^2 + 3.0^2) = sqrt(4+9) = sqrt(13) m/s.",
        "isCorrect": true
      }
    ],
    "hint": "The velocity of the boat relative to the ground is the vector sum of the boat's velocity relative to the water and the water's velocity relative to the ground. Use the Pythagorean theorem for perpendicular components."
  },
  {
    "questionNumber": 7,
    "question": "A man is running East at 4.0 m/s in a vertical rain that is falling straight down at 3.0 m/s. What is the magnitude of the velocity of the rain relative to the man?",
    "answerOptions": [
      {
        "text": "1.0 m/s",
        "rationale": "This is the difference between the speeds.",
        "isCorrect": false
      },
      {
        "text": "5.0 m/s",
        "rationale": "The relative velocity vector V_rm = V_r - V_m has perpendicular components (3.0 m/s vertical and 4.0 m/s horizontal), so the magnitude is sqrt(3.0^2 + 4.0^2) = 5.0 m/s.",
        "isCorrect": true
      },
      {
        "text": "7.0 m/s",
        "rationale": "This is the arithmetic sum of the speeds.",
        "isCorrect": false
      },
      {
        "text": "25.0 m/s",
        "rationale": "This value is the square of the magnitude.",
        "isCorrect": false
      }
    ],
    "hint": "The velocity of the rain relative to the man is the vector subtraction of the man's velocity from the rain's velocity. Since they are perpendicular, the magnitude is the hypotenuse of a right triangle."
  },
  {
    "questionNumber": 8,
    "question": "The time derivative of the relative position (X_BA) gives the:",
    "answerOptions": [
      {
        "text": "Absolute velocity",
        "rationale": "Absolute velocity is the velocity with respect to a stationary, or absolute, reference frame, not the derivative of relative position.",
        "isCorrect": false
      },
      {
        "text": "Relative acceleration",
        "rationale": "The second derivative with respect to time gives acceleration.",
        "isCorrect": false
      },
      {
        "text": "Velocity of approach",
        "rationale": "Velocity of approach is the magnitude of the relative velocity when objects are moving closer.",
        "isCorrect": false
      },
      {
        "text": "Relative velocity",
        "rationale": "Relative velocity (V_BA) is defined as the rate of change of relative position (X_BA) with respect to time.",
        "isCorrect": true
      }
    ],
    "hint": "Velocity is generally the time rate of change of position."
  },
  {
    "questionNumber": 9,
    "question": "If two objects A and B are moving at V_A and V_B in the same direction, what is the relative velocity of A with respect to B (V_AB)?",
    "answerOptions": [
      {
        "text": "V_A + V_B",
        "rationale": "This would be the relative velocity if they were moving in opposite directions.",
        "isCorrect": false
      },
      {
        "text": "V_A - V_B",
        "rationale": "Relative velocity is calculated as the velocity of the observed object (A) minus the velocity of the observer (B).",
        "isCorrect": true
      },
      {
        "text": "V_B - V_A",
        "rationale": "This is the relative velocity of B with respect to A (V_BA).",
        "isCorrect": false
      },
      {
        "text": "sqrt(V_A^2 + V_B^2)",
        "rationale": "This is used for perpendicular velocity vectors.",
        "isCorrect": false
      }
    ],
    "hint": "The formula for relative velocity V_AB is V_A minus V_B."
  },
  {
    "questionNumber": 10,
    "question": "Motion is best described as a concept that is:",
    "answerOptions": [
      {
        "text": "Absolute in nature, independent of the observer.",
        "rationale": "The notes state that motion is not absolute in nature, as it depends on the observer.",
        "isCorrect": false
      },
      {
        "text": "Relative, dependent on both the observer and the observed.",
        "rationale": "Motion is always defined with respect to a reference frame, making it relative and dependent on the observer and the observed.",
        "isCorrect": true
      },
      {
        "text": "Defined only by the change in position of the observed object.",
        "rationale": "It is defined by the change in position *with respect to an observer*.",
        "isCorrect": false
      },
      {
        "text": "A property inherent to the body itself.",
        "rationale": "Motion requires an external reference point (an observer) for definition.",
        "isCorrect": false
      }
    ],
    "hint": "Consider why a reference frame is necessary to define whether a body is in motion or at rest."
  },
  {
    "questionNumber": 11,
    "question": "A 1000 kg car moving at 15 m/s overtakes a 2500 kg truck moving at 10 m/s in the same direction. What is the velocity of the car relative to the truck (V_CT)?",
    "answerOptions": [
      {
        "text": "25 m/s",
        "rationale": "This is the arithmetic sum of the speeds.",
        "isCorrect": false
      },
      {
        "text": "-5 m/s",
        "rationale": "This would be the relative velocity of the truck with respect to the car (V_TC).",
        "isCorrect": false
      },
      {
        "text": "5 m/s",
        "rationale": "The relative velocity V_CT = V_C - V_T = 15 m/s - 10 m/s = 5 m/s.",
        "isCorrect": true
      },
      {
        "text": "15 m/s",
        "rationale": "This is the absolute velocity of the car.",
        "isCorrect": false
      }
    ],
    "hint": "Remember that V_CT = V_C - V_T. The mass of the vehicles is extraneous information for this calculation."
  },
  {
    "questionNumber": 12,
    "question": "A boat crosses a river flowing due south at 4.0 m/s. The boat's engine pushes it due east with a speed of 3.0 m/s relative to the water. What is the magnitude of the boat's total displacement after 10 seconds?",
    "answerOptions": [
      {
        "text": "10 m",
        "rationale": "This would be the displacement if the magnitude of the velocity was 1.0 m/s.",
        "isCorrect": false
      },
      {
        "text": "30 m",
        "rationale": "This is the displacement if the boat only moved East (3.0 m/s * 10 s).",
        "isCorrect": false
      },
      {
        "text": "40 m",
        "rationale": "This is the displacement if the boat only moved South (4.0 m/s * 10 s).",
        "isCorrect": false
      },
      {
        "text": "50 m",
        "rationale": "The net velocity magnitude is sqrt(3.0^2 + 4.0^2) = 5.0 m/s. The displacement is magnitude * time: 5.0 m/s * 10 s = 50 m.",
        "isCorrect": true
      }
    ],
    "hint": "First find the magnitude of the resultant velocity vector, then use d = v_net * t to find the total displacement."
  },
  {
    "questionNumber": 1,
    "question": "In which type of reference frame do Newton's laws of motion hold true without the introduction of fictitious forces?",
    "answerOptions": [
      {
        "text": "Accelerated frame",
        "rationale": "An accelerated frame is a non-inertial frame, requiring the introduction of fictitious forces (like the centrifugal force) to make Newton's laws appear to hold.",
        "isCorrect": false
      },
      {
        "text": "Non-inertial frame",
        "rationale": "A non-inertial frame is defined as one where Newton's laws do not hold in their simplest form.",
        "isCorrect": false
      },
      {
        "text": "Rotating frame",
        "rationale": "A rotating frame is a specific type of non-inertial frame that exhibits Coriolis and centrifugal forces.",
        "isCorrect": false
      },
      {
        "text": "Inertial frame",
        "rationale": "An inertial frame of reference is one in which a body maintains constant velocity (or zero acceleration) when the net force on it is zero, and thus Newton's laws hold.",
        "isCorrect": true
      }
    ],
    "hint": "Recall the definition of a frame where an object at rest or moving at a constant velocity remains so unless acted upon by a net force."
  },
  {
    "questionNumber": 2,
    "question": "If a train is moving at a constant velocity of 50 m/s relative to the ground, what is the velocity of a stationary passenger inside the train relative to the train itself?",
    "answerOptions": [
      {
        "text": "50 m/s",
        "rationale": "This is the velocity of the passenger relative to the ground, not relative to the train.",
        "isCorrect": false
      },
      {
        "text": "0 m/s",
        "rationale": "Since the passenger is stationary within the train, their position relative to the train's reference frame does not change over time, resulting in zero relative velocity.",
        "isCorrect": true
      },
      {
        "text": "100 m/s",
        "rationale": "This value is the sum of the train's velocity and the passenger's relative velocity, which is zero, making the calculation incorrect.",
        "isCorrect": false
      },
      {
        "text": "-50 m/s",
        "rationale": "This would be the velocity of the ground observer relative to the train.",
        "isCorrect": false
      }
    ],
    "hint": "Velocity is always defined with respect to a reference frame. In this case, the reference frame is the train."
  },
  {
    "questionNumber": 3,
    "question": "Which of the following is the most accurate description of why physicists argue the surface of the Earth is a non-inertial frame?",
    "answerOptions": [
      {
        "text": "The Earth is not accelerating.",
        "rationale": "The Earth's surface *is* constantly accelerating due to rotation and revolution, which contradicts this statement.",
        "isCorrect": false
      },
      {
        "text": "The force of gravity is not constant.",
        "rationale": "While gravity varies slightly, the main reason for the non-inertial classification is rotational acceleration.",
        "isCorrect": false
      },
      {
        "text": "The Earth is rotating and revolving, causing an acceleration.",
        "rationale": "Due to its rotation, the Earth's surface is constantly undergoing centripetal acceleration, meaning it is not a perfect inertial frame.",
        "isCorrect": true
      },
      {
        "text": "The air resistance is too high to be ignored.",
        "rationale": "Air resistance is a non-conservative force, but it does not define the reference frame itself as non-inertial.",
        "isCorrect": false
      }
    ],
    "hint": "Consider the condition for a frame to be non-inertial: it must be accelerating."
  },
  {
    "questionNumber": 4,
    "question": "Relative position (X_BA) is defined as:",
    "answerOptions": [
      {
        "text": "X_A + X_B",
        "rationale": "This represents the sum of the positions, not the relative position.",
        "isCorrect": false
      },
      {
        "text": "X_A - X_B",
        "rationale": "This is the relative position of A with respect to B (X_AB), not B with respect to A (X_BA).",
        "isCorrect": false
      },
      {
        "text": "X_B - X_A",
        "rationale": "The relative position of B with respect to A (X_BA) is the position of B minus the position of A.",
        "isCorrect": true
      },
      {
        "text": "|X_A - X_B|",
        "rationale": "This is the distance between A and B, which is a scalar magnitude, while relative position is a vector/signed quantity.",
        "isCorrect": false
      }
    ],
    "hint": "Remember that the relative position of B from A is found by subtracting the position of the reference object (A) from the position of the observed object (B)."
  },
  {
    "questionNumber": 5,
    "question": "Two cars are moving towards each other. Car A is moving at V_A = +25 m/s and Car B is moving at V_B = -15 m/s. What is the velocity of approach (V_app)?",
    "answerOptions": [
      {
        "text": "10 m/s",
        "rationale": "This is the difference between the speeds, which applies if they were moving in the same direction, not toward each other.",
        "isCorrect": false
      },
      {
        "text": "25 m/s",
        "rationale": "This is the speed of Car A alone.",
        "isCorrect": false
      },
      {
        "text": "40 m/s",
        "rationale": "When objects move towards each other, the velocity of approach is the magnitude of the relative velocity, which is the sum of their speeds: |V_A| + |V_B| = 25 + 15 = 40 m/s.",
        "isCorrect": true
      },
      {
        "text": "-40 m/s",
        "rationale": "Velocity of approach is typically expressed as a positive magnitude.",
        "isCorrect": false
      }
    ],
    "hint": "The velocity of approach is the speed at which the separation distance decreases. For objects moving toward each other, their individual speeds add up."
  },

  {
    "questionNumber": 13,
    "question": "If object A is at position r_A = (2i + 3j) m and object B is at r_B = (5i - 2j) m, what is the relative position of B from A (r_BA)?",
    "answerOptions": [
      {
        "text": "(7i + j) m",
        "rationale": "This is the vector sum r_A + r_B.",
        "isCorrect": false
      },
      {
        "text": "(-3i - 5j) m",
        "rationale": "This is r_A - r_B, which is r_AB.",
        "isCorrect": false
      },
      {
        "text": "(3i - 5j) m",
        "rationale": "The relative position is r_BA = r_B - r_A = (5-2)i + (-2-3)j = (3i - 5j) m.",
        "isCorrect": true
      },
      {
        "text": "(3i + 5j) m",
        "rationale": "The y-component subtraction has been done incorrectly.",
        "isCorrect": false
      }
    ],
    "hint": "Remember to subtract the components of the reference vector (r_A) from the components of the observed vector (r_B)."
  },
  {
    "questionNumber": 14,
    "question": "A passenger walking at 1.5 m/s towards the front of a bus moving at 10 m/s. An observer on the ground sees the passenger's velocity as:",
    "answerOptions": [
      {
        "text": "8.5 m/s",
        "rationale": "This would be the case if the passenger was walking toward the back of the bus.",
        "isCorrect": false
      },
      {
        "text": "10 m/s",
        "rationale": "This is only the velocity of the bus.",
        "isCorrect": false
      },
      {
        "text": "11.5 m/s",
        "rationale": "The observer on the ground sees the vector sum of the passenger's velocity relative to the bus and the bus's velocity relative to the ground: 10 m/s + 1.5 m/s = 11.5 m/s.",
        "isCorrect": true
      },
      {
        "text": "-1.5 m/s",
        "rationale": "This is the passenger's velocity relative to the bus if the bus's frame was defined as negative.",
        "isCorrect": false
      }
    ],
    "hint": "The passenger's velocity relative to the ground is the vector sum of the passenger's velocity relative to the bus and the bus's velocity relative to the ground."
  },
  {
    "questionNumber": 15,
    "question": "If you are standing on the ground, and a car drives past you, which reference frame is yours?",
    "answerOptions": [
      {
        "text": "Non-inertial because the Earth is rotating.",
        "rationale": "While technically true, for most problems on the Earth's surface, a standing observer is considered a good approximation of an inertial frame.",
        "isCorrect": false
      },
      {
        "text": "Inertial (approximately), because you are at rest relative to the Earth's surface.",
        "rationale": "The surface of the Earth, for most practical applications of Newton's laws, is considered a suitable, approximate inertial frame of reference.",
        "isCorrect": true
      },
      {
        "text": "The car's reference frame.",
        "rationale": "The car is the object being observed, and its frame is moving relative to yours.",
        "isCorrect": false
      },
      {
        "text": "The reference frame of the center of the galaxy.",
        "rationale": "This frame is too distant and complex for local observations of motion.",
        "isCorrect": false
      }
    ],
    "hint": "Think about the condition under which Newton's laws can be accurately applied to you and the moving car."
  },
  {
    "questionNumber": 16,
    "question": "Which of the following physical phenomena is directly observed due to a non-inertial frame of reference?",
    "answerOptions": [
      {
        "text": "A block remaining at rest on a table.",
        "rationale": "This occurs in an inertial frame when forces are balanced.",
        "isCorrect": false
      },
      {
        "text": "The acceleration of passengers sideways when a bus goes around a corner.",
        "rationale": "This sideways acceleration is the result of the bus's accelerated (non-inertial) frame, causing an apparent 'force' on the passengers.",
        "isCorrect": true
      },
      {
        "text": "A projectile following a parabolic path.",
        "rationale": "This motion is explained by gravity and initial velocity in an inertial frame.",
        "isCorrect": false
      },
      {
        "text": "A freely falling object accelerating at g.",
        "rationale": "This is a prediction of Newton's laws in an inertial frame.",
        "isCorrect": false
      }
    ],
    "hint": "Non-inertial frames are characterized by unexpected accelerations (or 'fictitious forces')."
  },
  {
    "questionNumber": 17,
    "question": "Two planes, A and B, fly at the same altitude. V_A = 200i km/h and V_B = 150j km/h. What is the magnitude of the velocity of A relative to B, |V_AB|?",
    "answerOptions": [
      {
        "text": "50 km/h",
        "rationale": "This is the difference between the speeds, which is incorrect for perpendicular vectors.",
        "isCorrect": false
      },
      {
        "text": "350 km/h",
        "rationale": "This is the arithmetic sum of the speeds, which is incorrect for perpendicular vectors.",
        "isCorrect": false
      },
      {
        "text": "250 km/h",
        "rationale": "V_AB = V_A - V_B = 200i - 150j. The magnitude is sqrt(200^2 + (-150)^2) = sqrt(40000 + 22500) = sqrt(62500) = 250 km/h.",
        "isCorrect": true
      },
      {
        "text": "sqrt(42500) km/h (approx. 206.2 km/h)",
        "rationale": "The calculation 200^2 - 150^2 is incorrect.",
        "isCorrect": false
      }
    ],
    "hint": "Relative velocity V_AB is found by vector subtraction V_A - V_B. Use the Pythagorean theorem to find the magnitude since the components are perpendicular."
  },
  {
    "questionNumber": 18,
    "question": "If two cars are 200 m apart and moving towards each other with speeds of 10 m/s and 15 m/s, how long will it take for them to meet?",
    "answerOptions": [
      {
        "text": "20 s",
        "rationale": "This is the time it would take if the velocity of approach was 10 m/s.",
        "isCorrect": false
      },
      {
        "text": "13.3 s",
        "rationale": "This is the time it would take if the velocity of approach was 15 m/s.",
        "isCorrect": false
      },
      {
        "text": "8.0 s",
        "rationale": "The velocity of approach is 10 m/s + 15 m/s = 25 m/s. Time to meet is d/V_app = 200 m / 25 m/s = 8.0 s.",
        "isCorrect": true
      },
      {
        "text": "4.0 s",
        "rationale": "This is the time it would take if the velocity of approach was 50 m/s.",
        "isCorrect": false
      }
    ],
    "hint": "Calculate the velocity of approach first, then use the relationship t = d/v."
  },
  {
    "questionNumber": 19,
    "question": "A ticketer walks towards the front of a bus at 1.0 m/s while the bus moves at 20 m/s. What is the speed of the ticketer relative to a passenger sitting on the bus?",
    "answerOptions": [
      {
        "text": "21.0 m/s",
        "rationale": "This is the speed relative to the ground.",
        "isCorrect": false
      },
      {
        "text": "19.0 m/s",
        "rationale": "This is the speed relative to the ground if the ticketer was walking to the back.",
        "isCorrect": false
      },
      {
        "text": "1.0 m/s",
        "rationale": "A sitting passenger is stationary relative to the bus frame, so the ticketer's speed relative to the passenger is just the ticketer's speed relative to the bus: 1.0 m/s.",
        "isCorrect": true
      },
      {
        "text": "0 m/s",
        "rationale": "The ticketer is moving relative to the sitting passenger.",
        "isCorrect": false
      }
    ],
    "hint": "The sitting passenger is part of the bus's reference frame. The passenger's velocity relative to the bus is zero."
  },
  {
    "questionNumber": 20,
    "question": "A projectile is thrown up in a non-inertial frame (an accelerating vehicle). Why might the observer fail to catch it precisely?",
    "answerOptions": [
      {
        "text": "The projectile's mass increases as it moves.",
        "rationale": "Mass is conserved and does not increase in this scenario.",
        "isCorrect": false
      },
      {
        "text": "The projectile follows a perfect parabola.",
        "rationale": "It would not follow a perfect parabola relative to the thrower due to the vehicle's acceleration.",
        "isCorrect": false
      },
      {
        "text": "The vehicle's horizontal velocity component is constant.",
        "rationale": "The vehicle is accelerating, meaning its velocity is not constant.",
        "isCorrect": false
      },
      {
        "text": "The vehicle's acceleration changes the point of return relative to the observer.",
        "rationale": "Because the frame is accelerating, the projectile's horizontal motion relative to the ground is different from the frame's, causing it to miss the thrower's hand.",
        "isCorrect": true
      }
    ],
    "hint": "In an accelerating frame, the horizontal velocity of the projectile and the observer's horizontal velocity are no longer matched after the throw."
  },
  {
    "questionNumber": 21,
    "question": "Convert a speed of 120 km/h to meters per second (m/s).",
    "answerOptions": [
      {
        "text": "33.33 m/s",
        "rationale": "120 km/h * (1000 m/km) / (3600 s/h) = 33.33 m/s.",
        "isCorrect": true
      },
      {
        "text": "333.33 m/s",
        "rationale": "The time conversion factor was likely omitted or used incorrectly.",
        "isCorrect": false
      },
      {
        "text": "33333.33 m/s",
        "rationale": "Both the kilometer and hour conversions were likely incorrect.",
        "isCorrect": false
      },
      {
        "text": "120 m/s",
        "rationale": "This calculation only considers the distance conversion, not the time conversion.",
        "isCorrect": false
      }
    ],
    "hint": "To convert from km/h to m/s, multiply by (1000/3600) or divide by 3.6."
  },
  {
    "questionNumber": 22,
    "question": "The total momentum of two colliding objects is conserved if the collision is part of what kind of system?",
    "answerOptions": [
      {
        "text": "Open system",
        "rationale": "An open system exchanges both energy and matter/momentum with the surroundings, so total momentum is generally not conserved.",
        "isCorrect": false
      },
      {
        "text": "Non-conservative system",
        "rationale": "The conservation of momentum is about forces, not whether the system is conservative or non-conservative.",
        "isCorrect": false
      },
      {
        "text": "Isolated system",
        "rationale": "In an isolated system (where the net external force is zero), the total linear momentum is conserved before and after the collision, regardless of whether the collision is elastic or inelastic.",
        "isCorrect": true
      },
      {
        "text": "Accelerated frame",
        "rationale": "Momentum is not conserved in a non-inertial (accelerated) frame unless specific fictitious forces are accounted for.",
        "isCorrect": false
      }
    ],
    "hint": "Recall the condition under which the net external force on a system is zero, as stated in the context of the Law of Conservation of Linear Momentum."
  },
  {
    "questionNumber": 23,
    "question": "A force is best defined by its capability to:",
    "answerOptions": [
      {
        "text": "Cause the potential energy of a body to remain constant.",
        "rationale": "A force often causes a change in potential energy, such as gravity.",
        "isCorrect": false
      },
      {
        "text": "Change the mass or volume of a body.",
        "rationale": "Force generally changes motion, not mass or volume, unless it's a destructive force.",
        "isCorrect": false
      },
      {
        "text": "Change the state of motion or rest of a body.",
        "rationale": "Force is defined as an influence that causes a body to accelerate, changing its state of motion or rest.",
        "isCorrect": true
      },
      {
        "text": "Act only when contact is made between two bodies.",
        "rationale": "Forces can be non-contact, like gravity.",
        "isCorrect": false
      }
    ],
    "hint": "Think about the primary effect of an unbalanced force on an object's velocity."
  },
  {
    "questionNumber": 24,
    "question": "If an applied force is perfectly balanced by another force, the resulting state of the object is:",
    "answerOptions": [
      {
        "text": "A state of constant acceleration.",
        "rationale": "A balanced force means zero net force, leading to zero acceleration (constant velocity).",
        "isCorrect": false
      },
      {
        "text": "A state of non-equilibrium.",
        "rationale": "Balanced forces define a state of equilibrium.",
        "isCorrect": false
      },
      {
        "text": "A state of equilibrium.",
        "rationale": "Equilibrium occurs when the net force (sum of all forces) acting on an object is zero.",
        "isCorrect": true
      },
      {
        "text": "A state of decreasing velocity.",
        "rationale": "A net force is required to change the velocity.",
        "isCorrect": false
      }
    ],
    "hint": "The term for a state where the net force is zero is 'equilibrium'."
  },
  {
    "questionNumber": 25,
    "question": "The two main categories of forces mentioned in the notes are:",
    "answerOptions": [
      {
        "text": "Friction and Gravity",
        "rationale": "These are examples of specific forces, not the main categories.",
        "isCorrect": false
      },
      {
        "text": "Contact and Non-contact forces",
        "rationale": "These are the two fundamental classifications of forces based on the mechanism of interaction.",
        "isCorrect": true
      },
      {
        "text": "Conservative and Non-conservative forces",
        "rationale": "These are classifications based on whether the work done by the force depends on the path, not the mechanism of interaction.",
        "isCorrect": false
      },
      {
        "text": "Action and Reaction forces",
        "rationale": "These are pairs of forces as described by Newton's Third Law.",
        "isCorrect": false
      }
    ],
    "hint": "Think about whether a force requires physical touching to take effect."
  },
  {
    "questionNumber": 26,
    "question": "Which of the following statements correctly relates mass to inertia?",
    "answerOptions": [
      {
        "text": "Inertia is mass divided by acceleration.",
        "rationale": "This formula relates force, mass, and acceleration, not inertia directly.",
        "isCorrect": false
      },
      {
        "text": "Inertia is the tendency of a body to stop moving.",
        "rationale": "Inertia is the tendency to *resist* any change in motion, whether moving or at rest.",
        "isCorrect": false
      },
      {
        "text": "Mass is the quantitative measure of inertia.",
        "rationale": "Mass is defined by Newton as the quantity of matter and serves as a measure of a body's inertia, or its resistance to changes in motion.",
        "isCorrect": true
      },
      {
        "text": "Inertia and mass are unrelated concepts.",
        "rationale": "Newton explicitly related mass and inertia in his formulation of the first law.",
        "isCorrect": false
      }
    ],
    "hint": "Recall how Newton defined mass in relation to a body's tendency to resist changes in motion."
  },
  {
    "questionNumber": 27,
    "question": "State Newton's First Law of Motion.",
    "answerOptions": [
      {
        "text": "Force is equal to mass times acceleration.",
        "rationale": "This is Newton's Second Law.",
        "isCorrect": false
      },
      {
        "text": "For every action, there is an equal and opposite reaction.",
        "rationale": "This is Newton's Third Law.",
        "isCorrect": false
      },
      {
        "text": "A body continues in its state of rest or uniform motion in a straight line unless it is acted upon by an external net force.",
        "rationale": "This is the correct statement of the Law of Inertia.",
        "isCorrect": true
      },
      {
        "text": "The change of momentum is proportional to the applied force.",
        "rationale": "This is an alternative, more fundamental statement of Newton's Second Law.",
        "isCorrect": false
      }
    ],
    "hint": "The first law is also known as the Law of Inertia, describing what happens when the net force is zero."
  },
  {
    "questionNumber": 28,
    "question": "The rate of change of linear momentum of a body is directly proportional to the net force applied to it. This is a statement of:",
    "answerOptions": [
      {
        "text": "Newton's First Law",
        "rationale": "The first law deals with the case of zero net force.",
        "isCorrect": false
      },
      {
        "text": "Newton's Second Law",
        "rationale": "The second law fundamentally relates net force to the rate of change of momentum: F = dp/dt.",
        "isCorrect": true
      },
      {
        "text": "Newton's Third Law",
        "rationale": "The third law deals with action-reaction pairs.",
        "isCorrect": false
      },
      {
        "text": "The Law of Conservation of Energy",
        "rationale": "This law relates to work and total energy, not directly force and momentum.",
        "isCorrect": false
      }
    ],
    "hint": "The second law defines the relationship between force and the resultant motion."
  },
  {
    "questionNumber": 29,
    "question": "According to Newton's Third Law, if a horse pulls a carriage, the force the horse exerts on the carriage is equal in magnitude and opposite in direction to:",
    "answerOptions": [
      {
        "text": "The weight of the carriage.",
        "rationale": "Weight is the force of gravity, which is not the reaction force to the pulling force.",
        "isCorrect": false
      },
      {
        "text": "The force the carriage exerts on the horse.",
        "rationale": "The third law pairs are between the horse and the carriage: the force of horse on carriage is paired with the force of carriage on horse.",
        "isCorrect": true
      },
      {
        "text": "The frictional force exerted by the ground on the carriage.",
        "rationale": "Friction is a force acting on the carriage, but it is not the reaction pair to the pulling force.",
        "isCorrect": false
      },
      {
        "text": "The force the horse exerts on the ground.",
        "rationale": "This force is paired with the force the ground exerts on the horse.",
        "isCorrect": false
      }
    ],
    "hint": "The action and reaction forces must always act on different objects."
  },
  {
    "questionNumber": 30,
    "question": "Why can't the action and reaction forces of Newton's Third Law cancel each other out?",
    "answerOptions": [
      {
        "text": "They are not always equal in magnitude.",
        "rationale": "The third law explicitly states they are equal in magnitude.",
        "isCorrect": false
      },
      {
        "text": "They must always be perpendicular to each other.",
        "rationale": "The third law states they are opposite in direction, not necessarily perpendicular.",
        "isCorrect": false
      },
      {
        "text": "They act on the same body.",
        "rationale": "This is a misconception; they act on *different* bodies.",
        "isCorrect": false
      },
      {
        "text": "They act on different bodies.",
        "rationale": "For forces to cancel, they must act on the same body. Since action and reaction act on different bodies, they cannot cancel each other.",
        "isCorrect": true
      }
    ],
    "hint": "For forces to cancel, they must be included in the vector sum of forces acting on a *single* object."
  },
  {
    "questionNumber": 31,
    "question": "A 10 kg object is subjected to a net force of 50 N. What is the magnitude of the object's acceleration?",
    "answerOptions": [
      {
        "text": "500 m/s²",
        "rationale": "This is F * m, which is incorrect.",
        "isCorrect": false
      },
      {
        "text": "5.0 m/s²",
        "rationale": "Using Newton's Second Law, a = F_net / m = 50 N / 10 kg = 5.0 m/s².",
        "isCorrect": true
      },
      {
        "text": "0.2 m/s²",
        "rationale": "This is m / F_net, which is incorrect.",
        "isCorrect": false
      },
      {
        "text": "10 m/s²",
        "rationale": "This is the acceleration due to gravity, which is not the force applied.",
        "isCorrect": false
      }
    ],
    "hint": "Apply Newton's Second Law, F = m * a, to solve for acceleration."
  },
  {
    "questionNumber": 32,
    "question": "What is the condition for an object to be in a state of static or dynamic equilibrium?",
    "answerOptions": [
      {
        "text": "The sum of all external forces is greater than zero.",
        "rationale": "This condition would result in acceleration, not equilibrium.",
        "isCorrect": false
      },
      {
        "text": "The object must be at rest.",
        "rationale": "This describes static equilibrium, but dynamic equilibrium includes motion at a constant velocity.",
        "isCorrect": false
      },
      {
        "text": "The net force acting on the object is zero.",
        "rationale": "Equilibrium, both static (at rest) and dynamic (constant velocity), requires a zero net force (ΣF = 0).",
        "isCorrect": true
      },
      {
        "text": "The object is only subject to conservative forces.",
        "rationale": "While energy conservation is a factor, equilibrium is defined by the net force, which can include non-conservative forces like friction, provided they balance.",
        "isCorrect": false
      }
    ],
    "hint": "The definition of equilibrium is directly related to the net force acting on the body."
  },
  {
    "questionNumber": 33,
    "question": "A hockey puck slides across ice. If we neglect air resistance, the net force on the puck is (approximately):",
    "answerOptions": [
      {
        "text": "Non-zero and directed backward.",
        "rationale": "This would be true if friction was significant, but on ice, it is minimized.",
        "isCorrect": false
      },
      {
        "text": "Equal to the product of its mass and the initial velocity.",
        "rationale": "This product is momentum, not force.",
        "isCorrect": false
      },
      {
        "text": "Zero, because it moves at a constant velocity (Law of Inertia).",
        "rationale": "Since friction is negligible, the external forces (gravity and normal force) are balanced, resulting in zero net force, and the puck continues to slide at constant velocity.",
        "isCorrect": true
      },
      {
        "text": "Equal to its weight.",
        "rationale": "The normal force balances the weight, so the net vertical force is zero.",
        "isCorrect": false
      }
    ],
    "hint": "Apply Newton's First Law to an object moving on a very low-friction surface."
  },
  {
    "questionNumber": 34,
    "question": "The more fundamental form of Newton's Second Law states that net force is proportional to:",
    "answerOptions": [
      {
        "text": "The acceleration of the object.",
        "rationale": "This is the simpler form, F=ma, which applies only when mass is constant.",
        "isCorrect": false
      },
      {
        "text": "The rate of change of linear momentum.",
        "rationale": "The original statement relates force to the rate of change of momentum (dp/dt), which is applicable even when mass is changing.",
        "isCorrect": true
      },
      {
        "text": "The kinetic energy of the object.",
        "rationale": "Kinetic energy relates to the work done, not directly to the force as defined by the second law.",
        "isCorrect": false
      },
      {
        "text": "The impulse on the object.",
        "rationale": "Impulse is the change in momentum (Δp), while force is the rate of change.",
        "isCorrect": false
      }
    ],
    "hint": "Recall the second law in terms of the quantity m*v."
  },
  {
    "questionNumber": 35,
    "question": "A 2.0 kg box is pulled horizontally by a rope with a tension of 10 N. If the floor is frictionless, what is the acceleration of the box?",
    "answerOptions": [
      {
        "text": "0.2 m/s²",
        "rationale": "This is the inverse of the correct value.",
        "isCorrect": false
      },
      {
        "text": "10 m/s²",
        "rationale": "This is the magnitude of the force, not the acceleration.",
        "isCorrect": false
      },
      {
        "text": "5.0 m/s²",
        "rationale": "The net force is 10 N. The acceleration is a = F_net / m = 10 N / 2.0 kg = 5.0 m/s².",
        "isCorrect": true
      },
      {
        "text": "20 m/s²",
        "rationale": "This is the product of the force and mass.",
        "isCorrect": false
      }
    ],
    "hint": "Since the floor is frictionless, the net force is just the tension force. Use F = m * a."
  },
  {
    "questionNumber": 36,
    "question": "A 4.0 kg box is accelerating at 3.0 m/s² along a horizontal surface. If the pulling force is 20 N, what is the magnitude of the kinetic frictional force opposing the motion?",
    "answerOptions": [
      {
        "text": "12 N",
        "rationale": "This is the net force F_net = m * a = 4.0 * 3.0 = 12 N.",
        "isCorrect": false
      },
      {
        "text": "8 N",
        "rationale": "The net force is F_net = 4.0 kg * 3.0 m/s² = 12 N. Since F_net = F_pull - f_k, the frictional force is f_k = F_pull - F_net = 20 N - 12 N = 8 N.",
        "isCorrect": true
      },
      {
        "text": "32 N",
        "rationale": "This is the sum of the pulling force and the net force (20 N + 12 N).",
        "isCorrect": false
      },
      {
        "text": "20 N",
        "rationale": "This is the pulling force, which is not the frictional force.",
        "isCorrect": false
      }
    ],
    "hint": "First, calculate the net force using F_net = m * a. Then, use the relationship F_net = F_pull - f_k to find the frictional force."
  },
  {
    "questionNumber": 37,
    "question": "If a 2.0 kg object is on a horizontal surface with a coefficient of kinetic friction μ_k = 0.30, what is the magnitude of the kinetic frictional force? (Use g = 10 m/s²)",
    "answerOptions": [
      {
        "text": "20 N",
        "rationale": "This is the normal force (mg).",
        "isCorrect": false
      },
      {
        "text": "0.6 N",
        "rationale": "This is the product of the mass and the coefficient of friction (2.0 * 0.30).",
        "isCorrect": false
      },
      {
        "text": "6.0 N",
        "rationale": "The kinetic frictional force is f_k = μ_k * N. On a horizontal surface, the normal force N = mg = 2.0 kg * 10 m/s² = 20 N. Thus, f_k = 0.30 * 20 N = 6.0 N.",
        "isCorrect": true
      },
      {
        "text": "3.0 N",
        "rationale": "This would be the friction if the mass were 1.0 kg.",
        "isCorrect": false
      }
    ],
    "hint": "Recall the formula for kinetic friction: f_k = μ_k * N. For a horizontal surface, the normal force N is equal to the weight mg."
  },
  {
    "questionNumber": 38,
    "question": "A 1000 kg car accelerates from rest to 20 m/s over a distance of 50 m. What is the average net force acting on the car?",
    "answerOptions": [
      {
        "text": "4000 N",
        "rationale": "First find a: v² = v₀² + 2ad => 20² = 0 + 2a(50) => 400 = 100a => a = 4.0 m/s². Then F_net = ma = 1000 kg * 4.0 m/s² = 4000 N.",
        "isCorrect": true
      },
      {
        "text": "20,000 N",
        "rationale": "This calculation is based on an incorrect acceleration or distance calculation.",
        "isCorrect": false
      },
      {
        "text": "1000 N",
        "rationale": "This would be the net force if the acceleration was 1.0 m/s².",
        "isCorrect": false
      },
      {
        "text": "400 N",
        "rationale": "This is the square of the final velocity divided by twice the distance.",
        "isCorrect": false
      }
    ],
    "hint": "First use a kinematic equation to find the acceleration, and then use Newton's Second Law to find the net force."
  },
  {
    "questionNumber": 39,
    "question": "The normal reaction (R) on a body resting on a horizontal surface is equal in magnitude to the body's:",
    "answerOptions": [
      {
        "text": "Net Force",
        "rationale": "The net force is generally zero or non-zero, independent of the normal force.",
        "isCorrect": false
      },
      {
        "text": "Applied Force",
        "rationale": "The normal force balances the vertical component of the applied force and the weight.",
        "isCorrect": false
      },
      {
        "text": "Frictional Force",
        "rationale": "Frictional force is proportional to the normal force, not equal to it.",
        "isCorrect": false
      },
      {
        "text": "Weight (mg)",
        "rationale": "On a horizontal surface, the normal force is the vertical force exerted by the surface that balances the downward force of gravity (weight).",
        "isCorrect": true
      }
    ],
    "hint": "The normal force is the force that prevents the object from accelerating through the surface."
  },
  {
    "questionNumber": 40,
    "question": "Which of the following describes the relationship between a body's mass and its tendency to change position?",
    "answerOptions": [
      {
        "text": "Mass is directly proportional to the body's velocity.",
        "rationale": "Velocity is not directly proportional to mass in general.",
        "isCorrect": false
      },
      {
        "text": "The greater the mass, the greater the body's inertia and resistance to change in position.",
        "rationale": "Mass is the measure of inertia. Greater mass means greater inertia and thus greater resistance to acceleration.",
        "isCorrect": true
      },
      {
        "text": "The mass is inversely proportional to its resistance to change in position.",
        "rationale": "Greater mass means *greater* resistance (inertia).",
        "isCorrect": false
      },
      {
        "text": "Mass only affects the vertical change in position.",
        "rationale": "Mass affects resistance to change in position in all directions.",
        "isCorrect": false
      }
    ],
    "hint": "Recall the definition of inertia and its quantitative measure."
  },
  {
    "questionNumber": 41,
    "question": "What is the definition of the Work done by a force F over a displacement d?",
    "answerOptions": [
      {
        "text": "W = F x d (vector product)",
        "rationale": "Work is a scalar quantity, calculated by the dot product, not the cross product.",
        "isCorrect": false
      },
      {
        "text": "W = F · d (dot product)",
        "rationale": "Work is the scalar product (dot product) of the force and displacement vectors, resulting in W = Fd cosθ.",
        "isCorrect": true
      },
      {
        "text": "W = F + d",
        "rationale": "Work is energy, not the sum of force and displacement.",
        "isCorrect": false
      },
      {
        "text": "W = F/d",
        "rationale": "This expression is not dimensionally correct for work.",
        "isCorrect": false
      }
    ],
    "hint": "Work is a scalar quantity derived from two vector quantities: force and displacement."
  },
  {
    "questionNumber": 42,
    "question": "Kinetic energy is the energy possessed by an object due to its:",
    "answerOptions": [
      {
        "text": "Position relative to a datum.",
        "rationale": "This describes potential energy.",
        "isCorrect": false
      },
      {
        "text": "Chemical composition.",
        "rationale": "This describes chemical potential energy.",
        "isCorrect": false
      },
      {
        "text": "Temperature.",
        "rationale": "This describes internal or thermal energy.",
        "isCorrect": false
      },
      {
        "text": "Motion.",
        "rationale": "Kinetic energy (K.E. = ½mv²) is the energy of motion.",
        "isCorrect": true
      }
    ],
    "hint": "The formula for kinetic energy involves mass and velocity."
  },
  {
    "questionNumber": 43,
    "question": "A 1500 kg car is traveling at 30 m/s. What is its kinetic energy?",
    "answerOptions": [
      {
        "text": "45,000 J",
        "rationale": "This is the car's momentum (mv).",
        "isCorrect": false
      },
      {
        "text": "2,250,000 J",
        "rationale": "The kinetic energy is K.E. = ½mv² = 0.5 * 1500 kg * (30 m/s)² = 0.5 * 1500 * 900 = 675,000 J.",
        "isCorrect": false
      },
      {
        "text": "675,000 J",
        "rationale": "The kinetic energy is K.E. = ½mv² = 0.5 * 1500 kg * (30 m/s)² = 675,000 J.",
        "isCorrect": true
      },
      {
        "text": "1,350,000 J",
        "rationale": "This is mv², missing the factor of ½.",
        "isCorrect": false
      }
    ],
    "hint": "Use the formula K.E. = ½mv². Be careful to square the velocity."
  },
  {
    "questionNumber": 44,
    "question": "Potential energy (U) relative to a datum height of h₀ = 0 is given by the formula:",
    "answerOptions": [
      {
        "text": "U = ½mv²",
        "rationale": "This is the formula for kinetic energy.",
        "isCorrect": false
      },
      {
        "text": "U = mg",
        "rationale": "This is the formula for weight (force).",
        "isCorrect": false
      },
      {
        "text": "U = mg(h - h₀)",
        "rationale": "This is the general formula for the change in potential energy, ΔU.",
        "isCorrect": false
      },
      {
        "text": "U = mgh",
        "rationale": "When the reference height h₀ is zero, the potential energy is equal to the product of mass, acceleration due to gravity, and height.",
        "isCorrect": true
      }
    ],
    "hint": "Potential energy depends on the body's mass, the acceleration due to gravity, and its vertical position."
  },
  {
    "questionNumber": 45,
    "question": "A 2.0 kg monkey climbs 5.0 m up a vertical rope. How much does the monkey's gravitational potential energy change? (Use g = 10 m/s²)",
    "answerOptions": [
      {
        "text": "10 J",
        "rationale": "This is the change in potential energy if the mass was 1.0 kg.",
        "isCorrect": false
      },
      {
        "text": "20 J",
        "rationale": "This is the product of mass and gravity (mg).",
        "isCorrect": false
      },
      {
        "text": "100 J",
        "rationale": "The change in potential energy is ΔU = mgΔh = 2.0 kg * 10 m/s² * 5.0 m = 100 J.",
        "isCorrect": true
      },
      {
        "text": "50 J",
        "rationale": "This is the change in potential energy if the mass was 1.0 kg or the gravity was 5 m/s².",
        "isCorrect": false
      }
    ],
    "hint": "The change in potential energy is equal to the work done against gravity: ΔU = mgΔh."
  },
  {
    "questionNumber": 46,
    "question": "Which type of force is defined by the property that the work done by it in moving an object between two points is independent of the path taken?",
    "answerOptions": [
      {
        "text": "Non-conservative force",
        "rationale": "For non-conservative forces like friction, the work done *does* depend on the path taken.",
        "isCorrect": false
      },
      {
        "text": "Frictional force",
        "rationale": "Frictional force is a non-conservative force.",
        "isCorrect": false
      },
      {
        "text": "Conservative force",
        "rationale": "A conservative force is one for which the work done is path-independent, allowing potential energy to be defined.",
        "isCorrect": true
      },
      {
        "text": "Net force",
        "rationale": "The net force may be conservative or non-conservative depending on the individual forces in the sum.",
        "isCorrect": false
      }
    ],
    "hint": "This force classification is directly tied to the concept of potential energy."
  },
  {
    "questionNumber": 47,
    "question": "Which of the following forces is a non-conservative force?",
    "answerOptions": [
      {
        "text": "Gravitational force",
        "rationale": "Gravitational force is conservative.",
        "isCorrect": false
      },
      {
        "text": "Spring force (Hooke's Law force)",
        "rationale": "Spring force is conservative.",
        "isCorrect": false
      },
      {
        "text": "Elastic force",
        "rationale": "Elastic forces are generally conservative.",
        "isCorrect": false
      },
      {
        "text": "Air resistance",
        "rationale": "Air resistance (or drag) is a common example of a non-conservative force, as the work done depends on the path length.",
        "isCorrect": true
      }
    ],
    "hint": "A non-conservative force typically generates heat or sound, meaning the energy cannot be fully recovered."
  },
  {
    "questionNumber": 48,
    "question": "The Law of Conservation of Total Energy states that, for an isolated system, total energy:",
    "answerOptions": [
      {
        "text": "Is always zero.",
        "rationale": "The total energy is constant but not necessarily zero.",
        "isCorrect": false
      },
      {
        "text": "Changes only by external forces.",
        "rationale": "Total energy is conserved even if external forces are present, provided the system is isolated.",
        "isCorrect": false
      },
      {
        "text": "Is constant and cannot be created or destroyed, only transformed.",
        "rationale": "This is the correct statement of the law: energy is conserved within an isolated system.",
        "isCorrect": true
      },
      {
        "text": "Is the sum of only kinetic and potential energy.",
        "rationale": "Total energy includes other forms (thermal, chemical, etc.), while mechanical energy is the sum of only K.E. and P.E.",
        "isCorrect": false
      }
    ],
    "hint": "The conservation law describes how energy behaves over time in a closed, isolated system."
  },
  {
    "questionNumber": 49,
    "question": "For a simple pendulum swinging freely, at which point is the gravitational potential energy maximum?",
    "answerOptions": [
      {
        "text": "The lowest point (equilibrium position).",
        "rationale": "The height h is minimum (or zero) here, so P.E. is minimum and K.E. is maximum.",
        "isCorrect": false
      },
      {
        "text": "The highest points (endpoints of the swing).",
        "rationale": "At the endpoints, the velocity is momentarily zero, making P.E. maximum and K.E. zero.",
        "isCorrect": true
      },
      {
        "text": "The point where the velocity is maximum.",
        "rationale": "Maximum velocity means maximum K.E., which corresponds to minimum P.E.",
        "isCorrect": false
      },
      {
        "text": "The halfway point between the lowest and highest points.",
        "rationale": "At this point, both K.E. and P.E. are non-zero.",
        "isCorrect": false
      }
    ],
    "hint": "Gravitational potential energy depends on the height of the object."
  },
  {
    "questionNumber": 50,
    "question": "A ball is thrown straight up with an initial velocity v₀. If air resistance is negligible, the sum of its kinetic energy and potential energy at any point is constant. This illustrates the conservation of:",
    "answerOptions": [
      {
        "text": "Linear Momentum",
        "rationale": "Linear momentum is not conserved in vertical motion due to the external force of gravity.",
        "isCorrect": false
      },
      {
        "text": "Total Mechanical Energy",
        "rationale": "The sum of kinetic and potential energy is the mechanical energy. If non-conservative forces are negligible, mechanical energy is conserved.",
        "isCorrect": true
      },
      {
        "text": "Mass",
        "rationale": "Mass is conserved, but this statement specifically describes energy conservation.",
        "isCorrect": false
      },
      {
        "text": "Impulse",
        "rationale": "Impulse is the change in momentum, which is not constant.",
        "isCorrect": false
      }
    ],
    "hint": "The sum of K.E. and P.E. is known by a specific term."
  },
  {
    "questionNumber": 51,
    "question": "The Work-Energy Theorem states that the net work done on an object is equal to the change in its:",
    "answerOptions": [
      {
        "text": "Potential energy.",
        "rationale": "Work done by conservative forces is related to the change in P.E., but the net work is related to K.E.",
        "isCorrect": false
      },
      {
        "text": "Total mechanical energy.",
        "rationale": "Net work is equal to the change in K.E., not necessarily the total mechanical energy.",
        "isCorrect": false
      },
      {
        "text": "Kinetic energy.",
        "rationale": "The Work-Energy Theorem states that W_net = ΔK.E. = ½mv_f² - ½mv_i².",
        "isCorrect": true
      },
      {
        "text": "Linear momentum.",
        "rationale": "Net force times time (Impulse) is the change in momentum.",
        "isCorrect": false
      }
    ],
    "hint": "The theorem connects the net work done by all forces to the energy of motion."
  },
  {
    "questionNumber": 52,
    "question": "What is the physical meaning of the statement F = Δp/Δt = 0 regarding a body's momentum p?",
    "answerOptions": [
      {
        "text": "The body is at rest.",
        "rationale": "The body could be moving at a constant velocity, meaning its momentum is constant but non-zero.",
        "isCorrect": false
      },
      {
        "text": "The body's velocity is constantly changing.",
        "rationale": "This statement implies constant velocity and momentum.",
        "isCorrect": false
      },
      {
        "text": "The linear momentum of the body is conserved (constant).",
        "rationale": "If the rate of change of momentum is zero, the momentum change (Δp) is zero, meaning p₂ = p₁ (momentum is conserved).",
        "isCorrect": true
      },
      {
        "text": "The body is subject to a maximum external force.",
        "rationale": "The condition implies a zero net external force.",
        "isCorrect": false
      }
    ],
    "hint": "If the time rate of change of a quantity is zero, that quantity must be constant."
  },
  {
    "questionNumber": 53,
    "question": "A 2.0 kg ball (A) moving at 2.2 m/s collides with a 1.0 kg ball (B) moving at 1.2 m/s in the same direction. What is the total initial momentum of the system?",
    "answerOptions": [
      {
        "text": "4.4 N·s",
        "rationale": "This is only the initial momentum of ball A.",
        "isCorrect": false
      },
      {
        "text": "1.2 N·s",
        "rationale": "This is only the initial momentum of ball B.",
        "isCorrect": false
      },
      {
        "text": "5.6 N·s",
        "rationale": "The total initial momentum is p_iA + p_iB = (2.0 × 2.2) + (1.0 × 1.2) = 4.4 + 1.2 = 5.6 N·s.",
        "isCorrect": true
      },
      {
        "text": "3.4 N·s",
        "rationale": "This is the total mass times the average velocity.",
        "isCorrect": false
      }
    ],
    "hint": "Total momentum is the vector sum of the individual momenta. Since they are moving in the same direction, simply add the magnitudes."
  },
  {
    "questionNumber": 54,
    "question": "If the two balls from the previous question (A: 2.0 kg, 2.2 m/s; B: 1.0 kg, 1.2 m/s) move together at the same final velocity (v_f) after the collision (inelastic), what is v_f?",
    "answerOptions": [
      {
        "text": "1.5 m/s",
        "rationale": "This is the average of the initial velocities.",
        "isCorrect": false
      },
      {
        "text": "1.87 m/s",
        "rationale": "Using conservation of momentum: p_initial = p_final => 5.6 N·s = (m_A + m_B)v_f => 5.6 = (2.0 + 1.0)v_f => v_f = 5.6 / 3.0 ≈ 1.87 m/s.",
        "isCorrect": true
      },
      {
        "text": "2.8 m/s",
        "rationale": "This results from dividing the initial momentum by the mass of ball A.",
        "isCorrect": false
      },
      {
        "text": "5.6 m/s",
        "rationale": "This is the initial momentum, not the final velocity.",
        "isCorrect": false
      }
    ],
    "hint": "Apply the conservation of linear momentum: m_A * v_iA + m_B * v_iB = (m_A + m_B) * v_f."
  },
  {
    "questionNumber": 55,
    "question": "The total linear momentum of a particle is conserved only if the net external force acting on the particle is:",
    "answerOptions": [
      {
        "text": "Negative",
        "rationale": "A negative net force would cause a decrease in momentum.",
        "isCorrect": false
      },
      {
        "text": "Maximum",
        "rationale": "A maximum force would cause a maximum change in momentum.",
        "isCorrect": false
      },
      {
        "text": "Non-zero",
        "rationale": "A non-zero net force causes a change in momentum.",
        "isCorrect": false
      },
      {
        "text": "Zero",
        "rationale": "Momentum is conserved when F_net = dp/dt = 0, meaning p is constant.",
        "isCorrect": true
      }
    ],
    "hint": "Conservation of momentum is a direct consequence of Newton's Second Law when F_net is zero."
  },
  {
    "questionNumber": 56,
    "question": "If a body is accelerating at 4.0 m/s² due to a net force of 12 N, what is the mass of the body?",
    "answerOptions": [
      {
        "text": "48 kg",
        "rationale": "This is F * a.",
        "isCorrect": false
      },
      {
        "text": "3.0 kg",
        "rationale": "Using Newton's Second Law, m = F_net / a = 12 N / 4.0 m/s² = 3.0 kg.",
        "isCorrect": true
      },
      {
        "text": "0.33 kg",
        "rationale": "This is a / F_net.",
        "isCorrect": false
      },
      {
        "text": "12 kg",
        "rationale": "This is the magnitude of the force.",
        "isCorrect": false
      }
    ],
    "hint": "Use the rearranged form of Newton's Second Law to solve for mass: m = F/a."
  },
  {
    "questionNumber": 57,
    "question": "A 10 kg box is pushed across a floor by a 50 N force. If the acceleration is 2.0 m/s², what is the total magnitude of forces opposing the motion (e.g., friction)?",
    "answerOptions": [
      {
        "text": "20 N",
        "rationale": "This is the net force F_net = ma.",
        "isCorrect": false
      },
      {
        "text": "30 N",
        "rationale": "Net force is F_net = ma = 10 kg * 2.0 m/s² = 20 N. The opposing force (f_opp) is F_push - F_net = 50 N - 20 N = 30 N.",
        "isCorrect": true
      },
      {
        "text": "50 N",
        "rationale": "This is the pushing force.",
        "isCorrect": false
      },
      {
        "text": "70 N",
        "rationale": "This is the sum of the pushing force and the net force (50 N + 20 N).",
        "isCorrect": false
      }
    ],
    "hint": "Find the net force (F_net) first. The opposing force is the difference between the pushing force and the net force: F_opp = F_push - F_net."
  },
  {
    "questionNumber": 58,
    "question": "If a moving object's velocity is doubled, how does its kinetic energy change?",
    "answerOptions": [
      {
        "text": "It is halved.",
        "rationale": "This would be true if K.E. ∝ 1/v.",
        "isCorrect": false
      },
      {
        "text": "It is doubled.",
        "rationale": "This would be true if K.E. ∝ v.",
        "isCorrect": false
      },
      {
        "text": "It remains the same.",
        "rationale": "K.E. is dependent on velocity.",
        "isCorrect": false
      },
      {
        "text": "It is quadrupled.",
        "rationale": "Since K.E. = ½mv², doubling v results in (2v)² = 4v², so the K.E. is quadrupled.",
        "isCorrect": true
      }
    ],
    "hint": "The kinetic energy formula depends on the square of the velocity."
  },
  {
    "questionNumber": 59,
    "question": "A force F = (3i + 4j) N causes a displacement d = (5i + 2j) m. What is the work done by the force?",
    "answerOptions": [
      {
        "text": "35 J",
        "rationale": "This is the sum of the components 3+4+5+2.",
        "isCorrect": false
      },
      {
        "text": "23 J",
        "rationale": "Work is the dot product: W = Fx * dx + Fy * dy = (3)(5) + (4)(2) = 15 + 8 = 23 J.",
        "isCorrect": true
      },
      {
        "text": "15 J",
        "rationale": "This is only the work done by the x-component of the force.",
        "isCorrect": false
      },
      {
        "text": "50 J",
        "rationale": "This would be the product of the magnitudes of the force and displacement.",
        "isCorrect": false
      }
    ],
    "hint": "Calculate the work done using the dot product of the force and displacement vectors."
  },
  {
    "questionNumber": 60,
    "question": "A 10 kg block is pulled up a frictionless incline of 30° by a rope parallel to the incline. What is the minimum tension force in the rope required to keep the block moving at a constant velocity?",
    "answerOptions": [
      {
        "text": "100 N",
        "rationale": "This is the weight of the block (mg).",
        "isCorrect": false
      },
      {
        "text": "50 N",
        "rationale": "For constant velocity (a=0), the net force is zero. The tension must equal the component of gravity parallel to the incline: T = mg*sin(θ) = 10 kg * 10 m/s² * sin(30°) = 100 N * 0.5 = 50 N.",
        "isCorrect": true
      },
      {
        "text": "86.6 N",
        "rationale": "This is the component mg*cos(30°).",
        "isCorrect": false
      },
      {
        "text": "0 N",
        "rationale": "A tension force is required to counteract the component of gravity pulling the block down the incline.",
        "isCorrect": false
      }
    ],
    "hint": "Constant velocity implies zero net force. The tension must balance the component of the weight acting parallel to the incline."
  },
  {
    "questionNumber": 61,
    "question": "According to the Law of Conservation of Linear Momentum, what is true about the sum of linear momenta before and after a collision?",
    "answerOptions": [
      {
        "text": "The sum after collision is always greater than the sum before.",
        "rationale": "Momentum is conserved, so the total momentum remains equal, not greater.",
        "isCorrect": false
      },
      {
        "text": "The sum after collision is equal to the total linear momentum before collision.",
        "rationale": "This is the precise statement of the Law of Conservation of Linear Momentum (p_total,final = p_total,initial).",
        "isCorrect": true
      },
      {
        "text": "The sum after collision depends on whether the collision is elastic or inelastic.",
        "rationale": "Momentum is conserved in *both* elastic and inelastic collisions (in an isolated system).",
        "isCorrect": false
      },
      {
        "text": "The sum is always zero.",
        "rationale": "The sum is constant, but only zero if the initial total momentum was zero.",
        "isCorrect": false
      }
    ],
    "hint": "The law states that the total momentum of an isolated system remains unchanged."
  },
  {
    "questionNumber": 62,
    "question": "A 0.5 kg object falls from a height of 10 m. Assuming air resistance is negligible, what is its speed just before hitting the ground? (Use g = 10 m/s²)",
    "answerOptions": [
      {
        "text": "100 m/s",
        "rationale": "This is v² or 2gh.",
        "isCorrect": false
      },
      {
        "text": "10 m/s",
        "rationale": "This is the acceleration due to gravity.",
        "isCorrect": false
      },
      {
        "text": "14.1 m/s",
        "rationale": "Using conservation of energy: mgh = ½mv² => v = sqrt(2gh) = sqrt(2 * 10 * 10) = sqrt(200) ≈ 14.1 m/s.",
        "isCorrect": true
      },
      {
        "text": "20 m/s",
        "rationale": "This would be the speed if the height was 20 m.",
        "isCorrect": false
      }
    ],
    "hint": "Apply the Conservation of Mechanical Energy: the initial potential energy converts entirely into final kinetic energy."
  },
  {
    "questionNumber": 63,
    "question": "An isolated system is defined as a system where:",
    "answerOptions": [
      {
        "text": "Only conservative forces are present.",
        "rationale": "An isolated system is defined by no exchange of energy or matter with the surroundings.",
        "isCorrect": false
      },
      {
        "text": "It exchanges energy but not matter with its surroundings.",
        "rationale": "This defines a closed system, not an isolated system.",
        "isCorrect": false
      },
      {
        "text": "It exchanges neither energy nor matter (or momentum) with its surroundings.",
        "rationale": "An isolated system has no external interactions that can change its total energy or momentum.",
        "isCorrect": true
      },
      {
        "text": "It is always in thermal equilibrium.",
        "rationale": "Thermal equilibrium is a separate condition (constant temperature).",
        "isCorrect": false
      }
    ],
    "hint": "Isolated systems are fully contained and have no interaction with the outside world."
  },
  {
    "questionNumber": 64,
    "question": "A 75 kg hiker climbs a 1000 m mountain in 5 hours. What is the hiker's change in gravitational potential energy? (Use g = 10 m/s²)",
    "answerOptions": [
      {
        "text": "7500 J",
        "rationale": "This results from 75 * 100, or a height of 100 m.",
        "isCorrect": false
      },
      {
        "text": "750,000 J",
        "rationale": "The change in potential energy is ΔU = mgh = 75 kg * 10 m/s² * 1000 m = 750,000 J.",
        "isCorrect": true
      },
      {
        "text": "3750 J",
        "rationale": "This is related to power, not potential energy.",
        "isCorrect": false
      },
      {
        "text": "7,500,000 J",
        "rationale": "This results from using g = 100 m/s².",
        "isCorrect": false
      }
    ],
    "hint": "The change in potential energy depends only on the mass, gravity, and the change in vertical height."
  },
  {
    "questionNumber": 65,
    "question": "If an object's initial kinetic energy is 100 J and a net work of 50 J is done on it, what is its final kinetic energy?",
    "answerOptions": [
      {
        "text": "50 J",
        "rationale": "This would be the case if the work was negative (opposing motion).",
        "isCorrect": false
      },
      {
        "text": "150 J",
        "rationale": "According to the Work-Energy Theorem, K.E.f = K.E.i + W_net = 100 J + 50 J = 150 J.",
        "isCorrect": true
      },
      {
        "text": "2.0 J",
        "rationale": "This is the ratio of K.E. to W_net.",
        "isCorrect": false
      },
      {
        "text": "100 J",
        "rationale": "This would be the case if the net work was zero.",
        "isCorrect": false
      }
    ],
    "hint": "The final kinetic energy is the sum of the initial kinetic energy and the net work done."
  },
  {
    "questionNumber": 66,
    "question": "A 100 kg object is lifted 20 m vertically at a constant speed in 5 seconds. What is the average power delivered?",
    "answerOptions": [
      {
        "text": "2000 W",
        "rationale": "Power P = W/t = mgh/t = (100 * 10 * 20) / 5 = 20000 / 5 = 4000 W.",
        "isCorrect": false
      },
      {
        "text": "4000 W",
        "rationale": "The work done is W = mgh = 100 kg * 10 m/s² * 20 m = 20,000 J. The power is P = W/t = 20,000 J / 5 s = 4000 W.",
        "isCorrect": true
      },
      {
        "text": "1000 W",
        "rationale": "This is the work done divided by the height, not the time.",
        "isCorrect": false
      },
      {
        "text": "400 W",
        "rationale": "This is the power if the object was 10 kg.",
        "isCorrect": false
      }
    ],
    "hint": "Power is Work divided by Time. Work done is equal to the change in gravitational potential energy (mgh)."
  },
  {
    "questionNumber": 67,
    "question": "For a simple harmonic oscillator (like a mass on a spring), at which point is the kinetic energy maximum?",
    "answerOptions": [
      {
        "text": "The maximum displacement (amplitude).",
        "rationale": "At maximum displacement, velocity is momentarily zero, making K.E. minimum (zero) and P.E. maximum.",
        "isCorrect": false
      },
      {
        "text": "The equilibrium position.",
        "rationale": "At the equilibrium position, the speed is maximum, making K.E. maximum and P.E. minimum (zero).",
        "isCorrect": true
      },
      {
        "text": "The point where acceleration is maximum.",
        "rationale": "Maximum acceleration occurs at maximum displacement, where K.E. is zero.",
        "isCorrect": false
      },
      {
        "text": "The halfway point between the equilibrium and maximum displacement.",
        "rationale": "At this point, both K.E. and P.E. are non-zero.",
        "isCorrect": false
      }
    ],
    "hint": "Kinetic energy is related to the speed of the oscillator, and speed is highest at the center of the oscillation."
  },
  {
    "questionNumber": 68,
    "question": "A 5 kg mass is dropped and reaches a speed of 15 m/s after falling a certain distance. If a 10 kg mass were dropped from the same distance, its final speed would be (neglecting air resistance):",
    "answerOptions": [
      {
        "text": "7.5 m/s",
        "rationale": "This would be the result if speed was inversely proportional to mass.",
        "isCorrect": false
      },
      {
        "text": "15 m/s",
        "rationale": "From conservation of energy, mgh = ½mv² => v = sqrt(2gh). The final velocity is independent of the mass.",
        "isCorrect": true
      },
      {
        "text": "30 m/s",
        "rationale": "This would be the result if speed was directly proportional to mass.",
        "isCorrect": false
      },
      {
        "text": "21.2 m/s",
        "rationale": "This value does not correspond to a standard physical relationship.",
        "isCorrect": false
      }
    ],
    "hint": "Consider the derived formula for final velocity from conservation of energy (v = sqrt(2gh)), and note which variables it depends on."
  },
  {
    "questionNumber": 69,
    "question": "Which of the following is an example of a conservative force?",
    "answerOptions": [
      {
        "text": "Tension in a string",
        "rationale": "Tension is often non-conservative or does no work (if perpendicular to displacement).",
        "isCorrect": false
      },
      {
        "text": "Normal force",
        "rationale": "The normal force does no work if the motion is along the surface.",
        "isCorrect": false
      },
      {
        "text": "Gravitational force",
        "rationale": "Gravitational force is a classic example of a conservative force, as the work done by it depends only on the initial and final vertical positions.",
        "isCorrect": true
      },
      {
        "text": "Kinetic friction",
        "rationale": "Kinetic friction is a non-conservative force.",
        "isCorrect": false
      }
    ],
    "hint": "Conservative forces are those that allow us to define an associated potential energy."
  },
  {
    "questionNumber": 70,
    "question": "If the total mechanical energy of a system decreases, it implies that:",
    "answerOptions": [
      {
        "text": "The work done by all forces is zero.",
        "rationale": "Zero net work means ΔK.E. = 0.",
        "isCorrect": false
      },
      {
        "text": "Only conservative forces are acting.",
        "rationale": "If only conservative forces act, mechanical energy is conserved (constant).",
        "isCorrect": false
      },
      {
        "text": "The system is isolated.",
        "rationale": "In an isolated system, total energy (including thermal) is conserved, but mechanical energy (K.E. + P.E.) decreases if non-conservative forces do work.",
        "isCorrect": false
      },
      {
        "text": "Non-conservative forces (like friction) have done negative work.",
        "rationale": "The decrease in mechanical energy is accounted for by the negative work done by non-conservative forces, converting mechanical energy into heat.",
        "isCorrect": true
      }
    ],
    "hint": "A change in mechanical energy is usually attributed to one specific class of forces."
  },
  {
    "questionNumber": 71,
    "question": "In a head-on elastic collision between two masses, which quantities are conserved?",
    "answerOptions": [
      {
        "text": "Only kinetic energy.",
        "rationale": "Linear momentum is also conserved in any collision within an isolated system.",
        "isCorrect": false
      },
      {
        "text": "Only linear momentum.",
        "rationale": "In an *elastic* collision, both momentum and kinetic energy are conserved.",
        "isCorrect": false
      },
      {
        "text": "Neither kinetic energy nor linear momentum.",
        "rationale": "Both quantities are conserved in an isolated elastic collision.",
        "isCorrect": false
      },
      {
        "text": "Both kinetic energy and linear momentum.",
        "rationale": "An elastic collision is defined as one where both linear momentum and kinetic energy are conserved.",
        "isCorrect": true
      }
    ],
    "hint": "An elastic collision is defined by the conservation of both the energy of motion and the quantity m*v."
  },
  {
    "questionNumber": 72,
    "question": "A 2.0 kg object moving at 3.0 m/s collides with a stationary 4.0 kg object. If they stick together (perfectly inelastic collision), what is the final velocity of the combined mass?",
    "answerOptions": [
      {
        "text": "1.5 m/s",
        "rationale": "The final velocity should be less than the initial velocity of the 2 kg object.",
        "isCorrect": false
      },
      {
        "text": "1.0 m/s",
        "rationale": "By conservation of momentum: m₁v₁ = (m₁ + m₂)v_f => (2.0)(3.0) = (2.0 + 4.0)v_f => 6.0 = 6.0v_f => v_f = 1.0 m/s.",
        "isCorrect": true
      },
      {
        "text": "2.0 m/s",
        "rationale": "This would be the final velocity if the initial mass was 3.0 kg.",
        "isCorrect": false
      },
      {
        "text": "3.0 m/s",
        "rationale": "This is the initial velocity of the first object.",
        "isCorrect": false
      }
    ],
    "hint": "Use the conservation of momentum formula for a perfectly inelastic collision: m₁v₁ + m₂v₂ = (m₁ + m₂)v_f."
  },
  {
    "questionNumber": 73,
    "question": "Impulse is defined as the product of net force and the time interval over which it acts. Impulse is equal to the change in the object's:",
    "answerOptions": [
      {
        "text": "Velocity",
        "rationale": "Impulse is equal to the change in momentum, not velocity alone.",
        "isCorrect": false
      },
      {
        "text": "Kinetic energy",
        "rationale": "Net work is equal to the change in K.E.",
        "isCorrect": false
      },
      {
        "text": "Potential energy",
        "rationale": "Work done by conservative forces is equal to the negative change in P.E.",
        "isCorrect": false
      },
      {
        "text": "Linear momentum",
        "rationale": "The Impulse-Momentum Theorem states I = F_net * Δt = Δp.",
        "isCorrect": true
      }
    ],
    "hint": "The Impulse-Momentum theorem directly links the product F*Δt to a change in a specific motion quantity."
  },
  {
    "questionNumber": 74,
    "question": "A particle of mass m has a linear momentum p. Its kinetic energy K.E. can be expressed as:",
    "answerOptions": [
      {
        "text": "K.E. = p/m",
        "rationale": "This is the velocity v = p/m.",
        "isCorrect": false
      },
      {
        "text": "K.E. = p²/m",
        "rationale": "This expression is dimensionally incorrect for energy.",
        "isCorrect": false
      },
      {
        "text": "K.E. = p²/(2m)",
        "rationale": "Since p = mv, K.E. = ½mv² = ½m (p/m)² = p²/(2m).",
        "isCorrect": true
      },
      {
        "text": "K.E. = 2p/m",
        "rationale": "This is incorrect.",
        "isCorrect": false
      }
    ],
    "hint": "Start with K.E. = ½mv² and substitute v = p/m."
  },
  {
    "questionNumber": 75,
    "question": "In a system where total mechanical energy is conserved, the work done by non-conservative forces is:",
    "answerOptions": [
      {
        "text": "Positive.",
        "rationale": "Positive work by non-conservative forces would increase the mechanical energy.",
        "isCorrect": false
      },
      {
        "text": "Equal to the total kinetic energy.",
        "rationale": "Work done is equal to the change in K.E., not the K.E. itself.",
        "isCorrect": false
      },
      {
        "text": "Zero.",
        "rationale": "The conservation of mechanical energy requires that the work done by all non-conservative forces is zero (W_nc = 0).",
        "isCorrect": true
      },
      {
        "text": "Negative.",
        "rationale": "Negative work would mean the mechanical energy is decreasing.",
        "isCorrect": false
      }
    ],
    "hint": "The total work done by non-conservative forces accounts for any change in the system's mechanical energy."
  },
  {
    "questionNumber": 76,
    "question": "A 1.0 kg rock is thrown upward with 100 J of initial kinetic energy. What is the maximum height it reaches?",
    "answerOptions": [
      {
        "text": "100 m",
        "rationale": "This ignores the effect of gravity.",
        "isCorrect": false
      },
      {
        "text": "10 m",
        "rationale": "By conservation of energy: K.E.i = P.E.f => 100 J = mgh => 100 = 1.0 kg * 10 m/s² * h => h = 10 m.",
        "isCorrect": true
      },
      {
        "text": "5.0 m",
        "rationale": "This is the height if the mass was 2.0 kg.",
        "isCorrect": false
      },
      {
        "text": "1.0 m",
        "rationale": "This is the height if the mass was 10 kg.",
        "isCorrect": false
      }
    ],
    "hint": "At maximum height, all initial kinetic energy is converted into gravitational potential energy: K.E.i = mgh_max."
  },
  {
    "questionNumber": 77,
    "question": "What is the vector expression for Newton's Third Law for bodies A and B?",
    "answerOptions": [
      {
        "text": "F_A = -F_B",
        "rationale": "This is a general expression for opposing forces, but it lacks the necessary subscripts to specify the objects involved in the interaction.",
        "isCorrect": false
      },
      {
        "text": "F_AB + F_BA = 0",
        "rationale": "This is a rearrangement of the correct vector expression F_AB = -F_BA.",
        "isCorrect": true
      },
      {
        "text": "F_net = m*a",
        "rationale": "This is Newton's Second Law.",
        "isCorrect": false
      },
      {
        "text": "F_AB = F_BA",
        "rationale": "This is incorrect because the forces must be opposite in direction (vector subtraction should be zero).",
        "isCorrect": false
      }
    ],
    "hint": "The vector expression for the Third Law involves the force of A on B (F_AB) and the force of B on A (F_BA) being equal and opposite."
  },
  {
    "questionNumber": 78,
    "question": "A 5.0 kg object is on a horizontal surface. A horizontal force of 10 N is applied, but the object remains at rest. What is the static frictional force?",
    "answerOptions": [
      {
        "text": "0 N",
        "rationale": "Since the object is at rest, the forces must be balanced.",
        "isCorrect": false
      },
      {
        "text": "10 N",
        "rationale": "Since the object is in static equilibrium, the static frictional force must exactly balance the applied force: f_s = F_applied = 10 N.",
        "isCorrect": true
      },
      {
        "text": "50 N",
        "rationale": "This is the maximum possible static friction, f_s,max, if μ_s = 1.0.",
        "isCorrect": false
      },
      {
        "text": "2.0 N",
        "rationale": "This is F/m.",
        "isCorrect": false
      }
    ],
    "hint": "Static friction is a reactive force that acts only to oppose the applied external force up to its maximum value. Equilibrium means the net force is zero."
  },
  {
    "questionNumber": 79,
    "question": "The mathematical expression for the Work-Energy Theorem is given by:",
    "answerOptions": [
      {
        "text": "W = ∫ F · dr = ΔP.E.",
        "rationale": "This is the work done by only conservative forces, equal to the negative change in P.E.",
        "isCorrect": false
      },
      {
        "text": "W_net = ∫ F_net · dr = ΔK.E.",
        "rationale": "The net work done by the net force over a displacement is equal to the change in kinetic energy.",
        "isCorrect": true
      },
      {
        "text": "W_net = F_net/Δt",
        "rationale": "This is the net force defined as the rate of change of momentum.",
        "isCorrect": false
      },
      {
        "text": "W_net = ½m(v₂ - v₁)²",
        "rationale": "The change in K.E. is ½m(v₂² - v₁²), not ½m(v₂ - v₁)².",
        "isCorrect": false
      }
    ],
    "hint": "The Work-Energy Theorem links the net work to the change in the energy of motion."
  },
  {
    "questionNumber": 80,
    "question": "An airplane is flying at a constant altitude and a constant speed. What is the net force acting on the airplane?",
    "answerOptions": [
      {
        "text": "Equal to the magnitude of the thrust force.",
        "rationale": "Thrust is an individual force, but the net force depends on all forces (thrust, drag, lift, weight).",
        "isCorrect": false
      },
      {
        "text": "Zero.",
        "rationale": "Constant velocity (speed and altitude) means zero acceleration, which by Newton's Second Law implies zero net force (equilibrium).",
        "isCorrect": true
      },
      {
        "text": "Equal to the magnitude of its weight.",
        "rationale": "If the net force was equal to its weight, it would be accelerating downward.",
        "isCorrect": false
      },
      {
        "text": "Non-zero, as there are forces of thrust and lift.",
        "rationale": "While those forces are non-zero, they must be balanced by drag and weight, respectively, for zero net force.",
        "isCorrect": false
      }
    ],
    "hint": "Constant velocity is the defining characteristic of dynamic equilibrium. Apply Newton's First Law."
  }
];

// --- QUIZ LOGIC VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let userAnswers = [];

// --- QUIZ FUNCTIONS ---

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
}

/**
 * Checks the selected answer, updates the score, and displays feedback.
 * @param {HTMLElement} selectedElement - The clicked option element.
 * @param {number} selectedIndex - The index of the selected option.
 * @param {Object} questionData - The data for the current question.
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
            <p class="user-answer ${isCorrectClass}"><strong>Your Answer:</strong> ${answer.userSelection} 
                <span style="font-weight: normal;">${answer.isCorrect ? '(Correct)' : '(Incorrect)'}</span>
            </p>
            <p class="correct-answer"><strong>Correct Answer:</strong> ${answer.correctAnswer}</p>
            <p class="rationale"><strong>Rationale:</strong> ${answer.rationale}</p>
            <p class="hint"><strong>Hint:</strong> ${answer.hint}</p>
        `;
    reviewContent.appendChild(reviewItem);
  });
}