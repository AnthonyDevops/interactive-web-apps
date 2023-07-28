// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
// Updates the status of the book. by giving it a color if its overdue,reserved or on the shelf.
function updateBookStatus(bookId, status) {
  const bookStatusElement = document.querySelector(`#${bookId} .status`);
  const reserveButton = document.querySelector(`#${bookId} .reserve`);
  const checkoutButton = document.querySelector(`#${bookId} .checkout`);
  const checkinButton = document.querySelector(`#${bookId} .checkin`);


  bookStatusElement.style.color = STATUS_MAP[status].color;
  reserveButton.disabled = !STATUS_MAP[status].canReserve;
  checkoutButton.disabled = !STATUS_MAP[status].canCheckout;
  checkinButton.disabled = !STATUS_MAP[status].canCheckIn;
}

updateBookStatus("book1", "overdue");
updateBookStatus("book2", "reserved");
updateBookStatus("book3", "shelf");

