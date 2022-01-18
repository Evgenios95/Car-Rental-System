import Parse from "parse";

export const logout = async (navigate) => {
  await Parse.User.logOut();
  navigate("/login");
};
