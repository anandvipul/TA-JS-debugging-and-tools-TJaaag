function nameConcat(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

try {
  let name_full = nameConcati("vipul", "anand");
} catch (error) {
  console.log("Error Occured");
}
// finally {
//   let name_full = nameConcat("vupul", "Anand");
//   console.log(name_full);
// }

try {
  let name_full2 = nameConcati("vipul", "anand");
} catch (error) {
  console.log("Error Occured 2");
}
// finally {
//   let name_full2 = nameConcat("vupul", "Anand 2");
//   console.log(name_full2);
// }
