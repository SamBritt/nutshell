findAllUsers = () =>
  getJSONList().then(arrayObject => {
    let userNames = arrayObject.map(obj => (newArray = obj.user));
    return userNames;
  });