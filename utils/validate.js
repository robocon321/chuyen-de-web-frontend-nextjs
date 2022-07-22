export const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validateSlug = (slug) => {
  var re = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return re.test(slug);
}

export const validatePhone = (phone) => {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(phone);
}