const lang = page => {
  const l = localStorage.getItem("@lang")
    ? localStorage.getItem("@lang")
    : "vi";
  return require("../i18n/" + l + "/" + page);
};
export default lang;
