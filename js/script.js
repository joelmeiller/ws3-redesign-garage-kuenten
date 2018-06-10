// Initialize Page
const init = function(){
  $(document).ready(function(){
    var modal = $('.modal')
    if (modal) modal.modal()
    
    // Page Transition
    $('#content').toggleClass("visible");

    $('a.link').click(function(event) {
      // Over-rides the link
      event.preventDefault();

      // Sets the new destination to the href of the link
      newLocation = this.href;
      $('#content').css('opacity','0' );

      // Delays action
      window.setTimeout(function() {
          // Redirects to new destination
          window.location = newLocation;
      }, 125);
    });
  })
};

const openModal = function(modalName) {
  // Let's use jQuery to open the modal
  $(`#${modalName}`).modal('open')
}

const closeModal = function(modalName) {
  // Let's use jQuery to close the modal
  $(`#${modalName}`).modal('close')
}

// Call initialize function on page load (jQuery)
$(init)

