class Calculator {
    constructor() {
        // Cache DOM elements
        this.displayElement = document.getElementById('display');
        this.historyElement = document.getElementById('history');
        this.operatorButtons = document.querySelectorAll('[data-operator]');

        // Calculator state
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForNewValue = false;
        this.hasError = false;
        this.lastOperation = null;

        // Constants
        this.MAX_INTEGER_DIGITS = 8;
        this.MAX_DECIMAL_PLACES = 3;
        this.DECIMAL_MULTIPLIER = Math.pow(10, this.MAX_DECIMAL_PLACES);

        this.initializeEventListeners();
        this.updateDisplay();
    }

    initializeEventListeners() {
        // Number buttons
        document.querySelectorAll('[data-number]').forEach(button => {
            button.addEventListener('click', () => {
                this.handleNumber(button.dataset.number);
            });
        });

        // Operator buttons
        this.operatorButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.handleOperator(button.dataset.operator);
            });
        });

        // Action buttons
        document.querySelectorAll('[data-action]').forEach(button => {
            button.addEventListener('click', () => {
                this.handleAction(button.dataset.action);
            });
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            this.handleKeyboard(e);
        });
    }

    /**
     * Reset calculator if there's an error
     * @returns {boolean} true if error was cleared
     */
    clearErrorIfNeeded() {
        if (this.hasError) {
            this.clearAll();
            return true;
        }
        return false;
    }

    /**
     * Validate if more digits can be added to current value
     * @returns {boolean} true if digit can be added
     */
    canAddDigit() {
        const parts = this.currentValue.split('.');
        const integerPart = parts[0].replace('-', '');

        // Check integer part length
        if (parts.length === 1) {
            return integerPart.length < this.MAX_INTEGER_DIGITS;
        }

        // Check decimal part length
        return parts[1].length < this.MAX_DECIMAL_PLACES;
    }

    /**
     * Format number to remove trailing zeros and limit decimal places
     * @param {number} num - Number to format
     * @returns {string} Formatted number string
     */
    formatNumber(num) {
        // Round to max decimal places to avoid floating-point errors
        const rounded = Math.round(num * this.DECIMAL_MULTIPLIER) / this.DECIMAL_MULTIPLIER;

        // Convert to string and remove unnecessary trailing zeros
        let str = rounded.toString();

        // If it has a decimal point, remove trailing zeros
        if (str.includes('.')) {
            str = str.replace(/\.?0+$/, '');
        }

        return str;
    }

    handleNumber(num) {
        if (this.clearErrorIfNeeded()) return;

        if (this.waitingForNewValue) {
            this.currentValue = num;
            this.waitingForNewValue = false;
        } else {
            if (!this.canAddDigit()) {
                return; // Don't add more digits
            }

            this.currentValue = this.currentValue === '0' ? num : this.currentValue + num;
        }

        this.updateDisplay();
    }

    handleOperator(op) {
        if (this.clearErrorIfNeeded()) return;

        const currentNum = parseFloat(this.currentValue);

        if (this.previousValue === null) {
            this.previousValue = currentNum;
        } else if (this.operator && !this.waitingForNewValue) {
            const result = this.calculate(this.previousValue, currentNum, this.operator);

            if (result === 'ERR') {
                this.showError();
                return;
            }

            this.currentValue = this.formatNumber(result);
            this.previousValue = result;
        }

        this.operator = op;
        this.waitingForNewValue = true;
        this.updateHistory();
        this.highlightOperator(op);
        this.updateDisplay();
    }

    handleAction(action) {
        const actions = {
            'clear-all': () => this.clearAll(),
            'clear': () => this.clear(),
            'toggle-sign': () => this.toggleSign(),
            'decimal': () => this.addDecimal(),
            'equals': () => this.equals()
        };

        const actionFn = actions[action];
        if (actionFn) actionFn();
    }

    calculate(a, b, operator) {
        let result;

        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                if (b === 0) {
                    return 'ERR';
                }
                result = a / b;
                break;
            default:
                return b;
        }

        // Round to max decimal places to handle floating-point precision
        result = Math.round(result * this.DECIMAL_MULTIPLIER) / this.DECIMAL_MULTIPLIER;

        // Check if result exceeds max digits
        const resultStr = Math.abs(result).toString();
        const integerPart = resultStr.split('.')[0];

        if (integerPart.length > this.MAX_INTEGER_DIGITS) {
            return 'ERR';
        }

        return result;
    }

    equals() {
        if (this.clearErrorIfNeeded()) return;

        if (this.operator && this.previousValue !== null) {
            const currentNum = parseFloat(this.currentValue);
            const result = this.calculate(this.previousValue, currentNum, this.operator);

            if (result === 'ERR') {
                this.showError();
                return;
            }

            this.lastOperation = {
                previous: this.previousValue,
                current: currentNum,
                operator: this.operator
            };

            this.currentValue = this.formatNumber(result);
            this.previousValue = null;
            this.operator = null;
            this.waitingForNewValue = true;
            this.updateHistory(`${this.formatNumber(this.lastOperation.previous)} ${this.getOperatorSymbol(this.lastOperation.operator)} ${this.formatNumber(this.lastOperation.current)} =`);
            this.clearOperatorHighlight();
        }

        this.updateDisplay();
    }

    clearAll() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForNewValue = false;
        this.hasError = false;
        this.lastOperation = null;
        this.updateHistory('');
        this.clearOperatorHighlight();
        this.updateDisplay();
    }

    clear() {
        if (this.clearErrorIfNeeded()) return;

        if (this.waitingForNewValue && this.operator) {
            // Clear the operator
            this.operator = null;
            this.waitingForNewValue = false;
            this.clearOperatorHighlight();
            this.updateHistory('');
        } else {
            // Clear current value
            this.currentValue = '0';
        }

        this.updateDisplay();
    }

    toggleSign() {
        if (this.clearErrorIfNeeded()) return;

        if (this.currentValue !== '0' && this.currentValue !== '0.') {
            this.currentValue = this.currentValue.startsWith('-')
                ? this.currentValue.substring(1)
                : '-' + this.currentValue;
        }

        this.updateDisplay();
    }

    addDecimal() {
        if (this.clearErrorIfNeeded()) return;

        if (this.waitingForNewValue) {
            this.currentValue = '0.';
            this.waitingForNewValue = false;
        } else if (!this.currentValue.includes('.')) {
            this.currentValue += '.';
        }

        this.updateDisplay();
    }

    showError() {
        this.currentValue = 'ERR';
        this.hasError = true;
        this.displayElement.classList.add('error');
        this.updateDisplay();

        setTimeout(() => {
            this.displayElement.classList.remove('error');
        }, 500);
    }

    updateDisplay() {
        this.displayElement.textContent = this.currentValue;
    }

    updateHistory(text = null) {
        if (text !== null) {
            this.historyElement.textContent = text;
        } else if (this.operator && this.previousValue !== null) {
            this.historyElement.textContent = `${this.formatNumber(this.previousValue)} ${this.getOperatorSymbol(this.operator)}`;
        }
    }

    getOperatorSymbol(op) {
        const symbols = {
            '+': '+',
            '-': '−',
            '*': '×',
            '/': '÷'
        };
        return symbols[op] || op;
    }

    highlightOperator(op) {
        this.clearOperatorHighlight();
        const button = document.querySelector(`[data-operator="${op}"]`);
        if (button) {
            button.classList.add('active');
        }
    }

    clearOperatorHighlight() {
        this.operatorButtons.forEach(button => {
            button.classList.remove('active');
        });
    }

    handleKeyboard(e) {
        const calculatorKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            '+', '-', '*', '/', 'Enter', '=', 'Escape', 'Backspace', '.'];

        if (!calculatorKeys.includes(e.key)) return;

        e.preventDefault();

        // Number keys
        if (e.key >= '0' && e.key <= '9') {
            this.handleNumber(e.key);
        }
        // Operator keys
        else if (['+', '-', '*', '/'].includes(e.key)) {
            this.handleOperator(e.key);
        }
        // Equals
        else if (e.key === 'Enter' || e.key === '=') {
            this.equals();
        }
        // Clear all
        else if (e.key === 'Escape') {
            this.clearAll();
        }
        // Clear/Backspace
        else if (e.key === 'Backspace') {
            this.clear();
        }
        // Decimal
        else if (e.key === '.') {
            this.addDecimal();
        }
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});
