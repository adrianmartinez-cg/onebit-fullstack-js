let form = document.getElementById('data-input');
let idInput = document.getElementById('transaction-id');
let nameInput = document.getElementById('transaction-name');
let valueInput = document.getElementById('transaction-value');
let crtTransactionBtn = document.getElementById('crt-transaction');
let attTransactionBtn = document.getElementById('att-transaction');
let delTransactionBtn = document.getElementById('del-transaction');
let transactionsContainer = document.getElementById('transactions-container');
const host = "http://localhost:3000";
let balance = 0;

crtTransactionBtn.addEventListener('click', async (ev) => {
    if(nameInput.value !== '' && valueInput.value !== ''){
        const createTransactionDTO = {
            name: nameInput.value,
            value: valueInput.value
        };
    
        const response = await fetch(`${host}/transactions`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(createTransactionDTO)
        });
    
        const createdTransaction = await response.json();
        renderTransaction(createdTransaction);
        form.reset();
    }
});

attTransactionBtn.addEventListener('click', async (ev) => {
    if(nameInput.value !== '' && valueInput.value !== '' && idInput.value !== ''){
        const attTransactionDTO = {
            id: idInput.value,
            name:nameInput.value,
            value:valueInput.value
        };
    
        const response = await fetch(`${host}/transactions/${idInput.value}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(attTransactionDTO)
        });
    
        const actualizedTransaction = await response.json();
        form.reset();
    }
});

delTransactionBtn.addEventListener('click',async (ev) => {
    const response = await fetch(`${host}/transactions/${idInput.value}`,{
        method: 'DELETE'
    });
    console.log(response);
})

function renderTransaction(transactionData){
    const transaction = document.createElement('div');
    transaction.classList.add('transaction');
    const transactionId = `transaction-${transactionData.id}`;
    transaction.id = transactionId;
    
    const transactionName = document.createElement('div');
    transactionName.innerText = `Nome: ${transactionData.name}`
    transactionName.classList.add('transaction-name');

    const transactionValue = document.createElement('div');
    transactionValue.innerText = `Valor: ${transactionData.value}`;
    transactionValue.classList.add('transaction-value');

    transaction.append(transactionName,transactionValue);
    
    transactionsContainer.append(transaction);
    balance += new Number(transactionData.value);
    document.querySelector('#balance-value').innerText = balance.toFixed(2);
}

async function fetchTransactions(){
    const transactions = await fetch(`${host}/transactions`).then(res => res.json());
    transactions.forEach(transaction => renderTransaction(transaction));
}

document.addEventListener('DOMContentLoaded',() => {
    fetchTransactions();
})
