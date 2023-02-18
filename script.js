const addButton = document.getElementById('add');
      const itemInput = document.getElementById('item-name-input');
      const priceInput = document.getElementById('item-price-input');
      const list = document.getElementById('list');
      const totalAmount = document.getElementById('total-amount');

      addButton.addEventListener('click', () => {
        if (!itemInput.value || !priceInput.value) {
          alert('Both item name and price are required!');
          return;
        }

        const newRow = document.createElement('tr');
        const itemCell = document.createElement('td');
        itemCell.innerText = itemInput.value;
        newRow.appendChild(itemCell);
        const priceCell = document.createElement('td');
        priceCell.innerText = priceInput.value;
        newRow.appendChild(priceCell);
        list.insertBefore(newRow, list.children[list.children.length - 1]);
        totalAmount.innerText = parseFloat(totalAmount.innerText) + parseFloat(priceInput.value);

        itemInput.value = '';
        priceInput.value = '';
      });