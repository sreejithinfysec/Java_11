var outputContainer = document.getElementById('output-container')
var outputElement = document.getElementById('output')
var errorContainer = document.getElementById('error-container')
var errorElement = document.getElementById('error')

function updateOutput(result) {
  // If there is any error, hide it first
  errorContainer.classList.add('hidden');
  outputElement.innerText = result;
  outputContainer.classList.remove('hidden');
}

function handleError(error) {
  // If there is any successful output, hide it first
  outputContainer.classList.add('hidden');
  errorElement.innerText = error.responseText;
  errorContainer.classList.remove('hidden');
}

function submitRequest() {
  var domainName = document.getElementById('domain').value;
  if (!domainName) {
    alert("Please enter a domain name");
    return;
  }
  $.ajax({
    url: '/test-domain',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      'domainName': sanitize(domainName)
    }),
    success: updateOutput,
    error: handleError
  });
}

    success: updateOutput,
    error: handleError
  });
}

    success: updateOutput,
    error: handleError
  });
}

function showCustomAlert(message) {
  // Implement custom alert logic here
  // This could be a modal dialog, toast notification, or custom JavaScript alert
  var modal = document.getElementById('customModal');
  var modalMessage = document.getElementById('modalMessage');
  modalMessage.innerText = message;
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('customModal');
  modal.style.display = 'none';
}

}

var form = document.querySelectorAll('form')[0]
form.addEventListener('submit', function(evt) { evt.preventDefault(); submitRequest(); })
