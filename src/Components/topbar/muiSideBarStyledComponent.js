const drawerWidth = 240;

export const sidebarDrawerTemporary = {
  "&.MuiDrawer-root": {
    display: { xs: "block", sm: "none" },

    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      backgroundColor: "grey",
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
      "&:hover": {
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: 10,
        },
      },
    },
  },
};
