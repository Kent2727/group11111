// Philippine History Quiz Application
class PhilippineHistoryQuiz {
    constructor() {
        this.currentSection = 'crossword';
        this.currentEnumQuestion = 0;
        this.currentIdQuestion = 0;
        this.enumAnswers = {};
        this.idAnswers = {};
        
        // Quiz data
        this.enumerationQuestions = [
            {
                id: 1,
                question: "List 8 concepts associated with history.",
                answer: ["Change", "Continuity", "Multiple Causation", "Significance", "sources", "evidence", "framework", "context"],
                count: 8
            },
            {
                id: 2, 
                question: "Examples of primary sources (4 items).",
                answer: ["Photographs", "Maps", "Oral histories", "Eyewitness accounts"],
                count: 4
            },
            {
                id: 3,
                question: "Examples of secondary sources (4 items).", 
                answer: ["Journal articles", "Theses", "Conference papers", "Analytical reviews"],
                count: 4
            },
            {
                id: 4,
                question: "Historical thinking skills (5 items).",
                answer: ["Chronological thinking", "Historical comprehension", "Historical analysis", "Research capabilities", "Historical issues evaluation"],
                count: 5
            },
            {
                id: 5,
                question: "Methods of historical criticism (4 items).",
                answer: ["External criticism", "Internal criticism", "Context analysis", "Content analysis"],
                count: 4
            },
            {
                id: 6,
                question: "List 6 functions of the Datu.",
                answer: ["Executive", "Legislative", "Judicial", "Defense", "Diplomatic", "economic"],
                count: 6
            },
            {
                id: 7,
                question: "Qualifications of a Datu (3 items).",
                answer: ["Charisma/firmness", "Wisdom", "Fairness/valor"],
                count: 3
            },
            {
                id: 8,
                question: "Common economic activities in pre-colonial Philippines (5 items).",
                answer: ["Rice farming", "Shipbuilding", "Pottery", "Goldworks", "Textile weaving"],
                count: 5
            },
            {
                id: 9,
                question: "Commercial trade partners of pre-colonial Philippines (4 items).",
                answer: ["Orang Dampuans", "Banjarmasin", "China", "Sulu hub traders"],
                count: 4
            },
            {
                id: 10,
                question: "Burial customs in pre-colonial belief system (3 items).",
                answer: ["Secondary burial", "Jar burial", "Anito offerings"],
                count: 3
            },
            {
                id: 11,
                question: "Major social classes in pre-colonial society (3 items).",
                answer: ["Maginoo/Kedatuan", "Maharlika/Timawa", "Oripon/Alipin"],
                count: 3
            },
            {
                id: 12,
                question: "Types of historical analysis (2 items).",
                answer: ["Context analysis", "Content analysis"],
                count: 2
            },
            {
                id: 13,
                question: "Migration theories/models of Austronesians (2 items).",
                answer: ["Out of Taiwan", "Nusantao Maritime Network"],
                count: 2
            },
            {
                id: 14,
                question: "One Filipino historian who opposed Beyer's migration theory.",
                answer: ["F. Landa Jocano"],
                count: 1
            },
            {
                id: 15,
                question: "One archaeological site that proves early human activity in the Philippines.",
                answer: ["Kalinga (Rizal, Cagayan Valley)"],
                count: 1
            }
        ];

        this.identificationQuestions = [
            {id: 1, question: "He proposed the Out of Taiwan migration model.", answer: "Peter Bellwood"},
            {id: 2, question: "Filipino anthropologist who developed the Core Population Theory.", answer: "F. Landa Jocano"},
            {id: 3, question: "Austronesian sea vessel that inspired the term \"barangay.\"", answer: "Balangay"},
            {id: 4, question: "Ancient Filipino writing script.", answer: "Baybayin"},
            {id: 5, question: "Leader of a barangay.", answer: "Datu"},
            {id: 6, question: "Supreme being of the Tagalogs.", answer: "Bathala"},
            {id: 7, question: "Belief that everything in nature has spirits.", answer: "Animism"},
            {id: 8, question: "Laws followed by pre-colonial Filipinos.", answer: "Adat"},
            {id: 9, question: "The \"man\" whose remains were found in Tabon Cave.", answer: "Tabon Man"},
            {id: 10, question: "Site where the Callao Man remains were discovered.", answer: "Callao Cave (Cagayan)"},
            {id: 11, question: "First Muslim missionary who came to Sulu in 1380.", answer: "Makdum"},
            {id: 12, question: "Established the Sultanate of Sulu in 1450.", answer: "Abu Bakr"},
            {id: 13, question: "Muslim ruler of Manila in 1570.", answer: "Rajah Sulayman"},
            {id: 14, question: "The concept of history that emphasizes sense-making and Filipino perspective.", answer: "Kasaysayan"},
            {id: 15, question: "Type of historical source that comes directly from the time period.", answer: "Primary source"},
            {id: 16, question: "Test of authenticity in source criticism.", answer: "External criticism"},
            {id: 17, question: "Test of reliability in source criticism.", answer: "Internal criticism"},
            {id: 18, question: "Scholar who proposed the Nusantao Maritime Trading and Communication Network.", answer: "Wilhelm Solheim II"},
            {id: 19, question: "Year when Tuan Mashaika's family settled in Sulu.", answer: "1280 AD"},
            {id: 20, question: "Year when Rajah Baguinda converted to Islam in Sulu.", answer: "1390 AD"},
            {id: 21, question: "Year Serif Kabungsuan spread Islam in Maguindanao.", answer: "1475 AD"},
            {id: 22, question: "Type of history writing.", answer: "Historiography"},
            {id: 23, question: "Term that means \"continuity\" in history.", answer: "Continuity"},
            {id: 24, question: "Term that means \"abrupt or gradual alteration\" in history.", answer: "Change"},
            {id: 25, question: "Items from the past that serve as basis for historical knowledge.", answer: "Sources"},
            {id: 26, question: "A diary entry of Andres Bonifacio is an example of what type of source?", answer: "Primary source"},
            {id: 27, question: "Journal article analyzing Rizal's works is what type of source?", answer: "Secondary source"},
            {id: 28, question: "Rizal believed studying history was essential for cultivating Filipino ______.", answer: "Identity"},
            {id: 29, question: "The belief in life after death among pre-colonial Filipinos.", answer: "Kabilang buhay"},
            {id: 30, question: "Images of ancestors and spirits worshipped by pre-colonial Filipinos.", answer: "Anito"},
            {id: 31, question: "A form of writing related to other Austronesian scripts.", answer: "Baybayin"},
            {id: 32, question: "Egalitarian class of free men in pre-colonial Philippines.", answer: "Maharlika/Timawa"},
            {id: 33, question: "Nobility in pre-colonial society.", answer: "Maginoo/Kedatuan"},
            {id: 34, question: "Lowest class in pre-colonial society.", answer: "Oripon/Alipin"},
            {id: 35, question: "Equality in land use and resources was based on the ______ principle.", answer: "Ecological principle"},
            {id: 36, question: "Consultative body that advised the Datu.", answer: "Konseho ng mga nakatatanda (Rumah bicara)"},
            {id: 37, question: "The core values of Adat include respect for ______.", answer: "Elders, authorities, women, and spirits"},
            {id: 38, question: "Pre-colonial body modification involving teeth.", answer: "Teeth filing/teeth filling"},
            {id: 39, question: "Pre-colonial body modification involving the skull.", answer: "Skull molding"},
            {id: 40, question: "Tattoo tradition was a symbol of ______.", answer: "Valor/bravery/status"},
            {id: 41, question: "Women in pre-colonial society had the right to ______ property.", answer: "Own and inherit"},
            {id: 42, question: "The Austronesians are noted for organizing communities into units of ______.", answer: "Barangay"},
            {id: 43, question: "Archaeological evidence of butchered rhinoceros in Kalinga dates back to ______ years ago.", answer: "709,000 years ago"},
            {id: 44, question: "Who authored Chinese annals describing trade with the Philippines?", answer: "Chau Ju Kua"},
            {id: 45, question: "Admiral who led China's fleet that helped Sulu rise as a commercial hub.", answer: "Cheng Ho (Zheng He)"},
            {id: 46, question: "Pre-colonial houses built on stilts.", answer: "Bahay sa tiyakad"},
            {id: 47, question: "Pre-colonial houses built on boats.", answer: "Bahay sa bangka"},
            {id: 48, question: "Pre-colonial drinks made from fermentation.", answer: "Spirited drinks/tuba"},
            {id: 49, question: "Metalwork in pre-colonial Philippines (Filipino term).", answer: "Panday sa puthaw (ironworks)"},
            {id: 50, question: "Goldwork in pre-colonial Philippines (Filipino term).", answer: "Panday sa bulawan"},
            {id: 51, question: "Textile weaving in pre-colonial Philippines (Filipino term).", answer: "Panday sa habul / gapas"},
            {id: 52, question: "Scholar who argued that \"voyagers ≠ migrants.\"", answer: "Arnold Azurin"},
            {id: 53, question: "Historian who introduced \"Pantayong Pananaw.\"", answer: "Zeus Salazar"},
            {id: 54, question: "Period when Islam first entered the Philippines.", answer: "13th century (1280 AD)"},
            {id: 55, question: "The belief system centered on Bathala and other deities.", answer: "Animism with polytheism"},
            {id: 56, question: "The dualistic concept of the soul in pre-colonial religion.", answer: "Kaluluwa (good vs bad)"},
            {id: 57, question: "A term for ancestor veneration through offerings.", answer: "Anituism"},
            {id: 58, question: "A secondary source often written by students completing a degree.", answer: "Thesis/Dissertation"},
            {id: 59, question: "Secondary source presented at academic gatherings.", answer: "Conference paper"},
            {id: 60, question: "A historical study that interprets or uses primary sources.", answer: "Secondary source"}
        ];

        this.timelineEvents = [
            {id: 1, text: "Kalinga archaeological site: Location where butchered rhinoceros bones were found", order: 1},
            {id: 2, text: "Taong Cagayan/Luzon: Early humans (Homo erectus) with stone tools", order: 2},
            {id: 3, text: "Taong Callao: Homo luzonensis, discovered from a foot bone", order: 3},
            {id: 4, text: "Pilanduk Cave dwellers: Specialized in hunting and mollusc foraging", order: 4},
            {id: 5, text: "Taong Tabon: Homo sapiens sapiens remains", order: 5}
        ];

        this.sources = [
            {text: "Diary of Jose Rizal", type: "primary"},
            {text: "Photograph of Andres Bonifacio", type: "primary"},
            {text: "Historical analysis of the Philippine Revolution", type: "secondary"},
            {text: "Academic thesis on pre-colonial Philippines", type: "secondary"},
            {text: "Letter from General Luna", type: "primary"},
            {text: "Documentary about Philippine history", type: "secondary"},
            {text: "Ancient Baybayin script", type: "primary"},
            {text: "Modern book about Rizal's works", type: "secondary"}
        ];

        this.crosswordData = {
            grid: this.generateCrosswordGrid(),
            clues: this.getCrosswordClues()
        };

        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupCrossword();
        this.setupSourceClassification();
        this.setupTimeline();
        this.setupEnumeration();
        this.setupIdentification();
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.dataset.section;
                this.switchSection(section);
            });
        });
    }

    switchSection(section) {
        // Hide all sections
        document.querySelectorAll('.quiz-section').forEach(sec => {
            sec.classList.remove('active');
        });
        
        // Remove active class from all nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected section
        document.getElementById(section).classList.add('active');
        document.querySelector(`[data-section="${section}"]`).classList.add('active');
        
        this.currentSection = section;
    }

    generateCrosswordGrid() {
        // Simplified crossword grid (15x15)
        const grid = Array(15).fill().map(() => Array(15).fill(''));
        
        // Add some sample words (simplified for demo)
        const words = [
            {word: 'RIZAL', row: 2, col: 3, direction: 'horizontal'},
            {word: 'DATU', row: 5, col: 1, direction: 'vertical'},
            {word: 'BAYBAYIN', row: 7, col: 4, direction: 'horizontal'},
            {word: 'BALANGAY', row: 1, col: 8, direction: 'vertical'},
            {word: 'ADAT', row: 12, col: 6, direction: 'horizontal'}
        ];

        words.forEach(({word, row, col, direction}) => {
            for (let i = 0; i < word.length; i++) {
                if (direction === 'horizontal') {
                    grid[row][col + i] = word[i];
                } else {
                    grid[row + i][col] = word[i];
                }
            }
        });

        return grid;
    }

    getCrosswordClues() {
        return {
            across: [
                {number: 1, clue: "National hero of the Philippines", answer: "RIZAL"},
                {number: 2, clue: "Ancient Filipino writing system", answer: "BAYBAYIN"},
                {number: 3, clue: "Customary law in pre-colonial Philippines", answer: "ADAT"}
            ],
            down: [
                {number: 1, clue: "Leader of a barangay", answer: "DATU"},
                {number: 2, clue: "Traditional Filipino boat", answer: "BALANGAY"}
            ]
        };
    }

    setupCrossword() {
        const grid = document.getElementById('crossword-grid');
        const acrossClues = document.getElementById('across-clues');
        const downClues = document.getElementById('down-clues');

        // Generate grid
        this.crosswordData.grid.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellDiv = document.createElement('div');
                cellDiv.className = 'crossword-cell';
                
                if (cell === '') {
                    cellDiv.classList.add('black');
                } else {
                    const input = document.createElement('input');
                    input.maxLength = 1;
                    input.addEventListener('input', (e) => {
                        e.target.value = e.target.value.toUpperCase();
                    });
                    cellDiv.appendChild(input);
                }
                
                grid.appendChild(cellDiv);
            });
        });

        // Generate clues
        this.crosswordData.clues.across.forEach(clue => {
            const clueDiv = document.createElement('div');
            clueDiv.className = 'clue-item';
            clueDiv.innerHTML = `${clue.number}. ${clue.clue}`;
            acrossClues.appendChild(clueDiv);
        });

        this.crosswordData.clues.down.forEach(clue => {
            const clueDiv = document.createElement('div');
            clueDiv.className = 'clue-item';
            clueDiv.innerHTML = `${clue.number}. ${clue.clue}`;
            downClues.appendChild(clueDiv);
        });
    }

    setupSourceClassification() {
        const sourcesList = document.getElementById('sources-list');
        const checkBtn = document.getElementById('check-classification');
        
        // Shuffle sources
        const shuffledSources = [...this.sources].sort(() => Math.random() - 0.5);
        
        shuffledSources.forEach(source => {
            const sourceDiv = document.createElement('div');
            sourceDiv.className = 'source-item';
            sourceDiv.textContent = source.text;
            sourceDiv.dataset.type = source.type;
            sourceDiv.draggable = true;
            
            // Fixed drag event handlers
            sourceDiv.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', source.text);
                e.dataTransfer.setData('source-type', source.type);
                e.target.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
            });
            
            sourceDiv.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
            });
            
            sourcesList.appendChild(sourceDiv);
        });

        // Setup drop zones with fixed event handlers
        const bins = document.querySelectorAll('.bin');
        bins.forEach(bin => {
            bin.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            });
            
            bin.addEventListener('dragenter', (e) => {
                e.preventDefault();
                bin.classList.add('drag-over');
            });
            
            bin.addEventListener('dragleave', (e) => {
                // Only remove drag-over if leaving the bin completely
                if (!bin.contains(e.relatedTarget)) {
                    bin.classList.remove('drag-over');
                }
            });
            
            bin.addEventListener('drop', (e) => {
                e.preventDefault();
                bin.classList.remove('drag-over');
                
                const sourceText = e.dataTransfer.getData('text/plain');
                const sourceType = e.dataTransfer.getData('source-type');
                
                // Find the dragged element
                const draggedElement = document.querySelector('.source-item.dragging');
                if (draggedElement) {
                    const binContent = bin.querySelector('.bin-content');
                    binContent.appendChild(draggedElement);
                    draggedElement.classList.remove('dragging');
                }
            });
        });

        checkBtn.addEventListener('click', () => this.checkClassification());
    }

    checkClassification() {
        const primaryBin = document.getElementById('primary-bin');
        const secondaryBin = document.getElementById('secondary-bin');
        const resultDiv = document.getElementById('classification-result');
        
        let correct = 0;
        let total = 0;
        
        // Check primary sources
        primaryBin.querySelectorAll('.source-item').forEach(item => {
            total++;
            if (item.dataset.type === 'primary') {
                correct++;
            }
        });
        
        // Check secondary sources
        secondaryBin.querySelectorAll('.source-item').forEach(item => {
            total++;
            if (item.dataset.type === 'secondary') {
                correct++;
            }
        });
        
        const percentage = total > 0 ? (correct / total) * 100 : 0;
        resultDiv.className = 'classification-result';
        resultDiv.classList.add(percentage >= 80 ? 'correct' : 'incorrect');
        resultDiv.innerHTML = `Score: ${correct}/${total} (${percentage.toFixed(1)}%)`;
    }

    setupTimeline() {
        const eventsContainer = document.getElementById('timeline-events');
        const dropzone = document.getElementById('timeline-dropzone');
        const checkBtn = document.getElementById('check-timeline');
        
        // Shuffle events
        const shuffledEvents = [...this.timelineEvents].sort(() => Math.random() - 0.5);
        
        shuffledEvents.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'timeline-event';
            eventDiv.textContent = event.text;
            eventDiv.dataset.order = event.order;
            eventDiv.draggable = true;
            
            // Fixed drag event handlers
            eventDiv.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', event.text);
                e.dataTransfer.setData('event-order', event.order.toString());
                e.target.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
            });
            
            eventDiv.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
            });
            
            eventsContainer.appendChild(eventDiv);
        });

        // Setup dropzone with fixed event handlers
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });
        
        dropzone.addEventListener('dragenter', (e) => {
            e.preventDefault();
            dropzone.classList.add('drag-over');
        });
        
        dropzone.addEventListener('dragleave', (e) => {
            // Only remove drag-over if leaving the dropzone completely
            if (!dropzone.contains(e.relatedTarget)) {
                dropzone.classList.remove('drag-over');
            }
        });
        
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('drag-over');
            
            const draggedElement = document.querySelector('.timeline-event.dragging');
            if (draggedElement) {
                // Remove the placeholder text if it exists
                const placeholder = dropzone.querySelector('p');
                if (placeholder && dropzone.children.length === 1) {
                    placeholder.style.display = 'none';
                }
                
                dropzone.appendChild(draggedElement);
                draggedElement.classList.remove('dragging');
            }
        });

        // Also allow dropping back to events container
        eventsContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });
        
        eventsContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            
            const draggedElement = document.querySelector('.timeline-event.dragging');
            if (draggedElement) {
                eventsContainer.appendChild(draggedElement);
                draggedElement.classList.remove('dragging');
                
                // Show placeholder if dropzone is empty
                const placeholder = dropzone.querySelector('p');
                if (placeholder && dropzone.querySelectorAll('.timeline-event').length === 0) {
                    placeholder.style.display = 'block';
                }
            }
        });

        checkBtn.addEventListener('click', () => this.checkTimeline());
    }

    checkTimeline() {
        const dropzone = document.getElementById('timeline-dropzone');
        const resultDiv = document.getElementById('timeline-result');
        const events = dropzone.querySelectorAll('.timeline-event');
        
        if (events.length === 0) {
            resultDiv.className = 'timeline-result incorrect';
            resultDiv.innerHTML = 'Please drag all events to the timeline first.';
            return;
        }
        
        let correct = true;
        const eventOrders = Array.from(events).map(event => parseInt(event.dataset.order));
        
        // Check if events are in correct chronological order
        for (let i = 1; i < eventOrders.length; i++) {
            if (eventOrders[i] < eventOrders[i-1]) {
                correct = false;
                break;
            }
        }
        
        // Also check if we have all 5 events in order 1-5
        const expectedOrder = [1, 2, 3, 4, 5];
        const hasAllEvents = events.length === 5 && 
            eventOrders.sort((a, b) => a - b).every((order, index) => order === expectedOrder[index]);
        
        resultDiv.className = 'timeline-result';
        resultDiv.classList.add(correct && hasAllEvents ? 'correct' : 'incorrect');
        
        if (correct && hasAllEvents) {
            resultDiv.innerHTML = 'Correct! Events are in proper chronological order.';
        } else {
            resultDiv.innerHTML = `
                <div>Incorrect order. The correct chronological sequence is:</div>
                <ol style="margin-top: 10px; text-align: left;">
                    <li>Kalinga archaeological site: Location where butchered rhinoceros bones were found</li>
                    <li>Taong Cagayan/Luzon: Early humans (Homo erectus) with stone tools</li>
                    <li>Taong Callao: Homo luzonensis, discovered from a foot bone</li>
                    <li>Pilanduk Cave dwellers: Specialized in hunting and mollusc foraging</li>
                    <li>Taong Tabon: Homo sapiens sapiens remains</li>
                </ol>
            `;
        }
    }

    setupEnumeration() {
        this.renderEnumerationQuestion();
        
        document.getElementById('enum-next').addEventListener('click', () => {
            this.saveEnumerationAnswers();
            if (this.currentEnumQuestion < this.enumerationQuestions.length - 1) {
                this.currentEnumQuestion++;
                this.renderEnumerationQuestion();
            }
        });
        
        document.getElementById('enum-prev').addEventListener('click', () => {
            this.saveEnumerationAnswers();
            if (this.currentEnumQuestion > 0) {
                this.currentEnumQuestion--;
                this.renderEnumerationQuestion();
            }
        });
        
        document.getElementById('enum-check').addEventListener('click', () => {
            this.checkEnumerationAnswer();
        });
    }

    renderEnumerationQuestion() {
        const question = this.enumerationQuestions[this.currentEnumQuestion];
        const questionElement = document.getElementById('enum-question');
        const answersElement = document.getElementById('enum-answers');
        const progressFill = document.getElementById('enum-progress');
        const progressText = document.getElementById('enum-progress-text');
        
        questionElement.textContent = question.question;
        
        // Clear previous answers
        answersElement.innerHTML = '';
        
        // Create input fields
        for (let i = 0; i < question.count; i++) {
            const inputDiv = document.createElement('div');
            inputDiv.className = 'enum-input';
            inputDiv.innerHTML = `
                <span>${i + 1}.</span>
                <input type="text" class="form-control" data-index="${i}" 
                       value="${this.enumAnswers[question.id] ? (this.enumAnswers[question.id][i] || '') : ''}"
                       placeholder="Enter answer ${i + 1}...">
            `;
            answersElement.appendChild(inputDiv);
        }
        
        // Update progress
        const progress = ((this.currentEnumQuestion + 1) / this.enumerationQuestions.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Question ${this.currentEnumQuestion + 1} of ${this.enumerationQuestions.length}`;
        
        // Update button states
        document.getElementById('enum-prev').disabled = this.currentEnumQuestion === 0;
        document.getElementById('enum-next').disabled = this.currentEnumQuestion === this.enumerationQuestions.length - 1;
        
        // Clear previous feedback
        document.getElementById('enum-feedback').innerHTML = '';
    }

    saveEnumerationAnswers() {
        const question = this.enumerationQuestions[this.currentEnumQuestion];
        const inputs = document.querySelectorAll('#enum-answers input');
        
        this.enumAnswers[question.id] = Array.from(inputs).map(input => input.value.trim());
    }

    checkEnumerationAnswer() {
        const question = this.enumerationQuestions[this.currentEnumQuestion];
        const inputs = document.querySelectorAll('#enum-answers input');
        const userAnswers = Array.from(inputs).map(input => input.value.trim().toLowerCase());
        const correctAnswers = question.answer.map(ans => ans.toLowerCase());
        const feedbackElement = document.getElementById('enum-feedback');
        
        // Check if answers match (flexible matching)
        let correctCount = 0;
        userAnswers.forEach(userAnswer => {
            if (userAnswer && correctAnswers.some(correct => 
                correct.includes(userAnswer) || userAnswer.includes(correct) ||
                this.fuzzyMatch(userAnswer, correct)
            )) {
                correctCount++;
            }
        });
        
        const isCorrect = correctCount >= Math.ceil(question.count * 0.7); // 70% threshold
        
        feedbackElement.className = 'answer-feedback';
        feedbackElement.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        if (isCorrect) {
            feedbackElement.innerHTML = `Correct! You got ${correctCount}/${question.count} answers right.`;
        } else {
            feedbackElement.innerHTML = `
                <div>Your score: ${correctCount}/${question.count}</div>
                <div class="correct-answer">
                    <strong>Correct answers:</strong>
                    <ol class="correct-answer-list">
                        ${question.answer.map(ans => `<li>${ans}</li>`).join('')}
                    </ol>
                </div>
            `;
        }
    }

    setupIdentification() {
        this.renderIdentificationQuestion();
        
        document.getElementById('id-next').addEventListener('click', () => {
            this.saveIdentificationAnswer();
            if (this.currentIdQuestion < this.identificationQuestions.length - 1) {
                this.currentIdQuestion++;
                this.renderIdentificationQuestion();
            }
        });
        
        document.getElementById('id-prev').addEventListener('click', () => {
            this.saveIdentificationAnswer();
            if (this.currentIdQuestion > 0) {
                this.currentIdQuestion--;
                this.renderIdentificationQuestion();
            }
        });
        
        document.getElementById('id-check').addEventListener('click', () => {
            this.checkIdentificationAnswer();
        });
    }

    renderIdentificationQuestion() {
        const question = this.identificationQuestions[this.currentIdQuestion];
        const questionElement = document.getElementById('id-question');
        const answerInput = document.getElementById('id-answer');
        const progressFill = document.getElementById('id-progress');
        const progressText = document.getElementById('id-progress-text');
        
        questionElement.textContent = question.question;
        answerInput.value = this.idAnswers[question.id] || '';
        
        // Update progress
        const progress = ((this.currentIdQuestion + 1) / this.identificationQuestions.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Question ${this.currentIdQuestion + 1} of ${this.identificationQuestions.length}`;
        
        // Update button states
        document.getElementById('id-prev').disabled = this.currentIdQuestion === 0;
        document.getElementById('id-next').disabled = this.currentIdQuestion === this.identificationQuestions.length - 1;
        
        // Clear previous feedback
        document.getElementById('id-feedback').innerHTML = '';
        
        // Focus on input
        answerInput.focus();
    }

    saveIdentificationAnswer() {
        const question = this.identificationQuestions[this.currentIdQuestion];
        const answerInput = document.getElementById('id-answer');
        this.idAnswers[question.id] = answerInput.value.trim();
    }

    checkIdentificationAnswer() {
        const question = this.identificationQuestions[this.currentIdQuestion];
        const answerInput = document.getElementById('id-answer');
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = question.answer.toLowerCase();
        const feedbackElement = document.getElementById('id-feedback');
        
        const isCorrect = this.fuzzyMatch(userAnswer, correctAnswer);
        
        feedbackElement.className = 'answer-feedback';
        feedbackElement.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        if (isCorrect) {
            feedbackElement.innerHTML = 'Correct!';
        } else {
            feedbackElement.innerHTML = `
                <div>Incorrect.</div>
                <div class="correct-answer">
                    <strong>Correct answer:</strong> ${question.answer}
                </div>
            `;
        }
    }

    fuzzyMatch(str1, str2) {
        // Remove common variations and normalize
        const normalize = (str) => str
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
        
        const norm1 = normalize(str1);
        const norm2 = normalize(str2);
        
        // Direct match
        if (norm1 === norm2) return true;
        
        // Check if one contains the other
        if (norm1.includes(norm2) || norm2.includes(norm1)) return true;
        
        // Check for partial matches with key terms
        const words1 = norm1.split(' ');
        const words2 = norm2.split(' ');
        
        // If most words match, consider it correct
        let matchingWords = 0;
        words1.forEach(word1 => {
            if (words2.some(word2 => word1.includes(word2) || word2.includes(word1))) {
                matchingWords++;
            }
        });
        
        return matchingWords >= Math.min(words1.length, words2.length) * 0.6;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PhilippineHistoryQuiz();
});