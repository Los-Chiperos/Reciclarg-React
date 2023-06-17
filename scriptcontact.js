let contact_info = document.querySelector('#contact_info');
  let contact_us = document.querySelector('#contact_us');
  let swtich_to_contact_us = document.querySelector('#swtich_to_contact_us');
  let swtich_to_contact_info = document.querySelector('#swtich_to_contact_info');

  swtich_to_contact_us.addEventListener("click", () => {
    contact_info.style.display = 'none';
    contact_us.style.display = 'block';
  });

  swtich_to_contact_info.addEventListener("click", () => {
    contact_info.style.display = 'block';
    contact_us.style.display = 'none';
  });
