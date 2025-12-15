
        // --- QUIZ DATA: 80 Questions Array for MTH 101 ---
        const quizQuestions = [
            // --- TOPIC 1: ELEMENTARY SET THEORY (Q1-Q10) ---
            {
                "questionNumber": 1,
                "question": "If A and B are two non-empty sets, the set of all elements that are in A or in B is called the:",
                "answerOptions": [
                    {"text": "Intersection of A and B", "rationale": "Intersection contains elements common to both sets.", "isCorrect": false},
                    {"text": "Difference of A and B", "rationale": "Difference contains elements in A but not in B.", "isCorrect": false},
                    {"text": "Union of A and B (A &cup; B)", "rationale": "The union contains all elements belonging to either set A or set B or both.", "isCorrect": true},
                    {"text": "Complement of A", "rationale": "The complement contains elements not in A.", "isCorrect": false}
                ],
                "hint": "Think of combining all elements into one large set."
            },
            {
                "questionNumber": 2,
                "question": "The total number of unique subsets that can be formed from a finite set with n elements is given by:",
                "answerOptions": [
                    {"text": "n^2", "rationale": "This represents the number of ordered pairs.", "isCorrect": false},
                    {"text": "2^n", "rationale": "Each of the n elements can either be in or out of a subset, giving 2 times 2 times ldots     = times 2 = 2^n possibilities.", "isCorrect": true},
                    {"text": "n!", "rationale": "This represents the number of permutations (orderings) of n elements.", "isCorrect": false},
                    {"text": "n+1", "rationale": "This is incorrect.", "isCorrect": false}
                ],
                "hint": "Consider the size of the Power Set."
            },
            {
                "questionNumber": 3,
                "question": "Given sets A = \{1, 2, 3\} and B = \{3, 4, 5\}, then the intersection A \cap B is:",
                "answerOptions": [
                    {"text": "\{1, 2, 3, 4, 5\}", "rationale": "This is the union.", "isCorrect": false},
                    {"text": "\emptyset", "rationale": "The sets are not disjoint, as they share an element.", "isCorrect": false},
                    {"text": "\{3\}", "rationale": "The intersection contains only the elements common to both sets, which is 3.", "isCorrect": true},
                    {"text": "\{1, 2, 4, 5\}", "rationale": "This is the symmetric difference.", "isCorrect": false}
                ],
                "hint": "Intersection means 'in both A AND B'."
            },
            {
                "questionNumber": 4,
                "question": "If U is the universal set and A is any subset, what is the complement of the complement of A, i.e., (A')'?",
                "answerOptions": [
                    {"text": "U", "rationale": "The complement of the complement of a set is the set itself.", "isCorrect": false},
                    {"text": "\emptyset", "rationale": "The complement of the complement of a set is the set itself.", "isCorrect": false},
                    {"text": "A", "rationale": "The complement of the complement of a set is the set itself.", "isCorrect": true},
                    {"text": "A'", "rationale": "The complement of the complement of a set is the set itself.", "isCorrect": false}
                ],
                "hint": "The operation returns the set to its original state."
            },
            {
                "questionNumber": 5,
                "question": "De Morgan's First Law for sets A and B states that (A \cup B)' is equal to:",
                "answerOptions": [
                    {"text": "A' \cup B'", "rationale": "This is incorrect, it would be the union of the complements.", "isCorrect": false},
                    {"text": "(A \cap B)'", "rationale": "This is the complement of the intersection.", "isCorrect": false},
                    {"text": "A' \cap B'", "rationale": "The complement of a union is the intersection of the complements.", "isCorrect": true},
                    {"text": "A \cap B", "rationale": "This is the intersection.", "isCorrect": false}
                ],
                "hint": "The 'bar' (complement) breaks the union and changes it to an intersection."
            },
            {
                "questionNumber": 6,
                "question": "If set A has 3 elements and set B has 2 elements, the number of elements in the Cartesian Product A \times B is:",
                "answerOptions": [
                    {"text": "5", "rationale": "This is |A| + |B|.", "isCorrect": false},
                    {"text": "6", "rationale": "The cardinality of the Cartesian product is |A| \times |B| = 3 \times 2 = 6.", "isCorrect": true},
                    {"text": "8", "rationale": "This is 2^3.", "isCorrect": false},
                    {"text": "9", "rationale": "This is |A|^2.", "isCorrect": false}
                ],
                "hint": "The Cartesian Product is a set of ordered pairs."
            },
            {
                "questionNumber": 7,
                "question": "Two sets A and B are called disjoint if:",
                "answerOptions": [
                    {"text": "A \cup B = A", "rationale": "This means B is a subset of A.", "isCorrect": false},
                    {"text": "A \cap B = U", "rationale": "This means the intersection is the universal set.", "isCorrect": false},
                    {"text": "A \cap B = \emptyset", "rationale": "Disjoint sets have no common elements, so their intersection is the empty set.", "isCorrect": true},
                    {"text": "A \subset B", "rationale": "This means A is a proper subset of B.", "isCorrect": false}
                ],
                "hint": "They are mutually exclusive."
            },
            {
                "questionNumber": 8,
                "question": "The set of all subsets of a given set A is called the:",
                "answerOptions": [
                    {"text": "Universal Set", "rationale": "The universal set contains all elements under consideration.", "isCorrect": false},
                    {"text": "Proper Set", "rationale": "This is not a standard term in this context.", "isCorrect": false},
                    {"text": "Power Set, \mathcal{P}(A)", "rationale": "The power set is the collection of all possible subsets.", "isCorrect": true},
                    {"text": "Empty Set", "rationale": "The empty set is a single element within the power set.", "isCorrect": false}
                ],
                "hint": "The total number of elements in this set is 2^{|A|}."
            },
            {
                "questionNumber": 9,
                "question": "If A = \{x \in \mathbb{Z} : x^2 = 4\}, what is the set A?",
                "answerOptions": [
                    {"text": "\{2\}", "rationale": "It omits the negative root.", "isCorrect": false},
                    {"text": "\{4\}", "rationale": "4 is the square, not the solution.", "isCorrect": false},
                    {"text": "\{-2, 2\}", "rationale": "The equation x^2=4 has two integer solutions: x=2 and x=-2.", "isCorrect": true},
                    {"text": "\{-2, 0, 2\}", "rationale": "0 is not a solution.", "isCorrect": false}
                ],
                "hint": "Remember that the set of integers (\mathbb{Z}) includes negative numbers."
            },
            {
                "questionNumber": 10,
                "question": "The set A \setminus B (A minus B) is defined as:",
                "answerOptions": [
                    {"text": "\{x \mid x \in A \text{ and } x \in B\}", "rationale": "This is the intersection.", "isCorrect": false},
                    {"text": "\{x \mid x \in A \text{ or } x \in B\}", "rationale": "This is the union.", "isCorrect": false},
                    {"text": "\{x \mid x \in A \text{ and } x \notin B\}", "rationale": "Set difference contains elements that are in A but not in B.", "isCorrect": true},
                    {"text": "\{x \mid x \notin A \text{ and } x \in B\}", "rationale": "This is B \setminus A.", "isCorrect": false}
                ],
                "hint": "It represents the elements unique to set A."
            },

            // --- TOPIC 2: REAL NUMBERS AND MATHEMATICAL INDUCTION (Q11-Q20) ---
            {
                "questionNumber": 11,
                "question": "Which of the following numbers is an irrational number?",
                "answerOptions": [
                    {"text": "4/2", "rationale": "This is 2, a rational number.", "isCorrect": false},
                    {"text": "0.333\ldots", "rationale": "This is 1/3, a rational number.", "isCorrect": false},
                    {"text": "\sqrt{9}", "rationale": "This is 3, a rational number.", "isCorrect": false},
                    {"text": "\sqrt{5}", "rationale": "An irrational number cannot be expressed as a simple fraction p/q, and \sqrt{5} is a non-terminating, non-repeating decimal.", "isCorrect": true}
                ],
                "hint": "An irrational number is a real number that cannot be represented as a simple fraction."
            },
            {
                "questionNumber": 12,
                "question": "In the principle of mathematical induction, the inductive step requires proving that if the statement P(n) is true for n=k, it must also be true for:",
                "answerOptions": [
                    {"text": "n=k-1", "rationale": "This is not the direction of the inductive step.", "isCorrect": false},
                    {"text": "n=k+1", "rationale": "The inductive step proves that the truth for an arbitrary k implies truth for the next integer k+1.", "isCorrect": true},
                    {"text": "n=1", "rationale": "This is the base case.", "isCorrect": false},
                    {"text": "All natural numbers", "rationale": "This is the final conclusion, not the step itself.", "isCorrect": false}
                ],
                "hint": "The inductive step is about demonstrating the propagation of the statement's truth to the next integer."
            },
            {
                "questionNumber": 13,
                "question": "A rational number is any number that can be expressed in the form p/q, where p and q are integers, and q is not equal to:",
                "answerOptions": [
                    {"text": "1", "rationale": "q can be 1.", "isCorrect": false},
                    {"text": "p", "rationale": "q can be equal to p.", "isCorrect": false},
                    {"text": "0", "rationale": "Division by zero is undefined, so the denominator q cannot be zero.", "isCorrect": true},
                    {"text": "-1", "rationale": "q can be -1.", "isCorrect": false}
                ],
                "hint": "Recall the fundamental rule of fractions."
            },
            {
                "questionNumber": 14,
                "question": "The base step (or basis) in mathematical induction typically involves showing that the statement P(n) is true for:",
                "answerOptions": [
                    {"text": "An arbitrary positive integer k", "rationale": "This is the assumption for the inductive step.", "isCorrect": false},
                    {"text": "The first natural number, often n=1", "rationale": "The base case establishes that the statement holds for the starting value.", "isCorrect": true},
                    {"text": "All even numbers", "rationale": "This is not required for a standard induction proof.", "isCorrect": false},
                    {"text": "A negative integer", "rationale": "Induction is typically used for natural numbers.", "isCorrect": false}
                ],
                "hint": "This is the first domino in the chain."
            },
            {
                "questionNumber": 15,
                "question": "Which of the following is an example of the Associative Law of Addition?",
                "answerOptions": [
                    {"text": "a + b = b + a", "rationale": "This is the Commutative Law.", "isCorrect": false},
                    {"text": "a(b + c) = ab + ac", "rationale": "This is the Distributive Law.", "isCorrect": false},
                    {"text": "a + (b + c) = (a + b) + c", "rationale": "The Associative Law allows terms to be grouped differently without changing the result.", "isCorrect": true},
                    {"text": "a + 0 = a", "rationale": "This is the Identity Law.", "isCorrect": false}
                ],
                "hint": "The grouping of the variables changes."
            },
            {
                "questionNumber": 16,
                "question": "What is the result of the division of two rational numbers?",
                "answerOptions": [
                    {"text": "Always an integer", "rationale": "e.g., 1/2 is not an integer.", "isCorrect": false},
                    {"text": "Always an irrational number", "rationale": "e.g., 4/2 = 2 (rational).", "isCorrect": false},
                    {"text": "Always a rational number (provided the divisor is non-zero)", "rationale": "The set of rational numbers is closed under division (excluding division by zero).", "isCorrect": true},
                    {"text": "Sometimes a complex number", "rationale": "The result is always a real number.", "isCorrect": false}
                ],
                "hint": "The rational numbers form a field."
            },
            {
                "questionNumber": 17,
                "question": "The set of integers is closed under which of the following operations?",
                "answerOptions": [
                    {"text": "Division", "rationale": "e.g., 1 \div 2 is not an integer.", "isCorrect": false},
                    {"text": "Addition, Subtraction, and Multiplication", "rationale": "Adding, subtracting, or multiplying two integers always results in another integer.", "isCorrect": true},
                    {"text": "Exponentiation", "rationale": "e.g., 2^{-1} = 1/2 is not an integer.", "isCorrect": false},
                    {"text": "Square Root", "rationale": "e.g., \sqrt{2} is not an integer.", "isCorrect": false}
                ],
                "hint": "The result of the operation on two members of the set must always be a member of the same set."
            },
            {
                "questionNumber": 18,
                "question": "The property that states for every real number a, there exists a real number -a such that a + (-a) = 0 is called the:",
                "answerOptions": [
                    {"text": "Additive Identity", "rationale": "This is a+0=a.", "isCorrect": false},
                    {"text": "Commutative Law", "rationale": "This is a+b=b+a.", "isCorrect": false},
                    {"text": "Additive Inverse", "rationale": "The additive inverse of a is the number that sums with a to yield the additive identity (0).", "isCorrect": true},
                    {"text": "Multiplicative Inverse", "rationale": "This involves multiplication and results in 1.", "isCorrect": false}
                ],
                "hint": "This is related to the existence of a negative number for every positive number."
            },
            {
                "questionNumber": 19,
                "question": "Which of the following is true about the decimal representation of an irrational number?",
                "answerOptions": [
                    {"text": "It is terminating.", "rationale": "Terminating decimals are rational.", "isCorrect": false},
                    {"text": "It is terminating or repeating.", "rationale": "Terminating or repeating decimals are rational.", "isCorrect": false},
                    {"text": "It is non-terminating and repeating.", "rationale": "Repeating decimals are rational.", "isCorrect": false},
                    {"text": "It is non-terminating and non-repeating.", "rationale": "This is the definition of an irrational number.", "isCorrect": true}
                ],
                "hint": "Think of \pi or \sqrt{2}."
            },
            {
                "questionNumber": 20,
                "question": "The set of Natural Numbers (\mathbb{N}) starts from:",
                "answerOptions": [
                    {"text": "-1", "rationale": "This is a negative integer.", "isCorrect": false},
                    {"text": "0", "rationale": "0 is often included in Whole Numbers (\mathbb{W}) but traditionally excluded from Natural Numbers.", "isCorrect": false},
                    {"text": "1", "rationale": "The set of Natural Numbers is typically defined as \{1, 2, 3, \ldots\}.", "isCorrect": true},
                    {"text": "Any positive real number", "rationale": "Natural numbers must be integers.", "isCorrect": false}
                ],
                "hint": "These are the counting numbers."
            },

            // --- TOPIC 3: SEQUENCES AND SERIES (Q21-Q30) ---
            {
                "questionNumber": 21,
                "question": "For the arithmetic progression 2, 5, 8, 11, \ldots, what is the common difference, d?",
                "answerOptions": [
                    {"text": "2", "rationale": "This is the first term.", "isCorrect": false},
                    {"text": "3", "rationale": "The common difference d is the constant amount added to each term: 5-2=3.", "isCorrect": true},
                    {"text": "5", "rationale": "This is the second term.", "isCorrect": false},
                    {"text": "6", "rationale": "This is twice the common difference.", "isCorrect": false}
                ],
                "hint": "Subtract any term from its succeeding term."
            },
            {
                "questionNumber": 22,
                "question": "What is the formula for the n-th term (T_n) of an Arithmetic Progression (AP) with first term a and common difference d?",
                "answerOptions": [
                    {"text": "T_n = a + (n+1)d", "rationale": "Incorrect sign/value for n.", "isCorrect": false},
                    {"text": "T_n = a + (n-1)d", "rationale": "This is the correct formula for the n-th term of an AP.", "isCorrect": true},
                    {"text": "T_n = ar^{n-1}", "rationale": "This is the n-th term of a Geometric Progression (GP).", "isCorrect": false},
                    {"text": "T_n = a - (n-1)d", "rationale": "This would apply to a decreasing AP.", "isCorrect": false}
                ],
                "hint": "The first term a is T_1, where the term (n-1)d should be zero."
            },
            {
                "questionNumber": 23,
                "question": "What is the common ratio, r, of the geometric progression 3, 6, 12, 24, \ldots?",
                "answerOptions": [
                    {"text": "3", "rationale": "This is the first term and the common difference.", "isCorrect": false},
                    {"text": "2", "rationale": "The common ratio r is the constant multiple: 6/3=2, 12/6=2.", "isCorrect": true},
                    {"text": "4", "rationale": "This is incorrect.", "isCorrect": false},
                    {"text": "9", "rationale": "This is the third term minus the first.", "isCorrect": false}
                ],
                "hint": "Divide any term by its preceding term."
            },
            {
                "questionNumber": 24,
                "question": "The sum to infinity of a Geometric Progression (GP) converges only if:",
                "answerOptions": [
                    {"text": "r > 1", "rationale": "The sum diverges (approaches infinity).", "isCorrect": false},
                    {"text": "a > 0", "rationale": "The first term must be non-zero, but the ratio is the key.", "isCorrect": false},
                    {"text": "|r| < 1", "rationale": "The absolute value of the common ratio must be less than 1 for the series to converge.", "isCorrect": true},
                    {"text": "|r| > 1", "rationale": "The sum diverges.", "isCorrect": false}
                ],
                "hint": "The terms must become progressively smaller."
            },
            {
                "questionNumber": 25,
                "question": "Which of the following is the correct formula for the sum of n terms (S_n) of an AP?",
                "answerOptions": [
                    {"text": "S_n = \frac{n}{2}(a + T_n)", "rationale": "This is the correct formula using the last term T_n.", "isCorrect": true},
                    {"text": "S_n = n(2a + (n-1)d)", "rationale": "This is missing the division by 2.", "isCorrect": false},
                    {"text": "S_n = \frac{a(r^n - 1)}{r-1}", "rationale": "This is the sum of a GP.", "isCorrect": false},
                    {"text": "S_n = a + (n-1)d", "rationale": "This is the n-th term of an AP.", "isCorrect": false}
                ],
                "hint": "The sum is the average of the first and last term, multiplied by the number of terms."
            },
            {
                "questionNumber": 26,
                "question": "What is the 4^{th} term of the Arithmetic Progression (AP) starting with 5 and common difference 3?",
                "answerOptions": [
                    {"text": "11", "rationale": "T_3=11.", "isCorrect": false},
                    {"text": "14", "rationale": "T_4 = a + (4-1)d = 5 + 3(3) = 14.", "isCorrect": true},
                    {"text": "17", "rationale": "T_5=17.", "isCorrect": false},
                    {"text": "20", "rationale": "This is incorrect.", "isCorrect": false}
                ],
                "hint": "The terms are 5, 8, 11, \ldots"
            },
            {
                "questionNumber": 27,
                "question": "The n-th term (T_n) of a Geometric Progression (GP) with first term a and common ratio r is given by:",
                "answerOptions": [
                    {"text": "T_n = a + (n-1)r", "rationale": "Incorrect, this resembles an AP.", "isCorrect": false},
                    {"text": "T_n = a r^{n}", "rationale": "Incorrect exponent, this would be T_{n+1}.", "isCorrect": false},
                    {"text": "T_n = a r^{n-1}", "rationale": "This is the correct formula for the n-th term of a GP.", "isCorrect": true},
                    {"text": "T_n = a / r^{n-1}", "rationale": "Incorrect operation.", "isCorrect": false}
                ],
                "hint": "The exponent should be one less than the term number."
            },
            {
                "questionNumber": 28,
                "question": "What is the sum to infinity (S_{\infty}) of a GP with first term a=10 and common ratio r=1/2?",
                "answerOptions": [
                    {"text": "5", "rationale": "This is a \times r.", "isCorrect": false},
                    {"text": "15", "rationale": "This is close but incorrect.", "isCorrect": false},
                    {"text": "20", "rationale": "S_{\infty} = \frac{a}{1-r} = \frac{10}{1 - 1/2} = \frac{10}{1/2} = 20.", "isCorrect": true},
                    {"text": "25", "rationale": "This is incorrect.", "isCorrect": false}
                ],
                "hint": "Use the formula S_{\infty} = a/(1-r)."
            },
            {
                "questionNumber": 29,
                "question": "A series where the reciprocals of the terms form an Arithmetic Progression is called a:",
                "answerOptions": [
                    {"text": "Geometric Progression", "rationale": "This has a common ratio.", "isCorrect": false},
                    {"text": "Harmonic Progression (HP)", "rationale": "This is the definition of a Harmonic Progression.", "isCorrect": true},
                    {"text": "Quadratic Progression", "rationale": "This is not a standard progression type.", "isCorrect": false},
                    {"text": "Fibonacci Sequence", "rationale": "This is defined by the sum of the two preceding terms.", "isCorrect": false}
                ],
                "hint": "The defining property is based on the reciprocal relationship."
            },
            {
                "questionNumber": 30,
                "question": "If the second term of an AP is 10 and the fourth term is 16, what is the first term, a?",
                "answerOptions": [
                    {"text": "4", "rationale": "d=3. T_2=a+d=10 \implies a=7.", "isCorrect": false},
                    {"text": "7", "rationale": "d = (16-10)/2 = 3. a = T_2 - d = 10 - 3 = 7.", "isCorrect": true},
                    {"text": "13", "rationale": "This is the common difference d plus the second term.", "isCorrect": false},
                    {"text": "1", "rationale": "This is incorrect.", "isCorrect": false}
                ],
                "hint": "First, find the common difference d using T_4 - T_2 = 2d."
            },

            // --- TOPIC 4: THEORY OF QUADRATIC EQUATIONS (Q31-Q40) ---
            {
                "questionNumber": 31,
                "question": "If \alpha and \beta are the roots of the quadratic equation ax^2 + bx + c = 0, what is the sum of the roots (\alpha + \beta)?",
                "answerOptions": [
                    {"text": "c/a", "rationale": "This is the product of the roots.", "isCorrect": false},
                    {"text": "-b/c", "rationale": "This is incorrect.", "isCorrect": false},
                    {"text": "-b/a", "rationale": "The sum of the roots is -\frac{b}{a}.", "isCorrect": true},
                    {"text": "b/a", "rationale": "This is the negative of the correct answer.", "isCorrect": false}
                ],
                "hint": "Recall Vieta's formulas for the sum."
            },
            {
                "questionNumber": 32,
                "question": "Which of the following conditions ensures that a quadratic equation ax^2 + bx + c = 0 has two distinct real roots?",
                "answerOptions": [
                    {"text": "The discriminant D=0.", "rationale": "Discriminant D=0 means one repeated real root.", "isCorrect": false},
                    {"text": "The discriminant D<0.", "rationale": "Discriminant D<0 means two complex (non-real) roots.", "isCorrect": false},
                    {"text": "The discriminant D>0.", "rationale": "A positive discriminant (b^2 - 4ac > 0) ensures two distinct real roots.", "isCorrect": true},
                    {"text": "The constant term c is zero.", "rationale": "This only guarantees one root is zero.", "isCorrect": false}
                ],
                "hint": "The nature of the roots is determined by the discriminant (D = b^2 - 4ac)."
            },
            {
                "questionNumber": 33,
                "question": "For the quadratic equation ax^2 + bx + c = 0, what is the product of the roots (\alpha\beta)?",
                "answerOptions": [
                    {"text": "c/a", "rationale": "The product of the roots is \frac{c}{a}.", "isCorrect": true},
                    {"text": "-b/a", "rationale": "This is the sum of the roots.", "isCorrect": false},
                    {"text": "b/a", "rationale": "This is incorrect.", "isCorrect": false},
                    {"text": "-c/a", "rationale": "This is the negative of the correct product.", "isCorrect": false}
                ],
                "hint": "Recall Vieta's formulas for the product."
            },
            {
                "questionNumber": 34,
                "question": "What is the discriminant (D) of the quadratic equation 2x^2 + 3x - 5 = 0?",
                "answerOptions": [
                    {"text": "1", "rationale": "b^2 - 4ac = 3^2 - 4(2)(-5) = 9 + 40 = 49.", "isCorrect": false},
                    {"text": "49", "rationale": "D = b^2 - 4ac = 3^2 - 4(2)(-5) = 9 + 40 = 49.", "isCorrect": true},
                    {"text": "31", "rationale": "9 - 40.", "isCorrect": false},
                    {"text": "5", "rationale": "This is incorrect.", "isCorrect": false}
                ],
                "hint": "The discriminant formula is D = b^2 - 4ac."
            },
            {
                "questionNumber": 35,
                "question": "If the discriminant (D) of a quadratic equation is zero, the roots are:",
                "answerOptions": [
                    {"text": "Complex and distinct", "rationale": "This happens when D<0.", "isCorrect": false},
                    {"text": "Real and equal (or one repeated root)", "rationale": "When D=0, the quadratic formula yields x = -b/(2a), meaning one repeated real root.", "isCorrect": true},
                    {"text": "Real and distinct", "rationale": "This happens when D>0.", "isCorrect": false},
                    {"text": "Always zero", "rationale": "Incorrect.", "isCorrect": false}
                ],
                "hint": "The \pm\sqrt{D} term in the quadratic formula becomes zero."
            },
            {
                "questionNumber": 36,
                "question": "A quadratic equation whose roots are x=2 and x=3 is:",
                "answerOptions": [
                    {"text": "x^2 - 5x + 6 = 0", "rationale": "Sum of roots: 2+3=5. Product of roots: 2\times 3=6. Equation: x^2 - (5)x + (6) = 0.", "isCorrect": true},
                    {"text": "x^2 + 5x + 6 = 0", "rationale": "This has roots -2 and -3.", "isCorrect": false},
                    {"text": "x^2 - x - 6 = 0", "rationale": "This has roots 3 and -2.", "isCorrect": false},
                    {"text": "x^2 + 6x + 5 = 0", "rationale": "This has roots -5 and -1.", "isCorrect": false}
                ],
                "hint": "Use the formula: x^2 - (\alpha + \beta)x + (\alpha\beta) = 0."
            },
            {
                "questionNumber": 37,
                "question": "The process of writing a polynomial as a product of two or more polynomials is known as:",
                "answerOptions": [
                    {"text": "Expansion", "rationale": "Expansion is the reverse process.", "isCorrect": false},
                    {"text": "Quadratic formulation", "rationale": "This is not the term for the process.", "isCorrect": false},
                    {"text": "Factorization", "rationale": "Factorization is the decomposition into a product of factors.", "isCorrect": true},
                    {"text": "Simplification", "rationale": "Simplification is reducing the expression.", "isCorrect": false}
                ],
                "hint": "The product components are called factors."
            },
            {
                "questionNumber": 38,
                "question": "What is the nature of the roots of the equation x^2 + x + 1 = 0?",
                "answerOptions": [
                    {"text": "Real and distinct", "rationale": "D = 1^2 - 4(1)(1) = -3 < 0.", "isCorrect": false},
                    {"text": "Real and equal", "rationale": "D must be 0.", "isCorrect": false},
                    {"text": "Complex and distinct (non-real)", "rationale": "The discriminant is D = -3, which is negative.", "isCorrect": true},
                    {"text": "Real and positive", "rationale": "D must be positive.", "isCorrect": false}
                ],
                "hint": "Calculate the discriminant D = b^2 - 4ac."
            },
            {
                "questionNumber": 39,
                "question": "If one root of the equation x^2 - 5x + c = 0 is 2, what is the value of c?",
                "answerOptions": [
                    {"text": "10", "rationale": "This is incorrect.", "isCorrect": false},
                    {"text": "6", "rationale": "If 2 is a root, 2^2 - 5(2) + c = 0 \implies 4 - 10 + c = 0 \implies c = 6.", "isCorrect": true},
                    {"text": "3", "rationale": "This is the other root (3) since the sum is 5.", "isCorrect": false},
                    {"text": "-4", "rationale": "This is incorrect.", "isCorrect": false}
                ],
                "hint": "Substitute the root into the equation, or find the other root first."
            },
            {
                "questionNumber": 40,
                "question": "The quadratic formula solves ax^2 + bx + c = 0 for x as:",
                "answerOptions": [
                    {"text": "x = \frac{b \pm \sqrt{b^2 - 4ac}}{2a}", "rationale": "The term b must be negative in the numerator.", "isCorrect": false},
                    {"text": "x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}", "rationale": "This is the correct general form of the quadratic formula.", "isCorrect": true},
                    {"text": "x = \frac{-b \pm \sqrt{b^2 + 4ac}}{2a}", "rationale": "Incorrect sign under the square root.", "isCorrect": false},
                    {"text": "x = \frac{-b \pm \sqrt{b^2 - 4ac}}{a}", "rationale": "Missing division by 2 in the denominator.", "isCorrect": false}
                ],
                "hint": "The numerator starts with -b."
            },

            // --- TOPIC 5: BINOMIAL THEOREM (Q41-Q50) ---
            {
                "questionNumber": 41,
                "question": "In the expansion of (x+y)^n using the Binomial Theorem, the total number of terms is:",
                "answerOptions": [
                    {"text": "n", "rationale": "This is the power of the binomial.", "isCorrect": false},
                    {"text": "n-1", "rationale": "This is incorrect.", "isCorrect": false},
                    {"text": "n+1", "rationale": "The number of terms in the expansion is always one more than the exponent n.", "isCorrect": true},
                    {"text": "2^n", "rationale": "This is the number of subsets of a set with n elements.", "isCorrect": false}
                ],
                "hint": "Consider the exponents of the terms, which range from n down to 0."
            },
            {
                "questionNumber": 42,
                "question": "The general term (T_{r+1}) in the expansion of (a+b)^n is given by:",
                "answerOptions": [
                    {"text": "T_{r+1} = \binom{n}{r} a^{r} b^{n-r}", "rationale": "The powers of a and b are usually given the other way around in the standard formula.", "isCorrect": false},
                    {"text": "T_{r+1} = \binom{n}{r} a^{n-r} b^r", "rationale": "This is the correct general term formula.", "isCorrect": true},
                    {"text": "T_{r} = \binom{n}{r} a^{n-r} b^r", "rationale": "The term number is r+1, not r.", "isCorrect": false},
                    {"text": "T_{r+1} = \binom{n}{r+1} a^{n-r} b^r", "rationale": "Incorrect combination factor.", "isCorrect": false}
                ],
                "hint": "The term that contains b^r is the (r+1)-th term."
            },
            {
                "questionNumber": 43,
                "question": "The value of the binomial coefficient \binom{n}{0} is:",
                "answerOptions": [
                    {"text": "n", "rationale": "This is \binom{n}{1}.", "isCorrect": false},
                    {"text": "0", "rationale": "Incorrect.", "isCorrect": false},
                    {"text": "1", "rationale": "\binom{n}{0} = \frac{n!}{0!(n-0)!} = 1.", "isCorrect": true},
                    {"text": "n!", "rationale": "This is the factorial of n.", "isCorrect": false}
                ],
                "hint": "This corresponds to the first term of the expansion."
            },
            {
                "questionNumber": 44,
                "question": "The sum of all binomial coefficients in the expansion of (x+y)^n is equal to:",
                "answerOptions": [
                    {"text": "n!", "rationale": "This is the factorial.", "isCorrect": false},
                    {"text": "2^n", "rationale": "Setting x=1 and y=1 in (x+y)^n gives 2^n, which is the sum of the coefficients.", "isCorrect": true},
                    {"text": "(n+1)", "rationale": "This is the number of terms.", "isCorrect": false},
                    {"text": "n^2", "rationale": "This is incorrect.", "isCorrect": false}
                ],
                "hint": "Consider what happens when x=1 and y=1."
            },
            {
                "questionNumber": 45,
                "question": "The term in the binomial expansion of (a+b)^n that contains b^r is the:",
                "answerOptions": [
                    {"text": "r-th term", "rationale": "The coefficient r in the term T_{r+1} is always 1 less than the term number.", "isCorrect": false},
                    {"text": "(r+1)-th term", "rationale": "The general term is T_{r+1} = \binom{n}{r} a^{n-r} b^r.", "isCorrect": true},
                    {"text": "(n-r)-th term", "rationale": "This is incorrect.", "isCorrect": false},
                    {"text": "n-th term", "rationale": "The n-th term has b^{n-1}.", "isCorrect": false}
                ],
                "hint": "The exponent of the second term, r, begins at 0."
            },
            {
                "questionNumber": 46,
                "question": "In the expansion of (1+x)^3, what is the coefficient of the x^2 term?",
                "answerOptions": [
                    {"text": "1", "rationale": "The coefficient of x^3 or x^0 is 1.", "isCorrect": false},
                    {"text": "2", "rationale": "Incorrect.", "isCorrect": false},
                    {"text": "3", "rationale": "The term is \binom{3}{2} (1)^{3-2} (x)^2 = 3x^2. The coefficient is 3.", "isCorrect": true},
                    {"text": "4", "rationale": "This is the number of terms.", "isCorrect": false}
                ],
                "hint": "The coefficient is \binom{n}{r}, where r is the power of x."
            },
            {
                "questionNumber": 47,
                "question": "Which term is the middle term in the expansion of (x+y)^8?",
                "answerOptions": [
                    {"text": "4^{th} term", "rationale": "Incorrect.", "isCorrect": false},
                    {"text": "5^{th} term", "rationale": "Since n=8 (even), the number of terms is 9. The middle term is (\frac{n}{2} + 1)^{th} = (4+1)^{th} = 5^{th}.", "isCorrect": true},
                    {"text": "9^{th} term", "rationale": "This is the last term.", "isCorrect": false},
                    {"text": "There are two middle terms", "rationale": "There are two middle terms only when n is odd.", "isCorrect": false}
                ],
                "hint": "If n is even, there is one middle term at position \frac{n}{2} + 1."
            },
            {
                "questionNumber": 48,
                "question": "The relationship between the binomial coefficients is most commonly illustrated using:",
                "answerOptions": [
                    {"text": "Argand Diagram", "rationale": "Used for complex numbers.", "isCorrect": false},
                    {"text": "Venn Diagram", "rationale": "Used for set theory.", "isCorrect": false},
                    {"text": "Pascal's Triangle", "rationale": "Pascal's Triangle graphically shows the values of \binom{n}{r}.", "isCorrect": true},
                    {"text": "Cartesian Plane", "rationale": "Used for graphing functions.", "isCorrect": false}
                ],
                "hint": "The numbers in this triangular array are \binom{n}{r}."
            },
            {
                "questionNumber": 49,
                "question": "In the expansion of (\frac{1}{x} + x)^6, for which value of r will the term be independent of x?",
                "answerOptions": [
                    {"text": "r=1", "rationale": "Exponent of x will be 6-2(1)=4.", "isCorrect": false},
                    {"text": "r=3", "rationale": "The exponent of x in T_{r+1} is (6-r)(-1) + r(1) = 2r - 6. Setting 2r-6=0 gives r=3.", "isCorrect": true},
                    {"text": "r=6", "rationale": "This is the last term.", "isCorrect": false},
                    {"text": "r=0", "rationale": "Exponent of x will be 6.", "isCorrect": false}
                ],
                "hint": "The term independent of x has the power of x equal to zero. Set the total exponent of x to 0."
            },
            {
                "questionNumber": 50,
                "question": "Which of the following is equivalent to \binom{n}{r} (Pascal's Identity)?",
                "answerOptions": [
                    {"text": "\binom{n}{r} + \binom{n}{r-1}", "rationale": "This is \binom{n+1}{r}.", "isCorrect": false},
                    {"text": "\binom{n-1}{r} + \binom{n-1}{r-1}", "rationale": "This is the correct Pascal's identity, which relates coefficients in adjacent rows.", "isCorrect": true},
                    {"text": "\binom{n}{n-r}", "rationale": "This is the symmetry property, not Pascal's Identity.", "isCorrect": false},
                    {"text": "\frac{n!}{r!}", "rationale": "This is for permutations.", "isCorrect": false}
                ],
                "hint": "This identity shows how the numbers in Pascal's triangle are formed."
            },

            // --- TOPIC 6: COMPLEX NUMBERS (Q51-Q60) ---
            {
                "questionNumber": 51,
                "question": "Given the complex number z = 3 + 4i, what is its complex conjugate, \bar{z}?",
                "answerOptions": [
                    {"text": "3 - 4i", "rationale": "The complex conjugate is found by changing the sign of the imaginary part.", "isCorrect": true},
                    {"text": "4 + 3i", "rationale": "This swaps the real and imaginary parts.", "isCorrect": false},
                    {"text": "-3 + 4i", "rationale": "This changes the sign of the real part.", "isCorrect": false},
                    {"text": "4i - 3", "rationale": "This swaps the terms and changes the sign of the real part.", "isCorrect": false}
                ],
                "hint": "Only the sign of the imaginary component changes."
            },
            {
                "questionNumber": 52,
                "question": "What is the value of i^2, where i = \sqrt{-1}?",
                "answerOptions": [
                    {"text": "i", "rationale": "This is the value of i^1.", "isCorrect": false},
                    {"text": "1", "rationale": "This is the value of i^4.", "isCorrect": false},
                    {"text": "-1", "rationale": "By definition, i = \sqrt{-1}, so i^2 = (\sqrt{-1})^2 = -1.", "isCorrect": true},
                    {"text": "0", "rationale": "This is incorrect.", "isCorrect": false}
                ],
                "hint": "The imaginary unit squared is defined to be a specific real number."
            },
            {
                "questionNumber": 53,
                "question": "If z_1 = 2+3i and z_2 = 1-i, what is the sum z_1 + z_2?",
                "answerOptions": [
                    {"text": "3 + 4i", "rationale": "Incorrect imaginary part.", "isCorrect": false},
                    {"text": "3 - 4i", "rationale": "Incorrect imaginary part.", "isCorrect": false},
                    {"text": "3 + 2i", "rationale": "The sum is (2+1) + (3i + (-i)) = 3 + 2i.", "isCorrect": true},
                    {"text": "1 + 4i", "rationale": "This is the difference z_1 - z_2.", "isCorrect": false}
                ],
                "hint": "Add the real parts and the imaginary parts separately."
            },
            {
                "questionNumber": 54,
                "question": "What is the modulus (absolute value) of the complex number z = 5 - 12i?",
                "answerOptions": [
                    {"text": "7", "rationale": "This is 12-5.", "isCorrect": false},
                    {"text": "13", "rationale": "The modulus is \sqrt{5^2 + (-12)^2} = \sqrt{25 + 144} = \sqrt{169} = 13.", "isCorrect": true},
                    {"text": "17", "rationale": "This is 5+12.", "isCorrect": false},
                    {"text": "\sqrt{119}", "rationale": "Incorrect calculation.", "isCorrect": false}
                ],
                "hint": "The modulus |z| is calculated as \sqrt{x^2 + y^2}."
            },
            {
                "questionNumber": 55,
                "question": "Multiplying a complex number z by its conjugate \bar{z} always results in:",
                "answerOptions": [
                    {"text": "A purely imaginary number", "rationale": "e.g., (3+4i)(3-4i) = 9 + 16 = 25 (real).", "isCorrect": false},
                    {"text": "The square of its modulus, |z|^2", "rationale": "If z=x+iy, z\bar{z} = x^2 + y^2 = |z|^2, which is a real number.", "isCorrect": true},
                    {"text": "-1", "rationale": "Incorrect.", "isCorrect": false},
                    {"text": "The complex number z itself", "rationale": "Incorrect.", "isCorrect": false}
                ],
                "hint": "This operation is crucial for rationalizing the denominator of a fraction."
            },
            {
                "questionNumber": 56,
                "question": "The complex number z = x + iy is plotted on the Argand Diagram. The x-axis represents the:",
                "answerOptions": [
                    {"text": "Imaginary Axis", "rationale": "This is the y-axis.", "isCorrect": false},
                    {"text": "Modulus", "rationale": "The modulus is the distance from the origin.", "isCorrect": false},
                    {"text": "Real Axis", "rationale": "The horizontal axis represents the real part (x) of the complex number.", "isCorrect": true},
                    {"text": "Argument", "rationale": "The argument is the angle from the positive x-axis.", "isCorrect": false}
                ],
                "hint": "This is the horizontal axis."
            },
            {
                "questionNumber": 57,
                "question": "What is the value of i^{40}?",
                "answerOptions": [
                    {"text": "i", "rationale": "This is i^1.", "isCorrect": false},
                    {"text": "-1", "rationale": "This is i^2.", "isCorrect": false},
                    {"text": "1", "rationale": "Since 40 is a multiple of 4, i^{40} = (i^4)^{10} = 1^{10} = 1.", "isCorrect": true},
                    {"text": "-i", "rationale": "This is i^3.", "isCorrect": false}
                ],
                "hint": "The powers of i cycle in a pattern of 4."
            },
            {
                "questionNumber": 58,
                "question": "The argument of a complex number z = x + iy is the angle \theta such that:",
                "answerOptions": [
                    {"text": "\sin\theta = x/|z|", "rationale": "This is incorrect.", "isCorrect": false},
                    {"text": "\tan\theta = y/x", "rationale": "The argument \theta is the angle formed with the positive real axis, whose tangent is the ratio of the imaginary part (y) to the real part (x).", "isCorrect": true},
                    {"text": "\cos\theta = y/|z|", "rationale": "This is incorrect.", "isCorrect": false},
                    {"text": "\theta = x/y", "rationale": "This is the cotangent function.", "isCorrect": false}
                ],
                "hint": "It is the angle in the polar form r(\cos\theta + i\sin\theta)."
            },
            {
                "questionNumber": 59,
                "question": "To perform division of complex numbers, \frac{z_1}{z_2}, one must multiply the numerator and denominator by the:",
                "answerOptions": [
                    {"text": "Modulus of z_2", "rationale": "Incorrect.", "isCorrect": false},
                    {"text": "Conjugate of z_1", "rationale": "Incorrect, the conjugate of z_2 is needed.", "isCorrect": false},
                    {"text": "Conjugate of z_2", "rationale": "Multiplying by \bar{z}_2 rationalizes the denominator to a real number.", "isCorrect": true},
                    {"text": "Reciprocal of z_2", "rationale": "This is not the standard procedure for dividing complex numbers.", "isCorrect": false}
                ],
                "hint": "This process turns the complex denominator into a real number."
            },
            {
                "questionNumber": 60,
                "question": "The Polar Form of a complex number z is z = r(\cos\theta + i\sin\theta). The letter r represents the:",
                "answerOptions": [
                    {"text": "Real part", "rationale": "The real part is r\cos\theta.", "isCorrect": false},
                    {"text": "Imaginary part", "rationale": "The imaginary part is r\sin\theta.", "isCorrect": false},
                    {"text": "Modulus (or absolute value)", "rationale": "The modulus r = |z| is the distance from the origin.", "isCorrect": true},
                    {"text": "Argument", "rationale": "The argument is \theta.", "isCorrect": false}
                ],
                "hint": "This is the length of the vector in the Argand diagram."
            },

            // --- TOPIC 7: DE-MOIVRE'S THEOREM AND NTH ROOTS (Q61-Q65) ---
            {
                "questionNumber": 61,
                "question": "De-Moivre's theorem, (\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta), is used to find powers of a complex number expressed in which form?",
                "answerOptions": [
                    {"text": "Rectangular form (x+iy)", "rationale": "This form is used for addition/subtraction.", "isCorrect": false},
                    {"text": "Polar form (r(\cos\theta + i\sin\theta))", "rationale": "De-Moivre's theorem applies directly to the polar form.", "isCorrect": true},
                    {"text": "Cartesian form", "rationale": "This is another name for rectangular form.", "isCorrect": false},
                    {"text": "Inverse form", "rationale": "Incorrect.", "isCorrect": false}
                ],
                "hint": "The theorem simplifies repeated multiplication by dealing with the modulus and argument."
            },
            {
                "questionNumber": 62,
                "question": "If z^n = w is being solved for z (where w is a complex number), the resulting n values of z are called the:",
                "answerOptions": [
                    {"text": "Complex conjugates of w", "rationale": "The conjugate is just one value.", "isCorrect": false},
                    {"text": "Reciprocals of w", "rationale": "The reciprocal is 1/w.", "isCorrect": false},
                    {"text": "n^{th} roots of w", "rationale": "The solutions to z^n=w are the n distinct n^{th} roots of w.", "isCorrect": true},
                    {"text": "Principle values", "rationale": "This refers to a specific root or angle.", "isCorrect": false}
                ],
                "hint": "This is a direct definition from the notes on Nth Root of Unity."
            },
            {
                "questionNumber": 63,
                "question": "Using De-Moivre's Theorem, (\cos(15^{\circ}) + i\sin(15^{\circ}))^4 is equal to:",
                "answerOptions": [
                    {"text": "\cos(60^{\circ}) + i\sin(60^{\circ})", "rationale": "The theorem multiplies the angle by the power: 4 \times 15^{\circ} = 60^{\circ}.", "isCorrect": true},
                    {"text": "4\cos(15^{\circ}) + 4i\sin(15^{\circ})", "rationale": "The exponent does not multiply the trigonometric function values.", "isCorrect": false},
                    {"text": "\cos(19^{\circ}) + i\sin(19^{\circ})", "rationale": "Incorrect arithmetic.", "isCorrect": false},
                    {"text": "\cos(15^{\circ}) + i\sin(15^{\circ})", "rationale": "Incorrect application of the theorem.", "isCorrect": false}
                ],
                "hint": "The exponent multiplies the angle \theta."
            },
            {
                "questionNumber": 64,
                "question": "The n^{th} roots of unity are the solutions to the equation:",
                "answerOptions": [
                    {"text": "z^n = 0", "rationale": "The only solution is z=0.", "isCorrect": false},
                    {"text": "z^n = i", "rationale": "These are the roots of i.", "isCorrect": false},
                    {"text": "z^n = 1", "rationale": "The roots of unity are the solutions to z^n=1.", "isCorrect": true},
                    {"text": "z = n", "rationale": "Incorrect.", "isCorrect": false}
                ],
                "hint": "Unity means one."
            },
            {
                "questionNumber": 65,
                "question": "If z = r(\cos\theta + i\sin\theta), the modulus of z^n, |z^n|, is equal to:",
                "answerOptions": [
                    {"text": "r", "rationale": "This is the modulus of z.", "isCorrect": false},
                    {"text": "r^n", "rationale": "The modulus of a power of a complex number is the power of its modulus: |z^n| = |z|^n = r^n.", "isCorrect": true},
                    {"text": "n\theta", "rationale": "This is related to the argument of z^n.", "isCorrect": false},
                    {"text": "\sqrt{r}", "rationale": "This is related to the root.", "isCorrect": false}
                ],
                "hint": "De-Moivre's theorem dictates that the modulus is raised to the power n."
            },

            // --- TOPIC 8: CIRCULAR MEASURE (Q66-Q70) ---
            {
                "questionNumber": 66,
                "question": "The angular measure of 180^{\circ} in degrees is equal to which of the following in circular measure (radians)?",
                "answerOptions": [
                    {"text": "\pi/2 radians", "rationale": "This is 90^{\circ}.", "isCorrect": false},
                    {"text": "2\pi radians", "rationale": "This is 360^{\circ}.", "isCorrect": false},
                    {"text": "\pi radians", "rationale": "The conversion factor is 180^{\circ} = \pi radians.", "isCorrect": true},
                    {"text": "1 radian", "rationale": "1 radian is approximately 57.3^{\circ}.", "isCorrect": false}
                ],
                "hint": "This is the measure of a straight angle."
            },
            {
                "questionNumber": 67,
                "question": "What is 30^{\circ} expressed in radians?",
                "answerOptions": [
                    {"text": "\pi/3 radians", "rationale": "This is 60^{\circ}.", "isCorrect": false},
                    {"text": "\pi/4 radians", "rationale": "This is 45^{\circ}.", "isCorrect": false},
                    {"text": "\pi/6 radians", "rationale": "30^{\circ} = 30 \times \frac{\pi}{180} = \frac{\pi}{6} radians.", "isCorrect": true},
                    {"text": "2\pi/3 radians", "rationale": "This is 120^{\circ}.", "isCorrect": false}
                ],
                "hint": "Use the conversion factor \frac{\pi}{180}."
            },
            {
                "questionNumber": 68,
                "question": "The length of an arc (s) subtended by an angle \theta (in radians) in a circle of radius r is given by the formula:",
                "answerOptions": [
                    {"text": "s = r^2 \theta", "rationale": "Incorrect.", "isCorrect": false},
                    {"text": "s = r \theta", "rationale": "The arc length formula is s = r\theta, where \theta is in radians.", "isCorrect": true},
                    {"text": "s = \frac{1}{2} r^2 \theta", "rationale": "This is the formula for the area of a sector.", "isCorrect": false},
                    {"text": "s = \theta / r", "rationale": "Incorrect.", "isCorrect": false}
                ],
                "hint": "Arc length is proportional to the radius and the angle."
            },
            {
                "questionNumber": 69,
                "question": "The area (A) of a sector in a circle of radius r with central angle \theta (in radians) is given by:",
                "answerOptions": [
                    {"text": "A = r\theta", "rationale": "This is the arc length.", "isCorrect": false},
                    {"text": "A = r \theta^2", "rationale": "Incorrect.", "isCorrect": false},
                    {"text": "A = \frac{1}{2} r^2 \theta", "rationale": "This is the correct formula for the area of a sector.", "isCorrect": true},
                    {"text": "A = \frac{1}{2} r \theta", "rationale": "Incorrect.", "isCorrect": false}
                ],
                "hint": "The formula involves r^2, similar to the area of a circle (\pi r^2)."
            },
            {
                "questionNumber": 70,
                "question": "One radian is the angle subtended at the center of a circle by an arc whose length is equal to the circle's:",
                "answerOptions": [
                    {"text": "Diameter", "rationale": "Incorrect.", "isCorrect": false},
                    {"text": "Circumference", "rationale": "The circumference subtends 2\pi radians.", "isCorrect": false},
                    {"text": "Radius", "rationale": "A radian is defined as the angle for which the arc length equals the radius (s=r \implies \theta = 1).", "isCorrect": true},
                    {"text": "Area", "rationale": "Area is not a linear measure.", "isCorrect": false}
                ],
                "hint": "The definition is based on the relationship between arc length and this linear measure."
            },

            // --- TOPIC 9: TRIGONOMETRIC FUNCTIONS AND IDENTITIES (Q71-Q80) ---
            {
                "questionNumber": 71,
                "question": "In the Cartesian plane, the value of sin(120^{circ}) is:",
                "answerOptions": [
                    {"text": "1/2", "rationale": "This is sin(30^{circ}).", "isCorrect": false},
                    {"text": "-sqrt{3}/2", "rationale": "This would be cos(150^{circ}).", "isCorrect": false},
                    {"text": "sqrt{3}/2", "rationale": "Since 120^{circ} is in the second quadrant, sin(120^{circ}) = sin(180^{circ} - 60^{circ}) = sin(60^{circ}) = sqrt{3}/2.", "isCorrect": true},
                    {"text": "-1/2", "rationale": "This would be cos(120^{\circ}).", "isCorrect": false}
                ],
                "hint": "Find the reference angle and check the sign in the second quadrant (where sine is positive)."
            },
            {
                "questionNumber": 72,
                "question": "Which of the following is the correct identity for the addition formula \cos(A+B)?",
                "answerOptions": [
                    {"text": "\sin A \cos B + \cos A \sin B", "rationale": "This is \sin(A+B).", "isCorrect": false},
                    {"text": "\cos A \cos B - \sin A \sin B", "rationale": "This is the correct addition formula for cosine.", "isCorrect": true},
                    {"text": "\cos A \cos B + \sin A \sin B", "rationale": "This is \cos(A-B).", "isCorrect": false},
                    {"text": "\sin A \sin B - \cos A \cos B", "rationale": "This is -\cos(A+B).", "isCorrect": false}
                ],
                "hint": "The cosine addition formula uses the opposite sign in the middle."
            },
            {
                "questionNumber": 73,
                "question": "The trigonometric expression \sin x \cos y + \cos x \sin y is equivalent to:",
                "answerOptions": [
                    {"text": "\sin(x-y)", "rationale": "The sign would be negative for subtraction.", "isCorrect": false},
                    {"text": "\cos(x+y)", "rationale": "This is a sine addition formula, not cosine.", "isCorrect": false},
                    {"text": "\sin(x+y)", "rationale": "This is the correct sine addition formula.", "isCorrect": true},
                    {"text": "\cos(x-y)", "rationale": "This would use \cos\cos + \sin\sin.", "isCorrect": false}
                ],
                "hint": "The sine addition formula uses mixed \sin\cos terms."
            },
            {
                "questionNumber": 74,
                "question": "The fundamental trigonometric identity states that \sin^2\theta + \cos^2\theta is equal to:",
                "answerOptions": [
                    {"text": "\sec^2\theta", "rationale": "This is 1 + \tan^2\theta.", "isCorrect": false},
                    {"text": "0", "rationale": "Incorrect.", "isCorrect": false},
                    {"text": "1", "rationale": "This is the Pythagorean identity.", "isCorrect": true},
                    {"text": "2", "rationale": "Incorrect.", "isCorrect": false}
                ],
                "hint": "This identity is derived from the Pythagorean theorem in a unit circle."
            },
            {
                "questionNumber": 75,
                "question": "Which of the following is NOT an expression for \cos(2A) (Double Angle Formula)?",
                "answerOptions": [
                    {"text": "\cos^2 A - \sin^2 A", "rationale": "This is a correct formula.", "isCorrect": false},
                    {"text": "2\cos^2 A - 1", "rationale": "This is a correct formula.", "isCorrect": false},
                    {"text": "1 - 2\sin^2 A", "rationale": "This is a correct formula.", "isCorrect": false},
                    {"text": "2\sin A \cos A", "rationale": "This is the formula for \sin(2A).", "isCorrect": true}
                ],
                "hint": "The sine double angle formula is 2\sin A\cos A."
            },
            {
                "questionNumber": 76,
                "question": "The range of the trigonometric function f(x) = \sin x is:",
                "answerOptions": [
                    {"text": "All real numbers, (-\infty, \infty)", "rationale": "This is the range of \tan x.", "isCorrect": false},
                    {"text": "[0, 1]", "rationale": "This is only the positive part.", "isCorrect": false},
                    {"text": "[-1, 1]", "rationale": "The sine function oscillates between a minimum of -1 and a maximum of 1.", "isCorrect": true},
                    {"text": "(-1, 1)", "rationale": "The endpoints -1 and 1 are included.", "isCorrect": false}
                ],
                "hint": "The minimum and maximum values of the sine function are -1 and 1."
            },
            {
                "questionNumber": 77,
                "question": "What is the value of \tan(45^{\circ})?",
                "answerOptions": [
                    {"text": "0", "rationale": "This is \tan(0^{\circ}).", "isCorrect": false},
                    {"text": "\sqrt{3}", "rationale": "This is \tan(60^{\circ}).", "isCorrect": false},
                    {"text": "1", "rationale": "\tan(45^{\circ}) = \frac{\sin(45^{\circ})}{\cos(45^{\circ})} = \frac{\sqrt{2}/2}{\sqrt{2}/2} = 1.", "isCorrect": true},
                    {"text": "\frac{1}{\sqrt{3}}", "rationale": "This is \tan(30^{\circ}).", "isCorrect": false}
                ],
                "hint": "The angle where the sine and cosine values are equal."
            },
            {
                "questionNumber": 78,
                "question": "The co-function identity states that \sin(90^{\circ} - \theta) is equal to:",
                "answerOptions": [
                    {"text": "\sin\theta", "rationale": "This is incorrect.", "isCorrect": false},
                    {"text": "-\cos\theta", "rationale": "This is \cos(90^{\circ} + \theta).", "isCorrect": false},
                    {"text": "\cos\theta", "rationale": "The sine of an angle is the cosine of its complement.", "isCorrect": true},
                    {"text": "-\sin\theta", "rationale": "This is \sin(-\theta).", "isCorrect": false}
                ],
                "hint": "The identity relates a function of an angle to the co-function of its complementary angle."
            },
            {
                "questionNumber": 79,
                "question": "The Factor Formula (Sum-to-Product) for \sin A + \sin B is:",
                "answerOptions": [
                    {"text": "2\cos(\frac{A+B}{2})\sin(\frac{A-B}{2})", "rationale": "This is \sin A - \sin B.", "isCorrect": false},
                    {"text": "2\sin(\frac{A+B}{2})\cos(\frac{A-B}{2})", "rationale": "This is the correct formula for the sum of two sines.", "isCorrect": true},
                    {"text": "2\cos(\frac{A+B}{2})\cos(\frac{A-B}{2})", "rationale": "This is \cos A + \cos B.", "isCorrect": false},
                    {"text": "-2\sin(\frac{A+B}{2})\sin(\frac{A-B}{2})", "rationale": "This is \cos A - \cos B.", "isCorrect": false}
                ],
                "hint": "The sine sum formula starts with sine and cosine functions."
            },
            {
                "questionNumber": 80,
                "question": "What is the period of the function f(x) = \cos(2x)?",
                "answerOptions": [
                    {"text": "\pi", "rationale": "The standard period is 2\pi. The period of \cos(bx) is 2\pi/|b|. Here, b=2, so period is 2\pi/2 = \pi.", "isCorrect": true},
                    {"text": "2\pi", "rationale": "This is the period of cos(x).", "isCorrect": false},
                    {"text": "\pi/2", "rationale": "This is half the correct period.", "isCorrect": false},
                    {"text": "4 pi", "rationale": "This is the period of cos(x/2).", "isCorrect": false}
                ],
                "hint": "The period of cos(bx) is 2pi/b."
            }
        ];

        // --- QUIZ LOGIC FUNCTIONS (PRESERVED FROM ORIGINAL FILE) ---
        let currentQuestionIndex = 0;
        let score = 0;
        let answered = false;
        let userAnswers = [];

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
                MathJax.typesetPromise([document.getElementById('quiz-area')]);
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
                MathJax.typesetPromise([feedbackElement]);
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
                    <p class="user-answer ${isCorrectClass}"><strong>Your Answer:</strong> ${answer.userSelection}
                        <span style="font-weight: normal;">${answer.isCorrect ? '(Correct)' : '(Incorrect)'}</span>
                    </p>
                    <p class="correct-answer"><strong>Correct Answer:</strong> ${answer.correctAnswer}</p>
                    <p class="rationale"><strong>Rationale:</strong> ${answer.rationale}</p>
                    <p class="hint"><strong>Hint:</strong> ${answer.hint}</p>
                `;
                reviewContent.appendChild(reviewItem);
            });
            if (window.MathJax) {
                MathJax.texReset();
                MathJax.typesetPromise([reviewContent]);
            }
        }

        // Add a check to see if MathJax is loaded (or add the script tag for MathJax in the <head>)
        // The original HTML did not include MathJax, so I'll add a check here in case the user did not add it,
        // but the math expressions rely on it.
        if (typeof MathJax === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
            script.async = true;
            document.head.appendChild(script);
        }

        // Start the quiz once the script is loaded
        document.addEventListener('DOMContentLoaded', loadQuestion);
    