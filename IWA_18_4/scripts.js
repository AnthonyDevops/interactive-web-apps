// Import statements: This part of the code is importing functions and elements
// from two modules view.js and data.js.

import { html, createOrderHtml, updateDraggingHtml, moveToColumn } from './view.js';
import { state, updateDragging, createOrderData } from './data.js';

// Help overlay: This section sets up event listeners for the Help button to open
// and close the help dialog box overlay.
// When the Help button is clicked html.other.help.addeventlistener it triggers
// the display of the help overlay using html.help.overlay.showmodule
html.other.help.addEventListener('click', () => {
  html.help.overlay.showModal();
});

// When the cancel button in the help overlay is clicked html.help.cancel.addeventlistnener
// the overlay is closed using html.help.overlay.close
html.help.cancel.addEventListener('click', () => {
  html.help.overlay.close();
  html.other.add.focus();
});


// Add order overlay: When the add order button is clicked html.other.add.addeventlistener
// the add overlay is shown using html.add.overlay.showmodule
html.other.add.addEventListener('click', () => {
  html.add.overlay.showModal();
});

// When the cancel button is clicked html.add.cancel.addeventlistener the overlay is closed
// the focus gets shifted to the add order button
html.add.cancel.addEventListener('click', () => {
  html.add.overlay.close();
  html.other.add.focus();
});

// Add order form: When the form is submitted html.add.form.addeventlistener the default form
// behaviour is prevented using event.preventdefault
// The values of the new orderss title and table is extracted from the form fields
// A new order is created using the extracted values and the createorderdata function
// The html of the new order is created using the createorderhtml function
// A new order is added to the state using state.orders
html.add.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTitle = html.add.title.value;
  const newTable = html.add.table.value;

  const newOrder = createOrderData({ title: newTitle, table: newTable, column: 'ordered' });

  const orderHtmlElement = createOrderHtml(newOrder);
  html.columns.ordered.appendChild(orderHtmlElement);
  state.orders[newOrder.id] = newOrder;

  html.add.overlay.close();
  html.add.title.value = '';
  html.add.table.selectedIndex = 0;
  html.other.add.focus();
});

// Edit order overlay: This section handles the opening and editing when an order is clicked
// An event listener is attached to the grid container
// html.other.grid.addeventlistener to listen for click events
// When an order is clicked its ID is extracted from the dataset of the clicked element
html.other.grid.addEventListener('click', (event) => {
  const orderId = event.target.closest('.order').dataset.id;
  const order = state.orders[orderId];

  html.edit.id.value = order.id;
  html.edit.title.value = order.title;
  html.edit.table.value = order.table;
  html.edit.column.value = order.column;

  html.edit.overlay.showModal();
});

// Delete order: This section handles the deletion of an order from the edit order overlay
html.edit.delete.addEventListener('click', () => {
  const orderId = html.edit.id.value;
  const orderElement = document.querySelector(`[data-id="${orderId}"]`);

  if (orderElement) {
    orderElement.remove();
    delete state.orders[orderId];
    html.edit.overlay.close();
  }
});

// Edit form submission: This section is similar to the add order form 
// 
html.edit.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const orderId = html.edit.id.value;
  const updatedTitle = html.edit.title.value;
  const updatedTable = html.edit.table.value;
  const updatedColumn = html.edit.column.value;

  const editedOrder = state.orders[orderId];
  editedOrder.title = updatedTitle;
  editedOrder.table = updatedTable;
  editedOrder.column = updatedColumn;

  const editedOrderElement = document.querySelector(`[data-id="${orderId}"]`);
  if (editedOrderElement) {
    const orderTitleElement = editedOrderElement.querySelector('.order__title');
    orderTitleElement.textContent = updatedTitle;
  }

  moveToColumn(orderId, updatedColumn);

  html.edit.overlay.close();
});

// Event listeners for drag-and-drop functionality
for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.dataset.id);
    updateDragging({ source: event.target.dataset.id });
  });

  htmlColumn.addEventListener('dragend', () => {
    updateDragging({ source: null });
    updateDraggingHtml({}); 
  });
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    updateDraggingHtml({ over: event.target.dataset.area });
  });

  htmlArea.addEventListener('drop', (event) => {
    event.preventDefault();
    const orderId = event.dataTransfer.getData('text/plain');
    const newColumn = event.target.dataset.area;

    moveToColumn(orderId, newColumn);
    updateDragging({ source: null, over: null });
    updateDraggingHtml({}); // Clear dragging hover effects
  });
}

// html.add.cancel.addEventListener('click', handleAddToggle)
// html.other.add.addEventListener('click', handleAddToggle)
// html.add.form.addEventListener('submit', handleAddSubmit)

// html.other.grid.addEventListener('click', handleEditToggle)
// html.edit.cancel.addEventListener('click', handleEditToggle)
// html.edit.form.addEventListener('submit', handleEditSubmit)
// html.edit.delete.addEventListener('click', handleDelete)

// html.help.cancel.addEventListener('click', handleHelpToggle)
// html.other.help.addEventListener('click', handleHelpToggle)

// for (const htmlColumn of Object.values(html.columns)) {
//     htmlColumn.addEventListener('dragstart', handleDragStart)
//     htmlColumn.addEventListener('dragend', handleDragEnd)
// }

// for (const htmlArea of Object.values(html.area)) {
//     htmlArea.addEventListener('dragover', handleDragOver)
// }