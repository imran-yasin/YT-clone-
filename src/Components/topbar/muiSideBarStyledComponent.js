const drawerWidth = 240;

export const sidebarDrawerTemporary = {
  "&.MuiDrawer-root": {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      backgroundColor: "grey",
      paddingTop: 12,
    },
  },
};

export const sidebarDrawerPermanent = {
  "&.MuiDrawer-root": {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      paddingTop: 8,
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: 10,
      },
    },
  },
};
