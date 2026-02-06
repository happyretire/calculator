class Calculator {
    constructor() {
        this.displayElement = document.getElementById('display');
        this.historyElement = document.getElementById('history');
        
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
        document.querySelectorAll('[data-operator]').forEach(button => {
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
    
    handleNumber(num) {
        if (this.hasError) {
            this.clearAll();
        }
        
        if (this.waitingForNewValue) {
            this.currentValue = num;
            this.waitingForNewValue = false;
        } else {
            // Check if we can add more digits
            const parts = this.currentValue.split('.');
            const integerPart = parts[0].replace('-', '');
            
            // If adding to integer part, check max digits
            if (parts.length === 1) {
                if (integerPart.length >= this.MAX_INTEGER_DIGITS) {
                    return; // Don't add more digits
                }
            } else {
                // If adding to decimal part, check max decimal places
                if (parts[1].length >= this.MAX_DECIMAL_PLACES) {
                    return;
                }
            }
            
            this.currentValue = this.currentValue === '0' ? num : this.currentValue + num;
        }
        
        this.updateDisplay();
    }
    
    handleOperator(op) {
        if (this.hasError) {
            this.clearAll();
            return;
        }
        
        const currentNum = parseFloat(this.currentValue);
        
        if (this.previousValue === null) {
            this.previousValue = currentNum;
        } else if (this.operator && !this.waitingForNewValue) {
            const result = this.calculate(this.previousValue, currentNum, this.operator);
            
            if (result === 'ERR') {
                this.showError();
                return;
            }
            
            this.currentValue = result.toString();
            this.previousValue = result;
        }
        
        this.operator = op;
        this.waitingForNewValue = true;
        this.updateHistory();
        this.highlightOperator(op);
        this.updateDisplay();
    }
    
    handleAction(action) {
        switch (action) {
            case 'clear-all':
                this.clearAll();
                break;
            case 'clear':
                this.clear();
                break;
            case 'toggle-sign':
                this.toggleSign();
                break;
            case 'decimal':
                this.addDecimal();
                break;
            case 'equals':
                this.equals();
                break;
        }
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
        
        // Round to max decimal places
        result = Math.round(result * Math.pow(10, this.MAX_DECIMAL_PLACES)) / Math.pow(10, this.MAX_DECIMAL_PLACES);
        
        // Check if result exceeds max digits
        const resultStr = Math.abs(result).toString();
        const parts = resultStr.split('.');
        
        if (parts[0].length > this.MAX_INTEGER_DIGITS) {
            return 'ERR';
        }
        
        return result;
    }
    
    equals() {
        if (this.hasError) {
            this.clearAll();
            return;
        }
        
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
            
            this.currentValue = result.toString();
            this.previousValue = null;
            this.operator = null;
            this.waitingForNewValue = true;
            this.updateHistory(`${this.lastOperation.previous} ${this.getOperatorSymbol(this.lastOperation.operator)} ${this.lastOperation.current} =`);
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
        if (this.hasError) {
            this.clearAll();
            return;
        }
        
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
        if (this.hasError) {
            this.clearAll();
            return;
        }
        
        if (this.currentValue !== '0') {
            if (this.currentValue.startsWith('-')) {
                this.currentValue = this.currentValue.substring(1);
            } else {
                this.currentValue = '-' + this.currentValue;
            }
        }
        
        this.updateDisplay();
    }
    
    addDecimal() {
        if (this.hasError) {
            this.clearAll();
            return;
        }
        
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
            this.historyElement.textContent = `${this.previousValue} ${this.getOperatorSymbol(this.operator)}`;
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
        document.querySelectorAll('[data-operator]').forEach(button => {
            button.classList.remove('active');
        });
    }
    
    handleKeyboard(e) {
        // Prevent default for calculator keys
        if (e.key >= '0' && e.key <= '9' || 
            ['+', '-', '*', '/', 'Enter', 'Escape', 'Backspace', '.'].includes(e.key)) {
            e.preventDefault();
        }
        
        // Number keys
        if (e.key >= '0' && e.key <= '9') {
            this.handleNumber(e.key);
        }
        
        // Operator keys
        if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            this.handleOperator(e.key);
        }
        
        // Equals
        if (e.key === 'Enter' || e.key === '=') {
            this.equals();
        }
        
        // Clear
        if (e.key === 'Escape') {
            this.clearAll();
        }
        
        // Backspace
        if (e.key === 'Backspace') {
            this.clear();
        }
        
        // Decimal
        if (e.key === '.') {
            this.addDecimal();
        }
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});
