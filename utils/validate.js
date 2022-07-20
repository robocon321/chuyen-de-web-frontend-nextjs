export const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validateSlug = (slug) => {
  var re = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return re.test(slug);
}