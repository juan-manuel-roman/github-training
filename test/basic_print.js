const interpolate = string => `This interpolates ${string} into the content.`;
const commonConcat = string => 'This concatenates ' + string + ' into the content.';
const noParameters = () => 'This is just a simple string.';
const manyParameters = (first, second) => `It is also possible to interpolate ${first} and ${second} in a string.`;
